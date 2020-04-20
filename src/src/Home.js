import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Markdown from 'react-markdown';
import TechReports from './TechReports';
import Title from './Title';
import getMemberData from './data/MemberData';
import getSponsorData from './data/SponsorData';
import _ from 'lodash';

// Tech Report Info
const techReports = new TechReports();
const journal = techReports.getKeysByKeyword('Pubs-Journal').length;
const conference = techReports.getKeysByKeyword('Pubs-Conference').length;
const workshop = techReports.getKeysByKeyword('Pubs-Workshop').length;
const phd = techReports.getKeysByKeyword('Thesis-PhD').length;
const ms = techReports.getKeysByKeyword('Thesis-MS').length;
const bs = techReports.getKeysByKeyword('Thesis-BS').length;

// Member info
const numMembers = getMemberData().length;

// Sponsor info
const dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: "compact" });
const numSponsors = getSponsorData().length;
const sponsorFundingList = _.flatten(_.map(getSponsorData(), sponsor => sponsor.grants));
const total = dollar.format(_.reduce(sponsorFundingList, (sum, n) => sum + n, 0));

const homePageText = `
The Collaborative Software Development Laboratory is led by [Philip Johnson](https://philipmjohnson.org"), a Professor in the [Department of Information and Computer Sciences](http://www.ics.hawaii.edu) at the [University of Hawaii](https://www.hawaii.edu).

Established in 1991, the Collaborative Software Development Laboratory performs research, development, and technology transfer in disciplines including software engineering, sustainability, entrepreneurship, educational technology, renewable energy, and computer-supported cooperative work.

So far, research by the ${numMembers} current and former members of CSDL has led to ${journal} journal, ${conference} conference, and ${workshop} workshop publications, as well as ${phd} Ph.D. theses, ${ms} M.S. theses, and ${bs} undergraduate honors theses.  Our ${numSponsors} sponsors have provided a total of ${total} in funding. 
`;

function Home(props) {
  const jumbotronStyle = { backgroundColor: '#FFFFFF', padding: 0, marginBottom: 0 };
  return (
    // eslint-disable-next-line react/prop-types
    <div style={props.sectionStyle} id="home">
      <Jumbotron fluid style={jumbotronStyle}>
        <Container>
          <Title title={'Welcome to CSDL'}/>
          <Markdown source={homePageText}/>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
