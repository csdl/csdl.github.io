#! /usr/bin/env node

const fs = require('fs');
const _ = require('lodash');
const bibtex = require('bibtex');
const jsonfile = require('jsonfile');
const argv = require('minimist')(process.argv.slice(2));

function computeMonthNumberString(month) {
  if (!month) { return '00'; }
  if (month.toLowerCase().startsWith('jan')) { return '01'; }
  if (month.toLowerCase().startsWith('feb')) { return '02'; }
  if (month.toLowerCase().startsWith('mar')) { return '03'; }
  if (month.toLowerCase().startsWith('apr')) { return '04'; }
  if (month.toLowerCase().startsWith('may')) { return '05'; }
  if (month.toLowerCase().startsWith('jun')) { return '06'; }
  if (month.toLowerCase().startsWith('jul')) { return '07'; }
  if (month.toLowerCase().startsWith('aug')) { return '08'; }
  if (month.toLowerCase().startsWith('sep')) { return '09'; }
  if (month.toLowerCase().startsWith('oct')) { return '10'; }
  if (month.toLowerCase().startsWith('nov')) { return '11'; }
  if (month.toLowerCase().startsWith('dec')) { return '12'; }
  return '00';
}

class CsdlTechReports {
  constructor() {
    this.outFile = 'src/data/PaperData.json';
    this.authorMapFile = 'src/data/PaperData.authormap.json';
    this.keywordMapFile = 'src/data/PaperData.keywordmap.json';
    this.yearMapFile = 'src/data/PaperData.yearmap.json';
    const bibFileName = argv.bibfile;
    const bibString = fs.readFileSync(bibFileName, 'utf8');
    this.bibFile = bibtex.parseBibFile(bibString);
    this.citeKeys = _.keys(this.bibFile.entries$);
    // fields common to all: key, title, author, year, month, keywords, note, abstract, summary
    this.specialFieldMap = {
      techreport: ['institution', 'number'],
      inproceedings: ['booktitle', 'address'],
      article: ['journal', 'volume', 'number'],
      phdthesis: ['school'],
      mastersthesis: ['school'],
      misc: ['howpublished'],
      inbook: ['editor', 'chapter', 'publisher'],
    };
  }

  buildAuthorMap() {
    const authorMap = {};
    const mapKey = (key) => {
      const entry = this.getEntry(key);
      const authors = this.authorStrings(entry);
      // eslint-disable-next-line no-unused-expressions
      _.each(authors, author => {
        // eslint-disable-next-line no-unused-expressions
      this.isCsdlMember(author) && ((authorMap[author]) ? authorMap[author].push(key) : authorMap[author] = [key]);
      });
    };
    _.each(this.citeKeys, key => mapKey(key));
    return authorMap;
  }

  buildKeyWordMap() {
    const keywordMap = {};
    const mapKey = (key) => {
      const entry = this.getEntry(key);
      const keywords = this.normalizedField(entry, 'keywords').split(',').map(str => str.trim());
      // eslint-disable-next-line no-unused-expressions
      _.each(keywords, keyword => {
        // eslint-disable-next-line no-unused-expressions
        keyword && ((keywordMap[keyword]) ? keywordMap[keyword].push(key) : keywordMap[keyword] = [key]);
      });
    };
    _.each(this.citeKeys, key => mapKey(key));
    return keywordMap;
  }

  buildYearMap() {
    const yearMap = {};
    const mapKey = (key) => {
      const entry = this.getEntry(key);
      const year = this.normalizedField(entry, 'year');
      if (yearMap[year]) {
        yearMap[year].push(key);
      } else {
        yearMap[year] = [key];
      }
    };
    _.each(this.citeKeys, key => mapKey(key));
    return yearMap;
  }

