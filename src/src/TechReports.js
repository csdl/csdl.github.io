import _ from 'lodash';
import paperData from './data/PaperData';
import authorData from './data/PaperData.authormap';
import keywordData from './data/PaperData.keywordmap.json';
import yearData from './data/PaperData.yearmap.json';

/**
 * Encapsulate the details of reading the various Paper data classes in from the data section and manipulating them.
 */
class TechReports {

  /* Return total number of tech reports. */
  total = () => paperData.length;

  /* Return a list of all BibTex keys (i.e. 'CSDL2-14-01', etc) associated with the list of entries. */
  extractKey = entries => _.map(entries, entry => entry.key);

  /* Return the three most recent entries. */
  getRecentKeys = () => this.getKeys().reverse().slice(0, 3);

  /* Return a list of all BibTex entry types (i.e. 'phdthesis', 'article', etc.) */
  getTypes = () => {
    const types = [];
    _.each(paperData, entry => { types.push(entry.type); });
    return _.uniq(types);
  }

  /* Return a list of all entry keys with the associated type. If no type provided, return all entry keys. */
  getKeys = (type) => {
    if (type === undefined) {
      return this.extractKey(paperData);
    }
    return this.extractKey(_.filter(paperData, entry => entry.type === type));
  }

  /* Return the entry associated with the passed key. */
  getEntry = (key) => _.find(paperData, entry => entry.key === key);

  /* Return the number of papers associated with the passed Author name. */
  getAuthorCount = (author) => (authorData[author] ? authorData[author].length : 0);

  /* Return the number of papers associated with the passed keyword. */
  getKeywordCount = (topic) => (keywordData[topic] ? keywordData[topic].length : 0);

  /* Return the number of papers published in the given year. */
  getYearCount = (year) => (yearData[year] ? yearData[year].length : 0);

  /* Return a sorted list of all authors. Note that authors in PaperData.authormap.filterlist.json will not appear. */
  getAuthors = () => _.keys(authorData).sort();

  /* Return a sorted list of all keywords. */
  getKeywords = () => _.keys(keywordData).sort();

  /* Return a sorted list of all years. */
  getYears = () => _.keys(yearData).sort().reverse();

  /* Return a list of the Bibtex keys associated with the passed author. */
  getKeysByAuthor = (author) => authorData[author];

  /* Return a list of the Bibtex keys associated with the passed keyword. */
  getKeysByKeyword = (topic) => keywordData[topic];

  /* Return a list of the Bibtex keys associated with the passed year. */
  getKeysByYear = (year) => yearData[year];

  // Return the passed list of entries in reverse chronological order.
  getSortedEntries = (entries) => entries.sort((a, b) => b.sortKey - a.sortKey);
}

export default TechReports;
