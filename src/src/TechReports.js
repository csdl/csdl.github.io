import _ from 'lodash';
import paperData from './data/PaperData';

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
}

export default TechReports;
