import React from 'react';
import _ from 'lodash';
import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { AutoForm, SubmitField, SelectField } from 'uniforms-bootstrap4';
import Row from 'react-bootstrap/Row';
import TechReports from './TechReports';
import PaperCard from './PaperCard';

/** Create a schema to specify the structure of the data to appear in the form. */
const makeSchema = (authors, topics, years) => new SimpleSchema({
  author: { type: String, label: 'Author', allowedValues: authors, defaultValue: authors[0] },
  topic: { type: String, label: 'Topic', allowedValues: topics, defaultValue: topics[0] },
  year: { type: String, label: 'Year', allowedValues: years, defaultValue: years[0] },
});

const allAuthorsLabel = '(All Authors)';
const allTopicsLabel = '(All Topics)';
const allYearsLabel = '(All Years)';

class PaperForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author: null, topic: null, year: null };
    this.techreports = new TechReports();
    this.authors = [allAuthorsLabel].concat(this.techreports.getAuthors());
    this.topics = [allTopicsLabel].concat(this.techreports.getTopics());
    this.years = [allYearsLabel].concat(this.techreports.getYears());
    this.formSchema = makeSchema(this.authors, this.topics, this.years);
  }

  submit(data) {
    this.setState({ author: data.author, topic: data.topic, year: data.year });
  }

  appendAuthorCount(author) {
    const count = this.techreports.getAuthorCount(author);
    return (count ? `${author} (${count})` : author);
  }

  appendTopicCount(topic) {
    const count = this.techreports.getTopicCount(topic);
    return (count ? `${topic} (${count})` : topic);
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

    if (this.state.topic !== allTopicsLabel) {
      intersectList.push(this.techreports.getKeysByTopic(this.state.topic));
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
        <p style={{ textAlign: 'center' }}>Display intersection of an Author, Topic, and/or Year.</p>
        <AutoForm schema={this.formSchema} onSubmit={data => this.submit(data)}>
          <Row className="justify-content-center">
            <div style={{ paddingRight: '10px' }}>
              <SelectField name='author' label={false} transform={(author) => this.appendAuthorCount(author)}/>
            </div>
            <div style={{ paddingRight: '10px' }}>
              <SelectField name='topic' label={false} transform={(topic) => this.appendTopicCount(topic)}/>
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
