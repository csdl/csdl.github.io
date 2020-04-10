#! /usr/bin/env node

console.log('Starting build-techreports');

const fs = require('fs');
const _ = require('lodash');
const bibtex = require('bibtex');

class CsdlTechReports {
  constructor() {
    // const masterFile = 'src/_data/csdl-trs.master.array.json';
    const bibFileName = 'csdl-trs.bib';
    const bibString = fs.readFileSync(bibFileName, 'utf8');
    this.bibFile = bibtex.parseBibFile(bibString);
    this.citeKeys = _.keys(this.bibFile.entries$);
    this.techreportKey = 'csdl-91-01';
    this.inproceedingsKey = 'csdl-91-03';
    this.articleKey = 'csdl-92-09'; // csdl-94-04
    this.phdthesisKey = 'csdl-93-14';
    this.mastersthesisKey = 'csdl-98-01';
    this.inbookKey = 'csdl2-16-03';
    this.miscKey = 'csdl2-10-12';
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

  getCiteKeys(type) {
    const citeKeysofType = [];
    const bibFile = this.bibFile;
    _.each(this.citeKeys, function (citeKey) {
        if (bibFile.getEntry(citeKey).type === type) {
          citeKeysofType.push(citeKey);
        }
    });
    return citeKeysofType;
  }

  getTypeList() {
    const bibFile = this.bibFile;
    const typeList = _.map(this.citeKeys, citeKey => bibFile.getEntry(citeKey).type);
    return _.uniq(typeList);
  }
}

const techreports = new CsdlTechReports();
console.log('total', techreports.totalEntries());
console.log('techreports', techreports.getCiteKeys('techreport').length);
console.log('types', techreports.getTypeList());


console.log('Finished build-techreports');
