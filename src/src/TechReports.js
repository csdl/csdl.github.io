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

  getEntry(key) {
    return _.find(paperData, entry => entry.key === key);
  }

  getAuthors() {
    return _.keys(authorData).sort();
  }

  getTopics() {
    return _.keys(keywordData).sort();
  }

  getYears() {
    return _.keys(yearData).sort().reverse();
  }
}

export default TechReports;
