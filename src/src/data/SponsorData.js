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
      text: 'Support for energy research and development initiatives including the President\'s Green Project Implementation Award and the JCI Fellows Program',
      logo: 'images/uh-office-of-sustainability-logo.png',
      grants: [10000, 85286, 28269, 28269, 27351],
      longText: `
The [University of Hawaii Office of Sustainability](https://www.hawaii.edu/sustainability/) works across UH campuses to complement, support and enhance the existing sustainability work under way, and to provide coordination capacity for campuses to share information and resources with each other to accelerate action to strengthen the environmental, social, cultural and economic health of our islands’ communities.

The President's Green Project Implementation Award funded a pilot deployment of an Open Power Quality network to analyze the UH Manoa micro-grid from 2018-2020.

The JCI Fellows program will fund research assistants at both graduate and undergraduate levels to do energy data research.
`,
    },
    {
      date: '2009 - 2011',
      sponsor: 'Center for Renewable Energy and Island Sustainability',
      text: 'Support for research on the smart grid, renewable energy, and the Kukui Cup.',
      logo: 'images/reis-logo.png',
      grants: [100000],
      longText: `
The Center for Renewable Energy and Island Sustainability was established through a $1M internal University of Hawai‘i at Manoa grant on sustainability. Faculty came from the College of Engineering and eight other schools and colleges to work on cutting edge research and education problems in renewable energy and island sustainability. REIS was also funded by a Department of Energy (DOE) grant on work force training in Strategic Training and Education in Power Systems.

REIS sponsored CSDL research on the smart grid and renewable energy, including the Kukui Cup project.
`,
    },
    {
      date: '2012',
      sponsor: 'HEI Charitable Foundation',
      text: 'Support for next generation education research using the Kukui Cup.',
      logo: 'images/heic-logo.png',
      grants: [10000],
      longText: `
 The [Hawaiian Electric Industries (HEI) Charitable Foundation](http://www.hei.com/CustomPage/Index?keyGenPage=1073751886) is focused on community programs aimed at promoting environmental sustainability, educational excellence, economic growth, and community development.
 
 HEI Charitable Foundation provided funds to support the 2012 Kukui Cup.
`,
    },
    {
      date: '2011',
      sponsor: 'Dept. of Business, Economic Development, and Tourism (DBEDT)',
      text: 'Support for next generation education research using the Kukui Cup.',
      logo: 'images/dbedt-logo.jpg',
      grants: [5000],
      longText: `
 The [Department of Business, Economic Development, and Tourism](http://hawaii.gov/dbedt) is Hawaii’s resource center for economic and statistical data, business development opportunities, energy and conservation information, and foreign trade advantages.
 
 DBEDT provided funds to support the 2011 Kukui Cup.
`,
    },
    {
      date: '2008 - 2009',
      sponsor: 'Google Summer of Code',
      text: 'Support summer interns to develop software engineering applications using Hackystat.',
      logo: 'images/google-logo.png',
      grants: [45000],
      longText: `
 [Google Summer of Code](https://summerofcode.withgoogle.com/) is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school.
 
 Google Summer of Code provided funds to support Hackystat development in the summers of 2008 and 2009.
`,
    },
    {
      date: '2008',
      sponsor: 'Expedia',
      text: 'Support technology transfer of Hackystat to an industrial software process.',
      logo: 'images/expedia-logo.jpg',
      grants: [25000],
      longText: `
 [Expedia, Inc.](http://expedia.com/) is a parent company to some of the world’s leading travel companies, providing travel products and services to leisure and corporate travelers in the US and around the world. It books airline tickets, hotel reservations, car rentals, cruises, vacation packages and various attractions and services via the World Wide Web and telephone travel agents.
 
 Expedia provided funds to support Hackystat development.
`,
    },
    {
      date: '2006',
      sponsor: 'Sixth Sense Analytics',
      text: 'Support technology transfer and commercialization of software based upon Hackystat.',
      logo: 'images/6th-sense-logo.gif',
      grants: [25000],
      longText: `
6th Sense Analytics (now a part of Borland, Inc.) provided visibility and control to distributed software development projects through the use of our hosted software solution that automatically and unobtrusively collects the software development metrics that organizations need to understand the execution of software development projects.

 6th Sense Analytics provided funds to support Hackystat development.
`,
    },
    {
      date: '2005',
      sponsor: 'Maui High Performance Computing Center',
      text: 'Adapt Hackystat to support High Performance Computing application domains.',
      logo: 'images/mhpcc-logo.jpg',
      grants: [42000],
      longText: `
The Maui High Performance Computing Center, established in 1993, is an Air Force research Laboratory (AFRL) Center managed by the University of Hawaii. It provides computational resources for the Department of Defense’s scientific computational needs through their support of DoD “Challenge Projects” and other government users. The Center also supports the Directed Energy Directorate’s Maui Space Surveillance System.

 MHPCC provided funds through a student engagement program to support research on empirically guided high performance computing software development using Hackystat.
`,
    },
    {
      date: '2004',
      sponsor: 'IBM',
      text: 'Support development of the Jupiter code review plugin to Eclipse.',
      logo: 'images/ibm-logo.jpg',
      grants: [15000],
      longText: `
IBM is an American multinational technology and consulting corporation, with headquarters in Armonk, New York, United States. IBM manufactures and sells computer hardware and software, and offers infrastructure, hosting and consulting services in areas ranging from mainframe computers to nanotechnology.

 IBM sponsored research on the Jupiter code review system through the Eclipse Innovation Grant program.
`,
    },
    {
      date: '2000',
      sponsor: 'City Bank',
      text: 'Support research and development of B2B infrastructure for Hawaii',
      logo: 'images/citybank-logo.png',
      grants: [30000],
      longText: `
City Bank was a state-chartered bank organized under the laws of the state of Hawaii in 1959. It is now part of Central Pacific Bank.

City Bank's New Economy Research grant focussed on aligning the financial services, fulfillment distribution infrastructure, and small business sectors in Hawaii through B2B technology innovation.
`,
    },
    {
      date: '1999',
      sponsor: 'Sun Microsystems',
      text: 'Provide software and hardware for Java-based software engineering research',
      logo: 'images/sun-logo.png',
      grants: [39205],
      longText: `
Sun Microsystems, Inc. (now part of Oracle, Inc.) was a leading provider of high speed microprocessors, scalable systems, robust software, network storage, and comprehensive professional services. Sun’s Developer Relations Group was charged with providing strategic outreach for Sun’s key platform technologies.

Sun Microsystems provided hardware and software to support the development and evaluation of several Java-based software technologies, including Project LEAP, JavaWiz, MCS, and LOCC.
`,
    },
    {
      date: '1997',
      sponsor: 'Makai Ocean Engineering',
      text: 'Support software engineering technology transfer for subsea cable and array installations',
      logo: 'images/makai-logo.gif',
      grants: [83286, 10000],
      longText: `
[Makai Ocean Engineering](http://www.makai.com/) was founded in 1973 as a diversified ocean engineering company providing services in Hawaii and the Pacific. Today, Makai has expanded their services to include an international clientele focusing on engineering for renewable energy (OTEC and SWAC), large ocean pipelines, software for the planning, simulation, installation and recovery of submarine cables and arrays, and software for visualizing scientific 4D/5D data.

Makai and CSDL collaborated on a joint research project sponsored by the National Defense Center for Excellence for Research in Ocean Sciences (CEROS) for an Internet-enabled engineering tool for dynamically analyzing and planning world-wide subsea cable and array installations.
`,
    },
    {
      date: '1997',
      sponsor: 'Digital Equipment Corporation',
      text: 'Support Java-based software review technology research and development',
      logo: 'images/digital-logo.png',
      grants: [101413],
      longText: `
Digital Equipment Corporation (now a subsidiary of COMPAQ) had a 40 year history of innovation in computer technology, from the PDP-1 in 1960 to Alpha-based systems in the 1990’s. The Advanced Development Group was chartered to research and prototype state of the art compilation technology.

DEC's Advanced Development Group worked with CSDL to develop and evaluate Java-based software review technology as part of Project LEAP. Our joint efforts also included JavaWiz, an advanced static analysis tool for detection of Java-based programming errors.
`,
    },
    {
      date: '1996',
      sponsor: 'Tektronix',
      text: 'Adapt formal technical review processes to an industrial software development team.',
      logo: 'images/tektronix-logo.png',
      grants: [45000],
      longText: `
[Tektronix](https://www.tek.com/)‘s Measurement Business Division supplies products that measure and display signals and their paths wherever they are produced, processed, transmitted, and received.

CSDL and Tektronix worked on industrial software quality improvement through formal technical review.  In addition, Tektronix provided CSDL students with summer internship experiences.
`,
    },
    {
      date: '1995',
      sponsor: 'PICHTR',
      text: 'Collaborative environments for strategic planning',
      logo: 'images/pichtr-logo.jpg',
      grants: [30280],
      longText: `
The [Pacific International Center for High Technology Research (PICHTR)](https://www.pichtr.org/) was established by the 1983 Legislature and, originally managed within the University of Hawaii for administrative purposes, was incorporated in 1985 as an independent Hawaii-based not-for-profit. Its mission is to accelerate technology commercialization to increase security, safety, and economic opportunities in Hawaii and the Asia-Pacific region. Its focus is on renewable energy; natural disaster management; agriculture; and ocean, educational and dual-use technology.

CSDL and PICHTR worked on the design of a collaborative environment for strategic planning called Project HI-TIME.
`,
    },
  ];
}
