import React, { useState } from 'react';
import _ from 'lodash';
import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { AutoForm, SubmitField, SelectField } from 'uniforms-bootstrap4';
import Row from 'react-bootstrap/Row';
import TechReports from './TechReports';
import PaperCard from './PaperCard';

/** Create a schema to specify the structure of the data to appear in the form. */
const makeSchema = (authors, keywords, years) => new SimpleSchema({
  author: { type: String, label: 'Author', allowedValues: authors, defaultValue: authors[0] },
  keyword: { type: String, label: 'Keyword', allowedValues: keywords, defaultValue: keywords[0] },
  year: { type: String, label: 'Year', allowedValues: years, defaultValue: years[0] },
});

const allAuthorsLabel = '(All Authors)';
const allKeywordsLabel = '(All Keywords)';
const allYearsLabel = '(All Years)';

function PaperForm() {
  const [author, setAuthor] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [year, setYear] = useState(null);
  const techreports = new TechReports();
  const authors = [allAuthorsLabel].concat(techreports.getAuthors());
  const keywords = [allKeywordsLabel].concat(techreports.getKeywords());
  const years = [allYearsLabel].concat(techreports.getYears());
  const formSchema = makeSchema(authors, keywords, years);

  const submit = (data) => {
    setAuthor(data.author);
    setKeyword(data.keyword);
    setYear(data.year);
  };

  const appendAuthorCount = (author2) => {
    const count = techreports.getAuthorCount(author2);
    return (count ? `${author2} (${count})` : author2);
  };

  const appendKeywordCount = (keyword2) => {
    const count = techreports.getKeywordCount(keyword2);
    return (count ? `${keyword2} (${count})` : keyword2);
  };

  const appendYearCount = (year2) => {
    const count = techreports.getYearCount(year2);
    return (count ? `${year2} (${count})` : year2);
  };

  const determineEntries = () => {
    const intersectList = [];
    if (author === null) {
      return [];
    }
    if (author !== allAuthorsLabel) {
      intersectList.push(techreports.getKeysByAuthor(author));
    }

    if (keyword !== allKeywordsLabel) {
      intersectList.push(techreports.getKeysByKeyword(keyword));
    }

    if (year !== allYearsLabel) {
      intersectList.push(techreports.getKeysByYear(year));
    }
    let keysToSort = [];
    if (intersectList.length === 0) {
      keysToSort = techreports.getKeys();
    } else
      if (intersectList.length === 1) {
        keysToSort = intersectList[0];
      } else {
        keysToSort = _.intersection(...intersectList);
      }
    const entries = _.map(keysToSort, key => techreports.getEntry(key));
    return techreports.getSortedEntries(entries);
  };

  const entries = determineEntries();

  return (
    <div>
      <p style={{ textAlign: 'center' }}>Display intersection of an Author, Keyword, and/or Year.</p>
      <AutoForm schema={formSchema} onSubmit={data => submit(data)}>
        <Row className="justify-content-center">
          <div style={{ paddingRight: '10px' }}>
            <SelectField name='author' label={false} transform={(author2) => appendAuthorCount(author2)}/>
          </div>
          <div style={{ paddingRight: '10px' }}>
            <SelectField name='keyword' label={false} transform={(keyword2) => appendKeywordCount(keyword2)}/>
          </div>
          <div style={{ paddingRight: '10px' }}>
            <SelectField name='year' label={false} transform={(year2) => appendYearCount(year2)}/>
          </div>
          <SubmitField value='Select Papers'/>
        </Row>
      </AutoForm>
      {(entries.length > 0) &&
      <p style={{ textAlign: 'center' }}>Click (or tap) an entry to display (or hide) the abstract.</p>}
      {_.map(entries, (entry, idx) => <PaperCard key={idx} entry={entry}/>)}
    </div>
  );
}

export default PaperForm;
