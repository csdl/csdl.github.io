#! /usr/bin/env node

const fs = require('fs');
const _ = require('lodash');
const bibtex = require('bibtex');
const jsonfile = require('jsonfile');

class CsdlTechReports {
  constructor() {
    this.masterFile = 'src/_data/csdl-trs.master.array.json';
    const bibFileName = 'csdl-trs.bib';
    const bibString = fs.readFileSync(bibFileName, 'utf8');
    this.bibFile = bibtex.parseBibFile(bibString);
    this.citeKeys = _.keys(this.bibFile.entries$);
    // fields common to all: key, title, author, year, month, keywords, note, abstract, summary
    this.specialFieldMap = {
      techreport: ['institution', 'number'],
      inproceedings: ['booktitle', 'address'],
      article: ['journal'],
      phdthesis: ['school'],
      mastersthesis: ['school'],
      misc: ['howpublished'],
      inbook: ['editor', 'chapter', 'publisher']
    };
  }

  writeFiles() {
    jsonfile.spaces = 2;
    const masterList = _.map(this.citeKeys, key => this.getEntryObject(key));
    console.log(`Writing ${this.masterFile}`);
    jsonfile.writeFile(this.masterFile, masterList, { spaces: 2 }, err => { if (err != null) console.error(err); });
  }

  authorStrings(entry) {
    const makeName = (auth) => (auth.firstNames.concat(auth.vons).concat(auth.lastNames).concat(auth.jrs)).join(' ');
    return entry.getField('author').authors$.map(author => makeName(author));
  }

  totalEntries() {
    return this.bibFile.entries_raw.length;
  }

  getEntry(citeKey) {
    return this.bibFile.getEntry(citeKey);
  }

  getFields(citeKey) {
    const entry = this.bibFile.getEntry(citeKey);
    const entryFields = entry.fields;
    return entryFields;
  }

  normalizedField(entry, field) {
    return (entry.getField(field)) ? bibtex.normalizeFieldValue(entry.getField(field)) : '';
  }

  getEntryObject(citeKey) {
    const obj = {};
    const entry = this.bibFile.getEntry(citeKey);
    const type = this.bibFile.getEntry(citeKey).type;
    obj.key = citeKey;
    obj.type = type;
    // process regular fields
    const processField = field => { if (entry.getField(field)) obj[field] = this.normalizedField(entry, field); };
    const defaultFields = ['title', 'year', 'month', 'note', 'abstract', 'summary'];
    _.each(defaultFields, processField);
    _.each(this.specialFieldMap[type], processField);
    obj.authors = this.authorStrings(entry);
    obj.keywords = this.normalizedField(entry, 'keywords').split(',').map(str => str.trim());
    return obj;
  }
}

console.log('Starting build-techreports');
const techreports = new CsdlTechReports();
techreports.writeFiles();
console.log('Finished build-techreports');
