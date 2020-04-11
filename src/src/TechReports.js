import _ from 'lodash';
import paperData from './data/PaperData';

class TechReports {

  total = () => paperData.length;

  getPapers = () => this.recentPapers;

  getTypes = () => {
    const types = [];
    _.each(paperData, entry => { types.push(entry.type); });
    return _.uniq(types);
  }

  getKeys = (type) => {
    const extractKey = entries => _.map(entries, entry => entry.key);
    if (type === undefined) {
      return extractKey(paperData);
    }
    return extractKey(_.filter(paperData, entry => entry.type === type));
  }

  getEntry(key) {
    return _.find(paperData, entry => entry.key === key);
  }
}

export default TechReports;
