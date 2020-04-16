import React from 'react';
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

class PaperForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author: null, keyword: null, year: null };
    this.techreports = new TechReports();
    this.authors = [allAuthorsLabel].concat(this.techreports.getAuthors());
    this.keywords = [allKeywordsLabel].concat(this.techreports.getKeywords());
    this.years = [allYearsLabel].concat(this.techreports.getYears());
    this.formSchema = makeSchema(this.authors, this.keywords, this.years);
  }

  submit(data) {
    this.setState({ author: data.author, keyword: data.keyword, year: data.year });
  }

  appendAuthorCount(author) {
    const count = this.techreports.getAuthorCount(author);
    return (count ? `${author} (${count})` : author);
  }

  appendKeywordCount(keyword) {
    const count = this.techreports.getKeywordCount(keyword);
    return (count ? `${keyword} (${count})` : keyword);
  }

  appendYearCount(year) {
    const count = this.techreports.getYearCount(year);
    return (count ? `${year} (${count})` : year);
  }

  determineEntries() {
    const intersectList = [];
    if (this.state.author === null) {
      return [];
    }
    if (this.state.author !== allAuthorsLabel) {
    intersectList.push(this.techreports.getKeysByAuthor(this.state.author));
    }

    if (this.state.keyword !== allKeywordsLabel) {
      intersectList.push(this.techreports.getKeysByKeyword(this.state.keyword));
    }

    if (this.state.year !== allYearsLabel) {
      intersectList.push(this.techreports.getKeysByYear(this.state.year));
    }
    let keysToSort = [];
    if (intersectList.length === 0) {
      keysToSort = this.techreports.getKeys();
    } else if (intersectList.length === 1) {
      keysToSort = intersectList[0];
    } else {
      keysToSort = _.intersection(...intersectList);
    }
    const entries = _.map(keysToSort, key => this.techreports.getEntry(key));
    return this.techreports.getSortedEntries(entries);
  }

  render = () => {
    const entries = this.determineEntries();
    return (
      <div>
        <p style={{ textAlign: 'center' }}>Display intersection of an Author, Keyword, and/or Year.</p>
        <AutoForm schema={this.formSchema} onSubmit={data => this.submit(data)}>
          <Row className="justify-content-center">
            <div style={{ paddingRight: '10px' }}>
              <SelectField name='author' label={false} transform={(author) => this.appendAuthorCount(author)}/>
            </div>
            <div style={{ paddingRight: '10px' }}>
              <SelectField name='keyword' label={false} transform={(keyword) => this.appendKeywordCount(keyword)}/>
            </div>
            <div style={{ paddingRight: '10px' }}>
              <SelectField name='year' label={false} transform={(year) => this.appendYearCount(year)}/>
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
}

PaperForm.propTypes = {};

export default PaperForm;
