import _ from 'lodash';
import paperData from './data/PaperData';
import authorData from './data/PaperData.authormap';
import keywordData from './data/PaperData.keywordmap.json';
import yearData from './data/PaperData.yearmap.json';

class TechReports {

  total = () => paperData.length;

  extractKey = entries => _.map(entries, entry => entry.key);

  getRecentKeys = () => this.getKeys().reverse().slice(0, 3);

  getTypes = () => {
    const types = [];
    _.each(paperData, entry => { types.push(entry.type); });
    return _.uniq(types);
  }

  getKeys = (type) => {
    if (type === undefined) {
      return this.extractKey(paperData);
    }
    return this.extractKey(_.filter(paperData, entry => entry.type === type));
  }

  getEntry = (key) => _.find(paperData, entry => entry.key === key);

  getAuthorCount = (author) => (authorData[author] ? authorData[author].length : 0);

  getTopicCount = (topic) => (keywordData[topic] ? keywordData[topic].length : 0);

  getYearCount = (year) => (yearData[year] ? yearData[year].length : 0);

  getAuthors = () => _.keys(authorData).sort();

  getTopics = () => _.keys(keywordData).sort();

  getYears = () => _.keys(yearData).sort().reverse();
}

export default TechReports;