  writeFiles() {
    jsonfile.spaces = 2;
    const masterList = _.map(this.citeKeys, key => this.getEntryObject(key));
    console.log(`Writing ${this.outFile}`);
    jsonfile.writeFile(this.outFile, masterList, { spaces: 2 }, err => {
      if (err != null) console.error(err);
    });

    console.log(`Writing ${this.authorMapFile}`);
    jsonfile.writeFile(this.authorMapFile, this.buildAuthorMap(), { spaces: 2 }, err => {
      if (err != null) console.error(err);
    });
    // console.log(_.keys(this.buildAuthorMap()).sort(), _.keys(this.buildAuthorMap()).length);

    console.log(`Writing ${this.keywordMapFile}`);
    jsonfile.writeFile(this.keywordMapFile, this.buildKeyWordMap(), { spaces: 2 }, err => {
      if (err != null) console.error(err);
    });
    // console.log(_.keys(this.buildKeyWordMap()).sort());

    console.log(`Writing ${this.yearMapFile}`);
    jsonfile.writeFile(this.yearMapFile, this.buildYearMap(), { spaces: 2 }, err => {
      if (err != null) console.error(err);
    });
  }

  authorStrings(entry) {
    const makeName = (auth) => (auth.firstNames.concat(auth.vons).concat(auth.lastNames).concat(auth.jrs)).join(' ')
      .trim();
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
    const processField = field => {
      if (entry.getField(field)) obj[field] = this.normalizedField(entry, field);
    };
    const defaultFields = ['title', 'year', 'month', 'note', 'abstract', 'summary'];
    _.each(defaultFields, processField);
    _.each(this.specialFieldMap[type], processField);
    obj.authors = this.authorStrings(entry);
    obj.keywords = this.normalizedField(entry, 'keywords').split(',').map(str => str.trim());
    obj.sortKey = parseInt(`${obj.year}${computeMonthNumberString(obj.month)}`, 10);
    return obj;
  }

  isCsdlMember(author) {
    const nonMembers = [
      'Adam A. Porter',
      'Alex Young',
      'Alexandar Kavcic',
      'Alexey Olkov',
      'Anthony Kuh',
      'Arnold P. Boedihardjo',
      'Audris Mockus',
      'Bill Giebink',
      'Brian T. Pentland',
      'Burt Leung',
      'Christina Sablan',
      'Christoph Aschwanden',
      'Christopher Chan',
      'Cliff Tomosada',
      'Crystal Chen',
      'Dag Sjoberg',
      'Daniel Port',
      'Dora Nakafuji',
      'Emily Hill',
      'Forrest Shull',
      'Hakan Erdogmus',
      'Hana Bowers',
      'Herve Weitz',
      'Jarrett Lee',
      'Jeffrey Carver',
      'Jeffrey K. Hollingsworth',
      'Jennifer Saito',
      'Jessica Lin',
      'John Gustafson',
      'Johnny Li',
      'Kaveh Abhari',
      'Keone Hiraide',
      'Kiran Kavoori Ram',
      'Larry Votta',
      'Leilani Pena',
      'Lorin Hochstein',
      'Lutz Prechelt',
      'Manfred Lerner',
      'Mark F. Waterson',
      'Martha S. Feldman',
      'Martin Voelp',
      'Marvin V. Zelkowitz',
      'Matthias Fripp',
      'Michelle Katchuck',
      'Myriam Leggieri',
      'Nico Zazworka',
      'Nolan Y. Kiddo',
      'Risa Khamsi',
      'Sara K. Cobble',
      'Sebastian Jekutsch',
      'Sima Asgari',
      'Stuart Faulk',
      'Sunil Gandhi',
      'Susan Frankenstein',
      'Taiga Nakamura',
      'Tim Oates',
      'Timothy Burgess',
      'Todd Baumeister',
      'Tony Cowling',
      'Tuan Huynh',
      'Victor R. Basili',
      'Walter Tichy',
      'Weifeng Miao',
      'Xiangli Xu',
      'Xing Wang',
      'William E. Doane',
    ];
    return _.findIndex(nonMembers, nonMember => nonMember === author) === -1;
  }
}

console.log('Starting build-techreports');
const techreports = new CsdlTechReports();
techreports.writeFiles();
console.log('Finished build-techreports');
