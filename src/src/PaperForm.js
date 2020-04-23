import React, { useState } from 'react';
import _ from 'lodash';
import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2';
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

/**
 * Display the section that appears when the 'All' toggle is selected for Papers.
 * This section provides a form to enable users to filter the set of Papers displayed.
 * Note that the set of Authors displayed in the Author select control is not ALL of the authors in
 * the BibTex file, but only those that remain after filtering out the names in PaperData.authormap.filterlist.json.
 */
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

  /**
   * So, logically speaking, the entries to display is simply the intersection of the three sets of entries indicated
   * by the form values.
   * But, let's say the user wants to see everything. Then in the case of CSDL, you're doing the intersection of three
   * sets, all containing the exact same 240+ entries. On mobile, that can take a perceivable amount of time.
   * So, this function is an 'optimization' to reduce the amount of intersection required to a minimum.
   */
  const determineEntries = () => {
    const intersectList = [];
    // Display no entries when the form has not been submitted.
    if (author === null) {
      return [];
    }
    // Only add to the intersect list when form control is not the default.
    if (author !== allAuthorsLabel) {
      intersectList.push(techreports.getKeysByAuthor(author));
    }

    if (keyword !== allKeywordsLabel) {
      intersectList.push(techreports.getKeysByKeyword(keyword));
    }

    if (year !== allYearsLabel) {
      intersectList.push(techreports.getKeysByYear(year));
    }
    // Only do the intersect when the user has specified at least two form controls.
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
