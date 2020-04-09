#! /usr/bin/env node

console.log('Starting build-techreports');

const fs = require('fs');
//const _ = require('lodash');
const bibtex = require('bibtex');

// const masterFile = 'src/_data/csdl-trs.master.array.json';
const bibFileName = 'csdl-trs.bib';
const bibString = fs.readFileSync(bibFileName, 'utf8');
const bibFile = bibtex.parseBibFile(bibString);
const bibEntries = bibFile.entries_raw;
const sample = bibEntries.slice(0, 3);

console.log(sample);


console.log('Finished build-techreports');
