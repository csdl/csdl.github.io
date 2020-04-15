import React from 'react';
// import PropTypes from 'prop-types';
import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
// import _ from 'lodash';
import { AutoForm, SubmitField, SelectField } from 'uniforms-bootstrap4';
import Row from 'react-bootstrap/Row';
import TechReports from './TechReports';

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
  }

  submit(data) {
    this.setState({ author: data.author, topic: data.topic, year: data.year });
    console.log(this.state);
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

  render = () => {
    const authors = [allAuthorsLabel].concat(this.techreports.getAuthors());
    const topics = [allTopicsLabel].concat(this.techreports.getTopics());
    const years = [allYearsLabel].concat(this.techreports.getYears());
    const formSchema = makeSchema(authors, topics, years);
    return (
      <div>
        <AutoForm schema={formSchema} onSubmit={data => this.submit(data)}>
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
      </div>
    );
  }
}

PaperForm.propTypes = {};

export default PaperForm;
