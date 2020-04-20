export default function getSponsorData() {
  return [
    {
      date: '1991 - present',
      sponsor: 'National Science Foundation',
      text: 'Six grants for research in areas including software engineering, energy, and educational technology.',
      logo: 'images/nsf-logo.jpg',
      grants: [54810, 161754, 265000, 638000, 413467, 299208, 32000],
      longText: `
The [National Science Foundation](http://nsf.gov/) is an independent U.S. government agency responsible for promoting science and engineering through programs that invest over $3 billion per year in almost 20,000 research and education projects in science and engineering.

CSDL has been supported by six grants from the National Science Foundation.

  1. Support for Structural Evolution in Software Development from 1991-1994, supported research in software structure representation and evolution. Award 9110861, $54,810. 

  2. Improving Software Quality through Instrumented Formal Technical Review from 1995-2000, supported research such as CSRS. Award 9403475, $161,754.

  3. Project LEAP: Lightweight, Empirical, Anti-Measurement Dysfunction, and Portable Software Developer Improvement from 1998-2002, supported software measurement research through Project LEAP. Award 9804010, $265,000.

  4. Supporting Development of Highly Dependable Software Through Continuous, Automated, In-process, and Individualized Software Measurement Validation from 2002-2006, again supported software measurement through Project Hackystat. Award 0234568, $638,000.

  5. HCC:Small:Human Centered Information Integration for the Smart Grid () from 2010-2013, supported research on the smart grid through WattDepot,  Makahiki, and the Kukui Cup. Award 1017126, $413,467.

  6. DEP/RadGrad: Enhancing individualized learning plans and communities of practice to improve engagement, retention and diversity in undergraduate computer science education from 2018-2021, supporting research on RadGrad.  Awards 1829542, 2025112, $331,208.
`,
    },
    {
      date: '2018 - present',
      sponsor: 'University of Hawaii Office of Sustainability',
      text: 'President\'s Green Project Implementation Award, JCI Fellows Program',
      logo: 'images/uh-office-of-sustainability-logo.png',
      grants: [10000],
      longText: `
The [University of Hawaii Office of Sustainability](https://www.hawaii.edu/sustainability/) works across UH campuses to complement, support and enhance the existing sustainability work under way, and to provide coordination capacity for campuses to share information and resources with each other to accelerate action to strengthen the environmental, social, cultural and economic health of our islands’ communities.

The President's Green Project Implementation Award funded a pilot deployment of an Open Power Quality network to analyze the UH Manoa micro-grid from 2018-2020.

The JCI Fellows program will fund research assistants at both graduate and undergraduate levels to do energy data research.
`,
    },
    {
      date: '2009 - 2011',
      sponsor: 'Center for Renewable Energy and Island Sustainability',
      text: 'Research on the smart grid, renewable energy, and the Kukui Cup',
      logo: 'images/reis-logo.png',
      grants: [100000],
      longText: `
The Center for Renewable Energy and Island Sustainability was established through a $1M internal University of Hawai‘i at Manoa grant on sustainability. Faculty came from the College of Engineering and eight other schools and colleges to work on cutting edge research and education problems in renewable energy and island sustainability. REIS was also funded by a Department of Energy (DOE) grant on work force training in Strategic Training and Education in Power Systems.

REIS sponsored CSDL research on the smart grid and renewable energy, including the Kukui Cup project.
`,
    },
  ];
}
