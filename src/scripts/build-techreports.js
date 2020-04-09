#! /usr/bin/env node

console.log('Starting build-techreports');

const fs = require('fs');
const _ = require('lodash');
const bibtex = require('bibtex');

const masterFile = 'src/_data/csdl-trs.master.array.json';
const bibFileName = 'csdl-trs.bib';
const bibString = fs.readFileSync(bibFileName, 'utf8');
const bibString2 = `
%%%%%%%%%%%%%%%%%%%%%%%%%%% -*- Mode: Bibtex -*- %%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% csdl-trs.bib --   CSDL Technical Report Series
%% Author          : Philip Johnson
%% Created On      : Mon Nov 20 08:02:04 1995
%% Last Modified By: Philip Johnson
%% Last Modified On: Fri Feb  3 10:55:12 2012
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%   Copyright (C) 1995 Philip Johnson
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%


@TECHREPORT{csdl-91-01,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {February},
   NUMBER = {{CSDL}-91-01},
   TITLE = {Introduction to the {Collaborative Software Development Laboratory}},
   KEYWORDS = {CSDL},
   YEAR = 1991,
   summary = {Obsolete. See technical reports 97-05 and 98-03.},
   category = {csdl}
}


@TECHREPORT{csdl-91-02,
   AUTHOR = {Philip M. Johnson and Dadong Wan and Danu Tjahjono},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {July},
   Summary = {Obsolete.  See current Egret system documentation for design information},
   NUMBER = {{CSDL}-91-02},
   KEYWORDS = {EGRET},
   TITLE = {{EGRET} Design Specification: Version 2.0},
   YEAR = 1991
}


@INPROCEEDINGS{csdl-91-03,
   AUTHOR = {Philip M. Johnson},
   BOOKTITLE = {Proceedings of the 1991 ECSCW Developer's Workshop},
   MONTH = {September},
   KEYWORDS = {EGRET, Publications-Workshops},
   TITLE = {The {EGRET} Project: Exploring Open, Evolutionary, and Emergent Collaborative Systems},
   YEAR = 1991,
   Summary = {The EGRET Project at the University of Hawaii is pursuing a research
program designed to investigate evolution in collaborative systems.
Evolution is of central concern due to the exploratory nature of many
CSCW application areas, including software development, document
preparation, issue generation and discussion, and so forth.  In
exploratory domains, the ill-defined or changing nature of both the
problem and an acceptable solution to it impose special demands.  For
example, the criteria for an acceptable solution, or the solution
generation method may be an an emergent property of the exploratory
process.  This paper discusses our research paradigm and initial progress.}
  }

@INPROCEEDINGS{csdl-92-01,
   AUTHOR = {Philip M. Johnson},
   BOOKTITLE = {Proceedings of the 1992 Conference on Computer Supported Cooperative Work},
   MONTH = {November},
   TITLE = {Supporting Exploratory {CSCW} with the {EGRET} Framework},
   KEYWORDS = {EGRET, Publications-Conferences},
   YEAR = 1992,
   abstract = {Exploratory collaboration occurs in domains where the structure and process
of group work evolves as an intrinsic part of the collaborative activity.
Traditional database and hypertext structural models do not provide
explicit support for collaborative exploration.  The EGRET framework
defines both a data and a process model along with supporting analysis
techniques that provide novel support for exploratory collaboration.  To do
so, the EGRET framework breaks with traditional notions of the relationship
between schema and instance structure.  In EGRET, schema structure is
viewed as a representation of the current state of consensus among
collaborators, from which instance structure is allowed to depart in a
controlled fashion.  This paper discusses the issues of exploratory
collaboration, the EGRET approach to its support, and the current status of
this research.}
}

@TECHREPORT{csdl-92-02,
   AUTHOR = {Danu Tjahjono},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-92-02},
   TITLE = {{Co2ReView}: A Collaborative Code Inspection and Review Environment},
   KEYWORDS = {CSRS},
   MONTH = {April},
   YEAR = 1992,
   summary = {This is an early paper articulating ideas that were later
\t\t  elaborated and refined in research on CSRS.}
}

@INPROCEEDINGS{csdl-92-03,
   AUTHOR = {Dadong Wan and Philip M. Johnson},
   BOOKTITLE = {Proceedings of the 1992 AAAI Workshop on Communicating Scientific and Technical Knowledge},
   MONTH = {July},
   TITLE = {Supporting Scientific Learning and Research Review Using {COREVIEW}},
   YEAR = 1992,
   KEYWORDS = {CLARE, Publications-Workshops},
   abstract = {Scientific learning and research are becoming increasingly
  computerized. More and more such activities are mediated through
  electronic artifacts. This paper presents an artifact-based system
  called COREVIEW, to be used in the domain of research seminars. The
  emphasis of our approach is on the centrality of textualized artifacts
  in seminar activities, the relationship between different types of
  artifacts, and the dynamic interactions among them over time. Our
  system provides explicit representation of research artifacts and their
  structures, and support for the process of collaborative artifact
  generation, integration, manipulation and utilization.},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-92-03.pdf}
}

@INPROCEEDINGS{csdl-92-04,
   AUTHOR = {Philip M. Johnson},
   BOOKTITLE = {Proceedings of the AAAI 1992 Workshop on Design Rationale},
   MONTH = {July},
   TITLE = {Collaborative Software Review for Capturing Design Rationale},
   KEYWORDS = {CSRS, Publications-Workshops},
   YEAR = 1992,
   summary = {This paper discusses connections between
collaborative software review and design rationale.  Not
surprisingly, collaborative software review activities provide an
excellent source of design rationale information, since analysis of
artifacts under review often involves design justifications and
alternatives.  Also, software reviews form an interesting point
at which to take a discrete \`\`snapshot'' in the historical record of
design, since they tend to take place only when the software is in a
relatively consistent and coherent state.  Finally, an exploratory
focus upon collaborative software review leads to a interesting variation on concurrent orientations
toward design and implementation.},
  URL = {http://csdl.ics.hawaii.edu/techreports/1992/92-04/92-04.ps}
}

@TECHREPORT{csdl-92-05,
   AUTHOR = {Dadong Wan},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-92-05},
   TITLE = {Supporting Collaborative Learning Through Research Reviews},
   KEYWORDS = {CLARE},
   YEAR = 1992,
   MONTH = {May},
   summary = {Research literature is not merely a formal vehicle for disseminating the
results of scientific research; it is also an important learning resource
for advanced learners (e.g., graduate students) and beginning researchers.
The purpose of this research is to investigate the structural and
process-level characteristics of research review as a collaborative
activity, and to develop computational mechanisms to facilitate such a
process. This paper briefly summarizes our ongoing efforts of developing a
software environment, called COREVIEW, for supporting collaborative
research review.}
}

@TECHREPORT{csdl-92-06,
   AUTHOR = {Dadong Wan},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-92-06},
   TITLE = {{COREVIEW}: A Tool for Supporting Collaborative Learning in Seminars},
   KEYWORDS = {CLARE},
   MONTH = {September},
   YEAR = 1992
}

@INPROCEEDINGS{csdl-92-07,
   AUTHOR = {Philip M. Johnson and Danu Tjahjono},
   BOOKTITLE = {Proceedings of the Third European Conference on Computer Supported Cooperative Work},
   MONTH = {September Publications-Conferences},
   KEYWORDS = {CSRS},
   TITLE = {Improving Software Quality through Computer Supported Collaborative Review},
   YEAR = 1993,
   abstract = {Formal technical review (FTR) is a cornerstone of software quality
assurance.  However, the labor intensive and manual nature of review, along
with basic unresolved questions about its process and products, means that
review is typically under-utilized or inefficiently applied within the
software development process. This paper introduces CSRS, a
computer-supported cooperative work environment for software review that
improves the efficiency of review activities and supports empirical
investigation of the appropriate parameters for review. The paper presents
a typical scenario of CSRS in review, its data and process model,
application to process maturation, relationship to other research, current
status, and future directions.},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-92-07.pdf}
}

@INPROCEEDINGS{csdl-92-08,
   AUTHOR = {Philip M. Johnson},
   BOOKTITLE = {Proceedings of the 1992 CSCW Workshop on Tools and Technologies},
   MONTH = {November},
   TITLE = {An Architectural Perspective on {EGRET}},
   KEYWORDS = {EGRET, Publications-Workshops},
   YEAR = 1992,
   SUMMARY = {This paper provides an introduction to the internal
\t\t  architecture of EGRET, including the client-server model,
                  the inverted hypertext-relational database process model,
                  the design of locally cached, event-updated global
\t\t  tables, and various forms of interoperability provided
                  in the system.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1992/92-08/92-08.ps}
}

@ARTICLE{csdl-92-09,
   AUTHOR = {Philip M. Johnson},
   JOURNAL = {{SIGOIS} Bulletin},
   MONTH = {April},
   KEYWORDS = {EGRET, Publications-Periodicals},
   TITLE = {Architectural Concerns in {EGRET}},
   YEAR = 1993
}

@TECHREPORT{csdl-92-10,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-92-10},
   TITLE = {Reverse Engineering Collaboration Structures in {U}senet},
   KEYWORDS = {URN},
   YEAR = 1992,
   SUMMARY ={This plain-text file, which was posted to USENET, contains an
             "alpha-level" proposal concerning a "reverse-engineering"
\t\t  approach to improving the collaborative nature of
\t\t  USENET.},
   MONTH = {December},
   URL = {http://csdl.ics.hawaii.edu/techreports/1992/92-10/92-10.text}
   }

@TECHREPORT{csdl-92-11,
   AUTHOR = {Danu Tjahjono},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-92-11},
   TITLE = {{CSRS} {D}esign {S}pecification},
   KEYWORDS = {CSRS},
   YEAR = 1993,
   MONTH = {December},
   SUMMARY = {Obsolete: See the CSRS system release for current design documentation.}
}

@TECHREPORT{csdl-93-01,
   AUTHOR = {Dadong Wan},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-93-01},
   MONTH = {January},
   TITLE = {{CLARE}: A Computer-Supported Collaborative Learning Environment Based on the Thematic Structure of Research and Learning Artifacts},
   KEYWORDS = {CLARE, Thesis-Proposals},
   TYPE = {{Ph.D.} Thesis Proposal},
   YEAR = 1993,
   abstract = {This research concerns the representation issue in collaborative learning
environments. Our basic claim is that knowledge representation is not only
fundamental to machine learning, as shown by AI researchers, but also
essential to human learning, in particular, human metalearning.  Few
existing learning support systems, however, provide representations which
help the learner make sense of and organize the subject content of
learning, integrate a wide range of classroom activities, (e.g., reading,
reviewing, writing, discussion), and compare and contrast various
viewpoints from individual learners.  It is our primary purpose to
construct an example instance of such a representation, and to show that
useful computational manipulations can be performed on it, and that the
combination of the representation and related computational services can
actually lead to the improved learner's performance on selected
collaborative learning tasks.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-01/thesis-p.pdf}
}

@TECHREPORT{csdl-93-02,
   AUTHOR = {Philip M. Johnson and Dadong Wan and Danu Tjahjono and Kiran Kavoori Ram and Robert S. Brewer},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-93-02},
   TITLE = {{EGRET} Requirements Specification},
   YEAR = 1993,
   KEYWORDS = {EGRET},
   MONTH = {April},
   SUMMARY = {This document presents an general overview of the software engineering
principles underlying the Egret system and its applications. It is an
introduction and a companion to the more detailed Design Specification
document for Egret which is generated by the DSB system.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-02/93-02.ps}
}

@TECHREPORT{csdl-93-03,
   AUTHOR = {Dadong Wan},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-93-03},
   TITLE = {{CLARE}: a New Approach to Computer-Supported Collaborative Learning},
   KEYWORDS = {CLARE},
   YEAR = 1993,
   MONTH = {May},
   SUMMARY = {This paper concerns collaborative learning as an active knowledge
construction processes. It asserts an essential role of knowledge
representation in achieving a high-level collaborative support. Our central
claim is that the presence of an expressive and usable representation,
combined with necessary computational support, can significantly enhance
the learners' performance in understanding the subject content of learning
artifacts, integrating various classroom activities, and relating different
viewpoints held by other learners. First, we propose a representational
framework, called RESRA, which characterizes the thematic structure of
learning and research artifacts. We then develop a computer-based tool,
called CLARE, that facilitates the use of RESRA for various collaborative
learning tasks, such as evaluating existing work (e.g., papers, programs,
design) or constructing new work. We also design a set of experiments which
will allow us to empirically assess the effectiveness of CLARE and our
research claims.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-03/93-03.ps.gz}
}

@TECHREPORT{csdl-93-04,
   AUTHOR = {Danu Tjahjono},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-93-04},
   TITLE = {{CSRS}: a New Approach to Software Review},
   KEYWORDS = {CSRS},
   YEAR = 1993,
   MONTH = {May},
   SUMMARY = {This research concerns problems in collaborative software review.
This paper introduces a review system called CSRS (Collaborative Software
Review System) that allows one to
experiment with  various aspects of review process, to compare
different review methods,  and at the same
time to use it as practical tools for supporting review activities.
The system also allows the user's organization to analyze and
to improve their review process based upon metrics data collected by
the system automatically.}
}

@TECHREPORT{csdl-93-05,
   AUTHOR = { Kiran Kavoori Ram },
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {May},
   KEYWORDS = {Miscellaneous},
   NUMBER = {{CSDL}-93-05},
   TITLE = {{DSB}: The Next Generation Tool for Software Engineers},
   YEAR = 1993,
   SUMMARY = {During the development of software projects, there
          always exists the problem of design specification
          maintenance.  As the project team surges ahead
          with the development process, there is a strong
          need to maintain an up-to-date documentation of
          the current system.  This requires an additional
          effort on each team member to maintain a
          consistent report of the modifications and
          additions they make on the system.

This Designbase project attempts to reduce the overhead involved in
the maintenance of ever changing design specifications, by generating
automatically, a design documentation from the source code and the
overview files that are maintained along with the system.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-05/Dsb-TR.pdf}
}

@TECHREPORT{csdl-93-06,
   AUTHOR = {Robert S. Brewer},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {May},
   NUMBER = {{CSDL}-93-06},
   TITLE = {{URN}: A New Way To Think About {U}senet},
   KEYWORDS = {URN},
   YEAR = 1993,
   SUMMARY = {This document presents an overview of the URN project. It is intended
to show the motivation behind the project as well as describing the
current status of the research.

The URN project is an Egret application that implements a new paradigm for
utilizing the massive, ever-changing data stream that is Usenet.  The
acronym URN stands for Ultimate Read News, but it can also be thought of
more symbolically as a repository for knowledge. The goal of URN is to
make the information available through Usenet more useful by using different
perspectives on Usenet and new ways to extract useful data from Usenet.
This paper describes problems with USENET, the way URN is intended to
\t\t  address
these problems, and the current status and future directions of the
\t\t  project.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-06/TR1.7.pdf}

}

@INPROCEEDINGS{csdl-93-07,
   AUTHOR = {Philip M. Johnson and Danu Tjahjono and Dadong Wan and Robert S. Brewer},
   BOOKTITLE = {Proceedings of the Pacific Northwest Software Quality Conference},
   MONTH = {October},
   TITLE = {Experiences with {CSRS}: An Instrumented Software Review
\t\t  Environment},
   KEYWORDS = {CSRS, Publications-Conferences},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-07/93-07.pdf},
   YEAR = 1993,
   abstract = {Formal technical review (FTR) is a cornerstone of software quality
assurance.  However, the labor-intensive and manual nature of review, along
with basic unresolved questions about its process and products, means that
review is typically under-utilized or inefficiently applied within the
software development process. This paper discusses our initial experiments
using CSRS, an instrumented, computer-supported cooperative work
environment for software review that reduces the manual, labor-intensive
nature of review activities and supports quantitative study of the process
and products of review. Our results indicate that CSRS increases both the
breadth and depth of information captured per person-hour of review time,
and that its design captures interesting measures of review process,
products, and effort.}
}


@ARTICLE{csdl-93-09,
   AUTHOR = {Philip M. Johnson},
   TITLE = {Experiences with {EGRET}: An Exploratory Group Work Environment},
   JOURNAL = {Collaborative Computing},
   VOLUME = {1},
   NUMBER = {1},
   YEAR = 1994,
   MONTH = {January},
   KEYWORDS = {EGRET, Publications-Journals},
   URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-93-18.pdf},
   abstract = {Exploratory collaboration occurs in domains where the structure and process
of group work evolves as an intrinsic part of the collaborative activity.
Traditional database and hypertext structural models do not provide
explicit support for collaborative exploration.  EGRET is an implemented
environment for the development of domain-specific collaborative systems
that defines a novel data and a process model along with services for
exploratory collaboration.  To accomplish this, EGRET departs from
traditional notions of the relationship between schema and instance
structure.  In EGRET, schema structure is viewed as a representation of the
current state of consensus among collaborators, from which instance
structure is allowed to depart in a controlled fashion.  To provide such
exploratory services in a responsive interactive environment, EGRET
implements specialized architectural mechanisms. This paper presents the
concepts and implications of exploratory collaboration, followed by the
design and implementation of EGRET.  The paper concludes with our results
to date, which demonstrate that EGRET succeeds in providing useful services
for exploratory collaboration, through interesting technical and cultural
issues remain to be addressed before exploratory collaboration can become
commonplace in CSCW systems.}
}

@TECHREPORT{csdl-93-11,
   AUTHOR = {Philip M. Johnson and Danu Tjahjono},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {July},
   NUMBER = {{CSDL}-93-11},
   KEYWORDS = {CSRS},
   TITLE = {{CSRS} {U}ser {G}uide},
   SUMMARY = {This document provides an illustrated user guide to CSRS
\t\t  Version 2.x},
   URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-93-16.pdf},
   YEAR = 1993
}

@TECHREPORT{csdl-93-12,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {October},
   NUMBER = {{CSDL}-93-12},
   KEYWORDS = {CSRS},
   TITLE = {Improving Software Quality through Formal Technical Review: A Research Agenda},
   YEAR = 1993,
   SUMMARY = {Formal technical review (FTR) encompasses a range of structured,
collaborative methods employing technical personnel to improve the quality
of a software development artifact.  Research shows that FTR, when
appropriately practiced, provides significant benefits. However, research
also shows that FTR introduces substantial new overhead, and that its
cost-effectiveness is easily compromised by a variety of group process
obstacles.  In addition, current FTR practice is difficult and costly to
investigate effectively, and thus many important questions about its nature
and comparative effectiveness remain unanswered.

This document presents a research agenda intended to address problems in
both the practice and research of FTR through CSRS (Collaborative
Software Review System), an instrumented, computer-supported cooperative
work environment. CSRS provides automated support for many time consuming
aspects of FTR, avoids many group process problems inherent in traditional,
manual review, and captures unique, high quality empirical data about the
process and products of FTR.

The research agenda includes:
(1) Controlled experimental laboratory studies on automated FTR support.
(2) Technology transfer of CSRS to selected industrial sites.
(3) Development of a domain-specific version of CSRS for C++ software.
(4) Creation of a CSRS consortium for collaborative FTR research between
    industry and academia.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-12/ftr-agenda93.ps}

}

@TECHREPORT{csdl-93-13,
   AUTHOR = {Robert S. Brewer and Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {January},
   NUMBER = {{CSDL}-93-13},
   KEYWORDS = {URN},
   TITLE = {Collaborative Classification and Evaluation of Usenet},
   YEAR = 1994,
   ABSTRACT = {Usenet is an example of the potential and problems of the nascent National
  Information Infrastructure. While Usenet makes an enormous amount of useful
  information available to its users, the daily data overwhelms any user who
  tries to read more than a fraction of it. This paper presents a
  collaboration-oriented approach to information classification and
  evaluation for very large, dynamic database structures such as Usenet. Our
  approach is implemented in a system called URN, a multi-user,
  collaborative, hypertextual Usenet reader.  We show that this collaborative
  method, coupled with an adaptive interface, radically improves the overall
  relevance level of information presented to a user.},
  URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-13/93-13.pdf}
}

@PHDTHESIS{csdl-93-14,
   AUTHOR = {Dadong Wan},
   SCHOOL = {University of Hawaii, Department of Information and Computer Sciences},
   TITLE = {{CLARE}: A Computer-Supported Collaborative Learning Environment Based on the Thematic Structure of Scientific Text},
   YEAR = 1994,
   Type = {{Ph.D.} Thesis},
   KEYWORDS = {CLARE, Thesis-PhD},
   MONTH = {May},
   ABSTRACT ={This dissertation presents a computer-based collaborative learning
environment, called CLARE, that is based on the theory of learning as
collaborative knowledge building. It addresses the question, "what can a
computer do for a group of learners beyond helping them share information?"

CLARE differs from virtual classrooms and hypermedia systems in three ways.
First, CLARE is grounded on the theory of meaningful learning, which
focuses the role of meta-knowledge in human learning.  Instead of merely
allowing learners to share information, CLARE provides an explicit
meta-cognitive framework, called RESRA, to help learners interpret
information and build knowledge. Second, CLARE defines a new group process,
called SECAI, that guides learners to systematically analyze, relate, and
discuss scientific text through a set of structured steps: summarization,
evaluation, comparison, argumentation, and integration.  Third, CLARE
provides a fine-grained, non-obtrusive instrumentation mechanism that
keeps track of the usage process of its users. Such data forms an important
source of feedback for enhancing the system and a basis for rigorously
studying collaboration learning behaviors of CLARE users.

CLARE was evaluated through sixteen usage sessions involving six groups of
students from two classes.  The experiments consist of a total of about 300
hours of usage and over 80,000 timestamps.  The survey shows that about 70%
of learners think that CLARE provides a novel way of understanding
scientific text, and about 80% of learners think that CLARE provides a
novel way of understanding their peers' perspectives.  The analysis of the
CLARE database and the process data also reveals that learners differ
greatly in theirinterpretations of RESRA, strategies for comprehending the
online text, and understanding of the selected artifact. It also found
that, despite the large amount of time spent on summarization, up to 66% of
these learners often fail to correctly represent important features of
scientific text and the relationships between those features.  Implications
of these findings at the design, empirical, and pedagogical levels are
discussed.},
   URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-93-14.pdf}
}

@TECHREPORT{csdl-93-15,
   AUTHOR = {Dadong Wan},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {September},
   NUMBER = {{CSDL}-93-15},
   TITLE = {{CLARE} {U}ser's {G}uide},
   KEYWORDS = {CLARE},
   YEAR = 1993,
   SUMMARY = {This document provides an illustrated user's guide to the
\t\t  CLARE system.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-15/user-guide.ps.gz}
}

@TECHREPORT{csdl-93-16,
   AUTHOR = {Johnny Li},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {May},
   KEYWORDS = {Miscellaneous},
   NUMBER = {{CSDL}-93-16},
   TITLE = {Documentation for the {XView} Graphical Browser},
   YEAR = 1993
}

@INPROCEEDINGS{csdl-93-17,
   AUTHOR = {Philip M. Johnson},
   BOOKTITLE = {Proceedings of the 16th International Conference on Software Engineering},
   MONTH = {May},
   TITLE = {An Instrumented Approach to Improving Software Quality through Formal Technical Review},
   KEYWORDS = {CSRS, Publications-Conferences},
   YEAR = 1994,
   ABSTRACT = {Formal technical review (FTR) is an essential
   component of all software quality assessment, assurance, and
   improvement techniques.  However, current FTR practice leads to
   significant expense, clerical overhead, group process obstacles, and
   research methodology problems.

   CSRS is an instrumented, computer-supported cooperative work
   environment for formal technical review.  CSRS addresses problems in
   the practice of FTR by providing computer support for both the
   process and products of FTR.  CSRS also addresses problems in
   research on FTR through instrumentation supporting fine-grained, high
   quality data collection and analysis.  This paper describes CSRS, a
   computer-mediated review method called FTArm, and selected findings
   from their use to explore issues in formal technical review.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-17/93-17.pdf},

}

@TECHREPORT{csdl-93-18,
   AUTHOR = {Rosemary Andrada and Carleton A. Moore},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {October},
   NUMBER = {{CSDL}-93-18},
   KEYWORDS = {EGRET},
   TITLE = {Hyperbase Server Interface: Versions 2.0 and 2.1},
   YEAR = 1993,
   SUMMARY = {This document provides obsolete reference material on
\t\t  HBS. See Egret system documentation or ICS Technical
\t\t  Report 94-14 for current HBS 3.x interface
\t\t  specifications.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-18/TR-93-18.pdf}
}

@TECHREPORT{csdl-93-19,
   AUTHOR = {Danu Tjahjono},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {September},
   KEYWORDS = {CSRS},
   NUMBER = {{CSDL}-93-19},
   TITLE = {Studying Formal Technical Review Methods using {CSRS}},
   YEAR = 1993,
   ABSTRACT = {The importance of formal technical review and its benefits have been
well documented, and yet there is a proliferation of methods in
practice with varying degrees of success.

This paper discusses a new approach to assess and study various
aspects associated with the effectiveness of current review methods.
Our basic approach is to use a computer assisted review system (CSRS)
equipped with mechanisms to model different review methods and
at the same time capture fine-grained measurements
about the product and the process of the review.
Through suitable experimental design, these data can be used to
compare the different methods to each other.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-19/paper.ps}
}

@TECHREPORT{csdl-93-20,
   AUTHOR = {Philip M. Johnson and Danu Tjahjono and Dadong Wan and Robert S. Brewer},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {November},
   KEYWORDS = {EGRET},
   NUMBER = {{CSDL}-93-20},
   TITLE = {Gtables: From {EGRET} 2.x.x to {EGRET} 3.0.x},
   YEAR = 1993,
   SUMMARY = {This document describes the current design of the server subsystem class
s*gtable, which provides an efficient and high-level mechanism for the
implementation and maintenance of global tables.  The purpose of this
documentation is to serve as a basis for the redesign and reimplementation
of gtables in Egret-3.0.x.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-20/93-20.ps}
}

@inproceedings{csdl-93-21,
   AUTHOR = {Dadong Wan and Philip M. Johnson},
   BOOKTITLE = {Proceedings of the 1994 {ACM} Conference on Computer Supported Cooperative Work},
   TITLE = {Computer-Supported Collaborative Learning Using {CLARE}: the
\t\t  Approach and Experimental Findings},
   KEYWORDS = {CLARE, Publications-Conferences},
   ADDRESS = {Chapel Hill, North Carolina},
   MONTH = {oct},
   YEAR = 1994,
   abstract = {Current collaborative learning systems focus on maximizing shared
  information. However, \`\`meaningful learning'' is not simply information
  sharing but, more importantly, knowledge construction.  CLARE is a
  computer-supported learning environment that facilitates meaningful
  learning through collaborative knowledge construction. CLARE provides a
  semi-formal representation language called RESRA and an explicit
  process model called SECAI. Experimental evaluation through 300 hours
  of classroom usage indicates that CLARE does support meaningful
  learning, and that a major bottleneck to computer-mediated knowledge
  construction is summarization.  Lessons learned through the design and
  evaluation of CLARE provide new insights into both collaborative
  learning systems and collaborative learning theories.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-21/93-21.pdf},
}

@article{csdl-93-22,
   AUTHOR = {Philip M. Johnson},
   JOURNAL = {Software Quality Journal},
   TITLE = {Design for Instrumentation: High Quality Measurement of Formal Technical Review},
   YEAR = 1996,
   Volume = 5,
   Number = 3,
   Pages = {33-51},
   KEYWORDS = {CSRS, Publications-Journals},
   MONTH = {March},
   URL = {http://csdl.ics.hawaii.edu/techreports/1994/94-21/94-21.pdf},
   abstract = {All current software quality assurance methods incorporate some form of
  formal technical review (FTR), because structured analysis of software
  artifacts by a team of skilled technical personnel has demonstrated
  ability to improve quality.  However, FTR methods come in a wide
  variety of forms with varying effectiveness, incur significant
  overhead on technical staff, and have little computer support.
  Measurements of these FTR methods are coarse-grained, frequently low
  quality, and expensive to obtain.

  This paper describes CSRS, a highly instrumented, computer-supported
  system for formal technical review, and shows how it is designed to
  collect high quality, fine-grained measures of FTR process and products
  automatically.  The paper also discusses some results from over one year
  of experimentation with CSRS; describes how CSRS improves current
  process improvement approaches to FTR; and overviews several novel
  research projects on FTR that are made possible by this system. }
}

@INPROCEEDINGS{csdl-93-23,
   AUTHOR = {Philip M. Johnson},
   BOOKTITLE = {SIGOIS Bulletin},
   MONTH = {April},
   TITLE = {Report on the 1993 {ECSCW} Tools and Technologies Workshop},
   KEYWORDS = {Miscellaneous, Publications-Periodicals},
   YEAR = 1994,
   SUMMARY = {This plain-text file provides a brief summary of the
\t\t  workshop.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-23/93-23.text}
}

@TECHREPORT{csdl-93-24,
   AUTHOR = {Dadong Wan},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {September},
   NUMBER = {{CSDL}-93-24},
   TITLE = {{CLARE} 1.4.7 Design Document},
   KEYWORDS = {CLARE},
   SUMMARY = {This document provides an overview of the design of CLARE
\t\t  Version 1.4.7},
   URL = {http://csdl.ics.hawaii.edu/techreports/1993/93-24/cla-1.4.7.ps.gz},
   YEAR = 1993
}


@TECHREPORT{csdl-94-02,
   AUTHOR = {Robert S. Brewer and Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   MONTH = {January},
   NUMBER = {{CSDL}-94-02},
   KEYWORDS = {URN},
   TITLE = {Toward Collaborative Knowledge Management within Large,
\t\t  Dynamically Structured Information Systems},
   YEAR = 1994,
   ABSTRACT = {Usenet is an example of the potential and problems of the nascent
National Information Infrastructure. While Usenet makes an enormous
amount of useful information available to its users, the daily data
overwhelms any user who tries to read more than a fraction of it. This
paper presents a collaboration-oriented approach to knowledge
management and evaluation for very large, dynamic database structures
such as Usenet. Our approach is implemented in a system called URN, a
multi-user, collaborative, hypertextual Usenet reader.  Empirical
evaluation of this system demonstrates that this collaborative method,
coupled with an adaptive interface, improves the overall relevance
level of information presented to a user.  Finally, the design of this
system provides important insights into general collaborative knowledge
management mechanisms for very large, dynamically structured database
systems such as Usenet and the upcoming Information Superhighway.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1994/94-02/jmis.pdf}
}

@INPROCEEDINGS{csdl-94-03,
   AUTHOR = {Philip M. Johnson},
   BOOKTITLE = {Proceedings of the Fourth International Conference on Software Quality},
   MONTH = {October},
   TITLE = {Supporting Technology Transfer of Formal Technical Review
   through a Computer Supported Collaborative Review System},
   KEYWORDS = {CSRS, Publications-Conferences},
   ADDRESS = {Reston, VA.},
   abstract = {Formal technical review (FTR) is an essential component of all
   modern software quality assessment, assurance, and improvement techniques,
   and is acknowledged to be the most cost-effective form of quality
   improvement when practiced effectively.  However, traditional FTR
   methods such as inspection are very difficult to adopt
   in organizations: they introduce substantial new up-front
   costs, training, overhead, and group process obstacles.  Sustained
   commitment from high-level management along with substantial
   resources is often necessary for successful technology transfer of
   FTR.

   Since 1991, we have been designing and evaluating a series of
   versions of a system called CSRS: an instrumented, computer-supported
   cooperative work environment for formal technical review.  The
   current version of CSRS includes an FTR method definition language,
   which allows organizations to design their own FTR method, and to
   evolve it over time. This paper describes how our approach to
   computer supported FTR can address some of the issues in technology
   transfer of FTR.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1994/94-03/94-03.pdf},
   YEAR = 1994
}

@article{csdl-94-04,
   AUTHOR = {Dadong Wan and Philip M. Johnson},
   JOURNAL = {International Journal of Human-Computer Systems},
   TITLE = {Experiences with {CLARE}: a Computer-Supported Collaborative
\t\t  Learning Environment},
   KEYWORDS = {CLARE, Publications-Journals},
   VOLUME = 41,
   MONTH = {December},
   PAGES = {851-879},
   abstract = {Current collaborative learning systems focus on maximizing shared
  information. However, \`\`meaningful learning'' is not simply information
  sharing but also knowledge construction.  CLARE is a computer-supported
  learning environment that facilitates meaningful learning through
  collaborative knowledge construction. It provides a semi-formal
  representation language called RESRA and an explicit process model
  called SECAI. Experimental evaluation through 300 hours of classroom
  usage indicates that CLARE does support meaningful learning. It also
  shows that a major bottleneck to computer-mediated knowledge
  construction is summarization.  Lessons learned through the design and
  evaluation of CLARE provide new insights into both collaborative
  learning systems and collaborative learning theories.},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-94-04.pdf},
   YEAR = 1994
}



@TechReport{csdl-94-06,
  author = \t "Philip M. Johnson",
  title = \t "The {A}nnotated {E}gret",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1994",
  KEYWORDS = {AEN},
  number =\t "{CSDL}-94-06",
  month =\t "June"
}


@TECHREPORT{csdl-94-07,
   AUTHOR = {Danu Tjahjono},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-94-07},
   TITLE = { Evaluating the Cost-Effectiveness of Formal Technical
            Review Factors},
   KEYWORDS = {CSRS, Thesis-Proposals},
   TYPE = {{Ph.D.} Dissertation Proposal},
   MONTH = {June},
   YEAR = 1994,
   ABSTRACT = {The importance and benefits of formal technical review (FTR) as a
method to improve software quality have
been well documented, and yet there is a proliferation of the methods in
practice with varying degrees of success. Worse, the same methods are
often practiced inconsistently and the contribution of various review
factors on review outcomes is also not currently understood.

This research proposes a new approach to assess and study the
cost-effectiveness of various review factors. Our basic approach is to
first develop a framework that allows one to classify the similarities
and differences of existing FTR methods from the perspective of their
review processes.
Specifically, the framework looks into important review factors that
characterize a review process, such as the objective of a particular
phase within the review process, the interaction mode among review
participants and the technique being used during the phase.

Second, we will
develop a computer assisted review system, namely, CSRS version 3.0,
that can be used as an experimental testbed for empirically evaluating
different FTR factors that may impact the methods.
Finally, we will design a control experiment to answer an important
initial question concerning the cost-effectiveness of three different
examination techniques commonly used in existing FTR methods: free
review technique, selective test cases technique and stepwise
verification technique.},
  URL = {http://csdl.ics.hawaii.edu/techreports/1994/94-07/revised-proposal.ps}
}

@INPROCEEDINGS{csdl-94-08,
   AUTHOR = {Philip M. Johnson},
   TITLE = {From Principle-centered to Organization-centered Design: A Case Study of Evolution in a Computer-Supported Formal Technical Review Environment},
   BOOKTITLE = {Interdisciplinary Approaches to System Analysis and Design},
   KEYWORDS = {CSRS},
   YEAR = 1996,
   MONTH = {July},
   ABSTRACT = {  Design of new computer-based environments to replace or augment
  traditional, manual work procedures is typically problematic due to
  its experimental and embedded nature: the requirements for the
  computer-based version of the task may not be well defined, and the
  outcome of introducing computer-based support may well change the
  nature of the task altogether.

  This paper illustrates these issues through a discussion of the
  evolution in the design of CSRS, an instrumented, computer-supported
  cooperative work environment for formal technical review.  CSRS was
  originally designed in response to well-recognized shortcomings in
  traditional, non-computer-based formal technical review methods.  The
  initial design was thus founded upon a principle-centered basis,
  where the system was oriented toward solving known problems in the
  domain of formal technical review.  Over time, the design has evolved
  toward a more organization-centered basis, in which the system is
  oriented toward support for adoption and use within organizations, even
  if that support conflicts with the \`\`principles'' of formal technical
  review.  We conjecture that such an evolution may be inevitable in
  experimental and embedded design domains. },
  URL = {http://csdl.ics.hawaii.edu/techreports/1994/94-08/scharding.ps}
}



@TECHREPORT{csdl-94-09,
   AUTHOR = {Rosemary Andrada},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-94-09},
   TITLE = {Redefining the Web: Creating a Computer Network Community},
   Type = {{M.S.} Thesis Proposal},
   KEYWORDS = {WWW, Thesis-Proposals},
   MONTH = {December},
   ABSTRACT = {Organizations are formed to accomplish a goal or mission, where
  individual members do their part and make a combined effort leading
  toward this goal.  As the organization grows in size, the level of
  community inevitably deteriorates.

  This research will investigate the strengths and weaknesses of a
  computer-based approach to improving the sense of community within one
  organization, the Department of Computer Science at the University of
  Hawaii.  We will assess the current level of community by administering
  a questionnaire to members of the department.  Next, we will introduce
  a World Wide Web information system for and about the department in an
  effort to impact the level of community that exists.  We will then
  administer another questionnaire to assess the level of community
  within the department after a period of use with the information
  system.  We will analyze the results of both questionnaires and usage
  statistics logged by the system.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1994/94-09/www.ps},
   YEAR = 1994
}


@TECHREPORT{csdl-94-13,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-94-13},
   KEYWORDS = {EGRET},
   TITLE = {{ECS} Design Reference},
   SUMMARY = {See the current ECS System release for the current version of
\t\t  this documentation.},
   MONTH = {January},
   YEAR = 1994
}


@techreport{csdl-94-14,
   author = {Philip M. Johnson and Carleton A. Moore and Rosemary Andrada},
   title = {{HBS} Interface Specification},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   year = 1995,
   KEYWORDS = {EGRET},
   MONTH = {February},
   NUMBER = {{CSDL}-94-14},
   abstract = {This document specifies the interface protocol observed between the HBS
server system and the ECS client system, together known as Egret. HBS is a
multiuser, database server for (non-video) hypermedia applications.  It
manages storage, locking, retrieval, and inter-client communications.
This document is intended to describe the interface between
HBS and ECS in enough detail so that alternative database servers can be
built to service requests from an ECS clients. It is also intended to serve as a source
of reference material for maintainers of the HBS and ECS systems.},
   URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-94-14.pdf}
}


@INPROCEEDINGS{csdl-94-15,
   AUTHOR = {Philip M. Johnson},
   BOOKTITLE = {Proceedings of the 1994 CSCW Workshop on Software
\t\t  Architectures for Cooperative Systems},
   MONTH = {October},
   TITLE = {Collaboration in the Small vs. Collaboration in the Large},
   ADDRESS = {Chapel Hill, N.C.},
   KEYWORDS = {EGRET, Publications-Workshops},
   YEAR = 1994,
   SUMMARY = {This paper defines two endpoints in a spectrum of
\t\t  collaboration organized by scale (from dozens to millions
\t\t  of users), and discusses architectural implications of
                  scale in the design of collaborative systems.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1994/94-15/citl.ps}
}

@TECHREPORT{csdl-94-16,
   AUTHOR = {Carleton A. Moore},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-94-16},
   TITLE = {Supporting authoring and learning in a collaborative hypertext
            system: The {A}nnotated {E}gret {N}avigator},
  KEYWORDS = {AEN, Thesis-Proposals},
   Type = {{M.S.} Thesis Proposal},
   MONTH = {December},
   YEAR = 1994,
   SUMMARY = {This research is concerned with how people collaboratively author and
learn.  More specifically, it is concerned with how to design and implement
a hypertext system to support collaborative authoring and learning.
We are investigating these issues through the design, implementation, and
evaluation of AEN, a hypertext collaborative authoring and learning tool.},
   URL = {http://csdl.ics.hawaii.edu/techreports/1994/94-16/objective.ps}
}


@InProceedings{csdl-94-20,
  author = \t "Philip M. Johnson and Carleton A. Moore",
  title = \t "Investigating Strong Collaboration with the {A}nnotated
\t\t  {E}gret {N}avigator",
  booktitle =\t "Proceedings of the Fourth {IEEE} Workshop on Enabling
\t\t  Technologies: Infrastructure for Collaborative
\t\t  Enterprises (WET-ICE '95)",
  year =\t "1995",
  KEYWORDS = {AEN, Publications-Workshops},
  month =\t "April",
  abstract = "The Annotated Egret Navigator (AEN) is a system designed to support
  strong collaboration among a group as they cooperatively build,
  review, revise, and improve a structured hypertext document.  AEN was
  used as the central instructional and research system for a graduate
  seminar on collaborative systems at the University of Hawaii during
  Fall, 1994.  AEN was used for over 285 hours during the second half of
  the semester alone, and users generated over 800 nodes and 800 links.
  Lessons learned about strong collaboration include: (1) Users as well
  as artifacts should be visible; (2) Provide direct and indirect
  authoring mechanisms; (3) Provide context-sensitive change information;
  (4) Provide access to intermediate work products; (5) Maintain database
  integrity; (6) The WWW is not effective for strong collaboration; and
  (7) An agent-based architecture may be necessary for systems supporting
  strong collaboration.",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-94-20.pdf}
}



@TechReport{csdl-95-03,
  author = \t "Carleton A. Moore",
  title = \t "{HBS} Design Document",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   KEYWORDS = {EGRET},
  number = {{CSDL}-95-03},
  year = \t "1995",
  month =\t "February",
  abstract = "HBS is an 11 KLOC Hypertext Multiuser Database Server written in
  C++. HBS is designed to work with ECS clients, as part of the Egret
  client-server system.  HBS is broken down into four blocks, File
  Operations, Basic Hypertext Operations, Events and Locks, and
  Client/Server Operations.  There is also a built in debugging mechanism
  and memory leak detection system.  This document describes the internal
  design of HBS.",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-03.pdf}
}

@TechReport{csdl-95-04,
  author = \t "Carleton A. Moore",
  title = \t "Supporting authoring and learning in a strongly
\t\t  collaborative hypertext system: The Annotated Egret Navigator",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",

  KEYWORDS = {AEN, Thesis-MS},
  number = {{CSDL}-95-04},
  type = {{M.S.} Thesis},
  year = \t "1995",
  month =\t "July",
  abstract = {With the increased use of hypertext, the issues behind collaborative
authoring of hypertext are becoming more important.  This thesis presents
the Annotated Egret Navigator (AEN), a system designed to support
strong collaboration among a group as they cooperatively build, review,
revise, improve and learn from a structured hypertext document.  AEN
addresses how strong collaboration can be supported through computer
mediation.  It is designed to support collaborative creation of hypertext
and to instrument the actions of its users in order to understand how such
creation occurs.},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-04.pdf}
}


@TechReport{csdl-95-06,
  author = \t "Danu Tjahjono",
  title = \t "Building Software Review Systems Using {CSRS}",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   KEYWORDS = {CSRS},
  number = {{CSDL}-95-06},
  year = \t "1995",
  abstract = "The importance of Software Review or Formal Technical Review (FTR) and
its benefits have been well documented. However, there are many
variations of the method in practice, especially those related to the
group process.  This paper discusses a new approach to how
organizations can build their own review systems that are most
suitable to them.  Our basic approach is to use CSRS modeling
languages to characterize the review method descriptively.  The
language descriptions are then compiled to generate the corresponding
review systems.  CSRS modeling languages are developed based on FTR
framework which models both variations in the group process
and review strategies exhibited by current FTR methods.",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-06.pdf},
  month =\t "January"
}

@TechReport{csdl-95-07,
  author = \t "Danu Tjahjono",
  title = \t "Comparing the cost effectiveness of Group Synchronous Review
                  Method and Individual Asynchronous Review Method using
\t\t  {CSRS}: Results of Pilot Study",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   KEYWORDS = {CSRS},
  number = {{CSDL}-95-07},
  year = \t "1995",
  abstract = "This document describes a pilot experiment that compares the cost
  effectiveness of a group-based review method (EGSM) to that of an
  individual-based review method (EIAM) using CSRS. In this pilot study, no
  significant differences in review effectiveness and review cost were
  found. This document provides complete details on the procedures and
  outcomes from this pilot study, as well as the lessons learned which will
  be applied to an upcoming experimental study.",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-07.pdf},
  month =\t "January"
}

@PhdThesis{csdl-95-08,
  author = \t "Danu Tjahjono",
  title = \t "Exploring the effectiveness of formal technical review
\t\t  factors with {CSRS}, a collaborative software review system",
  school = \t "Department of Information and Computer Sciences,
\t\t  University of Hawaii",
  year = \t "1996",
  KEYWORDS = {CSRS, Thesis-PhD},
  Type = {{Ph.D.} Thesis},
  number = {{CSDL}-95-08},
  month = "August",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-08.pdf},
  abstract = {
Formal Technical Review (FTR) plays an important role in modern software
development. It can improve the quality of software products and the
quality and productivity of their development processes.  However, the
effectiveness of current FTR practice is hampered by uncertainty and
ambiguity.  This research investigated two issues. First, what differences
exist among current FTR methods? Second, what are potential review factors
that impact upon the effectiveness of these methods?

The approach taken by this research was to first develop a FTR framework,
based on a review of literature in the field.  The framework allows one to
determine the similarities and differences between the review process of
FTR methods, as well as to identify potential review factors.
Specifically, it describes a review method in terms of seven components of
a review process: phase, objective, degree of collaboration, synchronicity,
role, technique, entry/exit criteria.  By looking at the values of
individual components, one can compare and contrast different FTR
methods. Furthermore, by investigating these values empirically, one can
methodically improve the practice of FTR.

Second, a computer based review system, called CSRS, was developed to
implement the framework. The system provides a set of declarative modeling
languages, which allow one to create a wide variety of FTR methods, or to
design experiments to compare the performance of two or more review
methods, or to evaluate a set of review factors within a method.

Finally, this research involved an empirical study using CSRS to
investigate the effectiveness of a group process versus an individual
process in finding program faults.  Two review methods/systems were
implemented using CSRS: EGSM (used by real groups) and EIAM (used by
nominal groups).  The experiment involved 24 groups of students (3 students
per group), each reviewing two sets of source code, once using EGSM and
once using EIAM.  The experiment found that there were no significant
differences in detection effectiveness between the two methods, that
synergy was observed in EGSM but did not contribute significantly to the
total faults found, and that EGSM incurred higher cost than EIAM, but was
significantly more effective in filtering out false positives. }
}



@TechReport{csdl-95-10,
  author = \t "Philip M. Johnson",
  title = \t "The {E}gret {P}rimer: A tutorial guide to coordination and control \\\\
               in interactive client-server-agent applications",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   KEYWORDS = {EGRET},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-10.pdf},
  number = {{CSDL}-95-10},
  year = \t "1995",
  SUMMARY = {This book
  introduces you to Egret,  a distributed, hypertext, client-server-agent
framework that has been used since 1990 to develop collaborative applications
for learning, authoring, software review, news reading, and other areas.
The book is structured as a programmatic
guided tour of Egret, which  teaches you to build collaborative systems of slowly
increasing complexity, sophistication, and power.},
  month =\t "June"
}



@TechReport{csdl-95-11,
  author = \t "Rosemary Andrada",
  title = \t "Building Community through the World Wide Web",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  type = {{M.S.} Thesis},
  number = {{CSDL}-95-11},
  year = \t "1995",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-11.pdf},
   KEYWORDS = {WWW, Thesis-MS},
  month =\t "July",
  abstract = {This thesis presents a case study designed to assess the strengths and
weaknesses of a computer-based approach to improving the sense of community
within one organization, the Department of Information and Computer Sciences at
the University of Hawaii.  The case study used a pretest-posttest design.
First, several measures of the sense of community within the department were
obtained via a questionnaire.  Second, a World Wide Web information system was
introduced in an effort to affect the level of community within the department.
Third, a similar questionnaire was administered after a period of four months.
Analysis of the survey responses and system logs showed that the information
system designed to promote community in this organization had instead polarized
it.  However, these systems can also serve as a diagnostic tool for discovering
what factors may help promote or inhibit community building.}
}


@TechReport{csdl-95-12,
  author = \t "Carleton A. Moore",
  title = \t "{WET} {ICE} Tools Working Group Report",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   KEYWORDS = {Miscellaneous, Publications-Workshops},
  number = {{CSDL}-95-12},
  year = \t "1995",
  month =\t "May",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-11.pdf}
}

@TechReport{csdl-95-13,
  author = \t "Danu Tjahjono",
  title = \t "Results of {CSRS} Experiments",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  KEYWORDS = {CSRS},
  number = {{CSDL}-95-13},
  year = \t "1995",
  abstract = "This document provides the data collected from two
\t\t  experiments on software review conducted using
                  CSRS during the Spring of 1995.",
  month =\t "May"
}


@TechReport{csdl-95-14,
  author = \t "Philip M. Johnson",
  title = \t "The {CA/M} Architecture for {P}roject {HI-TIME}",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-14.pdf},
  KEYWORDS = {HI-TIME},
  number = {{CSDL}-95-14},
  year = \t "1995",
  abstract = "This document reports on the work done as part of the Project
\`\`Collaboration Mechanisms for Project HI-TIME: Hawaii Telecommunications
Infrastructure Modernization and Expansion: A Model for Statewide
Strategic Planning'', Subcontract 131030-002.

In the project, in response to the requirements for Project HI-TIME, a
collaborative architecture called \`\`CA/M'' has been designed and
implemented and used to build a collaborative system for Project
HI-TIME.

This report documents the current state of the project, providing an
overview of Project HI-TIME requirements, the CA/M architecture designed
in response to the these requirements, and the status of research on
this project.",
  month =\t "November"
}


@TechReport{csdl-95-16,
  author = \t "Julio Polo",
  title = \t "A Quick Guided Tour of {S}hemacs",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-16.pdf},
  number = {{CSDL}-95-16},
  KEYWORDS = {EGRET},
  year = \t "1995",
  abstract = "This is a quick guided tour through the main features of
\t\t  Shemacs, a concurrent editor built using the Egret
                  collaborative framework.",
  month =\t "October"
}


@TechReport{csdl-95-18,
  author = \t "Danu Tjahjono and Philip M. Johnson",
  title = \t "{FTArm} User's Guide (Version 1.2.0)",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-18.pdf},
  number = {{CSDL}-95-18},
  KEYWORDS = {CSRS},
  year = \t "1995",
  abstract = "This manual provides a description of FTArm system for
review participants and the administrator. FTArm is a computer-mediated
process for software review based upon Egret, a framework for
collaborative systems. This document includes descriptions of
how to execute the review process, what review
artifacts are involved, and the associated user commands to
manipulate the artifacts and the process.",
  month =\t "October"
}


@TechReport{csdl-95-19,
  author = \t "Danu Tjahjono and Philip M. Johnson",
  title = \t "{FTArm} Demonstration Guide (Version 1.2.0)",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  KEYWORDS = {CSRS},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-19.pdf},
  number = {{CSDL}-95-19},
  year = \t "1995",
  abstract = "This document provides a step-by-step demonstration of
the simple use of the CSRS system using the FTArm review method.
FTArm is a computer-mediated
process for software review based upon Egret, a framework for
collaborative systems.",
  month =\t "October"
}


@TechReport{csdl-95-20,
  author = \t "Rosemary Andrada",
  title = \t "The Effect of a Virtual World Wide Web Community on its Physical Counterpart",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-20.pdf},
  year = \t "1995",
  number = {{CSDL}-95-20},
  KEYWORDS = {WWW},
  month =\t "December",
  abstract = {This paper overviews a study that assessed the strengths and weaknesses of a
computer-based approach to improving the sense of community within one
organization, the Department of Information and Computer Sciences at the
University of Hawaii.  The case study used a pretest-posttest design.  First,
several measures of the sense of community within the department were obtained
via a questionnaire.  Second, a World Wide Web information system was
introduced in an effort to affect the level of community within the department.
Third, a similar questionnaire was administered after a period of four months.
Analysis of the survey responses and system logs showed that the information
system designed to promote community had instead polarized some of its members.
In addition, the system served as a valuable diagnostic tool for discovering
what factors may help promote or inhibit community building.}
}



@TechReport{csdl-95-21,
  author = \t "Jennifer M. Geis",
  title = \t "An Evaluation of {F}lashmail: a computer-mediated communication tool",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  KEYWORDS = {Flashmail},
  number = {{CSDL}-95-21},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-21.pdf},
  year = \t "1996",
  abstract = "
  This paper presents the results from an analysis of a new
  computer-mediated communication tool called Flashmail.  I investigated
  how people used Flashmail as well as Flashmail's relationship to
  conventional electronic mail.  Participants in the experiment loaded
  extensions that gathered data regarding the characteristics of all
  messages sent through E-mail and Flashmail.  This data was used
  to analyze the conditions under which each system was used.  I found that
  Flashmail seems to be preferred whenever the message is short, needs to
  be communicated in a short period of time, and when both the recipient
  and the sender are logged into the system and active at the time of
  sending.  In contrast, I found that E-mail was preferred for messages
  that were large (over 400 characters) and non-urgent, or when the
  receiver was either not logged into Flashmail or had been idle for longer
  than 7 minutes.  These results indicate that Flashmail is generally used
  as a rapid, synchronous messaging method.",
  month =\t "May"
}

@TechReport{csdl-95-22,
  author = \t "Carleton A. Moore",
  title = \t "Strong Collaboration in {AEN}",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1995",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-22.pdf},
  number = {{CSDL}-95-22},
  KEYWORDS = {AEN},
  month =\t "December",
  abstract = {This paper overviews the Annotated Egret Navigator (AEN), a system designed
to support strong collaboration among a group as they cooperatively
build, review, revise, improve and learn from a structured hypertext
document.  AEN addresses how strong collaboration can be supported through
computer mediation.  It is designed to support collaborative creation of
hypertext and to instrument the actions of its users in order to understand
how such creation occurs.}
}



@article{csdl-95-23,
  author = \t "Philip M. Johnson",
  title = \t "Egret: A Framework for Advanced {CSCW} Applications",
  journal = \t "{ACM} Software Engineering Notes",
  year = \t "1996",
  volume = \t "21",
  number = \t "2",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-23.pdf},
  month = \t "May",
  KEYWORDS = {EGRET, Publications-Periodicals},
  abstract = {
Egret is a publically available, advanced framework for construction of
computer-supported cooperative work applications.  Egret provides an
approach to multi-user, interactive application development that differs
markedly from other frameworks or infrastructures, such as Groupkit, WWW,
or Lotus Notes.  This short paper introduces Egret, its architecture,
design philosophy, selected applications, and interest groups within the
software engineering community. It concludes with information on how Egret's sources,
binaries, and documentation may be obtained free of charge using the
Internet.}
}

@article{csdl-95-24,
  author = \t "Philip M. Johnson",
  title = \t "Reengineering Inspection: The Future of Formal
\t\t  Technical Review",
  journal = {Communications of the {ACM}},
   year = \t "1998",
  volume = 41,
  number = 2,
  month = {February},
  pages = {49-52},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-95-24.pdf},
  KEYWORDS = {CSRS, Publications-Journals},
  abstract = {  Formal technical review is acknowledged as a preeminant software
  quality improvement method. The \`\`inspection'' review method, first
  introduced by Michael Fagan twenty years ago, has led to dramatic
  improvements in software quality. It has also led to a myopia within
  the review community, which tends to view inspection-based methods as
  not just effective, but as the optimal approach to formal
  technical review.  This article challenges this view by presenting a
  taxonomy of software review that shows inspection to be just one among
  many valid approaches. The article then builds upon this framework to propose
  seven guidelines for the radical redesign and improvement of formal
  technical review during the next twenty years.}
}


@TECHREPORT{csdl-96-01,
   AUTHOR = {Danu Tjahjono},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   keywords = {CSRS},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-96-01.pdf},
  number = {{CSDL}-96-01},
   TITLE = {{CSRS} Design Reference 3.5.0},
   SUMMARY = {This document contains a reference manual for Version 3.5.0
\t\t  of the CSRS
\t\t  collaborative software review environment},
   MONTH = {February},
   YEAR = 1996
}


@TechReport{csdl-96-04,
  author = \t "David Brauer and Philip M. Johnson and Carleton A. Moore",
  title = \t "Requiem for the Project HI-TIME Collaborative Process",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  number = {{CSDL}-96-04},
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-96-04.pdf},
  year = \t "1996",
  KEYWORDS = {HI-TIME},
  month =\t "March",
  abstract = {
In early 1995, the State of Hawaii began work on an ambitious revision to
its telecommunications policy planning process.  A multidisciplinary team
was commissioned to develop a proposal for an iterative, interactive,
computer-mediated collaborative planning process whereby the State's
telecommunications infrastructure plan could be developed and periodically
upgraded to reflect technology and policy shifts in local communities. The
proposal included a sophisticated, CSCW software system called HI-TIME
which would both enact the planning process as well as provide access and
visibility into the planning process for the general public.  In early
1996, the ambitious collaborative planning process, including the
implemented, deployed HI-TIME system, was abandoned in favor of a more
traditional approach. This paper explores the rise and fall of Project
HI-TIME and the lessons it holds for developers of CSCW systems.}
}


@TechReport{csdl-96-05,
  author = \t "Philip M. Johnson",
  title = \t "State as an Organizing Principle for {CSCW} Architectures",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-96-05.pdf},
  year = \t "1996",
  number = {{CSDL}-96-05},
  KEYWORDS = {EGRET},
  month =\t "March",
  abstract = {  A useful way to gain insight into collaborative architectures is by
analyzing how they collect, represent, store, analyze, and distribute state
information.  This paper presents state as an organizing principle for
collaborative architectures. It uses a framework with eight dimensions to
analyze four systems: WWW, GroupKit, Lotus Notes, and Egret. The analysis
illuminates similarities and differences between these architectures, and
yields two conjectures: that no single collaborative architecture can fully
support both collaboration-in-the-small and collaboration-in-the-large, and
that flexible and efficient support for state management requires
architectural support for agents as first-class users.}
}


@InProceedings{csdl-96-06,
  author = \t "Philip M. Johnson and Danu Tjahjono",
  title = \t "Assessing software review meetings: A controlled experimental study using {CSRS}",
  pages = \t "{118-127}",
  URL = {http://csdl.ics.hawaii.edu/techreports/1996/96-06/96-06.pdf},
  keywords = {FTR, CSRS, Publications-Conferences},
  booktitle = "Proceedings of the 1997 International Conference on Software
\t\t  Engineering",
  year = \t "1997",
  month = \t "May",
  address = \t "Boston, MA.",
  abstract = \t{Software review is a fundamental component of the software quality
assurance process, yet significant controversies exist concerning
efficiency and effectiveness of various review methods. A central question
surrounds the use of meetings: traditional review practice views them as
essential, while more recent findings question their utility.

We conducted a controlled experimental study to assess several measures of
cost and effectiveness for a meeting and non-meeting-based review method.
The experiment used CSRS, a computer mediated collaborative software review
environment, and 24 three person groups.  Some of the data we collected
included: the numbers of defects discovered, the effort required, the
presence of synergy in the meeting-based groups, the occurrence of false
positives in the non-meeting-based groups, and qualitative questionnaire
responses.

This paper presents the motivation for this experiment, its design and
implementation, our empirical findings, conclusions, and future directions.  }

}






@TechReport{csdl-96-13,
  author = \t "Philip M. Johnson",
  keywords = {FTR},
  title = \t "{BRIE}: A {B}enchmark {I}nspection {E}xperiment",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1996",
  URL = {http://csdl.ics.hawaii.edu/techreports/1996/96-13/96-13.html},
  number = \t "{CSDL}-96-13",
  month = \t "September",
  abstract = "The BenchmaRk Inspection Experiment (BRIE) is an attempt to
design and package a simple experimental design that satisfies
the goals of a benchmark experiment.
The BRIE acronym has a second expansion: Basic RevIew Education.  BRIE is
designed to have a second, complementary goal: a high quality training
package for a simple formal technical review method.  Thus, BRIE is a
curriculum module intended to be useful
in either an industry or academic
setting to introduce students to both software review and
empirical software engineering research practice."
}

@Article{csdl-96-14,
  author = \t "Philip M. Johnson and Danu Tjahjono",
  title = \t "Does Every Inspection Really Need A Meeting?",
  keywords = {FTR, CSRS, Publications-Journals},
  journal = \t "Journal of Empirical Software Engineering",
  year = \t "1998",
  volume = \t "4",
  number = \t "1",
  pages = {9-35},
  month = \t "January",
  abstract = {
  Software review is a fundamental component of the software quality
  assurance process, yet significant controversies surround the most
  efficient and effective review method. A central question surrounds the
  use of meetings; traditional review practice views them as essential,
  while more recent findings question their utility.  To provide insight
  into this question, we conducted a controlled experiment to
  assess several measures of cost and effectiveness for a meeting and
  non-meeting-based review method.  The experiment used CSRS, a computer
  mediated collaborative software review environment, and 24 three person
  groups.  We found that the meeting-based review method studied was
  significantly more costly than the non-meeting-based method, but that
  meeting-based review did not find significantly more defects than the
  non-meeting-based method. However, the meeting-based review method was
  significantly better at reducing the level of false positives, and
  subjects subjectively preferred meeting-based review over
  non-meeting-based review.  This paper presents the motivation for this
  experiment, its design and implementation, our empirical findings,
  pointers to Internet repositories for replication or additional analysis
  of this experiment, conclusions, and future directions. },
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-96-14.ps.Z}

}



@TechReport{csdl-96-16,
  number = {{CSDL}-96-16},
  author = \t "Philip M. Johnson",
  title = \t "Measurement Dysfunction in Formal Technical Review",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  URL = {http://csdl.ics.hawaii.edu/techreports/1996/96-16/96-16.html},
  month = "November",
  year = \t "1996",
  KEYWORDS = {FTR},
  abstract = {This paper explores some of the issues that arise in effective
use of measures to monitor and improve formal technical review
practice in industrial settings. It focuses on measurement
dysfunction: a situation in which the act of measurement
affects the organization in a counter-productive fashion,
which leads to results directly counter to those intended
by the organization for the measurement.}
}






@TechReport{csdl-96-19,
  author = \t "Philip M. Johnson",
  title = \t "{PSP}/{B}aseline: Software Requirements Specification",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1997",
  number =\t "{CSDL}-96-19",
  month = \t "January",
  URL = {http://csdl.ics.hawaii.edu/techreports/1996/96-19/96-19.html},
  KEYWORDS = {Leap},
  abstract = {PSP/Baseline is a system design that predated Project LEAP
\t      by about a year. The PSP/Baseline system was intended to
              provide an approach to empirical software process
\t\t  improvement inspired by, but different from, the Personal
\t\t  Software Process.}
}




@Article{csdl-97-02,
  keywords = {FTR, CSRS, Publications-Journals},
  author = \t "Adam A. Porter and Philip M. Johnson",
  title = \t "Assessing Software Review Meetings: Results
   of a Comparative Analysis of Two Experimental Studies",
  journal = \t "{IEEE} Transactions on Software Engineering",
  year = \t "1997",
  volume = \t "23",
  number = \t "3",
  pages = \t "129-145",
  month = \t "March",
  abstract = "Software review is a fundamental tool for software quality assurance.
Nevertheless, there are significant controversies as to the
most efficient and effective review method. One of the most
important questions currently being debated is the utility
of meetings.  Although almost all industrial review methods
are centered around the inspection meeting, recent findings
call their value into question. In prior research the authors
of this paper separately and independently conducted controlled
experimental studies to explore this issue.

This paper presents new research to understand the
broader implications of these two studies. To do this,
we designed and carried out a process of \`\`reconciliation''
in which we established a common framework
for the comparison of the two experimental studies,
re-analyzed the experimental data with respect to this
common framework, and compared the results. Through
this process we found many striking similarities between
the results of the two studies, strengthening their
individual conclusions. It also revealed interesting
differences between the two experiments, suggesting
important avenues for future research."

}

@TechReport{csdl-97-05,
  keywords = {CSDL},
  number = {{CSDL}-97-05},
  author = \t "Philip M. Johnson",
  title = \t "An Annotated Overview of {CSDL} Software Engineering",
  URL = {http://csdl.ics.hawaii.edu/techreports/1997/97-05/97-05.html},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1997",
  month =\t "November",
  abstract = {Current software engineering activities in CSDL can be viewed as consisting
of two basic components: product engineering and process
engineering. Product engineering refers to the various work products
created during development.  Process engineering refers to the various
measurements and analyses performed on the development process.  This
document describes activities within
CSDL over the past five years to better
understand and improve our process and product engineering within our
academic research development environment.}

}


@TechReport{csdl-97-06,
  number = {{CSDL}-97-06},
  keywords = {Leap},
  author = \t "Philip M. Johnson",
  title = \t "{LEAP} Initial Toolset: Software Requirements Specification",
  URL = {http://csdl.ics.hawaii.edu/techreports/1997/97-06/97-06.html},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1997",
  month =\t "October",
  abstract = {
This SRS for the LEAP Toolset is based heavily upon the ideas specified in
the PSP/Baseline SRS.
Conceptually, the LEAP toolset is a variant of the PSP/Baseline toolset in
two major ways. First,
the LEAP toolset is substantially more simple to implement and use. It
will serve as a prototype for proof-of-concept evaluation of the ideas in
the PSP/Baseline toolkit. Second,
the LEAP toolset emphasizes group review and minimization of
measurement dysfunction to a greater extent than the PSP/Baseline toolset.}
}



@TechReport{csdl-97-08,
  number =\t "{CSDL}-97-08",
  author = \t "Philip M. Johnson",
  title = \t "Project {LEAP}: Lightweight, Empirical, Anti-measurement
\t\t  dysfunction, and Portable Software Developer Improvement",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1997",
  month =\t "October",
  keywords = {Leap},
  URL = {http://csdl.ics.hawaii.edu/techreports/1997/97-08/97-08.pdf},

  abstract = {Project LEAP investigates the use of lightweight, empirical,
anti-measurement dysfunction, and portable approaches to software developer
improvement. A lightweight method involves a minimum of process
constraints, is relatively easy to learn, is amenable to integration with
existing methods and tools, and requires only minimal management investment
and commitment.  An empirical method supports measurements that can lead to
improvements in the software developers skill.  Measurement dysfunction
refers to the possibility of measurements being used against the
programmer, so the method must take care to collect and manipulate
measurements in a \`\`safe'' manner. A portable method is one that can be
applied by the developer across projects, organizations, and companies
during her career.

Project LEAP will investigate the strengths and weaknesses of this approach
to software developer improvement in a number of ways. First, it will
enhance and evaluate a LEAP-compliant toolset and method for defect entry
and analysis. Second, it will use LEAP-compliant tools to explore the
quality of empirical data collected by the Personal Software
Process. Third, it will collect data from industrial evaluation of the
toolkit and method. Fourth, it will create component-based versions of
LEAP-compliant tools for defect and time collection and analysis that can
be integrated with other software development environment
software. Finally, Project LEAP will sponsor a web site providing distance
learning materials to support education of software developers in
empirically guided software process improvement. The web site will also
support distribution and feedback of Project LEAP itself.}
}


@MastersThesis{csdl-98-01,
  type = {{M.S.} Thesis},
  number = {{CSDL}-98-01},
  keywords = {JavaWizard, Thesis-MS},
  author = \t "Jennifer M. Geis",
  title = \t "JavaWizard: Investigating Defect Detection and Analysis",
  school = \t "University of Hawaii",
  year = \t "1998",
  month =\t "May",
  URL = {ftp://ftp.ics.hawaii.edu/pub/tr/ics-tr-98-01.pdf},
  abstract = {This thesis presents a study designed to investigate the occurrence of
  certain kinds of errors in Java programs using JavaWizard
  (JWiz), a static analysis mechanism for Java source code.  JWiz is an
  extensible tool that supports detection of certain commonly occurring
  semantic errors in Java programs.  For this thesis, I used JWiz within a
  research framework designed to reveal (1) knowledge about the kinds of
  errors made by Java programmers, (2) differences among Java programmers
  in the kinds of errors made, and (3) potential avenues for improvement in
  the design and/or implementation of the Java language or environment.

  I performed a four week case study, collecting data from 14 students over
  three programming projects which produced approximately 12,800 lines of
  code.  The JWiz results were categorized into three types: functional
  errors (must be fixed for the program to work properly, maintenance
  errors (program will work, but considered to be bad style), and false
  positives (intended by the developer).  Out of 235 JWiz warnings, there
  were 69 functional errors, 100 maintenance errors, and 66 false
  positives.  The fix times for the functional errors added up to five and
  a half hours, or 7.3 percent of the total amount of time spent debugging
  in test.

  I found that all programmers inject a few of the same mistakes into their
  code, but these are only minor, non-defect causing errors.  I found that
  the types of defects injected vary drastically with no correlation to
  program size or developer experience.  I also found that for those
  developers who make some of the mistakes that JWiz is designed for, JWiz
  can be a great help, saving significant amounts of time ordinarily spent
  tracking down defects in test.}
}

@TECHREPORT{csdl-98-02,
   AUTHOR = {Carleton A. Moore},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-98-02},
   TITLE = {Automated Support for Technical Skill Acquisition and Improvement: An
Evaluation of the Leap Toolkit},
   KEYWORDS = {Leap, Thesis-Proposals},
   Type = {{Ph.D.} Thesis Proposal},
   MONTH = {November},
   YEAR = 1999,
   URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-02/98-02.pdf},
   abstract = {

  Software developers work too hard and yet do not get enough done.  Developing
  high quality software efficiently and consistently is a very difficult
  problem.  Developers and managers have tried many different solutions to
  address this problem.  Recently their focus has shifted from the software
  organization to the individual software developer.  The Personal Software
  Process incorporates many of the previous solutions while focusing on the
  individual software developer.

  I combined ideas from prior research on the Personal Software Process, Formal
  Technical Review and my experiences building automated support for software
  engineering activities to produce the Leap toolkit.  The Leap toolkit is
  intended to help individuals in their efforts to improve their development
  capabilities.  Since it is a light-weight, flexible, powerful, and private
  tool, it allows individual developers to gain valuable insight into their own
  development process. The Leap toolkit also addresses many measurement and
  data issues involved with recording any software development process.

  The main thesis of this work is the Leap toolkit provides a more accurate and
  effective way for developers to collect and analyze their software
  engineering data than manual methods.  To evaluate this thesis I will
  investigate three claims: (1) the Leap toolkit prevents many important errors
  in data collection and analysis; (2) the Leap toolkit supports data
  collection and analyses that are not amenable to manual enactment; and (3)
  the Leap toolkit reduces the level of \`\`collection stage'' errors.  To
  evaluate the first claim, I will show how the design of the Leap toolkit
  effectively prevents important classes of errors shown to occur in prior
  related research. To evaluate the second claim, I will conduct an experiment
  investigating 14 different quantitative time estimation techniques based upon
  historical size data to show that the Leap toolkit is capable of complex
  analyses not possible in manual methods.  To evaluate the third claim, I will
  analyze software developers data and conduct surveys to investigate the level
  of data collection errors.

 }
}




@TechReport{csdl-98-03,
  number = {{CSDL}-98-03},
  keywords = {CSDL},
  author = \t "Philip M. Johnson",
  title = \t "A Proposal for {CSDL2}: A Center for Software Development Leadership through Learning",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1997",
  month =\t "July",
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-03/98-03.html},
  abstract = {This document describes the design of CSDL2: a social, physical, and
virtual environment to support the development of world class software
engineering professionals.  In CSDL2, a "multi-generational learning
community" of faculty, graduate students, and
undergraduates all collaborate within a structured work environment for
practicing product, process, and organizational engineering.}
}


@InProceedings{csdl-98-04,
  author = \t "Anne M. Disney and Philip M. Johnson",
  title = \t "Investigating Data Quality Problems in the {PSP}",
  booktitle = "Sixth International Symposium on the Foundations of
\t\t  Software Engineering (SIGSOFT'98)",
  keywords = {PSP, Publications-Conferences},
  year = \t "1998",
  address = \t "Orlando, FL.",
  month = \t "November",
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-04/98-04.pdf},
  abstract = "  The Personal Software Process (PSP) is used by software engineers to
  gather and analyze data about their work.  Published studies typically
  use data collected using the PSP to draw quantitative conclusions about
  its impact upon programmer behavior and product quality.  However,
  our experience using PSP in both industrial and academic settings
  revealed problems both in collection of data and its later analysis.
  We hypothesized that these two kinds of data quality problems could make a
  significant impact upon the value of PSP measures.  To test this
  hypothesis, we built a tool to automate the PSP and then examined 89
  projects completed by ten subjects using the PSP manually in an
  educational setting.  We discovered 1539 primary errors and categorized
  them by type, subtype, severity, and age.  To examine the collection
  problem we looked at the 90 errors that represented impossible
  combinations of data and at other less concrete anomalies in Time
  Recording Logs and Defect Recording Logs.  To examine the analysis
  problem we developed a rule set, corrected the errors as far as possible,
  and compared the original and corrected data.  This resulted in
  significant differences for measures such as yield and the
  cost-performance ratio, confirming our hypothesis.  Our results raise
  questions about the accuracy of manually collected and analyzed PSP data,
  indicate that integrated tool support may be required for high quality
  PSP data analysis, and suggest that external measures
  should be used when attempting to evaluate the impact of the PSP upon
  programmer behavior and product quality."
}



@TechReport{csdl-98-05,
  author = \t "Anne M. Disney and Jarrett Lee and  Tuan Huynh and Jennifer Saito",
  title = \t "Investigating the Design and Evaluation of Research Web Sites",
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  keywords = {WWW},
  year = \t "1998",
  month = \t "May",
  number =\t "{CSDL}-98-05",
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-05/98-05.html},
  abstract = "The Aziza design group (formally 691 Web Development
Team) was commissioned by CSDL to implement a new web site. The group was
assigned not only to update the entire site, but also to research and
investigate the process and life cycle of World Wide Web site development.

This research document records the process and products that occurred
while updating of the CSDL web site.
It discusses issues such as the balance between providing
information and providing an image of the group,
and ways to share research information over the World Wide Web.
To back the data researched, evaluations by the various users of the site
occurred and are discussed here. This
document records our web site design processes,
what insights we had about those processes, our findings, and finally, our
conclusions."
}

@TechReport{csdl-98-06,
  author = \t "Anne M. Disney and Jarrett Lee and  Tuan Huynh and Jennifer Saito",
  title = \t "CSDL Web Site Requirements Specification Document",
  keywords = {WWW},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t "1998",
  month = \t "April",
  number =\t "{CSDL}-98-06",
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-06/98-06.html},
  abstract = "The purpose of this document is to
summarize the results of our background research for the
CSDL web site, and describe the resulting requirements for
\t\t  evaluation and review."
}


@TECHREPORT{csdl-98-07,
   AUTHOR = {Robert S. Brewer},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-98-07},
   TITLE = {Improving Mailing List Archives through Condensation},
   KEYWORDS = {MCS, Thesis-Proposals},
   Type = {{M.S.} Thesis Proposal},
   MONTH = {September},
   YEAR = 1998,
   URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-07/proposal.pdf},
   abstract = {
\t\t  Electronic mailing lists are popular Internet information
\t\t  sources. Many mailing lists maintain an archive of all
\t\t  messages sent to the list which is often searchable using
\t\t  keywords. While useful, these archives suffer from the fact
\t\t  that they include all messages sent to the list. Because they
\t\t  include all messages, the ability of users to rapidly find
\t\t  the information they want in the archive is hampered. To
\t\t  solve the problems inherent in current mailing list archives,
\t\t  I propose a process called condensation whereby one can strip
\t\t  out all the extraneous, conversational aspects of the data
\t\t  stream leaving only the pearls of interconnected wisdom.

\t\t  To explore this idea of mailing list condensation and to test
\t\t  whether or not a condensed archive of a mailing list is
\t\t  actually better than traditional archives, I propose the
\t\t  construction and evaluation of a new software system.  I name
\t\t  this system the Mailing list Condensation System or MCS. MCS
\t\t  will have two main parts: one which is dedicated to taking
\t\t  the raw material from the mailing list and condensing it, and
\t\t  another which stores the condensed messages and allows users
\t\t  to retrieve them.

\t\t  The condensation process is performed by a human editor
\t\t  (assisted by a tool), not an AI system. While this adds a
\t\t  certain amount of overhead to the maintenance of the
\t\t  MCS-generated archive when compared to a traditional archive,
\t\t  it makes the system implementation feasible.

\t\t  I believe that an MCS-generated mailing list archive
\t\t  maintained by an external researcher will be adopted as a
\t\t  information resource by the subscribers of that mailing list.
\t\t  Furthermore, I believe that subscribers will prefer the
\t\t  MCS-generated archive over existing traditional archives of
\t\t  the mailing list. This thesis will be tested by a series of
\t\t  quantitative and qualitative measures.  }
}


@MastersThesis{csdl-98-08,
  type = {{M.S.} Thesis},
  number = {{CSDL}-98-08},
  keywords = {PSP, Thesis-MS},
  author = \t "Anne M. Disney",
  title = \t "Data Quality Problems in the Personal Software Process",
  school = \t "University of Hawaii",
  year = \t "1998",
  month =\t "August",
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-08/98-08.pdf},
  abstract = {  The Personal Software Process (PSP) is used by software engineers to
  gather and analyze data about their work and to produce empirically
  based evidence for the improvement of planning and quality in future
  projects.  Published studies have suggested that adopting the PSP results
  in improved size and time estimation and in reduced numbers of defects
  found in the compile and test phases of development.  However, personal
  experience using PSP in both industrial and academic settings caused me
  to wonder about the quality of two areas of PSP practice: collection and
  analysis.  To investigate this I built a tool to automate the PSP and
  then examined 89 projects completed by nine subjects using the PSP in an
  educational setting.  I discovered 1539 primary errors and analyzed them
  by type, subtype, severity, and age.  To examine the collection problem
  I looked at the 90 errors that represented impossible combinations of
  data and at other less concrete anomalies in Time Recording Logs and
  Defect Recording Logs.  To examine the analysis problem I developed a
  rule set, corrected the errors as far as possible, and compared the
  original and corrected data.  This resulted in substantial
  differences for numbers such as yield and the cost-performance ratio.
  The results raise questions about the accuracy of published data on the
  PSP and directions for future research.}
}

@MastersThesis{csdl-98-10,
  type = {{M.S.} Thesis},
  number = {{CSDL}-98-10},
  keywords = {MCS, Thesis-MS},
  author = \t "Robert S. Brewer",
  title = \t "Improving Mailing List Archives Through Condensation",
  school = \t "University of Hawaii",
  year = \t "2000",
  month =\t "March",
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-10/98-10.pdf},
  abstract = {
  Searching the archives of electronic product support mailing lists often
  provides unsatisfactory results for users looking for quick solutions to
  their problems. Archives are inconvenient because they are too voluminous,
  lack efficient searching mechanisms, and retain the original thread structure
  which is not relevant to knowledge seekers.

  I present MCS, a system which improves mailing list archives through {\\em
    condensation}. Condensation involves omitting redundant or useless
  messages, and adding meta-level information to messages to improve searching.
  The condensation process is performed by a human assisted by an editing tool.

  I describe the design and implementation of MCS, and compare it to related
  systems. I also present my experiences condensing a 1428 message mailing list
  archive to an archive containing only 177 messages (an 88\\% reduction). The
  condensation required only 1.5 minutes of editor effort per message. The
  condensed archive was adopted by the users of the mailing list.
}
}

@Article{csdl-98-11,
  keywords = {PSP, Publications-Journals},
  author = \t "Philip M. Johnson and Anne M. Disney",
  title = \t "The Personal Software Process: A Cautionary Case Study",
  journal = \t "{IEEE} Software",
  year = \t "1998",
  volume = \t "15",
  number = \t "6",
  month = \t "November",
  abstract = "
In 1995, Watts Humphrey introduced the Personal Software Process in
his book, A Discipline for Software Engineering.
Programmers who use the PSP gather measurements related to
their own work products and the process by which they were developed,
then use these measures to drive changes to their development
behavior.
After almost three years of
teaching and using the PSP, we have experienced the educational
benefits of the PSP. As researchers, however, we have also uncovered
evidence of certain limitations, which we believe can help improve
appropriate adoption and evaluation of the method by industrial
and academic practitioners. This paper presents an overview of
a case study we performed that presents evidence
of potential data quality problems, along with
recommendations for those interested in adopting
PSP within industry or academia."
}


@InProceedings{csdl-98-12,
  author = \t "Carleton A. Moore",
  title = \t "Project LEAP: Personal Process Improvement for the Differently Disciplined",
  booktitle = "Proceedings of the Doctoral Workshop from the
1999 International Conference on Software Engineering",
  keywords = {Leap, Publications-Workshops},
  year = \t "1999",
  address = \t "Los Angeles, CA.",
  month = \t "May",
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-12/98-12.pdf},
  abstract = "
This paper overviews the research motivations for Project Leap.
"
}



@Article{csdl-98-13,
  keywords = {PSP, Publications-Journals},
  author = \t "Philip M. Johnson and Anne M. Disney",
  title = \t "A Critical Analysis of {PSP} Data Quality: Results from a Case Study",
  journal = \t "Journal of Empirical Software Engineering",
  year = \t "1999",
  month = "December",
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-13/98-13.pdf},
  abstract = "
  The Personal Software Process (PSP) is used by software engineers to
  gather and analyze data about their work.  Published studies typically
  use data collected using the PSP to draw quantitative conclusions about
  its impact upon programmer behavior and product quality.  However, our
  experience using PSP led us to question the quality of data both during
  collection and its later analysis.  We hypothesized that data quality
  problems can make a significant impact upon the value of PSP
  measures---significant enough to lead to incorrect conclusions regarding
  process improvement.  To test this hypothesis, we built a tool to
  automate the PSP and then examined 89 projects completed by ten subjects
  using the PSP manually in an educational setting.  We discovered 1539
  primary errors and categorized them by type, subtype, severity, and age.
  To examine the collection problem we looked at the 90 errors that
  represented impossible combinations of data and at other less concrete
  anomalies in Time Recording Logs and Defect Recording Logs.  To examine
  the analysis problem we developed a rule set, corrected the errors as far
  as possible, and compared the original and corrected data.  We found
  significant differences for measures such as yield and the
  cost-performance ratio, confirming our hypothesis.  Our results raise
  questions about the accuracy of manually collected and analyzed PSP data,
  indicate that integrated tool support may be required for high quality
  PSP data analysis, and suggest that external measures should be used when
  attempting to evaluate the impact of the PSP upon programmer behavior and
  product quality.
"
}

@TechReport{csdl-98-15,
  keywords = {JavaWizard},
  author = \t {Jennifer M. Geis},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {JavaWizard User Guide},
  year = \t {1998},
  URL = {http://csdl.ics.hawaii.edu/techreports/1998/98-15/98-15.html},
  number =\t {{{CSDL}-98-15}},
  month =\t "December",
  abstract = {
  This document describes the use of JavaWizard, an automated code
\t\t  checker for the Java programming language. The user guide
\t\t  includes directions for installation, command line
\t\t  invocation, and graphical user interface invocation.
         }
\t\t  }



@TechReport{csdl-99-01,
  keywords = {Leap},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Reflective Software Engineering with the Leap Toolkit},
  year = \t {1999},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-01/},
  number =\t {{{CSDL}-99-01}},
  month =\t "January",
  abstract = {
  This document describes a empirical, experience-based approach to
  software engineering at the individual level using the Leap toolkit.
\t\t  }
}

@TechReport{csdl-99-02,
  keywords = {LOCC},
  author = \t {Joseph A. Dane},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {LOCC User Guide},
  year = \t {1999},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-02/99-02.html},
  number =\t {{{CSDL}-99-02}},
  month =\t "January",
  abstract = {
  This document describes the installation and use of LOCC.
LOCC is a general mechanism for producing one or more measurements of the
size of work products.  LOCC
can produce both the "total" size of a work product, as well as the
"difference" in size between successive versions of the same work product.
\t\t  }
}

@TechReport{csdl-99-04,
  keywords = {JavaWizard},
  author = \t {Jennifer M. Geis},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {A Case Study Of Defect Detection And Analysis With JWiz},
  year = \t {1999},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-04/99-04.pdf},
  number =\t {{{CSDL}-99-04}},
  month =\t "November",
  abstract = {
This paper presents a study designed to investigate the occurrence of certain kinds of errors in Java programs using JavaWizard (JWiz), a static analysis mechanism for Java source code. JWiz is a tool that supports detection of certain commonly occurring semantic errors in Java programs.

JWiz was used within a research framework designed to reveal (1) knowledge about the kinds of errors made by Java programmers, (2) differences among Java programmers in the kinds of errors made, and (3) potential avenues for improvement in the design and/or implementation of the Java language or environment.

We found that all programmers inject a few of the same mistakes into their code, but these are only minor, non-defect causing errors. We also found that the types of defects injected vary drastically with no correlation to program size or developer experience.

Finally, we found that for those developers who make some of the mistakes that JWiz is designed for, JWiz can be a great help, saving significant amounts of time ordinarily spent tracking down defects in test.

\t\t  }
}




@TechReport{csdl-99-05,
  keywords = {MCS, Grant},
  author = \t {Robert S. Brewer},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Aspect Technology Fund Grant Proposal: Condensation of Educational Mailing Lists},
  year = \t {1999},
  type =\t {Grant Application},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-05/99-05.pdf},
  number =\t {{{CSDL}-99-05}},
  month =\t "February",
  abstract = {
  I propose the extension of the Mailinglist Condensation System to the realm
  of class support mailing lists in education. Condensed archives of the
  mailing lists can be used by future students to learn from the students of
  previous semesters, instead of having the information thrown out at the end
  of each semester. I will pursue this by piloting the system on two classes in
  Fall 1999. Furthermore, I show the feasibility of creating a company based on
  the {\\em open source} model which will sell service and support for MCS.
  }
}

@TechReport{csdl-99-06,
  keywords = {Leap, Grant},
  author = \t {Carleton A. Moore},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {The Aspect Technology Fund Grant Proposal:
Business Plan Improvement using Software Engineering Principles},
  year = \t {1999},
  type =\t {Grant Application},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-06/99-06.pdf},
  number =\t {{{CSDL}-99-06}},
  month =\t "February",
  abstract =     {This proposal describes the motivation, organization,
\t\t  and potential products and services for a company that
\t\t  supports the creation of high quality business plans.}
}



@InProceedings{csdl-99-07,
  author = \t "Carleton A. Moore",
  title = \t "Project {LEAP}: Addressing Measurement Dysfunction in Review",
  booktitle = "Proceedings of the Eighth International Conference on
\t\t  Human-Computer Interaction",
  keywords = {Leap, FTR, Publications-Conferences},
  year = \t "1999",
  address = \t "Munich, Germany",
  month = \t "August",
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-07/99-07.pdf},
  abstract = "
The software industry and academia believe that software review,
specifically Formal Technical Review (FTR), is a powerful method for
improving the quality of software.
Computer support for FTR reduces the overhead of conducting
reviews for reviewers and managers.
Computer support of FTR also allow for the easy collection of empirical
measurement of process and products of software review.  These measurements
allow researchers or reviewers to gain valuable insights into the review
process.
After looking closely at review metrics, we became aware of the possibility
of measurement dysfunction in formal technical review.  Measurement
dysfunction is a situation in which the act of measurement affects the
organization in a counter-productive fashion, which leads to results
directly counter to those intended by the organization for the measurement.
How can we reduce the threat of measurement dysfunction in software review
without losing the benefits of metrics collection?  Project
LEAP is our attempt
at to answer this question.  This paper present Project Leap's
approach to the design, implementation,
and evaluation of tools and methods for empirically-based, individualized
software developer improvement.
  "
}

@InProceedings{csdl-99-08,
  author = \t "Philip M. Johnson",
  title = \t "Leap: A \`\`Personal Information Environment'' for Software Engineers",
  booktitle = "Proceedings of the 1999 International Conference on
\t\t  Software Engineering",

  keywords = {Leap, Publications-Conferences},
  year = \t "1999",
  address = \t "Los Angeles, CA.",
  month = \t "May",
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-08/99-08.pdf},
  abstract = "  The Leap toolkit is designed to provide Lightweight, Empirical,
Anti-measurement dysfunction, and Portable approaches to
software developer improvement. Using Leap, software engineers gather and
analyze personal data concerning time, size, defects, patterns, and
checklists. They create and maintain definitions describing their software
development procedures, work products, and project attributes, including
document types, defect types, severities, phases, and size definitions.
Leap also supports asynchronous software review and facilitates integration
of this group-based data with individually collected data.  The Leap
toolkit provides a \`\`reference model'' for a personal information
environment to support skill acquisition and improvement for software
engineers."
\t\t  }


@TechReport{csdl-99-09,
  keywords = {Grant},
  author = \t {Joseph A. Dane},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {A Proposal for an Oahu Internet Ocean Sports Resource},
  year = \t {1999},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-09/grant.pdf},
  number =\t {{{CSDL}-99-09}},
  month =\t "February",
  abstract =     {This document proposes the development of a geographic
\t\t  information system available over the Internet to help
\t\t  visitors to Hawaii become aware of Ocean sports opportunities.}
}


@MastersThesis{csdl-99-10,
  type = {{M.S.} Thesis},
  number = {{CSDL}-99-10},
  keywords = {LOCC, Thesis-MS},
  author = \t "Joseph A. Dane",
  title = \t "Modular Program Size Counting",
  school = \t "University of Hawaii",
  year = \t "1999",
  month =\t "December",
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-10/99-10.pdf},
  abstract = {

  Effective program size measurement is difficult to accomplish.  Factors
  such as program implementation language, programmer experience and
  application domain influence the effectiveness of particular size metrics
  to such a degree that it is unlikely that any single size metric will be
  appropriate for all applications. This thesis introduces a tool, LOCC,
  which provides a generic architecture and interface to the production and
  use of different size metrics.  Developers can use the size metrics
  distributed with LOCC or can design their own metrics, which can be
  easily incorporated into LOCC.  LOCC pays particular attention to the
  problem of supporting incremental development, where a work product is
  not created all at once but rather through a sequence of small changes
  applied to previously developed programs.  LOCC requires that developers
  of new size metrics support this approach by providing a means of
  comparing two versions of a program.  LOCC's effectiveness was evaluated
  by using it to count over 50,000 lines of Java code, by soliciting
  responses to a questionnaire sent to users, and by personal reflection on
  the process of using and extending it.  The evaluation revealed that
  users of LOCC found that it assisted them in their development process,
  although there were some improvements which could be made.


}
}


@TechReport{csdl-99-11,
  keywords = {Grant},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Java-based software engineering technology
                   for high quality development in "Internet Time"
                   organizations},
  year = \t {1999},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-11/Welcome.html},
  number =\t {{{CSDL}-99-11}},
  month =\t "February",
  abstract =     {
This grant will support deployment and evaluation of four software
engineering technologies to support high quality development in "Internet
Time" environments.  The Leap toolset supports technical skill acquisition.
MCS supports improves the capability of mailing lists to provide technical
support. OpenJavaDoc facilitates open source distribution and software
development. The JavaWizard Internet Trial provides community-wide
statistics on Java programming errors.  The research projects will be
structured to allow Sun developers with early access to the systems, to
provide tangible software engineering benefits to Sun development groups,
and to enable Sun developers to provide feedback that can influence future
development.}
}


@TechReport{csdl-99-12,
  keywords = {Leap},
  author = \t {Carleton A. Moore},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Teaching Software Engineering skills with the Leap Toolkit},
  year = \t {1999},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-12/99-12.pdf},
  number =\t {{{CSDL}-99-12}},
  month =\t "November",
  abstract =     {
The Personal Software Process (PSP) teaches software developers many valuable
software engineering techniques.  Developers learn how to develop high quality
software efficiently and how to accurately estimate the amount of effort it will
take. To accomplish this the PSP forces the developer to follow a very strict
development model, to manually record time, to defect and size data, and analyze
their data.  The PSP appears successful at improving developer performance during
the training, yet there are questions concerning long-term adoption rates and
the accuracy of PSP data.

This paper presents our experiences using the Leap toolkit, an automated tool
to support personal developer improvement.  The Leap toolkit incorporates ideas
from the PSP and group review.  It relaxes some of the constraints in the PSP
and reduces process overhead.  We are using the Leap toolkit in an advanced
software engineering course at the University of Hawaii, Manoa.
}
}

@InProceedings{csdl-99-13,
  keywords = {MCS, Publications-Conferences},
  author = \t {Robert S. Brewer},
  booktitle = "Proceedings of the 2000 International Conference on
\t\t  Software Engineering",
  title = \t {Improving Problem-Oriented Mailing List Archives with {MCS}},
  year = \t {2000},
  address = \t "Limerick, Ireland",
  month = \t "June",
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-13/99-13.pdf},
  abstract =     {
Developers often use electronic mailing lists when seeking assistance with a
particular software application. The archives of these mailing lists provide a
rich repository of problem-solving knowledge. Developers seeking a quick answer
to a problem find these archives inconvenient, because they lack efficient
searching mechanisms, and retain the structure of the original conversational
threads which are rarely relevant to the knowledge seeker.

We present a system called MCS which improves mailing list archives through a
process called {\\em condensation}. Condensation involves several tasks:
extracting only messages of longer-term relevance, adding metadata to those
messages to improve searching, and potentially editing the content of the
messages when appropriate to clarify. The condensation process is performed by
a human editor (assisted by a tool), rather than by an artificial intelligence
(AI) system.

We describe the design and implementation of MCS, and compare it to related
systems. We also present our experiences condensing a 1428 message mailing list
archive to an archive containing only 177 messages (an 88\\% reduction). The
condensation required only 1.5 minutes of editor effort per message. The
condensed archive was adopted by the users of the mailing list.
}
}



@article{csdl-99-14,
  author = \t "Philip M. Johnson",
  title = \t "Project LEAP:
     Lightweight, Empirical, Anti-measurement dysfunction, and Portable
     Software Developer Improvement",
  journal = \t "{ACM} Software Engineering Notes",
  year = \t "1999",
  volume = \t "24",
  number = \t "6",
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-14/99-14.pdf},
  month = \t "December",
  KEYWORDS = {Leap, Publications-Periodicals},
  abstract = {
Project LEAP investigates the use of lightweight, empirical,
anti-measurement dysfunction, and portable approaches to software developer
improvement. This document provides a one-page progress report on
Project Leap for inclusion in the "Millenium" issue of Software
Engineering Notes.

}
}


@PhdThesis{csdl-99-15,
  type = {{Ph.D.} Thesis},
  author = \t {Carleton A. Moore},
  title = \t {Investigating Individual Software Development: An
Evaluation of the Leap Toolkit},
  school = \t {University of Hawaii, Department of Information and Computer Sciences},
  year = \t {2000},
  URL = {http://csdl.ics.hawaii.edu/techreports/1999/99-15/99-15.pdf},
  month = \t {August},
  KEYWORDS = {Leap, Thesis-PhD},
  abstract = {
  Software developers work too hard and yet do not get enough done.
  Developing high quality software efficiently and consistently is a very
  difficult problem.  Developers and managers have tried many different
  solutions to address this problem.  Recently their focus has shifted from
  the software organization to the individual software developer.  For
  example, the Personal Software Process incorporates many of the previous
  solutions while focusing on the individual software developer.

  This thesis presents the Leap toolkit, which combines ideas from prior
  research on the Personal Software Process, Formal Technical Review and my
  experiences building automated support for software engineering activities.
  The Leap toolkit is intended to help individuals in their efforts to improve
  their development capabilities.  Since it is a light-weight, flexible,
  powerful, and private tool, it provides a novel way for developers to gain
  valuable insight into their own development process. The Leap toolkit also
  addresses many measurement and data issues involved with recording any
  software development process.

  The main thesis of this work is that the Leap toolkit provides a novel
  tool that allows developers and researchers to collect and analyze
  software engineering data.  To investigate some of the issues of data
  collection and analysis, I conducted a case study of 16 graduate students
  in an advanced software engineering course at the University of Hawaii,
  Manoa.  The case study investigated: (1) the relationship between the
  Leap toolkit's time collection tools and \`\`collection stage'' errors; and
  (2) different time estimation techniques supported by the Leap toolkit.

  The major contributions of this research includes (1) the LEAP design
  philosophy; (2) the Leap toolkit, which is a novel tool for individual
  developer improvement and software engineering research; and (3) the insights
  from the case study about collection overhead, collection error and project
  estimation.}

}


@InProceedings{csdl2-00-01,
  author = \t {Carleton A. Moore},
  title = \t {Lessons Learned from Teaching Reflective Software Engineering
 using the {Leap} Toolkit},
  booktitle = \t {Proceedings of the 2000 International Conference on Software Engineering, Workshop on Software Engineering Education},
  year = \t {2000},
  address = \t {Limerick, Ireland},
  KEYWORDS = {Leap, Publications-Workshops},
  month = \t {May},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-01/00-01.pdf},
  Abstract = {
This paper presents our experiences using the Leap toolkit, an automated tool
to support personal developer improvement.  The Leap toolkit incorporates ideas
from the PSP and group review.  It relaxes some of the constraints in the PSP
and reduces process overhead.  Our lessons learned include: (1)
Collecting data about software development is useful; (2) Leap enables users to accurately estimate size and time
  in a known domain; (3) Many users feel their programming skills improve
  primarily due to practice, not their method; (4) To reduce measurement dysfunction, make the results less visible; (5) Partial defect collection and analysis is still useful; (6) Tool support should require few machine resources; and (7)
Experience may lead to overconfidence.
}
}


@article{csdl2-00-03,
  author = \t "Philip M. Johnson and Carleton A. Moore and Joseph A. Dane and Robert S. Brewer",
  title = \t "Empirically Guided Software Effort Guesstimation",
  journal = \t "{IEEE} Software",
  year = \t "2000",
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-03/00-03.pdf},
  month = \t "December",
  number= 6,
  volume=17,
  KEYWORDS = {Leap, PSP, Publications-Journals},
  summary = {
For several years, we have pursued an initiative called Project LEAP, whose
goal is the improvement of individual developers though lightweight,
empirical, anti-measurement dysfunction, and portable software engineering
tools and methods.
During the Fall of 1999, we performed a case study using the LEAP toolkit
in a graduate software engineering class.  One of the goals of the study
was to evaluate the various analytical estimation methods made available by
the toolkit.  We were curious as to whether a single method would prove
most accurate, or whether the most accurate method would depend upon the
type of project or the specific developer.  To our surprise, we found that,
in most cases, the developer-generated \`\`guesstimates'' were more accurate
than the analytical estimates.
We also found that the PROBE method of the
Personal Software Process, perhaps the most widely
publicized analytical approach to personal effort estimation, was the sixth
most accurate method.  Finally, we found that access to a range of
analytical estimation methods appeared to be useful to developers in
generating their guesstimates and improving them over time. }
}

@MastersThesis{csdl2-00-04,
  type = {{M.S.} Thesis},
  number = {{CSDL}-00-04},
  keywords = {JavaJam, Thesis-MS},
  author = \t "Monir Hodges",
  title = \t "JavaJam: Supporting Collaborative Review and Improvement of Open Source Software",
  school = \t "University of Hawaii",
  year = \t "2000",
  month =\t "August",
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-04/00-04.pdf},
  abstract = {
Development of Open Source Software is in many cases a collaborative
effort, often by geographically dispersed team members.  The problem for
members is to efficiently review documentation and source code and to
collect and share comments and annotations that will lead to improvements
in performance, functionality, and quality.  javaJAM is a collaborative
tool for assisting with the development of Open Source Software.  It
generates integrated documentation and source code presentations to be
viewed over the web.  More importantly, javaJAM provides an interactive
environment for navigating documentation and source code and for posting
annotations.  javaJAM creates relationships between sections of
documentation, source, and related comments and annotations to provide the
necessary cross-referencing to support quick and efficient reviews.
javaJAM was evaluated in a classroom setting.  Student teams posted
projects for team review using javaJAM and found it to be an easy way to
review their projects and post their comments.
 }
}

@TECHREPORT{csdl2-00-05,
   AUTHOR = {Jitender Miglani},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-01-11},
   TITLE = {The design, implementation, and evaluation of {INCA}: a proposal for an
automated system for approval code allocation},
   KEYWORDS = {Inca, Thesis-Proposals},
   Type = {{M.S.} Thesis Proposal},
   MONTH = {September},
   YEAR = 2001,
   URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-05/00-05.pdf},
   abstract = {
The ICS department of the University of Hawaii has faced problems
surrounding approval code distribution as its enrollment has increased. The
manual system for approval code allocation was time-consuming, ineffective
and inefficient. INCA is designed to automate the task of approval code
allocation, improve the quality of course approval decisions, and decrease
the administrative overhead involved in those decisions.

Based upon informal feedback from department administrators, it appears
that INCA reduces their overhead and makes their life easier. What are the
old problems that are solved by INCA? Does INCA introduce new kinds of
problems for the administrator? What about the students? Are they
completely satisfied with the system? In what ways does the system benefit
the department as a whole?

In this thesis, I will discuss design, implementation and evaluation of
INCA. I will evaluate INCA from the viewpoints of students, administrators,
and the department. I will do an email analysis to prove that INCA reduces
the administrative overheads. I will conduct a user survey to investigate
whether INCA improves the predictability and understandability of
students. Finally, I will analyze the INCA database to extract the
information useful to the departments for course curriculum planning. The
evaluation of INCA will provide us with useful insights for future
improvements of INCA and improving the student experience with academic
systems in general.

 }
}


@TechReport{csdl2-00-06,
  keywords = {VCommerce, Grant},
  author = \t {Mette L. Moffett},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {A Proposal for VCommerce: An Internet Entrepreneurship Environment},
  year = \t {2000},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-06/00-06.pdf},
  number =\t {{{CSDL}-00-06}},
  month =\t "February",
  abstract =     {The document proposes the development of an internet entrepreneurship simulation environment called VCommerce for the University of Hawaii Aspect Technology Grant program.}
}


@TechReport{csdl2-00-07,
  keywords = {VCommerce},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {VCommerce Entrepreneur User Guide},
  year = \t {2000},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-07/00-07.pdf},
  number =\t {{{CSDL}-00-07}},
  month =\t "January",
  abstract =     {VCommerce is intended to provide you with an educational and stimulating introduction to the initial, "startup" phases of entreprenurial activity in the online, Internet-enabled economy.  VCommerce is designed to reward those who can innovate, explore market niches, design viable businesses within the context of the VCommerce world, exploit the information resources of the Internet for business planning, react appropriately to VCommerce market data, and develop effective partnerships with other people with complementary skills. This user guide provides an overview of the VCommerce process.
}
}

@TechReport{csdl2-00-08,
  keywords = {VCommerce},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {VCommerce Example Business Plan: Pizza Portal},
  year = \t {2000},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-08/00-08.pdf},
  number =\t {{{CSDL}-00-08}},
  month =\t "January",
  abstract =     {This document provides an example business plan for the VCommerce simulation.  It details the design and implementation of a hypothetical business called "Pizza Portal".
}
}

@TechReport{csdl2-00-10,
  keywords = {LOCC},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {A Comparative Review of LOCC and CodeCount},
  year = \t {2000},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-10/},
  number =\t {{{CSDL}-00-10}},
  month =\t "November",
  abstract =     {
This paper provides one review of the comparative
strengths and weaknesses of <A
HREF="http://csdl.ics.hawaii.edu/Tools/LOCC/LOCC.html">LOCC</A> and <A
HREF="http://sunset.usc.edu/research/CODECOUNT/index.html">CodeCount</A>,
two tools for calculating the size of software source code.}
}

@TechReport{csdl2-00-09,
  keywords = {Grant},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Aligning the financial services, fulfillment distribution infrastructure, and small business sectors in Hawaii through {B2B} technology innovation},
  year = \t {2000},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-09/00-09.pdf},
  number =\t {{{CSDL}-00-09}},
  month =\t "September",
  abstract =     {This document is a proposal to the University of Hawaii New Economy Research Grant Program. It describes a study intended to discover business-to-business technologies that have the potential to improve the efficiency and reduce the cost for small Hawaiian businesses that produce physical products and desire to expand into national and international markets.
}
}

@TechReport{csdl2-00-11,
  keywords = {Thesis-BS, VCommerce},
  author = \t {Mette L. Moffett},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {The Design, Development, and Evaluation of VCommerce: A Virtual Environment to Support Entrepreneurial Learning},
  year = \t {2000},
  Type = {{B.S.} Thesis},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-11/00-11.pdf},
  number =\t {{{CSDL}-00-11}},
  month =\t "December",
  abstract =     {This thesis describes VCommerce, a virtual environment whose goal
is to significantly increase students' knowledge of the process involved with
starting a high tech company, and through hands-on experience enhance their confidence
in their ability to start such a company.  The thesis presents the design and
implementation of the environment, and a case study of its use in a graduate
course comprised of 50 students from amongst the computer science, business school,
engineering, and other departments. A course survey and fourteen post-semester
interviews show that students felt the class was extremely effective in teaching
entrepreneurship concepts, and that they have learned valuable lessons about managing
an Internet startup.
}
}


@TechReport{csdl2-00-12,
  keywords = {PWP},
  author = \t {Philip M. Johnson and Audris Mockus and Larry Votta},
  institution =  "Waterslide Engineering Institute, Oulu, Finland",
  title = \t {A controlled experimental study of the Personal Waterslide
Process: Results and Interpretations},
  year = \t {1999},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-12/pwp.pdf},
  number =\t {{{CSDL}-00-12}},
  month =\t "June",
  abstract =     {The paper reports on the Personal Waterslide Process,
an innovative software engineering technique pioneered during the 1999
meeting of the International Software Engineering Research Network at
its annual meeting in Oulu, Finland.
}
}



@TechReport{csdl2-00-13,
  keywords = {VCommerce},
  author = \t {Mette L. Moffett and Brian T. Pentland and Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {VCommerce Administrator Guide},
  year = \t {2001},
  URL = {http://csdl.ics.hawaii.edu/techreports/2000/00-13/00-13.pdf},
  number =\t {{{CSDL}-00-13}},
  month =\t "January",
  abstract =     {Provides administrative support for installation, configuration, and running the VCommerce simulation.
}
}

@TechReport{csdl2-01-01,
  keywords = {Thesis-MS, Hardware-Subroutine},
  author = \t {Mark F. Waterson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {The Hardware Subroutine Approach to Developing Custom Co-Processors},
  year = \t {2001},
  Type = {{M.S.} Thesis},
  URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-01/01-01.pdf},
  number =\t {{{CSDL}-01-01}},
  month =\t "May",
  abstract =     {
The Hardware Subroutine Approach to developing a reconfigurable, custom
co-processor is an architecture and a process for implementing a hardware
subsystem as a direct replacement for a subroutine in a larger program.
The approach provides a framework that helps the developer analyze the
tradeoffs of using hardware acceleration, and a design procedure to guide
the implementation process.  To illustrate the design process a HWS
implementation of a derivative estimation subroutine is described.  In this
context I show how key performance parameters of the HWS can be estimated
in advance of complete implementation and decisions made regarding the
potential benefit of implementation alternatives to program performance
improvement.  Performance of the actual hardware coprocessor is compared to
the software-only implementation and to estimates developed during the
design process.
}
}

@article{csdl2-01-02,
  author = \t "Philip M. Johnson and Mette L. Moffett and Brian T. Pentland",
  title = \t "Lessons learned from {VC}ommerce: A virtual
environment for interdisciplinary learning about software entrepreneurship",
  journal = \t "Communications of the {ACM}",
  volume = "46",
  number = "12",
  year = \t "2003",
  URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-02/01-02.pdf},
  month = \t "December",
  KEYWORDS = {VCommerce, Publications-Journals},
  abstract = {
The Virtual Commerce (VCommerce) simulation environment provides
a framework within which students can develop internet-based
businesses. Unlike most entrepreneurship simulation games, the objective
of VCommerce is not to maximize profits.  The environment, which is
designed for use in interdisciplinary classroom settings, provides an
opportunity for students with different backgrounds to build (virtual)
businesses together.  Elements of VCommerce, such as its open-ended
business model and product; significant technical depth; external
players; and severe time constraints combine to create a surprisingly
realistic and effective learning experience for students in both computer science and management.  This article overviews the VCommerce environment and
our lessons learned from using it at both the University of Hawaii and
Michigan State University. }
}


@TechReport{csdl2-01-04,
  keywords = {Hackystat},
  author = \t {Philip M. Johnson and Carleton A. Moore and Jitender Miglani},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Hackystat Design Notes},
  year = \t {2001},
  URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-04/01-04.html},
  number =\t {{{CSDL}-01-04}},
  month =\t "June",
  abstract =     {
This document collects together a series of design notes concerning
Hackystat, a system for automated collection and analysis of software engineering data.  Some of the design notes include: Insights from the Presto Development Project: Requirements from the IDE for automated data collection; A roundtable discussion of Hackystat; Change management in Hackystat; Validated idle time
detection; and Defect collection and analysis in Hackystat.
}
}

@TechReport{csdl2-01-05,
  keywords = {Hackystat},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Hackystat Developer Release Installation Guide},
  year = \t {2001},
  URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-05/01-05.html},
  number =\t {{{CSDL}-01-05}},
  month =\t "June",
  abstract =     {
This document provides an overview of the Hackystat developer
distribution. This includes the structure of the source code, the
Java-based component technologies  Hackystat is built on (including Tomcat,
Ant, Soap, Xerces, Cocoon, JavaMail, JUnit, HttpUnit, JDOM,
and Jato), configuration instructions, testing, and frequently
asked questions. An updated version of this document is provided
in the actual developer release package; this technical report is
intended to provide easy access to near-current instructions for
those who are evaluating the system and would like to learn more
before downloading the entire package.
}
}

@TechReport{csdl2-01-06,
  keywords = {Inca},
  author = \t {Jitender Miglani},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Inca Business Plan},
  year = \t {2001},
  URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-06/01-06.pdf},
  number =\t {{{CSDL}-01-06}},
  month =\t "April",
  abstract =     {
Inca is an Enterprise JavaBean based technology to provide Internet-based
allocation of course approval codes.  This business plan explores the
commercial potential of this technology.  The Inca business plan was
selected as a finalist in the 2001 Business Plan Competition of the
University of Hawaii College of Business Administration.
}
}

@TECHREPORT{csdl2-01-07,
   AUTHOR = {Michael J. Staver},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-01-07},
   TITLE = {Lightweight Disaster Management Training and Control},
   KEYWORDS = {TsunamiSim, Thesis-Proposals},
   Type = {{M.S.} Thesis Proposal},
   MONTH = {July},
   YEAR = 2001,
   URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-07/01-07.pdf},
   abstract = {
Disaster management is increasingly a global enterprise for international
organizations,  governmental institutions, and arguably individuals.  The
tempo at which information is  collected and disseminated during natural
and man-made disasters paces the rate and  effectiveness of relief
efforts.  As the Internet becomes a ubiquitous platform for sharing
information, a browser-based application can provide disaster managers a
lightweight  solution for training and control.  A heavyweight solution
might include dedicated  communications, real-time command and control
software and hardware configurations,  and dedicated personnel.  In
contrast, a lightweight solution requires trained personnel  with Internet
access to a server via computers or hand-held devices.  Tsunami Sim
provides asynchronous situational awareness with an interactive, Geographic
Information  System (GIS).  Tsunami Sim is not capable of providing
real-time situational awareness  nor intended to replace or compete with
heavyweight solutions developed for that  purpose.  Rather, Tsunami Sim
will enhance the disaster managers' abilities to train for  and control
disasters in regions where heavyweight solutions are impractical.  For
distributed training, Tsunami Sim will provide deterministic and stochastic
scenarios of  historical and fictional disasters.  Tsunami Sim will be an
open-source, Java application  implemented for maintainability and
extensibility.  United States Pacific Command  (PACOM) located at Camp
Smith, Hawai'i, will enable Tsunami Sim validation and  assessment.
 }
}



@TECHREPORT{csdl2-01-08,
   AUTHOR = {Weifeng Miao},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-01-08},
   TITLE = {J2EEval: A Method for Performance Analysis of Enterprise JavaBean Applications},
   KEYWORDS = {Inca, Thesis-Proposals},
   Type = {{M.S.} Thesis Proposal},
   MONTH = {July},
   YEAR = 2001,
   URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-08/01-08.pdf},
   abstract = {
J2EEval is a method for performance analysis of Enterprise JavaBean (EJB)
applications.  This proposal overviews the method and its application in
the context of a case study of the Inca Course approval system.
 }
}

@TECHREPORT{csdl2-01-09,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-01-09},
   TITLE = {Inca Software Requirements Specification},
   KEYWORDS = {Inca},
   MONTH = {April},
   YEAR = 2001,
   URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-09/01-09.html},
   abstract = {
Inca is a system designed to improve the
efficiency and effectiveness of course approval request processing.
This software requirements specification details: (a)  the traditional
manual process
used by the ICS department for course approval request processing,
(b) the 12 basic requirements Inca must satisfy, the fine-grained rules for
prioritization of requests, (c) several usage scenarios, (d) n-tier architectural
issues for an Enterprise JavaBeans implementation, and (e) miscellaneous
requirements including authentication, data file formats, special topics,
and so forth.
 }
}

@TECHREPORT{csdl2-01-10,
   AUTHOR = {Joy M. Agustin and William M. Albritton},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-01-10},
   TITLE = {Vendor Relationship Management: Re-engineering the business
process through {B2B} infrastructure to accelerate the growth of small
businesses in geographically isolated areas},
   KEYWORDS = {VRM},
   MONTH = {December},
   YEAR = 2001,
   URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-10/01-10.pdf},
   abstract = {
Instead of limiting the business to the local populace, the World Wide Web
gives global access to all companies that have made the transition to
online.  Ideally, the Internet seems to offer vast, untapped markets,
lowers the costs of reaching these markets, and frees businesses from
geographical constraints. Applying this to Hawaii, small companies can now
sell their products in the expanding global marketplace, instead of
restricting themselves to an island economy.

The goal of research on the Vendor Relationship Management (VRM) System
is to explore the requirements for new business process models and
associated technological infrastructure for small local businesses in
Hawaii that wish to exploit the global reach of the Internet.  In order to
understand the requirements and potential of this approach, we had meetings
with different groups of people that included the host of a virtual mall, a
financial service provider, two courier services, and several local
companies.

The interface of the VRM system includes both a vendor and a host
 side. The host side is used by the virtual mall company to send customers
 orders to the various vendors. It can also be used to create and edit
 vendor company information, create and edit vendor product information,
 and enter a contact email address. The vendor side is used by the numerous
 vendors to receive the orders, confirm that the orders have been sent,
 view the customer information, create and edit product information, and
 create and edit contact information.

After creating the first prototype, several experts gave their critiques
of the system. Based on their critiques, we came up with several possible
directions for future research.
 }
}

@TECHREPORT{csdl2-01-11,
   AUTHOR = {Jitender Miglani},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-01-11},
   TITLE = {The design, implementation, and evaluation of {INCA}: an
automated system for approval code allocation},
   KEYWORDS = {Inca, Thesis-MS},
  Type = {{M.S.} Thesis},
   MONTH = {May},
   YEAR = 2002,
   URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-11/01-11.pdf},
   abstract = {
   The ICS department of the University of Hawaii has faced problems
surrounding approval code distribution as its enrollment has increased. The
manual system for approval code allocation was time-consuming, ineffective
and inefficient. INCA is designed to automate the task of approval code
allocation, improve the quality of course approval decisions, and decrease
the administrative overhead involved in those decisions.

Based upon informal feedback from department administrators, it appears
that INCA reduces their overhead and makes their life easier. What are the
old problems that are solved by INCA? Does INCA introduce new kinds of
problems for the administrator? What about the students? Are they
completely satisfied with the system? In what ways does the system benefit
the department as a whole?

This thesis discusses the design, implementation and evaluation of INCA. It
evaluates INCA from the viewpoint of the administrator, the students, and
the department. An analysis of emails
indicates that INCA reduces administrative overhead. The results of the
user survey show that three quarters of students believe INCA improved
their course approval predictability and course requirements
understandability. They prefer INCA to old method of requesting approval
codes by email. INCA database analysis provided course demand information
and student statistics useful for departments. This evaluation of INCA from
three different perspectives provides useful insights for future
improvement of INCA and for improving the student experience with academic
systems in general.
 }
}



@InProceedings{csdl2-01-12,
  author = \t {Philip M. Johnson},
  title = \t {You can't even ask them to push a button:  Toward
ubiquitous, developer-centric, empirical software engineering},
  booktitle = \t {The {NSF} Workshop for New Visions for Software
Design and Productivity: Research and Applications},
  year =\t {2001},
  URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-12/01-12.pdf},
 KEYWORDS = {Hackystat, Publications-Workshops},
  address =\t {Nashville, TN},
  month =\t {December},
  abstract = {
Collection and analysis of empirical software project data is central to
modern techniques for improving software quality, programmer productivity,
and the economics of software project development. Unfortunately, barriers
surrounding the cost, quality, and utility of empirical project data
hamper effective collection and application in many software
development organizations.

This paper describes Hackystat, an approach to enabling ubiquitous
collection and analysis of empirical software project data. The approach
rests on three design criteria: data collection and analysis must be
developer-centric rather than management-centric; it must be in-process
rather than between-process, and it must be non-disruptive---it must not
require developers to interrupt their activities to collect and/or analyze
data.  Hackystat is being implemented via an open source, sensor and web
service based architecture.  After a developer instruments their commercial
development environment tools (such as their compiler, editor, version
control system, and so forth) with Hackystat sensors, data is silently and
unobtrusively collected and sent to a centralized web service.  The web
service runs analysis mechanisms over the data and sends email
notifications back to a developer when \`\`interesting'' changes in their
process or product occur.

Our research so far has yielded an initial operational release in daily use
with a small set of sensors and analysis mechanisms, and a research agenda
for expansion in the tools, the sensor data types, and the analyses. Our
research has also identified several critical technical and social
barriers, including: the fidelity of the sensors; the coverage of the
sensors; the APIs exposed by commercial tools for instrumentation; and the
security and privacy considerations required to avoid adoption problems due
to the spectre of \`\`Big Brother''.

}
}





@TechReport{csdl2-01-13,
  author = \t {Philip M. Johnson},
  title = \t {Project Hackystat: Accelerating adoption of empirically guided software development through
  non-disruptive, developer-centric, in-process data collection and analysis},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  year = \t {2001},
  month =\t {November},
  KEYWORDS = {Hackystat},
  URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-13/01-13.pdf},
  abstract = {
Collection and analysis of empirical software project data is central to
modern techniques for improving software quality, programmer productivity,
and the economics of software project development.  Unfortunately,
effective collection and analysis of software project data is rare in
mainstream software development. Prior research suggests that three primary
barriers are: (1) cost: gathering empirical software engineering
project data is frequently expensive in resources and time; (2)
  quality: it is often difficult to validate the accuracy of the data; and
(3) utility: many metrics programs succeed in collecting data but
fail to make that data useful to developers.

This report describes Hackystat, a technology initiative and research
project that explores the strengths and weaknesses of a
  developer-centric, in-process, and non-disruptive approach
to validation of empirical software project data collection and analysis.
}
}

@TECHREPORT{csdl2-01-14,
   AUTHOR = {Timothy Burgess},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-01-14},
   TITLE = {An artificial neural network for recognition of simulated dolphin whistles},
   KEYWORDS = {Thesis-MS},
  Type = {{M.S.} Thesis},
   MONTH = {May},
   YEAR = 2001,
   URL = {http://csdl.ics.hawaii.edu/techreports/2001/01-14/01-14.pdf},
   abstract = {
It is known that dolphins are capable of understanding 200 "word"
vocabularies with sentence complexity of three or more "words", where
words consist of audio tones or hand gestures. An automated recognition
method of words where a word is a defined whistle, within a
predetermined acceptable degree of variance, could allow words to  be
both easily reproducible by dolphins and identifiable by humans. We
investigate a neural network to attempt to distinguish four
artificially  generated whistles from themselves and from common
underwater  environmental noises, where a whistle consists of four
variations of a  fundamental whistle style. We play these whistle
variations into the  dolphins normal tank environment and then record
from a separate  tank hydrophone. This results in slight differences for
each whistle  variation's spectrogram, the complete collection of which
we use to  form the neural network training set. For a single whistle
variation, the  neural network demonstrates strong output node values,
greater than  0.9 on a scale of 0 to 1. However, for combinations of
"words", the network exhibits poor training
performance and an  inability to distinguish between words. To validate
this, we used a test set of 41 examples, of which only 22 were
correctly classified. This  result suggests that an appropriately
trained backpropagation neural  network using spectrographic analysis as
inputs is a viable means for a  very specific whistle recognition,
however a large degree of whistle  variation will dramatically lower the
performance of the network, past  that required for acceptable
recognition.
 }

}



@TECHREPORT{csdl2-02-01,
   AUTHOR = {Bill Giebink},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-02-01},
   TITLE = {Bringing the Faulkes Telescope to Classrooms in Hawaii},
   KEYWORDS = {Thesis-Proposals},
   Type = {{M.S.} Thesis Proposal},
   MONTH = {March},
   YEAR = 2002,
   URL = {http://koa.ifa.hawaii.edu/~giebink/thesis/proposal.htm},
   abstract = {
The Faulkes Telescope (FT), currently under construction on the summit of
Haleakala, Maui, Hawaii, will provide data from celestial observations to
schools in the United Kingdom and Hawaii. This project, with its unique
goal of building a telescope to be used exclusively for educational
purposes, is a joint venture between groups in the United Kingdom and
Hawaii. Teachers and students will be able to download data that has been
collected by the telescope on a previous occasion or sign up to have the
telescope collect data at a specific time for them. Current plans call for
data from the telescope to be delivered to classrooms in the form of raw
data files and images from processed raw data files. In addition to sharing
use of the telescope, part of the agreement between the UK and Hawaii
groups provides for the UK group to share all software developed for the
project with the Hawaii group. However, though a system for transporting
images to schools is being developed for the UK side, at present there is
no corresponding system for Hawaii. Also, at this point neither the British
nor Hawaii sides have a definite system for storing and transporting raw
data files.

A first step, therefore, toward making the FT useful
for students and teachers in Hawaii is to develop a plan for a complete
system to archive and transport telescope data. It is anticipated that a
plan for this system will include: 1) a specification of the required
hardware components, 2) a description of how data will move in and out of
the system, 3) a definition of the data pathway within the system, and 4) a
description of the data storage requirements (i.e. database). The
development of each of the components of the system will consist of a
discussion of available options followed by a suggestion of the best choice
of action. Development of this system is anticipated to be the topic for a
directed reading/research project to be undertaken during spring,
2002. After the system has been clearly defined there are some additional
questions to be answered. Among the more interesting aspects is the
question of how to present data from the telescope in the most useful and
effective manner to teachers and students.
 }
}


@TechReport{csdl2-02-02,
  keywords = {Thesis-MS},
  author = \t {Weifeng Miao},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {{J2EEVAL}: A method for performance analysis of Enterprise JavaBean applications},
  Type = {{M.S.} Thesis},
  year = \t {2002},
  number =\t {{{CSDL}-02-02}},
  month =\t "August",
  abstract =     {
J2EEval is a method for performance analysis of Enterprise JavaBean (EJB)
applications.  This thesis overviews the method and its application in
the context of a case study of the Inca Course approval system.
}
}

@TechReport{csdl2-02-03,
  keywords = {Hackystat},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Improving the dependability and predictability of JPL/MDS software
through low-overhead validation of software process and
product metrics},
  year = \t {2002},
  number =\t {{{CSDL}-02-03}},
  month =\t "May",
  url =          {http://csdl.ics.hawaii.edu/techreports/2002/02-03/},
  abstract =     {This white paper presents information regarding a proposed collaboration between
the Collaborative Software Development Laboratory, the Mission Data Systems group at Jet Propulsion Laboratory, and the Center for Software Engineering at University of Southern California. The proposed
collaboration would be funded through grants from the NSF/NASA Highly Dependable Computing and Communication Systems Research (HDCCSR) program.
}
}




@TechReport{csdl2-02-04,
  keywords = {VRM},
  author = \t {Joy M. Agustin and William M. Albritton and Nolan Y. Kiddo},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Virtual Mall Management Software},
  year = \t {2002},
  number =\t {{{CSDL}-02-04}},
  url =          {http://csdl.ics.hawaii.edu/techreports/2002/02-04/02-04.pdf},
  month =\t "May",
  abstract =     {Presents a business plan for commercialization of the Vendor Relationship Management (VRM) system.}
}


@TechReport{csdl2-02-05,
  keywords = {Hackystat},
  author = \t {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Supporting development of highly dependable software through
  continous, automated, in-process, and individualized software measurement validation},
  year = \t {2002},
  url =          {http://csdl.ics.hawaii.edu/techreports/2002/02-05/02-05.pdf},
  number =\t {{{CSDL}-02-05}},
  month =\t "July",
  abstract =     {Highly dependable software is, by nature, predictable.  For example, one
can predict with confidence the circumstances under which the software will
work and the circumstances under which it will fail.  Empirically-based
approaches to creating predictable software are based on two assumptions:
(1) historical data can be used to develop and calibrate models that
generate empirical predictions, and (2) there exists relationships between
internal attributes of the software (i.e.  immediately measurable
process and product attributes such as size, effort, defects, complexity,
and so forth) and external attributes of the software (i.e. abstract
and/or non-immediately measurable attributes, such as \`quality', the time
and circumstances of a specific component's failure in the field, and so
forth).  Software measurement validation is the process of
determining a predictive relationship between available internal attributes
and correspondingly useful external attributes and the conditions under
which this relationship holds.
<p>
This report proposes research whose general objective is to design, implement, and
validate software measures within a development infrastructure that
supports the development of highly dependable software systems. The
measures and infrastructure are designed to support dependable software
development in two ways: (1) They will support identification of modules at
risk for being fault-prone, enabling more efficient and effective
allocation of quality assurance resources, and (2) They will support
incremental software development through continuous monitoring,
notifications, and analyses.  Empirical assessment of these methods and
measures during use on the Mission Data System project at Jet Propulsion
Laboratory will advance the theory and practice of dependable computing and
software measurement validation and provide new insight into the
technological and methodological problems associated with the current state
of the art.
}
}


@InProceedings{csdl2-02-07,
  url =          {http://csdl.ics.hawaii.edu/techreports/2002/02-07/02-07.pdf},
  keywords = {PSP, Leap, Hackystat, Publications-Conferences},
  author = \t {Philip M. Johnson and Hongbing Kou and Joy M. Agustin and Christopher Chan and Carleton A. Moore and Jitender Miglani and Shenyan Zhen and William E. Doane},
  title = \t {Beyond the Personal Software Process: Metrics collection and analysis for the differently disciplined},
  booktitle =\t {Proceedings of the 2003 International Conference on Software Engineering},
  year =\t {2003},
  address = \t {Portland, Oregon},
  month = \t {May},
  abstract = {
  Pedagogies such as the Personal Software Process (PSP)
  shift metrics definition, collection, and analysis from
  the organizational level to the individual level.  While
  case study research indicates that the PSP can provide
  software engineering students with empirical support for
  improving estimation and quality assurance, there is
  little evidence that many students continue to use the PSP
  when no longer required to do so.  Our research suggests
  that this \`\`PSP adoption problem'' may be due to two
  problems: the high overhead of PSP-style metrics
  collection and analysis, and the requirement that PSP
  users \`\`context switch'' between product development and
  process recording.  This paper overviews our initial PSP
  experiences, our first attempt to solve the PSP adoption
  problem with the LEAP system, and our current approach
  called Hackystat.  This approach fully automates both data
  collection and analysis, which eliminates overhead and
  context switching. However, Hackystat changes the kind of
  metrics data that is collected, and introduces new
  privacy-related adoption issues of its own.
}
}

@TechReport{csdl2-02-08,
  keywords = {JBlanket},
  author = \t {Joy M. Agustin},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {JBlanket: Support for Extreme Coverage in Java Unit Testing},
  year = \t {2002},
  number =\t {CSDL-02-08},
  url =          {http://csdl.ics.hawaii.edu/techreports/2002/02-08/02-08.pdf},
  month =\t "December",
  abstract =     {Unit testing is a tool commonly used to ensure reliability in software
development and can be applied to the software development process as soon
as core functionality of a program is implemented. In conventional unit
testing, to properly design unit tests programmers will need to have access
to specifications and source code. However, this is not possible in Extreme
Programming (XP), where tests are created before any feature of a system is
ever implemented. Obviously, XP's approach does not lead to improper
testing, but instead leads to a different approach for testing.  JBlanket
is a tool developed in the Collaborative Software Development Laboratory
(CSDL) at the University of Hawai'i (UH) that is meant to assist these
types of "unconventional" testing that calculates method-level coverage in
Java programs, a coarse enough granularity of test case coverage whereby
programmers will not only be able to ensure that all of their unit tests
pass, but will also be able to test all of their currently implemented
methods. Unit testing where 100 percent of all unit tests must pass that also
exercises 100 percent of all non-trivial remaining implemented methods is called
Extreme Coverage. This research will attempt to show that Extreme Coverage
is useful in developing quality software.
}
}

@TechReport{csdl2-02-09,
  keywords = {Hackystat},
  author = \t {Hongbing Kou and Xiangli Xu},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Most active file measurement in {H}ackystat},
  year = \t {2002},
  number =\t {CSDL-02-09},
  url =          {http://csdl.ics.hawaii.edu/techreports/2002/02-09/02-09.pdf},
  month =\t "December",
  abstract =
{Hackystat, an automated metric collection and analysis tool, adopts the
"Most Active File" measurement in five-minute time chunks to represent the
developers' effort. This measurement is validated internally in this
report. The results show that big time chunk sizes are highly linear
regressive with the standard time chunk size (1 minute). The percentage of
missed effort to total effort is very low with five minutes chunk size. And
the relative ranking with respect to the effort of the active files is only
slightly changed.
}
}

@TechReport{csdl2-02-10,
  keywords = {Hackystat},
  author = \t {Christoph Aschwanden and Aaron Kagawa},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Comparing personal project metrics to support process and product improvement},
  year = \t {2002},
  number =\t {CSDL-02-10},
  url =          {http://csdl.ics.hawaii.edu/techreports/2002/02-10/02-10.pdf},
  month =\t "December",
  abstract =     {
Writing high quality software with a minimum of effort is an important
thing to learn. Various personal metric collection processes exist, such as
PSP and Hackystat. However, using the personal metric collection processes
gives only a partial indication of how a programmer stands amongst his
peers.  Personal metrics vary greatly amongst programmers and it is not
always clear what is the "correct" way to develop software.  This paper
compares personal programming characteristics of students in a class
environment. Metrics, such as CK Metrics, have been analyzed and compared
against a set of similar students in an attempt to find the correct or
accepted value for these metrics.  It is our belief that programmers can
gain much, if not, more information from comparing their personal metrics
against other programmers. Preliminary results show that people with more
experience in programming produce different metrics than those with less.
}
}


@TechReport{csdl2-02-11,
  keywords = {Hackystat},
  author = \t {Cliff Tomosada and Burt Leung},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  title = \t {Configuration Management and {H}ackystat: Initial steps to relating
organizational and individual development},
  year = \t {2002},
  number =\t {CSDL-02-11},
  url =          {http://csdl.ics.hawaii.edu/techreports/2002/02-11/02-11.pdf},
  month =\t "December",
  abstract =     {
Hackystat is a software development metrics collection tool that focuses on
individual developers.  Hackystat is able to provide a developer with a
personal analysis of his or her unique processes.  Source code
configuration management (SCM) systems, on the other hand, are a means of
storage for source code in a development community and serve as controller
for what each individual may contribute to the community.  We created a
Hackystat sensor for CVS (an SCM system) in the hopes of bridging the gap
between these two very different, yet related software applications.  It
was our hope to use the data we collected to address the issue of
development conflicts that often arise in organizational development
environments.  We found, however, that neither application, Hackystat or
CVS, could be easily reconfigured to our needs.
}
}


@TECHREPORT{csdl2-02-06,
   AUTHOR = {Joy M. Agustin},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-02-06},
   TITLE = {Improving software quality through extreme coverage with {JB}lanket},
   KEYWORDS = {Thesis-MS, JBlanket},
  Type = {{M.S.} Thesis},
   MONTH = {May},
   YEAR = 2003,
   URL = {http://csdl.ics.hawaii.edu/techreports/2002/02-06/02-06.pdf},
   abstract = {
Unit testing is an important part of software testing that aids in the
discovery of bugs sooner in the software development process.  Extreme
Programming (XP), and its Test First Design technique, relies so heavily upon
unit tests that the first code implemented is made up entirely of
test cases.  Furthermore, XP considers a feature to be completely coded
only when all of its test cases pass.  However, passing all test cases does
not necessarily mean the test cases are good.
<p>
Extreme Coverage (XC) is a new approach that helps to assess and improve the
quality of software by enhancing unit testing.  It extends the XP requirement
that all test cases must pass with the requirement that all defect-prone
testable methods must be invoked by the tests.  Furthermore, a set of flexible
rules are applied to XC to make it as attractive and light-weight as unit
testing is in XP.  One example rule is to exclude all methods containing one
line of code from analysis.  I designed and implemented a new tool, called
JBlanket, that automates the XC measurement process similar to the way that
JUnit automates unit testing.  JBlanket produces HTML reports similar to JUnit
reports which inform the user about which methods need to be tested next.
<p>
In this research, I explore the feasibility of JBlanket, the amount of effort
needed to reach and maintain XC, and the impact that knowledge of XC has on
system implementation through deployment and evaluation in an academic
environment.  Results show that most students find JBlanket to be a useful tool
in developing their test cases, and that knowledge of XC did influence the
manner in which students implemented their systems. However,  more studies are
needed to conclude precisely how much effort is needed to reach and maintain
XC.
<p>
This research lays the foundation for future research directions.  One
direction involves increasing its flexibility and value by expanding and
refining the rules of XC.  Another direction involves tracking XC behavior to
find out when it is and is not applicable.
}
}


@InProceedings{csdl2-03-01,
  url =          {http://csdl.ics.hawaii.edu/techreports/2003/03-01/03-01.pdf},
  keywords = {Hackystat, JBlanket, Publications-Conferences},
  author = \t {Philip M. Johnson and Joy M. Agustin},
  title = \t {Keeping the coverage green: Investigating the cost and quality of testing in agile development},
  booktitle =\t {Submitted to the 2004 Conference on Software Metrics},
  year =\t {2004},
  address = \t {Chicago, Illinois},
  month = \t {August},
  abstract = {
  An essential component of agile methods such as Extreme Programming is a
  suite of test cases that is incrementally built and maintained throughout
  development.  This paper presents research exploring two questions
  regarding testing in these agile contexts. First, is there a way to
  validate the quality of test case suites in a manner compatible with
  agile development methods?  Second, is there a way to assess and monitor
  the costs of agile test case development and maintenance?  In this paper,
  we present the results of our recent research on these issues. Our
  results include a measure called XC (for Extreme Coverage) which is
  implemented in a system called JBlanket. XC is designed to support
  validation of the test-driven design methodology used in agile
  development. We describe how XC and JBlanket differ from other coverage
  measures and tools, assess their feasibility through a case study in a
  classroom setting, assess its external validity on a set of open source
  systems, and illustrate how to incorporate XC into a more global measure
  of testing cost and quality called Unit Test Dynamics (UTD). We conclude
  with suggested research directions building upon these findings to
  improve agile methods and tools.
}
}

@TECHREPORT{csdl2-03-03,
   AUTHOR = {Aaron Kagawa},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-03-03},
   TITLE = {The design, implementation, and evaluation of {CLEW}: An improved Collegiate Department Website},
   KEYWORDS = {Thesis-BS, Clew},
  Type = {{B.S.} Thesis},
   MONTH = {May},
   YEAR = 2003,
   URL = {http://csdl.ics.hawaii.edu/techreports/2003/03-03/03-03.pdf},
   abstract = {
The purpose of a collegiate department website is to provide prospective
students, current students, faculty, staff, and other academic and industry
professionals with information concerning the department.  The information
presented on the website should give the user an accurate model of the
department, even as it changes overtime.  Some of these changes include:
adding new faculty members, new students, new courses, etc.  The more
accurately the website models the department, the more aware the website's
users will be of the department.

Traditional collegiate department websites have two primary problems in
creating an accurate model of their department.  First, only a few people,
usually the department webmasters, can add information to the website.
Second, it is difficult to enable website users to be informed of changes
to the website that might be of interest to them.  These two problems
decrease the accuracy of the model and hamper its effectiveness in alerting
users of changes to the website.  As a result, user awareness of the
department is also decreased.

The Collaborative Educational Website (CLEW) is a Java web application
intended to support accurate modeling of a collegiate department.  CLEW is
designed to solve the traditional collegiate department website's two main
problems.  First, it provides interactive services which will allow users
to add various kinds of information to the website.  Secondly, CLEW
addresses the notification problem by providing tailored email
notifications of changes to the website.

CLEW was developed by a Software Engineering class in the Information and
Computer Science Department at the University of Hawaii at Manoa.
My role in this development as project leader is to design and
implement the framework for the system.  CLEW currently contains
approximately 28,000 lines of Java code and it contains upwards of
500 web pages.  In the Spring 2003 semester, CLEW replaced the
existing Information and Computer Science Department website.  I
evaluated CLEW to measure its effectiveness as a model of the
department using a pre and post release questionnaire.  I also
evaluated usage data of the CLEW System to assess the functionality
provided by CLEW.

If CLEW provides a more accurate model of a collegiate department,
then the next step is to provide the CLEW framework to other
collegiate departments worldwide.  It is my hope that the users' of
CLEW will get a clue about their department!
}
}

@TECHREPORT{csdl2-03-06,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-03-06},
   TITLE = {Hackystat Metric Collection and Analysis for the {MDS} Harvest {CM} System: A Design Specification},
   KEYWORDS = {Hackystat},
   MONTH = {August},
   YEAR = 2003,
   URL = {http://csdl.ics.hawaii.edu/techreports/2003/03-06/03-06.html},
   abstract = {
This proposal describes the requirements and top-level design for a Hackystat-based system that automatically monitors and analyzes the MDS development process using data collected from the Harvest CM system.
}
}



@TECHREPORT{csdl2-03-07,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-03-07},
   TITLE = {The {H}ackystat-{JPL} Configuration: Overview and Initial Results},
   KEYWORDS = {Hackystat},
   MONTH = {October},
   YEAR = 2003,
   URL = {http://csdl.ics.hawaii.edu/techreports/2003/03-07/03-07.html},
   abstract = {
This report presents selected initial results from Hackystat-based
descriptive analyses
of Harvest workflow data gathered from the Mission Data System software
development project from January, 2003 to August, 2003.  We present the
motivation for this work, the methods used, examples of the analyses, and
questions raised by the results. Our major findings include: (a) workflow
transitions not documented in the "official" process; (b) significant
numbers of packages with unexpected transition
sequences; (c) cyclical levels of development "intensity" as
represented by levels of promotion/demotion; (d) a possible approach to
calculating the proportion of "new" scheduled work versus rework/unscheduled work
along with baseline values; and
(e) a possible approach to calculating the distribution of package "ages" and days spent in the
various workflow states, along with potential issues with the representation of
"package age" based upon the current approach to package
promotion.

The report illustrates how our current approach to analysis can yield
descriptive perspectives on the MDS development process. It provides a first
step toward more prescriptive, analytic models of the MDS software development
process by providing insights into the potential uses and limitations of MDS
product and process data.
}
}

@TECHREPORT{csdl2-03-09,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-03-09},
   TITLE = {The Review Game: Teaching Asynchronous Distributed Software Review Using Eclipse},
   KEYWORDS = {Hackystat},
   MONTH = {November},
   YEAR = 2003,
   URL = {http://csdl.ics.hawaii.edu/techreports/2003/03-09/03-09.html},
   abstract = {
Presents an approach to teaching software review involving an Eclipse plug-in called Jupiter and automated metrics collection and analysis using Hackystat.
}
}


@TECHREPORT{csdl2-03-11,
   AUTHOR = {Takuya Yamashita},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-03-11},
   TITLE = {Jupiter Users Guide},
   KEYWORDS = {Jupiter},
   MONTH = {December},
   YEAR = 2003,
   URL = {http://csdl.ics.hawaii.edu/techreports/2003/03-11/03-11.html},
   abstract = {
Provides a users guide for the Jupiter code review plug-in for Eclipse.
}
}

@InProceedings{csdl2-03-12,
  url =          {http://csdl.ics.hawaii.edu/techreports/2003/03-12/03-12.pdf},
  keywords = {Hackystat, Publications-Conferences},
  author = \t {Philip M. Johnson and Hongbing Kou and Joy M. Agustin and Qin Zhang and Aaron Kagawa and Takuya Yamashita},
  title = \t {Practical automated process and product metric collection and analysis in a
classroom setting: Lessons learned from {Hackystat-UH}},
  booktitle =\t {Proceedings of the 2004 International Symposium on Empirical Software Engineering},
  year =\t {2004},
  address = \t {Los Angeles, California},
  month = \t {August},
  abstract = {
  Measurement definition, collection, and analysis is an essential
  component of high quality software engineering practice, and is thus an
  essential component of the software engineering curriculum.  However,
  providing students with practical experience with measurement in a
  classroom setting can be so time-consuming and intrusive that it's
  counter-productive---teaching students that software measurement is
  \`\`impractical'' for many software development contexts.  In this
  research, we designed and evaluated a very low-overhead approach to
  measurement collection and analysis using the Hackystat system with
  special features for classroom use. We deployed this system in two
  software engineering classes at the University of Hawaii during Fall,
  2003, and collected quantitative and qualitative data to evaluate the
  effectiveness of the approach.  Results indicate that the approach
  represents substantial progress toward practical, automated metrics
  collection and analysis, though issues relating to the complexity of
  installation and privacy of user data remain.
}
}



@TECHREPORT{csdl2-03-13,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-03-13},
   TITLE = {Results from the 2003 Classroom Evaluation of {H}ackystat-{UH}},
   KEYWORDS = {Hackystat},
   MONTH = {December},
   YEAR = 2003,
   URL = {http://csdl.ics.hawaii.edu/techreports/2003/03-13/03-13.html},
   abstract = {
This report presents the results from a qualitative evaluation of ICS 413
and ICS 613 students at the end of Fall, 2003.  The students had used
Hackystat-UH for approximately six weeks at the time of the evaluation.  The survey requests their
feedback regarding the installation, configuration, overhead of use,
usability, utility, and future use of the Hackystat-UH
configuration. Results provide evidence that: (1) Significant problems
occur during installation and configuration of the system; (2) the
Hackystat-UH configuration incurs very low overhead after completing
installation and configuration; (3) Analyses were generally found to be
somewhat useful and usable; and (4) feasibility in a professional
development context requires addressing privacy and platform issues.
}
}

@TECHREPORT{csdl2-04-02,
   AUTHOR = {Aaron Kagawa and Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-03-07},
   TITLE = {The {H}ackystat-{JPL} Configuration: Round 2 Results},
   KEYWORDS = {Hackystat},
   MONTH = {May},
   YEAR = 2004,
   URL = {http://csdl.ics.hawaii.edu/techreports/2004/04-02/04-02.html},
   abstract = {
This report presents selected round two results from Hackystat-based
descriptive analyses of Harvest workflow data gathered from the Mission
Data System software development project from January, 2003 to December,
2003. The information provided in this report describes improvements and
differences made since the time of writing of the previous techreport (The Hackystat-JPL
Configuration: Overview and Initial Results.
}
}

@InProceedings{csdl2-04-03,
  url =          {http://csdl.ics.hawaii.edu/techreports/2004/04-03/04-03.pdf},
  keywords = {HPC, Publications-Workshops},
  author = \t {Stuart Faulk and John Gustafson and Philip M. Johnson and Adam A. Porter and Walter Tichy and Larry Votta},
  title = \t {Toward Accurate {HPC} Productivity Measurement},
  booktitle =\t {Proceedings of the First International Workshop on Software Engineering
for High Performance Computing System Applications},
  year =\t {2004},
  address = \t {Edinburgh, Scotland },
  month = \t {May},
  abstract = {
One key to improving high-performance computing
(HPC) productivity is finding better ways to measure it.
We define productivity in terms of mission goals, i.e.,
greater productivity means that more science is
accomplished with less cost and effort. Traditional
software productivity metrics and computing benchmarks
have proven inadequate for assessing or predicting such
end-to-end productivity. In this paper we describe a new
approach to measuring productivity in HPC applications
that addresses both development time and execution time.
Our goal is to develop a public repository of effective
productivity benchmarks that anyone in the HPC
community can apply to assess or predict productivity.
}
}

@Article{csdl2-04-04,
  author = \t {Stuart Faulk and Philip M. Johnson and John Gustafson
                  and Adam A. Porter and Walter Tichy and Larry Votta},
  title = \t {Measuring {HPC} Productivity},
  keywords = {HPC, Publications-Journals},
  journal = \t {International Journal of High Performance Computing Applications},
  month = {December},
  year = \t {2004},
  url = {http://csdl.ics.hawaii.edu/techreports/2004/04-04/04-04.pdf},
  abstract = {
One key to improving high-performance computing (HPC) productivity is
finding better ways to measure it. We define productivity in terms of
mission goals, i.e., greater productivity means that more science is
accomplished with less cost and effort. Traditional software productivity
metrics and computing benchmarks have proven inadequate for assessing or
predicting such end-to-end productivity. In this paper we introduce a new
approach to measuring productivity in HPC applications that addresses both
development time and execution time. Our goal is to develop a public
repository of effective productivity benchmarks that anyone in the HPC
community can apply to assess or predict productivity.
}
}



@TECHREPORT{csdl2-04-05,
  title = \t {Proceedings of the First Hackystat Developer Boot Camp},
  keywords =   {Hackystat},
  year = \t {2004},
  author = \t {Philip M. Johnson},
  institution = {University of Hawaii},
  url = {http://csdl.ics.hawaii.edu/techreports/2004/04-05/04-05.pdf},
  month = \t {May},
  summary  = {
This proceedings contains the slides to a series of seventeen talks on the architecture,
design, applications, and research directions of Hackystat presented
during the week of May 10-14, 2004.   It also
includes a "Hackystat Hacker Certification Exam", which describes 18 exercises designed
to provide an incremental introduction to Hackystat internals.}
}

@TECHREPORT{csdl2-04-06,
   AUTHOR = {Aaron Kagawa},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-04-06},
   TITLE = {{Hackystat MDS supporting MSL MMR}},
   KEYWORDS = {Hackystat},
   MONTH = {June},
   YEAR = 2004,
   URL = {http://csdl.ics.hawaii.edu/techreports/2004/04-06/04-06.html},
   abstract = {
This report presents selected results from Hackystat Analyses on
Mission Data System's Release 9. The goal is to identify reports of use
to the Monthly Management Report for Mars Science Laboratory.
}
}

@TECHREPORT{csdl2-04-07,
   AUTHOR = {Aaron Kagawa},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-04-07},
   TITLE = {Hackystat MDS supporting MSL MMR: Round 2 Results},
   KEYWORDS = {Hackystat},
   MONTH = {July},
   YEAR = 2004,
   URL = {http://csdl.ics.hawaii.edu/techreports/2004/04-07/04-07.html},
   abstract = {
This report presents selected additional results from Hackystat Analyses on
Mission Data System's Release 9. The goal is to identify reports of use
to the Monthly Management Report for Mars Science Laboratory.
}
}

@TECHREPORT{csdl2-04-09,
   AUTHOR = {Aaron Kagawa},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-04-09},
   TITLE = {Hackystat-SQI: Modeling different development processes},
   KEYWORDS = {Hackystat},
   MONTH = {July},
   YEAR = 2004,
   URL = {http://csdl.ics.hawaii.edu/techreports/2004/04-09/04-09.html},
   abstract = {
This report presents the design of a Hackystat module called SQI, whose purpose
is to support quality analysis for multiple projects at Jet Propulsion Laboratory.
}
}

@TECHREPORT{csdl2-04-10,
   AUTHOR = {Aaron Kagawa},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-04-10},
   TITLE = {Hackystat-SQI: First Progress Report},
   KEYWORDS = {Hackystat},
   MONTH = {July},
   YEAR = 2004,
   URL = {http://csdl.ics.hawaii.edu/techreports/2004/04-09/04-09.html},
   abstract = {
This report presents the initial analysis that are available for Hackystat-SQI and future directions.
}
}


@Article{csdl2-04-11,
  author = \t {Philip M. Johnson and Hongbing Kou and Michael G. Paulding and Qin Zhang and Aaron Kagawa and Takuya Yamashita},
  title = \t {Improving Software Development Management through Software Project Telemetry},
  journal = \t {{IEEE} Software},
  year = \t {2005},
  keywords =   {Hackystat, Publications-Journals},
  month = \t {August},
  url = {http://csdl.ics.hawaii.edu/techreports/2004/04-11/04-11.pdf},
  abstract = {
Software project telemetry is a new approach to software project
management in which sensors are attached to development environment tools
to unobtrusively monitor the process and products of development. This
sensor data is abstracted into high-level perspectives on development
trends called Telemetry Reports, which provide project members with
insights useful for local, in-process decision making.  This paper presents
the essential characteristics of software project telemetry, contrasts it
to other approaches such as predictive models based upon historical
software project data, describes a reference framework implementation of
software project telemetry called Hackystat, and presents our lessons
learned so far.
}
}



@TechReport{csdl2-04-13,
  author = \t {Michael G. Paulding},
  title = \t {Measuring the Processes and Products of {HPCS} Development: Initial Results
for the Optimal Truss Purpose-Based Benchmark},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-04-13},
  year = \t {2004},
  keywords = {Hackystat, HPC},
  month = \t {September},
  URL = {http://csdl.ics.hawaii.edu/techreports/2004/04-13/04-13.html},
  abstract = {
This report presents initial results from the in-progress implementation of the
Optimal Truss Purpose-based benchmark. It shows process and product data collected both
automatically by Hackystat and manually by engineering logs and other tools. It
presents some interpretations of the data and proposes approaches to improving
support for understanding how to improve HPCS development productivity.
}
}

@TECHREPORT{csdl2-04-16,
   AUTHOR = {Qin Zhang},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-04-16},
   TITLE = {Improving Software Development Management with Software Project Telemetry},
   KEYWORDS = {Thesis-Proposals, Hackystat},
   Type = {{Ph.D.} Thesis Proposal},
   MONTH = {October},
   YEAR = 2005,
   URL = {http://csdl.ics.hawaii.edu/techreports/2004/04-16/04-16.pdf},
   abstract = {
Software development is slow, expensive and error prone, often resulting in
products with a large number of defects which cause serious problems in
usability, reliability and performance. To combat this problem, software
measurement provides a systematic and empirically-guided approach to
control and improve development processes and final products. Experience
has shown excellent results so long as measurement programs are
conscientiously implemented and followed. However, due to the high cost
associated with metrics collection and difficulties in metrics
decision-making, many organizations fail to benefit from measurement
programs.

In this dissertation, I propose a new measurement approach --
software project telemetry. It addresses the "metrics collection
cost problem" through highly automated measurement machinery -- sensors
are used to collect metrics automatically and unobtrusively. It addresses
the "metrics decision-making problem" through intuitive high-level visual
perspectives on software development that support in-process,
empirically-guided project management and process improvement. Unlike
traditional metrics approaches which are primarily based on historical
project databases and focused on model-based project comparison, software
project telemetry emphasizes project dynamics and in-process control. It
combines both the precision of traditional project management techniques
and the flexibility promoted by agile community.

The main claim of this dissertation is that software project telemetry
provides an effective approach to (1) automated metrics collection, and (2)
in-process, empirically-guided software development process problem
detection and analysis. Three case studies will be
conducted to evaluate the claim in different software development
environments:

(1) A pilot case study with student users in software engineering classes to
(a) test drive the software project telemetry system in preparation for the
next two full-scale case studies, and (b) gather the students' opinions
when the adoption of the technology is mandated by their instructor.

(2) A case study in CSDL to (a) use software project telemetry to
investigate and improve its build process, and (b) evaluate the technology
at the same time in CSDL (an environment typical of traditional software
development with close collaboration and centralized decision-making).

(3) A case study at Ikayzo with open-source project developers
(geologically-dispersed volunteer work and decentralized decision-making)
to gather their opinions about software project telemetry.

The time frame of this research is as follows. The implementation of the
software project telemetry system is complete and deployed. I have finished
the first pilot case study. I will start both the second and third case
studies from October 2005, and they will last 4 - 6 months. I wish to
defend my research in May or August 2006 if everything goes according to
plan.
}
}



@InProceedings{csdl2-04-22,
  author = \t {Philip M. Johnson and Michael G. Paulding},
  title = \t {Understanding {HPCS} development through automated process and product measurement with {H}ackystat},
  booktitle = \t {Second Workshop on Productivity and Performance in High-End Computing (P-PHEC)},
  year = \t {2005},
  keywords =   {HPC, Hackystat, Publications-Workshops},
  month = \t {February},
  url = {http://csdl.ics.hawaii.edu/techreports/2004/04-22/04-22.pdf},
  abstract = {
The high performance computing (HPC) community is increasingly
aware that traditional low-level, execution-time measures for assessing
high-end computers, such as flops/second, are not adequate for
understanding the actual productivity of such systems. In response,
researchers and practitioners are exploring new measures and assessment
procedures that take a more wholistic approach to high performance
productivity. In this paper, we present an approach to understanding and
assessing development-time aspects of HPC productivity. It involves the use
of Hackystat for automatic, non-intrusive collection and analysis of six
measures: Active Time, Most Active File,
Command Line Invocations, Parallel and Serial Lines of Code, Milestone
Test Success, and Performance. We illustrate the use and interpretation of
these measures through a case study of small-scale HPC software development.
Our results show that these measures provide useful insight into development-time
productivity issues, and suggest promising additions to and enhancements of the
existing measures.
}
}


@TECHREPORT{csdl2-05-01,
   AUTHOR = {Aaron Kagawa},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-05-01},
   TITLE = {Priority Ranked Inspection: Supporting Effective
Inspection in Resource-limited Organizations},
   KEYWORDS = {Thesis-MS, Hackystat, PRI},
  Type = {{M.S.} Thesis},
   MONTH = {August},
   YEAR = 2005,
   URL = {http://csdl.ics.hawaii.edu/techreports/2005/05-01/05-01.pdf},
   abstract = {
Imagine that your project manager has budgeted 200 person-hours for the
next month to inspect newly created source code. Unfortunately, in order to
inspect all of the documents adequately, you estimate that it will take 400
person-hours. However, your manager refuses to increase the budgeted
resources for the inspections. How do you decide which documents to inspect
and which documents to skip? Unfortunately, the classic definition of
inspection does not provide any advice on how to handle this situation. For
example, the notion of entry criteria used in Software Inspection
determines when documents are ready for inspection rather
than if it is needed at all.

My research has investigated how to prioritize inspection resources and
apply them to areas of the system that need them more. It is commonly
assumed that defects are not uniformly distributed across all documents in
a system, a relatively small subset of a system accounts for a relatively
large proportion of defects. If inspection resources are
limited, then it will be more effective to identify and inspect the
defect-prone areas.

To accomplish this research, I have created an inspection process called
Priority Ranked Inspection (PRI). PRI uses software product and development
process measures to distinguish documents that are \`\`more in need of
inspection'' (MINI) from those \`\`less in need of inspection'' (LINI). Some
of the product and process measures include: user-reported defects, unit
test coverage, active time, and number of changes. I hypothesize that the
inspection of MINI documents will generate more defects with a higher
severity than inspecting LINI documents.

My research employed a very simple exploratory study, which includes
inspecting MINI and LINI software code and checking to see if MINI code
inspections generate more defects than LINI code inspections. The results
of the study provide supporting evidence that MINI documents do contain
more high-severity defects than LINI documents. In addition, there is some
evidence that PRI can provide developers with more information to help
determine what documents they should select for inspection.
}
}


@TechReport{csdl2-05-02,
  author = \t {Philip M. Johnson and Brian T. Pentland and Victor R. Basili and Martha S. Feldman},
  title = \t {Cedar -- Cyberinfrastructure for Empirical Data Analysis and Reuse},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-05-02},
  year = \t {2005},
  keywords = {Hackystat, HPC},
  month = \t {May},
  URL = {http://csdl.ics.hawaii.edu/techreports/2005/05-02/05-02.pdf},
  abstract = {
This document presents the project description for a proposal to the National Science Foundation
program on Next Generation Cybertools.  It discusses an approach to integrating qualitative
and quantitative empirical data, approaches to privacy policies, and data management issues
to support collection, analysis, and dissemination of this data.
}
}

@TechReport{csdl2-05-03,
  author = \t {Hongbing Kou},
  title = \t {Studying Micro-Processes in Software Development Stream},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-05-03},
  year = \t {2005},
  keywords = {Hackystat},
  month = \t {July},
  URL = {http://csdl.ics.hawaii.edu/techreports/2005/05-03/05-03.pdf},
  abstract = {
  In this paper we propose a new streaming technique to study software
  development. As we observed software development consists of a series of
  activities such as edit, compilation, testing, debug and deployment etc.
  All these activities contribute to development stream, which is a
  collection of software development activities in time order. Development
  stream can help us replay and reveal software development process at a
  later time without too much hassle. We developed a system called Zorro to
  generate and analyze development stream at Collaborative Software
  Development Laboratory in University of Hawaii. It is built on the top of
  Hackystat, an in-process automatic metric collection
  system developed in the CSDL.  Hackystat sensors continuously collect
  development activities and send them to a centralized data store for
  processing. Zorro reads in all data of a project and constructs stream
  from them. Tokenizers are chained together to divide development stream
  into episodes (micro iteration) for classification with rule engine. In
  this paper we demonstrate the analysis on Test-Driven Development (TDD)
  with this framework.
}
}

@TechReport{csdl2-05-05,
  author = \t {Philip M. Johnson},
  title = \t {A continuous, evidence-based approach to discovery and assessment of software engineering best practices},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-05-05},
  year = \t {2005},
  keywords = {Hackystat},
  month = \t {June},
  URL = {http://csdl.ics.hawaii.edu/techreports/2005/05-05/05-05.pdf},
  abstract = {
This document presents the project description for a proposal to the National Science Foundation.
It discusses an approach that integrates Hackystat, Software Project Telemetry, Software
Development Stream Analysis, Pattern Discovery, and Evidence-based software engineering to
support evaluation of best practices.  Both classroom and industrial case studies are proposed
to support evaluation of the techniques.
}
}

@TechReport{csdl2-05-06,
  author = \t {Philip M. Johnson},
  title = \t {Readings in Empirical Evaluation for Budding Software Engineering Researchers},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-05-06},
  year = \t {2005},
  month = \t {July},
  keywords = {Miscellaneous},
  URL = {http://csdl.ics.hawaii.edu/techreports/2005/05-06/05-06.html},
  abstract = {
Provides links to resources for empirical software engineering evaluation.
}
}

@TechReport{csdl2-05-07,
  author = \t {Philip M. Johnson},
  title = \t {Telemetry Plate Lunch Contest Results},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-05-07},
  year = \t {2005},
  keywords = {Hackystat},
  month = \t {July},
  URL = {http://csdl.ics.hawaii.edu/techreports/2005/05-07/05-07.html},
  abstract = {
The "Telemetry Plate Lunch Contest" was a contest to support investigation of the use
of multi-axis telemetry charts in Hackystat. This document describes the winning submissions.
}
}


@TECHREPORT{csdl2-05-09,
   AUTHOR = {Christoph Lofi},
  institution =  "Department of Software Engineering,
\t\t  Fachbereich Informatik,
                  Universitat Kaiserslautern, Germany",
   NUMBER = {{CSDL}-05-09},
   TITLE = {Continuous {GQM}: An automated framework for the Goal-Question-Metric paradigm},
   KEYWORDS = {Thesis-MS, Hackystat},
  Type = {{M.S.} Thesis},
   MONTH = {August},
   YEAR = 2005,
   URL = {http://csdl.ics.hawaii.edu/techreports/2005/05-09/05-09.pdf},
   abstract = {
Measurement is an important aspect of Software Engineering as it is the
foundation of predictable and controllable software project
execution. Measurement is essential for assessing actual project progress,
establishing baselines and validating the effects of improvement or
controlling actions.

The work performed in this thesis is based on Hackystat, a fully automated
measurement framework for software engineering processes and
products. Hackystat is designed to unobtrusively measure a wide range of
metrics relevant to software development and collect them in a centralized
data repository.  Unfortunately, it is not easy to interpret, analyze and
visualize the vast data collected by Hackystat in such way that it can
effectively be used for software project control.

A potential solution to that problem is to integrate Hackystat with the GQM
(Goal / Question / Metric) Paradigm, a popular approach for goal-oriented,
systematic definition of measurement programs for software-engineering
processes and products.  This integration should allow the goal-oriented
use of the metric data collected by Hackystat and increase its usefulness
for project control.  During the course of this work, this extension to
Hackystat which is later called hackyCGQM is implemented. As a result,
hackyCGQM enables Hackystat to be used as a Software Project Control Center
(SPCC) by providing purposeful high-level representations of the
measurement data.

Another interesting side-effect of the combination of Hackystat and
hackyCGQM is that this system is able to perform fully automated
measurement and analysis cycles. This leads to the development of cGQM, a
specialized method for fully automated, GQM based measurement programs.  As
a summary, hackyCGQM seeks to implement a completely automated GQMbased
measurement framework. This high degree of automation is made possible by
limiting the implemented measurement programs to metrics which can be
measured automatically, thus sacrificing the ability to use arbitrary
metrics.
}
}


@InProceedings{csdl2-06-01,
  author = \t {Lutz Prechelt and Sebastian Jekutsch and Philip M. Johnson},
  title = \t {Actual Process: A Research Program},
  booktitle = \t {Submitted to the 2006 Workshop on Software Process},
  year = \t {2006},
  keywords =   {Hackystat},
  month = \t {May},
  url = {http://csdl.ics.hawaii.edu/techreports/2006/06-01/06-01.pdf},
  abstract = {
Most process research relies heavily on the use of terms and concepts whose
validity depends on a variety of assumptions to be met. As it is difficult
to guarantee that they are met, such work continually runs the risk of
being invalid. We propose a different and complementary approach to
understanding process: Perform all description bottom-up and based on hard
data alone. We call the approach actual process and the data actual
events. Actual events can be measured automatically. This paper describes
what has been done in this area already and what are the core problems to
be solved in the future.
}
}

@InProceedings{csdl2-06-02,
  author = \t {Hongbing Kou and Philip M. Johnson},
  title = \t {Automated recognition of low-level process: A pilot validation study of {Z}orro for test-driven development},
  booktitle = \t {Proceedings of the 2006 International Workshop on Software Process},
  year = \t {2006},
  address =      {Shanghai, China},
  keywords =   {Hackystat, Zorro, Publications-Workshops},
  month = \t {May},
  url = {http://csdl.ics.hawaii.edu/techreports/2006/06-02/06-02.pdf},
  abstract = {
Zorro is a system designed to automatically determine whether a developer
is complying with the Test-Driven Development (TDD) process.  Automated
recognition of TDD could benefit the software engineering community in a
variety of ways, from pedagogical aids to support the learning of
test-driven design, to support for more rigorous empirical studies on the
effectiveness of TDD in practice.  This paper presents the Zorro system and
the results of a pilot validation study, which shows that Zorro was able to
recognize test-driven design episodes correctly 89\\% of the time. The
results also indicate ways to improve Zorro's classification accuracy
further, and provide evidence for the effectiveness of this approach to
low-level software process recognition.
}
}

@PhdThesis{csdl2-06-05,
  type = {{Ph.D.} Thesis},
  author = \t {Qin Zhang},
  title = \t {Improving Software Development Process and Product Management with Software Project Telemetry},
  school = \t {University of Hawaii, Department of Information and Computer Sciences},
  year = \t {2006},
  URL = {http://csdl.ics.hawaii.edu/techreports/2006/06-05/06-05.pdf},
  month = \t {December},
  KEYWORDS = {Hackystat, Thesis-PhD},
  abstract = {
Software development is slow, expensive and error prone, often resulting in
products with a large number of defects which cause serious problems in
usability, reliability, and performance. To combat this problem, software
measurement provides a systematic and empirically-guided approach to
control and improve software development processes and final
products. However, due to the high cost associated with \`\`metrics
collection'' and difficulties in \`\`metrics decision-making,'' measurement
is not widely adopted by software organizations.

This dissertation proposes a novel metrics-based program called \`\`software
project telemetry'' to address the problems. It uses software sensors to
collect metrics automatically and unobtrusively. It employs a
domain-specific language to represent telemetry trends in software product
and process metrics. Project management and process improvement decisions
are made by detecting changes in telemetry trends and comparing trends
between different periods of the same project. Software project telemetry
avoids many problems inherent in traditional metrics models, such as the
need to accumulate a historical project database and ensure that the
historical data remain comparable to current and future projects.

The claim of this dissertation is that software project telemetry provides
an effective approach to (1) automated metrics collection and analysis, and
(2) in-process, empirically-guided software development process problem
detection and diagnosis. Two empirical studies were carried out to evaluate
the claim: one in software engineering classes, and the other in the
Collaborative Software Development Lab. The results suggested that software
project telemetry had acceptably-low metrics collection and analysis
overhead, and that it provided decision-making value at least in the
exploratory context of the two studies.
}
}



@InProceedings{csdl2-06-06,
  author = \t {Philip M. Johnson},
  title = \t {Requirement and Design Trade-offs in {H}ackystat: An in-process software engineering measurement and analysis system},
  booktitle = \t {Proceedings of the 2007 International Symposium on Empirical Software Engineering and Measurement},
  year = \t {2007},
  keywords =   {Hackystat, Publications-Conferences},
  month = \t {September},
  address = {Madrid, Spain},
  url = {http://csdl.ics.hawaii.edu/techreports/2006/06-06/06-06.pdf},
  abstract = {
For five years, the Hackystat Project has incrementally developed and
evaluated a generic framework for in-process software engineering
measurement and analysis (ISEMA). At least five other independent ISEMA
system development projects have been initiated during this time,
indicating growing interest and investment in this approach by the software
engineering community. This paper presents 12 important requirement and
design tradeoffs made in the Hackystat system, some of their implications
for organizations wishing to introduce ISEMA, and six directions for future
research and development. The three goals of this paper are to: (1) help
potential users of ISEMA systems to better evaluate the relative strengths
and weaknesses of current and future systems, (2) help potential developers
of ISEMA systems to better understand some of the important requirement and
design trade-offs that they must make, and (3) help accelerate progress in
ISEMA by identifying promising directions for future research and
development.
}
}



@Article{csdl2-06-07,
  author = \t {Victor R. Basili and Marvin V. Zelkowitz and Dag Sjoberg and
Philip M. Johnson and Tony Cowling},
  title = \t {Protocols in the use of Empirical Software Engineering Artifacts},
  keywords = {Hackystat, Publications-Journals},
  journal = \t {Empirical Software Engineering},
  month = {February},
  year = \t {2007},
  volume = 12,
  issue = 1,
  url = {http://csdl.ics.hawaii.edu/techreports/2006/06-07/06-07.pdf},
  abstract = {
If empirical software engineering is to grow as a valid scientific
endeavor, the ability to acquire, use, share, and compare data collected
from a variety of sources must be encouraged. This is necessary to validate
the formal models being developed within computer science. However, within
the empirical software engineering community this has not been easily
accomplished. This paper analyses experience from a number of projects, and
defines the issues, which include the following: (1) How should data,
testbeds, and artifacts be shared? (2) What limits should be placed on who
can use them and how? How does one limit potential misuse? (3) What is the
appropriate way to credit the organization and individual that spent the
effort collecting the data, developing the testbed, and building the
artifact? (4) Once shared, who owns the evolved asset?  As a solution to
these issues, the paper proposes a framework for an empirical software
engineering artifact license, which is intended to address the needs for
both creator and user of such artifacts and should foster a market in
making available and using such artifacts. If this license framework for
sharing software engineering artifacts is commonly accepted, it is
considered that it should encourage artifact owners to make the artifacts
accessible to others (gaining credit is more likely and misuse is less
likely), and it may be easier for other researchers to request artifacts
since there will be a well-defined protocol for how to deal with relevant
matters.
}
}

@Article{csdl2-06-08,
  author = \t {Lorin Hochstein and Taiga Nakamura and Victor R. Basili and Sima Asgari
and Marvin V. Zelkowitz and Jeffrey K. Hollingsworth and Forrest Shull and Jeffrey Carver
and Martin Voelp and Nico Zazworka and Philip M. Johnson},
  title = \t {Experiments to understand {HPC} time to development},
  keywords = {HPC, Publications-Journals, Hackystat},
  journal = \t {CTWatch Quarterly},
  month = {November},
  year = \t {2006},
  url = {http://csdl.ics.hawaii.edu/techreports/2006/06-08/06-08.pdf},
  abstract = {
In order to understand how high performance computing (HPC) programs are
developed, a series of experiments, using students in graduate level HPC
classes, have been conducted at many universities in the US. In this paper
we discuss the general process of conducting those experiments, give some
of the early results of those experiments, and describe a web-based process
we are developing that will allow us to run additional experiments at other
universities and laboratories that will be easier to conduct and generate
results that more accurately reflect the process of building HPC programs.
}
}


@TECHREPORT{csdl2-06-09,
   AUTHOR = {Takuya Yamashita},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-06-09},
   TITLE = {Evaluation of {J}upiter: A Lightweight Code Review Framework},
   KEYWORDS = {Thesis-MS, Jupiter},
  Type = {{M.S.} Thesis},
   MONTH = {December},
   YEAR = 2006,
   URL = {http://csdl.ics.hawaii.edu/techreports/2006/06-09/06-09.pdf},
   abstract = {
Software engineers generally agree that code reviews reduce development
costs and improve software quality by finding defects in the early stages
of software development. In addition, code review software tools help the
code review process by providing a more efficient means of collecting and
analyzing code review data. On the other hand, software organizations that
conduct code reviews often do not utilize these review tools. Instead, most
organizations simply use paper or text editors to support their code review
processes. Using paper or a text editor is potentially less useful than
using a review tool for collecting and analyzing code review data.

In this research, I attempted to address the problems of previous code
review tools by creating a lightweight and flexible review tool. This
review tool that I have developed, called "Jupiter", is an Eclipse IDE
Plug-In. I believe the Jupiter Code Review Tool is more efficient at
collecting and analyzing code review data than the text-based approaches.

To investigate this hypothesis, I have constructed a methodology to compare
the Jupiter Review Tool to the text-based review approaches. I carried out
a case study using both approaches in a software engineering course with 19
students.

The results provide some supporting evidence that Jupiter is more useful
and more usable than the text-based code review, requires less overhead
than the text-based review, and appears to support long-term adoption.

The major contributions of this research are the Jupiter design philosophy,
the Jupiter Code Review Tool, and the insights from the case study
comparing the text-based review to the Jupiter-based review.
}}

@Article{csdl2-06-10,
  author = \t {Philip M. Johnson},
  title = \t {Automated software process and product measurement with {H}ackystat},
  journal = \t {Dr. Dobbs Journal},
  year = \t {2007},
  month =\t {January},
  keywords = {Publications-Journals, Hackystat},
  abstract = {This article presents an overview of Hackystat, a system for automated software
process and product measurement.}
}


@TechReport{csdl2-06-12,
  author = \t {Hongbing Kou},
  title = \t {Automated Inference of Software Development Behaviors:
                  Design, Implementation and Validation of {Z}orro for Test-Driven
                  Development},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-06-12},
  KEYWORDS = {Thesis-Proposals, Zorro, Hackystat},
  Type = {{Ph.D.} Thesis Proposal},
  MONTH = {November},
  YEAR = 2006,
  URL = {http://csdl.ics.hawaii.edu/techreports/2006/06-12/06-12.pdf},
  abstract = {
In my dissertation research, I propose to develop a systematic approach to automatically
inferring software development behaviors using a technique I have developed called Software Development
Stream Analysis (SDSA). Software Development Stream Analysis is a generic framework
for inferring low-level software development behaviors. Zorro is an implementation of SDSA
for Test-Driven Development (TDD). In addition, I designed a series of validation studies to test
the SDSA framework by evaluating Zorro with respect to its capabilities to infer TDD development
behaviors. An early pilot validation study found that Zorro works very well in practice, with Zorro
recognizing the software development episodes of TDD with 88.4\\% accuracy. After this pilot
study, I improved Zorro system's inferencing rules and evaluation mechanism as part of my collaborative
research with Software Engineering Group at the National Research Council of Canada
(NRC-CNRC). I am planning to conduct two more extended validation studies of Zorro in academic
and industrial settings for Fall 2006 and Spring 2007.
}
}

@Article{csdl2-06-13,
  author = {Philip M. Johnson and Hongbing Kou},
  title = "Automated Recognition of Test-Driven Development with {Z}orro",
  journal = \t {Proceedings of {Agile 2007}},
  year = \t {2007},
 URL = {http://csdl.ics.hawaii.edu/techreports/2006/06-13/06-13.pdf},
  month =\t {August},
  keywords = {Publications-Conferences, Zorro, Hackystat},
  abstract = {
Zorro is a system designed to automatically determine whether a developer
is complying with an operational definition of Test-Driven Development
(TDD) practices.  Automated recognition of TDD can benefit the software
development community in a variety of ways, from inquiry into the \`\`true
nature'' of TDD, to pedagogical aids to support the practice of test-driven
development, to support for more rigorous empirical studies on the effectiveness
of TDD in both laboratory and real world settings.  This paper introduces
the Zorro system, its operational definition of TDD, the analyses made
possible by Zorro, and our ongoing efforts to validate the system.
}
}


@TECHREPORT{csdl2-07-02,
   AUTHOR = {Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-07-02},
   TITLE = {Results from the 2006 Classroom Evaluation of {H}ackystat-{UH}},
   KEYWORDS = {Hackystat},
   MONTH = {December},
   YEAR = 2006,
   URL = {http://csdl.ics.hawaii.edu/techreports/2007/07-02/07-02.html},
   abstract = {
This report presents the results from a classroom evaluation of Hackystat
by ICS 413 and ICS 613 students at the end of Fall, 2006.  The students had
used Hackystat-UH for approximately six weeks at the time of the
evaluation.  The survey requests their feedback regarding the installation,
configuration, overhead of use, usability, utility, and future use of the
Hackystat-UH configuration. This classroom evaluation is a semi-replication
of an evaluation performed on Hackystat by ICS 413 and 613 students at the
end of Fall, 2003, which is reported in "Results from the 2003 Classroom
Evaluation of Hackystat-UH".  As the Hackystat system has changed
significantly since 2003, some of the evaluation questions were changed.
The data from this evaluation, in combination with the data from the 2003
evaluation, provide an interesting perspective on the past, present, and
possible future of Hackystat.  Hackystat has increased significantly in
functionality since 2003, which has enabled the 2006 usage to more closely
reflect industrial application, and which has resulted in significantly
less overhead with respect to client-side installation. On the other hand,
results appear to indicate that this increase in functionality has resulted
in a decrease in the usability and utility of the system, due to
inadequacies in the server-side user interface.  Based upon the data, the
report proposes a set of user interface enhancements to address the
problems raised by the students, including Ajax-based menus and parameters,
workflow based organization of the user interface, real-time display for
ongoing project monitoring, annotations, and simplified data exploration
facilities.
}
}

@InProceedings{csdl2-07-03,
  author = \t {Philip M. Johnson},
  title = \t {Ultra-automation and ultra-autonomy for software engineering management of ultra-large-scale systems},
  booktitle = \t {Proceedings of the 2007 Workshop on Ultra Large Scale Systems},
  year = \t {2007},
  keywords =   {Hackystat, Publications-Workshops},
  month = \t {May},
  address = {Minneapolis, Minnesota},
  url = {http://csdl.ics.hawaii.edu/techreports/2007/07-03/07-03.pdf},
  abstract = {
  \`\`Ultra-Large-Scale Systems: The Software Challenge of the Future''
  identifies \`\`Engineering Management at Large Scales'' as an important
  focus of research.  Engineering management for software typically
  involves measurement and monitoring of products and processes in order to
  maintain acceptable levels of important project characteristics including
  cost, quality, usability, performance, reliability, and so forth.  Our
  research on software engineering measurement over the past ten years has
  exhibited a trend towards increasing automation and autonomy in the
  collection and analysis of process and product measures.  In this
  position paper, we extrapolate from our work so far to consider what new
  forms of automation and autonomy might be required for software
  engineering management of ULS systems.
}
}


@PhdThesis{csdl2-07-04,
  type = {{Ph.D.} Thesis},
  author = \t {Hongbing Kou},
  title = \t {Automated Inference of Software Development Behaviors: Design,
         Implementation and Validation of Zorro for Test-Driven Development},
  school = \t {University of Hawaii, Department of Information and Computer Sciences},
  year = \t {2007},
  URL = {http://csdl.ics.hawaii.edu/techreports/2007/07-04/07-04.pdf},
  month = \t {December},
  KEYWORDS = {Hackystat, Zorro, Thesis-PhD},
  abstract = {
A recent focus of interest in software engineering research is on low-level
software processes, which define how software developers or development
teams should carry on development activities in short phases that last from
several minutes to a few hours. Anecdotal evidence exists for the positive
impact on quality and productivity of certain low-level software processes
such as test-driven development and continuous integration. However,
empirical research on low-level software processes often yields conflicting
results. A significant threat to the validity of the empirical studies on
low-level software processes is that they lack the ability to rigorously
assess process conformance. That is to say, the degree to which developers
follow the low-level software processes can not be evaluated.

In order to improve the quality of empirical research on low-level software
processes, I developed a technique called Software Development Stream
Analysis (SDSA) that can infer development behaviors using automatically
collected in-process software metrics. The collection of development
activities is supported by Hackystat, a framework for automated software
process and product metrics collection and analysis. SDSA abstracts the
collected software metrics into a software development stream, a
time-series data structure containing time-stamped development events. It
then partitions the development stream into episodes, and then uses a
rule-based system to infer low-level development behaviors exhibited in
episodes.

With the capabilities provided by Hackystat and SDSA, I developed the Zorro
software system to study a specific low-level software process called
Test-Driven Development (TDD). Experience reports have shown that TDD can
greatly improve software quality with increased developer productivity, but
empirical research findings on TDD are often mixed. An inability to
rigorously assess process conformance is a possible explanation. Zorro can
rigorously assess process conformance to a specific operational definition
for TDD, and thus enable more controlled, comparable empirical studies.

My research has demonstrated that Zorro can recognize the low-level
software development behaviors that characterize TDD. Both the pilot and
classroom case studies support this conclusion. The industrial case study
shows that the automated data collection and development behavior inference
has the potential to be useful for researchers.

}
}

@InProceedings{csdl2-08-01,
  author = \t {Robert S. Brewer},
  title = \t {Carbon Metric Collection and Analysis with the Personal Environmental Tracker},
  booktitle = \t {Proceedings of the UbiComp 2008 Workshop on Ubiquitous Sustainability: Citizen Science and Activism},
  year = \t {2008},
  keywords =   {Sustainability, Publications-Workshops},
  month = \t {September},
  address = {Seoul, South Korea},
  url = {http://csdl.ics.hawaii.edu/techreports/2008/08-01/08-01.pdf},
  abstract = {
The Personal Environmental Tracker (PET) is a proposed
system for helping people to track their impact on the
environment, and to make changes to reduce that impact,
creating a personal feedback loop. PET consists of sensors
that collect data such as home electricity or gasoline usage
and send it to a database for analysis and presentation to the
user. By collecting data from diverse sources, PET can help
users decide what aspect of their lives they should make
changes in first to maximize their reduction in
environmental impact. PET's open architecture will allow
other ubiquitous sustainability researchers to leverage the
infrastructure for research in sensors, data analysis, or
presentation of data.

}
}

@TechReport{csdl2-08-04,
  author = \t {Pavel Senin},
  title = \t {Dynamic Time Warping Algorithm Review},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-08-04},
  KEYWORDS = {Hackystat},
  MONTH = {December},
  YEAR = 2008,
  URL = {http://csdl.ics.hawaii.edu/techreports/2008/08-04/08-04.pdf},
  abstract = {This technical report describes the Dynamic Time Warping algorithm and
how it can be applied to support identification of similar software development projects
through analysis of their telemetry data.
}
}

@TechReport{csdl2-08-05,
  author = \t {Alexey Olkov and Daniel Port},
  title = \t {Using simulation to investigate {IT} micro-processes},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-08-05},
  KEYWORDS = {Hackystat},
  MONTH = {December},
  YEAR = 2008,
  URL = {http://csdl.ics.hawaii.edu/techreports/2008/08-05/08-05.pdf},
  abstract = {This technical report describes how simulation can be used to (1) gain confidence
in empirical analysis of software micro-processes and (2) provide a means to validate or obtain
evidence to support software engineering hypotheses and theory.
}
}


@Article{csdl2-09-01,
  author = \t {Hongbing Kou and  Philip M. Johnson and Hakan Erdogmus},
  title = \t {Operational Definition and Automated Inference of Test-Driven Development with {Zorro}},
  keywords = {Hackystat, Zorro, Publications-Journals},
  journal = \t {Journal of Automated Software Engineering},
  month = {December},
  year = \t {2009},
  url = {http://csdl.ics.hawaii.edu/techreports/2009/09-01/09-01.pdf},
  abstract = {
Test-driven development (TDD) is a style of development named for its most
visible characteristic: the design and implementation of test cases prior
to the implementation of the code required to make them pass. Many claims
have been made for TDD: that it can improve implementation as well as
design quality, that it can improve productivity, that it results in 100\\%
coverage, and so forth.  However, research to validate these claims has
yielded mixed and sometimes contradictory results.  We believe that at
least part of the reason for these results stems from differing
interpretations of the TDD development style, along with an inability to
determine whether programmers actually follow whatever definition of
TDD is in use.

Zorro is a system designed to automatically determine whether a developer
is complying with an operational definition of Test-Driven Development
(TDD) practices.  Automated recognition of TDD can benefit the software
development community in a variety of ways, from inquiry into the \`\`true
nature'' of TDD, to pedagogical aids to support the practice of test-driven
development, to support for more rigorous empirical studies on the
effectiveness of TDD in both laboratory and real world settings.

This paper describes the Zorro system, its operational definition of TDD,
the analyses made possible by Zorro, and two empirical evaluations of the
system.  Our research shows that it is possible to define an operational
definition of TDD that is amenable to automated recognition, and
illustrates the architectural and design issues that must be addressed in
order to do so.  Zorro has implications not only for the practice of TDD,
but also for software engineering \`\`micro-process'' definition and
recognition through its parent framework, Software Development Stream
Analysis.
}
}

@InProceedings{csdl2-09-02,
  author = \t {Philip M. Johnson and Shaoxuan Zhang},
  title = \t {We need more coverage, stat!  {E}xperience with the Software {ICU}},
  booktitle = \t {Proceedings of the 2009 Conference on Empirical Software Engineering and Measurement},
  year = \t {2009},
  keywords =   {Hackystat, Publications-Conferences, SoftwareICU},
  month = \t {October},
  address = {Orlando, Florida},
  url = {http://csdl.ics.hawaii.edu/techreports/2009/09-02/09-02.pdf},
  abstract = {
For empirical software engineering to reach its fullest potential, we must
develop effective, experiential approaches to learning about it in a
classroom setting.  In this paper, we report on a case study involving a
new approach to classroom-based empirical software engineering called the
\`\`Software ICU''.  In this approach, students learn about nine empirical
project \`\`vital signs'' and use the Hackystat Framework to put their
projects into a virtual \`\`intensive care unit'' where these vital signs can
be assessed and monitored.  We used both questionnaire and log data to gain
insight into the strengths and weaknesses of this approach. Our evaluation
provides both quantitative and qualitative evidence concerning the overhead
of the system; the relative utility of different vital signs; the frequency
of use; and the perceived appropriateness outside of the classroom
setting. In addition to benefits, we found evidence of measurement
dysfunction induced directly by the presence of the Software ICU. We
compare these results to case studies we performed in 2003 and 2006 using
the Hackystat Framework but not the Software ICU.  We use these findings to
orient future research on empirical software engineering both inside and
outside of the classroom.
}
}


@TECHREPORT{csdl2-09-03,
   AUTHOR = {Shaoxuan Zhang and Philip M. Johnson},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-09-03},
   TITLE = {Results from the 2008 Classroom Evaluation of {H}ackystat},
   KEYWORDS = {Hackystat, SoftwareICU},
   MONTH = {March},
   YEAR = 2009,
   URL = {http://csdl.ics.hawaii.edu/techreports/2009/09-03/09-03.pdf},
   abstract = {
This report presents the results from a classroom evaluation of Hackystat
by ICS 413 students at the end of Fall, 2008.  The evaluation focuses on
the use of the Software ICU user interface developed using Hackystat Version 8.
Results indicate that sensor installation is somewhat more complicated than
previously due to the absence of a client-side installer.  The three most
used "vital signs" were DevTime, Coverage, and Commit.  Over half of the respondents
felt that the Software ICU colors accurately represented the health of the project.
Most students felt that the Software ICU would be useful in a professional context.
}
}



@TechReport{csdl2-09-05,
  author = \t {Robert S. Brewer},
  title = \t {Literature review on carbon footprint collection and analysis},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-09-05},
  KEYWORDS = {Sustainability, LitReview},
  MONTH = {January},
  YEAR = 2009,
  URL = {http://csdl.ics.hawaii.edu/techreports/2009/09-05/09-05.pdf},
  abstract = {
The Personal Environmental Tracker (PET) is a proposed system for helping people to track their
impact on the environment via data collected from sensors, and to make changes to reduce that
impact, creating a personal feedback loop. This document presents a review of the work related
to this research program, including: environmental research, economic factors regarding energy
efficiency, methods of providing feedback on energy usage, motivating users to change their behavior,
suggestions for the design of persuasive environmental systems, a review of related systems, and
the calculation of carbon emissions.
}
}


@TechReport{csdl2-09-07,
  author = \t {Philip M. Johnson and Shaoxuan Zhang and Pavel Senin},
  title = \t {Experiences with {Hackystat} as a service-oriented architecture},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-09-07},
  year = \t {2009},
  keywords =   {Hackystat},
  month = \t {February},
  url = {http://csdl.ics.hawaii.edu/techreports/2009/09-07/09-07.pdf},
  abstract = {
Hackystat is an open source framework for automated collection and analysis
of software engineering process and product data.  Hackystat has been in
development since 2001, and has gone through eight major architectural
revisions during that time.  In 2007, we performed the latest architectural
revision, whose primary goal was to reimplement Hackystat as a
service-oriented architecture (SOA).  This version has now been in
public release for a year, and this paper reports on our experiences:
the motivations that led us to reimplement the system as a SOA, the
costs and benefits of that conversion, and our lessons learned.
}
}

@TechReport{csdl2-09-08,
  author = \t {Pavel Senin},
  title = \t {Literature review on time series indexing},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-09-08},
  KEYWORDS = {LitReview, Trajectory},
  MONTH = {May},
  YEAR = 2009,
  URL = {http://csdl.ics.hawaii.edu/techreports/2009/09-08/09-08.pdf},
  abstract = {
Similarity search in time-series databases has become an active research area in the past decade
due to the tremendous growth of the amount of temporal data collected and publicly available.
The complexity of this similarity problem lies in the high dimensionality of the temporal data
making convenient methods inappropriate. The most promising approaches involve dimensionality
reduction and indexing techniques which are the subject of this review. After starting with a
general introduction to the time-series and classical time-series analyses, we will discuss in detail
time-series normalization techniques and relevant distance metrics. We conclude with a review of
the dimensionality-reduction and indexing methods proposed to date.
}
}

@TechReport{csdl2-09-09,
  author = \t {Pavel Senin},
  title = \t {Software Trajectory Analysis:
                  An empirically based method for automated software process discovery},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-09-09},
  KEYWORDS = {Thesis-Proposals, Trajectory, Hackystat},
  Type = {{Ph.D.} Thesis Proposal},
  MONTH = {August},
  YEAR = 2009,
  URL = {http://csdl.ics.hawaii.edu/techreports/2009/09-09/09-09.pdf},
  abstract = {
In this research, I will apply knowledge discovery and data mining techniques to the domain of software engineering in order to evaluate their ability to automatically notice interesting recurrent patterns of behavior. While I am not proposing to be able to infer a complete and correct software process model, my system will provide its users with a formal description of recurrent behaviors in their software development. The proposed contributions of my research will include:  (1) the implementation of a system aiding in discovery of novel software process knowledge through the analysis of fine-grained software process and product data;
(2) experimental evaluation of the system, which will provide insight into its strengths and weaknesses;
and (3) the possible discovery of useful new software process patterns.
}
}

@TECHREPORT{csdl2-09-10,
   AUTHOR = {Shaoxuan Zhang},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
   NUMBER = {{CSDL}-09-10},
   TITLE = {Learning Empirical Software Engineering Using Software Intensive Care Unit},
   KEYWORDS = {Thesis-MS, Hackystat, SoftwareICU},
  Type = {{M.S.} Thesis},
   MONTH = {December},
   YEAR = 2009,
   URL = {http://csdl.ics.hawaii.edu/techreports/2009/09-10/09-10.pdf},
   abstract = {
In software engineering, the importance of measurement is well understood, and many efficient software development metrics have been developed to help measurement. However, as the number of metrics increases, the effort required to collect data, analyze them and interpret the results quickly becomes overwhelming. This problem is even more critical in educational approaches regarding empirical software engineering.

The Software Intensive Care Unit is a new approach to facilitating software measurement and control with multiple software development metrics. It uses the Hackystat system to achieve automated data collection and analysis, then uses the collected analysis data to create a monitoring interface for multiple \`\`vital signs''. A vital sign is a wrapper of a software metric with an easy to use presentation. It consists of a historical trend and a newest state value, both of which are colored according to the \`\`health'' state.

My research deployed and evaluated the Software ICU in a senior-level software engineering course. Students' usage was logged in the system, and a survey was conducted. The results provide supporting evidence that Software ICU does help students in course project development and project team organization. In addition, the results of the study also discover some limitations of the system, including inappropriate vital sign presentation and measurement dysfunction.
}}


@TechReport{csdl2-09-11,
  author = \t {Philip M. Johnson},
  title = \t {Empirical Computational Thinking},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-09-11},
  year = \t {2009},
  keywords =   {Hackystat},
  month = \t {May},
  url = {http://csdl.ics.hawaii.edu/techreports/2009/09-11/09-11.pdf},
  abstract = {
This technical report presents an edited version of a proposal to the NSF
CPATH program. The vision of this proposal is to develop and
institutionalize a new approach to computational thinking where abstraction
and automation combine to transform the use of empirical thinking in
software development.  We call this approach \`\`empirical computational
thinking'', or eCT.  The goal of this research is to explore, evaluate,
and institutionalize techniques and technologies for eCT, building upon
research and education by ourselves and others in empirically-based
software development.
}
}

@TechReport{csdl2-09-12,
  author = \t {Robert S. Brewer},
  title = \t {Proposal for Electricity Conservation Experiments in Saunders Hall},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-09-12},
  year = \t {2009},
  keywords =   {Sustainability},
  month = \t {June},
  url = {http://csdl.ics.hawaii.edu/techreports/2009/09-12/09-12.pdf},
  abstract = {
The University of Hawaii at Manoa has set the goals of reducing its
electricity usage by 30 percent by 2012 and 50 percent by 2015 (based on a
2003 benchmark). A variety of tactics will be required to meet these
aggressive goals. One promising technique is to encourage the occupants of
buildings to reduce their electricity usage.  There are a variety of
possible interventions that may encourage occupants to reduce their
electricity usage. To assess the relative effectiveness of the
interventions, we plan a series of experiments in Saunders. However, the
participants of each experiment will be the occupants of Saunders, rather
than a set of participants recruited anew for each experiment. We expect
two negative consequences of the continuity of the subjects: reduced
subject interest/enthusiasm, and diminishing conservation returns.
}
}


@TechReport{csdl2-09-15,
  title = \t {Human centered information integration for the smart grid},
  author = \t {Philip M. Johnson},
  institution =  "University of Hawaii, Honolulu, HI",
  NUMBER = {{CSDL}-09-15},
  year = \t {2009},
  keywords =   {Sustainability, WattDepot, SmartGrid, KukuiCup},
  month = \t {December},
  url = {http://csdl.ics.hawaii.edu/techreports/2009/09-15/09-15.pdf},
  abstract = {
The "Smart Grid" represents a new vision for
the electrical infrastructure of the United States, whose goals include
more active participation by consumers, new generation and storage options
including renewable energy, and new products, services, and markets.  To
reach its full potential, the Smart Grid must provide information to
consumers in a way that enables positive, sustained changes to
energy-related behaviors.

The central question to be pursued in this research proposal is: What kinds of
  information, provided in what ways and at what times, enables consumers
  to make positive, sustained changes to their energy consumption
  behaviors?  Prior research indicates that such changes can potentially
be motivated by an appropriate combination of personalized information,
general and specific commitments, achievable goals, social reinforcement,
feedback, and financial incentives.

This project will develop a collection
of open source components called WattBlocks, which  will provide novel and
useful scientific infrastructure for investigating the ways in which
energy-related information can affect human behavior. The project will also
develop eSpheres, a novel social networking application that provides users
with access to energy-related communities at configurable levels of
scale. The combination of WattBlocks and eSpheres will lower the technological
efforts required for empirical, replicable studies of human energy-related
behaviors.

The project will use this infrastructure in a series of two case studies, one
involving campus dormitory energy competitions and one involving community
home energy challenges.  The project will investigate a number of
important research questions, including: (1) What are the requirements
for consumer-facing, open source, scientific energy information
infrastructure? (2) What are the strengths and weaknesses of a dedicated
social network technology like eSpheres for energy behavior change? (3)
What combination of behavioral change motivators, under what conditions,
induce positive change? (4) What factors influence the sustainability of
these changes? (5) What is the influence of energy data feedback latency
(i.e. 1 minute, 15 minutes, 1 hour, 1 day) on behavioral change?
}
}

@TechReport{csdl2-09-16,
  author = \t {Myriam Leggieri},
  title = \t {Linked Data applied to Collaborative Software Development: A case study of Hackystat},
  institution =  "University of Bari, Italy",
  NUMBER = {{CSDL}-09-16},
  year = \t {2009},
  keywords =   {Hackystat, Thesis-MS},
  month = \t {December},
  url = {http://csdl.ics.hawaii.edu/techreports/2009/09-16/09-16.pdf},
  abstract = {
This thesis investigates a new way to take advantage of RDF metadata to
support Collaborative Software Development. RDF metadata helps developers
overcome typical problems in iterative software development, such as:
exceptions thrown at run-time; making design and implementation decisions
within previously unknown domains; and usage of previously unknown tools or
libraries. Solutions usually consist of searching for suggestions from
forum posts, source code of similar projects, direct contact with specific
experts, etc.  The main problems with this approach are the time wasted in
manually detecting the searched info from unstructured documents, the low
effectiveness of search engines, and the lack of information about the
actual expertise of the directly contacted people.

In contrast, having info about projects and issues semantically structured
with RDF metadata can speed up detection of the searched details.  Dynamic
creation of RDF links with external similar RDF metadata allows users to
avoid searching or analyzing search results.  Finally, metadata about users
including quality measures coming from a trustworthy source such as
Telemetry can allow the user to trust the actual developer's
expertise. Such RDF metadata and links, together with HTTP URIs, is
provided by the Hackystat LinkedSensorData (LiSeD) service.
}
}

@TechReport{csdl2-09-17,
  author = \t {Herve Weitz},
  title = \t {Applying Case-Based Reasoning for Building Autonomic Service-Oriented Systems},
  institution =  "University of Limerick, Ireland",
  NUMBER = {{CSDL}-09-17},
  year = \t {2009},
  keywords =   {Hackystat, Thesis-MS},
  month = \t {September},
  url = {http://csdl.ics.hawaii.edu/techreports/2009/09-17/09-17.pdf},
  abstract = {
Service-oriented computing is considered as a successful approach building
large-scale software systems, spanning the internet, and globally improving
software reuse. Service-oriented architectures are complex and hard to
maintain. A service may run on many machines, and single machines may host
many services. The concept of distributed composition of services hides a
huge amount of complexity in the management of the service-oriented
architecture. Users have to deal with complex configuration of services to
achieve functional and quality requirements, thus the complexity of the
system requires a lot of administrator-interference. Despite the effort of
the administrator, the configuration may not be good enough. It is hard for
an administrator to monitor individual services and the service-oriented
system to determine if the system is running optimal. Therefore a growing
trend for autonomic service-oriented systems has emerged. In mid-october
2001, IBM released a manifesto that the main obstacle to further progress
in the IT industry is a looming software complexity crisis. The manifesto
claimed that the difficulty of managing today's computer systems goes well
beyond the administration of individual software environments. Computing
system's complexity appears to be approaching the limits of human
capability, and there will be no way to make timely, decisive responses to
the rapid stream of changing and conflicting. This dissertation discusses
autonomic computing in service-oriented computing. We present a framework
that builds the foundation for self-healing, self-reconfiguration,
self-optimization and selfprotecting service-oriented systems. We apply and
implement the framework to Hackystat, an Open Source Software developed at
University of Hawaii. Furthermore we discuss the role of service-oriented
computing in autonomic computing, which plays a fundamental role for the
relationship between autonomic elements. At the end, we achieved to provide
a global overview in the domain of autonomic and service-oriented computing
and how to combine them in bidirectional ways. We implemented an open
source framework called, Hackystat Service Manager, for achieving an
autonomic service-oriented architecture in Hackystat in the scope of Google
Summer of Code, which can be evolved and evaluated or adapted to any other
service-oriented system.

}
}


@TechReport{csdl2-10-02,
  author = \t {Robert S. Brewer},
  title = \t {Fostering Sustained Energy Behavior Change and Increasing Energy Literacy In A Student Housing Energy Competition},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-10-02},
  year = \t {2010},
  keywords =   {Sustainability, Thesis-Proposals, WattDepot, KukuiCup},
  month = \t {May},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-02/10-02.pdf},
  abstract = {
The world is in the grip of a crisis in the way energy is produced and consumed. Climate change represents a huge threat to the modern way of life, particularly for island communities like Hawaii. Many changes to our energy system will be required to resolve the crisis, and one promising part of the solution is reducing energy usage through changes in behavior. Energy usage in similar homes can differ by a factor of two to four times, demonstrating the potential contribution of behavior change to the crisis.

This research project seeks to find ways to foster sustainable changes in behavior that lead to reduced energy usage. The research will be conducted in the context of a dorm energy competition on the UH Manoa campus in October 2010. Power meters will be installed on each floor of two freshmen residence halls. Each floor will compete to use the least energy during the 4 week competition.

A competition website will be created, where participants can log in to view near-realtime data about their floor's power usage, and also select from a variety of tasks to perform. Each task is designed to increase the participant's energy literacy (knowledge, positive attitudes, and behaviors related to energy), and a certain number of points are assigned for the completion of each task. The points provide a parallel competition to motivate participants to perform the tasks. Prizes will be awarded to floors using the least energy, and participants obtaining the most points.

Several research questions will be investigated using the data collected, including how energy usage changed after the competition is over, whether the website tasks affected energy literacy, and whether floors that had higher energy literacy had more sustained energy conservation after the competition was complete. The research questions will be investigated using energy data from the meters, log files from the website, and an energy literacy survey administered before and after the competition.
}
}


@TechReport{csdl2-10-03,
  author = \t {Philip M. Johnson},
  title = \t {The {K}ukui {C}up: Proposal for a {UH} Residence Hall Energy Competition},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-10-03},
  year = \t {2010},
  keywords =   {Sustainability, WattDepot, KukuiCup},
  month = \t {February},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-03/10-03.pdf},
  abstract = {
Kukui nut oil was used by ancient Hawaiians to light their homes.  In honor
of this original form of energy in the islands, we propose to design and
implement a Dorm Energy Competition for the University of Hawaii called the
\`\`Kukui Cup''.   It will be held for the first time during the month of October,
2011.  The three goals of this project are: (1) Improve the energy literacy
of participating students; (2) Conduct innovative research in information
technology for energy-related behavioral change; and (3) Save money for the
university by reducing energy costs.  As part of this project, we will
implement a new web application to provide information regarding UH Dorm
Energy in general and the Kukui Cup competition in particular.  This
software will also support research on energy behavior by the Collaborative
Software Development Laboratory in the Department of Information and
Computer Sciences.  We propose to hold the October, 2011 dorm energy
competition in three freshman dorms, and then expand the program to include
more dorms in future years.
}
}

@TechReport{csdl2-10-04,
  author = \t {George E. Lee},
  title = \t {Makahiki: An Extensible Open-Source Platform for Creating Energy Competitions},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-10-04},
  year = \t {2010},
  keywords =   {Sustainability, Thesis-Proposals, WattDepot, KukuiCup, Makahiki},
  month = \t {December},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-04/10-04.pdf},
  abstract = {
Because of our ever-increasing population and our limited natural resources, improving the energy literacy of the population is becoming increasingly important.  A way to promote these habits is to hold energy competitions to see who can reduce their energy usage the most.  A popular place to hold these competitions are in University dorms, where students are making the transition from living with their parents to living on their own.  Holding these competitions are a great way to educate the student population, but the development of the competition can be costly.  Besides prizes for the winning individuals/dorms, creating and maintaining a development website can take a lot of time.  Some groups have turned to software development firms that provide the software and hardware, but at a cost.

We propose a system called Makahiki that will provide a free, open-source, and easy to implement solution.  Using other open source tools such as WattDepot, we aim to create a configurable package for organizations who hope to hold their own energy competitions.  To test our implementation, we will be holding a dorm energy competition here at the University of Hawaii at Manoa in October 2011.  We will also test the configurability of our system by implementing another organization's dorm energy competition website.
}
}


@inProceedings{csdl2-10-05,
  author = \t {Robert S. Brewer and Philip M. Johnson},
  title = \t {{WattDepot}: An open source software ecosystem for enterprise-scale energy data collection, storage, analysis, and visualization},
  booktitle = {Proceedings of the First International Conference on Smart Grid Communications},
  pages = {91-95},
  address = {Gaithersburg, MD},
  year = \t {2010},
  keywords =   {Sustainability, WattDepot, SmartGrid, Publications-Conferences},
  month = \t {October},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-05/10-05.pdf},
  abstract = {
  WattDepot is an open source, Internet-based, service-oriented framework
  for collection, storage, analysis, and visualization of energy data.
  WattDepot differs from other energy management solutions in one or more
  of the following ways: it is not tied to any specific metering
  technology; it provides high-level support for meter aggregation and data
  interpolation; it supports carbon intensity analysis; it is
  architecturally decoupled from the underlying storage technology; it
  supports both hosted and local energy services; it can provide near-real
  time data collection and feedback; and the software is open source and
  freely available.  In this paper, we introduce the framework, provide
  examples of its use, and discuss its application to research and
  understanding of the Smart Grid.
}
}

@TechReport{csdl2-10-06,
  author = \t {Robert S. Brewer and Philip M. Johnson},
  title = \t {{WattDepot}: Enterprise-scale, sensor-based energy data collection and analysis},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-10-06},
  year = \t {2010},
  keywords =   {Sustainability, WattDepot, SmartGrid},
  month = \t {May},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-06/10-06.pdf},
  abstract = {
Enterprise-scale energy data collection and analysis is becoming increasingly important with the advent of the "Smart" grid. We have developed and released an open source, sensor-based system called WattDepot for collecting, storing and analyzing energy data to fill this niche that is greater than individual households but less than entire utility grids. WattDepot is designed to allow data collection from a wide variety of energy production and consumption devices, and to support diverse visualizations and delivery of the data. We are using WattDepot to support a campus dormitory energy competition for Fall 2010. Since the process of selecting, purchasing, and installing the meters is ongoing, we have developed an end-to-end simulation of dorm energy to ensure that the WattDepot software sensors would work with any of the chosen meters. WattDepot's sensor-based, service-oriented architecture makes it useful to a wide variety of energy application domains.
}
}

@inProceedings{csdl2-10-07,
  author = \t {Robert S. Brewer and George E. Lee and Philip M. Johnson},
  title = \t {The {Kukui Cup}: a Dorm Energy Competition Focused on Sustainable Behavior Change and Energy Literacy},
  booktitle = {Proceedings of the 44th Hawaii International Conference on System Sciences},
  year = \t {2011},
  pages = {1-10},
  keywords =   {Sustainability, WattDepot, KukuiCup, Makahiki, Publications-Conferences, Gamification},
  month = \t {January},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-07/10-07.pdf},
  abstract = {
The Kukui Cup is an advanced dorm energy competition whose goal is to
investigate the relationships among energy literacy, sustained energy
conservation, and information technology support of behavior change. Two
general purpose open source systems have been implemented: WattDepot and
Makahiki. WattDepot provides enterprise-level collection, storage, analysis,
and visualization of energy data. Makahiki is a web application framework that
supports dorm energy competitions of varying degrees of complexity,
including a personalized homepage where participants can complete tasks
designed to increase energy literacy that can be verified by competition
administrators. The technology and approach will be evaluated in a dorm energy
competition to take place in the Spring of 2011, with hundreds of University
freshmen. The energy use of each pair of dormitory floors will be metered in
near-realtime, and the energy literacy of participants will be assessed before
and after the competition.
}
}

@inProceedings{csdl2-10-09,
  author = \t {Pavel Senin},
  title = \t {Software Trajectory Analysis: An empirically based method for automated software process discovery},
  booktitle = {Proceedings of the Fifth International Doctoral Symposium on Empirical Software Engineering},
  year = \t {2010},
  keywords =   {Trajectory, Hackystat, Publications-Conferences},
  month = \t {September},
  address = {Bolzano-Bozen, Italy},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-09/10-09.pdf},
  abstract = {
A process defines a set of routines which allow one to organize, manage and improve activities in order to reach a goal. With expert intuition and a-priori knowledge, software processes have been modeled for a long time, resulting in the Waterfall, Spiral and other development models. Later, with the wide use of SCM systems and the public availability of primitive software process artifact trails, formal methods such as Petri Nets, State Machines and others have been applied to the problem of recurrent process discovery and control. Recent advances in metrics effort, increased use of continuous integration, and extensive documentation of the performed process make information-rich fine-grained software process artifacts trails available for analysis. This fine-grained data has the potential to shed new light on the software process. In this work I propose to investigate an automated technique for the discovery and characterization of recurrent behaviors in software development - "programming habits" either on an individual or a team level.
}
}

@PhdThesis{csdl2-10-08,
  author = \t {Robert S. Brewer},
  title = \t {Fostering Sustained Energy Behavior Change And Increasing Energy Literacy In A Student Housing Energy Challenge},
  school = \t {University of Hawaii, Department of Information and Computer Sciences},
  year = \t {2013},
  URL = {http://csdl.ics.hawaii.edu/techreports/2010/10-08/10-08.pdf},
  month = \t {March},
  KEYWORDS = {Sustainability, KukuiCup, WattDepot, Thesis-PhD},
  abstract = {
We designed the Kukui Cup challenge to foster energy conservation and increase energy literacy. Based on a review of the literature, the challenge combined a variety of elements into an overall game experience, including: real-time energy feedback, goals, commitments, competition, and prizes.

We designed a software system called Makahiki to provide the online portion of the Kukui Cup challenge. Energy use was monitored by smart meters installed on each floor of the Hale Aloha residence halls on the University of Hawai\`i at Manoa campus.

In October 2011, we ran the UH Kukui Cup challenge for the over 1000 residents of the Hale Aloha towers. To evaluate the Kukui Cup challenge, I conducted three experiments: challenge participation, energy literacy, and energy use.

Many residents participated in the challenge, as measured by points earned and actions completed through the challenge website. I measured the energy literacy of a random sample of Hale Aloha residents using an online energy literacy questionnaire administered before and after the challenge. I found that challenge participants' energy knowledge increased significantly compared to non-challenge participants. Positive self-reported energy behaviors increased after the challenge for both challenge participants and non-participants, leading to the possibility of passive participation by the non-challenge participants.

I found that energy use varied substantially between and within lounges over time. Variations in energy use over time complicated the selection of a baseline of energy use to compare the levels during and after the challenge. The best team reduced its energy use during the challenge by 16\\%. However, team energy conservation did not appear to correlate to participation in the challenge, and there was no evidence of sustained energy conservation after the challenge. The problems inherent in assessing energy conservation using a baseline call into question this common practice.

My research has generated several contributions, including: a demonstration of increased energy literacy as a result of the challenge, the discovery of fundamental problems with the use of baselines for assessing energy competitions, the creation of two open source software systems, and the creation of an energy literacy assessment instrument.
}
}


@TechReport{csdl2-10-11,
  author = \t {Todd Baumeister},
  title = \t {Literature Review on Smart Grid Cyber Security},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-10-11},
  year = \t {2010},
  keywords =   {Sustainability, SmartGrid},
  month = \t {December},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-11/10-11.pdf},
  abstract = {
The current U.S. electrical power grid is an out-of-date
infrastructure, and the Smart Grid is an upgrade that
will add many new functionalities to meet customers' new
power requirements. Updating a system as complex as the
electrical power grid has the potential of introducing
new security vulnerabilities into the system. This
document presents a review of the work related to Smart
Grid cyber security. The work reviewed is separated into
five categories that make up different components of the
Smart Grid: Process Control System (PCS) Security, Smart
Meter Security, Power System State Estimation Security,
Smart Grid Communication Protocol Security, and Smart
Grid Simulation for Security Analysis. The Smart Grid is
a large complex system, and it still requires a lot of
cyber security design work.  }
}



@Misc{csdl2-10-12,
  author = \t {Philip M. Johnson and Robert S. Brewer},
  title = \t {Poster: WattDepot: Open Source Software for Energy Data Collection and Analysis},
  howpublished = {Behavior, Energy, and Climate Change (BECC) 2010 Poster Session, Sacramento, CA},
  month = \t {November},
  url = {http://csdl.ics.hawaii.edu/techreports/2010/10-12/10-12.pdf},
  keywords =   {Sustainability, KukuiCup},
  abstract = {This poster presents the components of the WattDepot system and early experiences with its use.},
  year = \t 2010}
  
  
@MastersThesis{csdl2-11-01,
  author = \t {George E. Lee},
  title = \t {Makahiki: An extensible open-source platform for creating energy competitions},
  school =  "University of Hawaii",
  number = {{CSDL}-11-01},
  year = \t {2012},
  keywords =   {Makahiki, Thesis-MS},
  month = \t {June},
  url = {http://csdl.ics.hawaii.edu/techreports/2011/11-01/11-01.pdf},
  abstract = {
Due to rising costs and the questionable future of our non-renewable energy reserves,
individuals need to become aware of their energy usage. In order to instill these habits earlier,
organizations have held energy competitions to promote the reduction of energy. This also has the
side effect of reducing the energy cost to the organization holding the competition. Typically, these
competitions are held in colleges and universities and there are companies that can provide hardware
and software to support them. However, since such solutions can be expensive, we would like a free,
open source solution that can be used by any organization.
We created Makahiki to be an open source framework for sustainability competitions. We
also designed it to be a platform for researchers to investigate user behaviors during an energy competition. However, in order to validate our design, we need to evaluate and test our design. During
the course of development, we had three evaluation phases. In the mockup phase, we validated our
design before doing any implementation. In the onboarding phase, we investigated how individuals
will interact with the system when they visit it for the first time. Finally, in the beta phase, we simulated the competition on a much smaller scale in order to observe how Makahiki might be used in
an actual competition. Following these evaluations, Makahiki was used to support the 2011 Kukui
Cup, which was held in mid-October.
In summary, we claim the following contributions:
1. An open source system for creating serious games for energy competitions.
2. A research platform on which researchers can observe user behavior during energy competitions.
3. A methodology for evaluating and testing serious games that involve competitions over a
period of time.
}}

@inProceedings{csdl2-11-02,
  author = \t {Robert S. Brewer and George E. Lee and Yongwen Xu and Caterina Desiato and Michelle Katchuck and Philip M. Johnson},
  title = \t {{Lights Off. Game On.} {The Kukui Cup}: A Dorm Energy Competition},
  booktitle = {Proceedings of the CHI 2011 Workshop on Gamification},
  year = \t {2011},
  keywords =   {Sustainability, KukuiCup, Publications-Workshops, Gamification},
  month = \t {May},
  address = {Vancouver, Canada},
  url = {http://csdl.ics.hawaii.edu/techreports/2011/11-02/11-02.pdf},
  abstract = {
Our research seeks to investigate the relationships
among energy literacy, sustained energy conservation,
and information technology support of behavior change
through an advanced dorm energy competition to take
place in Fall 2011. Game design techniques are used to
attract competition participants, keep them engaged,
and have a lasting impact in their energy use behavior
through retained knowledge of energy obtained via the
game environment.
}
}



@inProceedings{csdl2-11-03,
  author = \t {Robert S. Brewer},
  title = \t {The {Kukui Cup}: Shaping everyday energy use via a dorm energy competition},
  booktitle = {Proceedings of the CHI 2011 Workshop on Everyday Practice and Sustainable HCI},
  year = \t {2011},
  keywords =   {Sustainability, KukuiCup, Publications-Workshops},
  month = \t {May},
  address = {Vancouver, Canada},
  url = {http://csdl.ics.hawaii.edu/techreports/2011/11-03/11-03.pdf},
  abstract = {
Our research seeks to investigate the relationships
among energy literacy, sustained energy conservation,
and information technology support of behavior change
through an advanced dorm energy competition to take
place in Fall 2011. The competition will attempt to
foster changes in participants' everyday energy use by
increasing their energy literacy and changing their
habits through activities performed during the
competition.
}
}

@TechReport{csdl2-11-07,
  author = \t {George E. Lee and Yongwen Xu and Robert S. Brewer and Philip M. Johnson},
  title = \t {Makahiki: An Open Source Game Engine for Energy Education and Conservation},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-11-07},
  year = \t {2012},
  keywords =   {Makahiki, Sustainability, KukuiCup, Gamification},
  month = \t {January},
  url = {http://csdl.ics.hawaii.edu/techreports/2011/11-07/11-07.pdf},
  abstract = {
  The rising cost, increasing scarcity, and environmental impact of fossil
  fuels as an energy source makes a transition to cleaner, renewable energy
  sources an international imperative.  This paper presents Makahiki, an open
  source game engine for energy education and conservation. Developed for a
  residence hall energy competition, Makahiki facilitates the implementation of
  \`\`serious games'' that motivate players to learn about energy issues,
  improve their intuition about energy consumption, and understand how to use energy more
  efficiently in their normal life.  Initial deployment of Makahiki at the
  University of Hawaii in Fall 2011 has revealed useful insights into its game
  mechanics, ways to improve the next Kukui Cup challenge, and insights
  into the changes we need to make to better facilitate adaptation to other energy contexts.
}
}


@TechReport{csdl2-11-08,
  author = \t {Philip M. Johnson},
  title = \t {Results from the {Kukui Cup} Anonymous Questionnaire for {RAs}},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-11-08},
  year = \t {2011},
  keywords =   {Sustainability, KukuiCup},
  month = \t {Nov},
  url = {http://csdl.ics.hawaii.edu/techreports/2011/11-08/11-08.pdf},
}

@inproceedings{csdl2-11-10,
    title={Recognizing recurrent development behaviors corresponding to Android OS release life-cycle},
    author={Pavel Senin},
    booktitle={Proceedings of the 2012 International Conference on Software Engineering Research and Practice},
    month={May},
    address={Las Vegas, NV},
   keywords =   {Trajectory, Hackystat, Publications-Conferences},
  url = {http://csdl.ics.hawaii.edu/techreports/2011/11-10/11-10.pdf},
   year={2012},
   abstract= {
Within the field of software repository mining
(MSR) researchers deal with a problem of discovery of interesting
and actionable information about software projects. It is
a common practice to perform analyzes on the various levels
of abstraction of change events, for example by aggregating
change-events into time-series. Following this, I investigate
the applicability of SAX-based approximation and indexing of
time-series with tf*idf weights in order to discover recurrent
behaviors within development process. The proposed workflow
starts by extracting and aggregating of revision control data
and followed by reduction and transformation of aggregated
data into symbolic space with PAA and SAX. Resulting SAX
words then grouped into dictionaries associated with software
process constraints known to influence behaviors, such as time,
location, employment, etc. These, in turn, are investigated with
the use of tf*idf statistics as a dissimilarity measure in order
to discover behavioral patterns.
As a proof of the concept I have applied this technique to
software process artifact trails corresponding to Android OS1
development, where it was able to discover recurrent behaviors
in the \`\`new code lines dynamics'' before and after release.
By building a classifier upon these behaviors, I was able to
successfully recognize pre- and post-release behaviors within
the same and similar sub-projects of Android OS.}
}


@TechReport{csdl2-11-12,
  author = \t {Robert S. Brewer},
  title = \t {Results from Energy Audit of {H}ale {A}loha},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-11-12},
  year = \t {2012},
  keywords =   {Sustainability, KukuiCup},
  month = \t {Jan},
  url = {http://csdl.ics.hawaii.edu/techreports/2011/11-12/11-12.pdf},
}

@Misc{csdl2-11-14,
  author = \t {Kaveh Abhari and Hana Bowers and Robert S. Brewer and Gregory Burgess and Caterina Desiato and Philip M. Johnson and Michelle Katchuck and Risa Khamsi and George E. Lee and Yongwen Xu and Alex Young and Chris Zorn},
  title = \t {Poster: Lights Off.  Game On.  The 2011 Kukui Cup},
  howpublished = {Behavior, Energy, and Climate Change (BECC) 2011 Poster Session, Washington, DC.},
  month = \t {November},
  url = {http://csdl.ics.hawaii.edu/techreports/2011/11-14/11-14.pdf},
  keywords =   {Sustainability, KukuiCup},
  abstract = {This poster presents the Kukui Cup energy challenge and early results from its use in 2011.},
  year = \t 2011}


@TechReport{csdl2-12-02,
  author = \t {Matthias Fripp and Philip M. Johnson and Alexandar Kavcic and Anthony Kuh and Dora Nakafuji},
  title = \t {A proposal for a smart, sustainable microgrid for the University of Hawaii at Manoa campus},
  institution =  "Department of Information and Computer Sciences,
\t\t  University of Hawaii, Honolulu, Hawaii 96822",
  NUMBER = {{CSDL}-12-02},
  year = \t {2012},
  keywords =   {Sustainability, SmartGrid},
  month = \t {February},
  url = {http://csdl.ics.hawaii.edu/techreports/2012/12-02/12-02.pdf},
  abstract = {
The state of Hawaii is more dependent on oil than any other state in the nation, using it for most electricity generation as well as transportation. The state-sponsored Hawaii Clean Energy Initiative calls for Hawaii to sharply reduce this dependence, obtaining 70 percent of its energy from clean energy sources by 2030. The University of Hawaii is playing a major role in this effort by conducting research, education, and workforce training in energy and sustainability. The project considers both theoretical and practical aspects of response, control and status on a local, interconnected sub-system of the grid and elucidates its behavior when distributed renewable energy sources are added. The result will be a smart, sustainable microgrid. Four interlinked research projects will be integrated into a graduate and undergraduate education program on smart grids, renewable energy, and energy efficiency.
}
}

@inProceedings{csdl2-12-06,
  author = \t {Philip M. Johnson and Yongwen Xu and Robert S. Brewer and Carleton A. Moore and George E. Lee and Andrea Connell},
  title = \t {{Makahiki+WattDepot}: An open source software stack for next generation energy research and education},
  booktitle = {Proceedings of the 2013 Conference on Information and Communication Technologies for Sustainability (ICT4S)},
  year = \t {2013},
  keywords =   {Sustainability, Makahiki, WattDepot, KukuiCup, Publications-Conferences},
  month = \t {February},
  url = {http://csdl.ics.hawaii.edu/techreports/2012/12-06/12-06.pdf},
  abstract = {
Satisfying the radically different requirements and operating assumptions of the next generation smart grid requires new kinds of software that enable research and experimentation into the ways that electrical energy production and consumption can be collected, analyzed, visualized, and provided to consumers. Since 2009, we have been designing, implementing, and evaluating an open source software \`\`stack'' to facilitate this research. This software stack consists of two custom systems called WattDepot and Makahiki, along with the open source components they rely upon (Java, Restlet, Postgres, Python, Django, Memcache). In this paper, we detail the novel features of WattDepot and Makahiki, our experiences using them for research and education, and additional ways they can be used for next generation energy research and education.
}
}

@inProceedings{csdl2-12-08,
  author = \t {Philip M. Johnson and Yongwen Xu and Robert S. Brewer and George E. Lee and Michelle Katchuck and Carleton A. Moore},
  title = \t {Beyond {kWh}: {M}yths and fixes for energy competition game design},
  booktitle = {Proceedings of Meaningful Play 2012},
  pages = {1-10},
  year = \t {2012},
  keywords =   {Sustainability, KukuiCup, Publications-Conferences},
  month = \t {October},
  url = {http://csdl.ics.hawaii.edu/techreports/2012/12-08/12-08.pdf},
  abstract = {

  The Kukui Cup project investigates the use of \`\`meaningful play'' to facilitate energy awareness, conservation and behavioral change.  Each Kukui Cup Challenge combines real world and online environments in an attempt to combine information technology, game mechanics, educational pedagogy, and incentives in a synergistic and engaging fashion.  We challenge players to: (1) acquire more sophistication about energy concepts and (2) experiment with new behaviors ranging from micro (such as turning off the lights or installing a CFL) to macro (such as taking energy-related courses, joining environmental groups, and political/social advocacy.)

 To inform the design of the inaugural 2011 Kukui Cup, we relied heavily on prior collegiate energy competitions, of which there have been over 150 in the past few years.  Published accounts of these competitions indicate that they achieve dramatic reductions in energy usage (a median of 22\\%) and cost savings of tens of thousands of dollars.  In our case, the data collected from the 2011 Kukui Cup was generally in agreement, with observed energy reductions of up to 16\\% when using data collection and analysis techniques typical to these competitions.  However, our analysis process caused us to look more closely at the methods employed to produce outcome data for energy competitions, with unexpected results.

 We now believe that energy competitions make significant unwarranted assumptions about the data they collect and the way they analyze them, which calls into question both the accuracy of published results from this literature and their effectiveness as serious games.  We believe a closer examination of these issues by the community can help improve the design not only of future energy challenges, but other similar forms of serious games for sustainability.

 In this paper, we describe the Kukui Cup, the design myths it uncovered, and the fixes we propose to improve future forms of meaningful play with respect to energy in particular and serious games in general.

}
}



@Article{csdl2-12-11,
  author = \t {Philip M. Johnson},
  title = \t {Searching under the streetlight for useful software analytics},
  journal = \t {{IEEE} Software},
  keywords =     {PSP, Leap, Hackystat, Publications-Journals},
  year = \t {2013},
  month =\t {July},
  url = {http://csdl.ics.hawaii.edu/techreports/2012/12-11/12-11.pdf},
  abstract = {
For more than 15 years, researchers at
the Collaborative Software Development
Laboratory (CSDL) at the University
of Hawaii at Manoa have looked
for analytics that help developers
understand and improve development
processes and products. Through this
research, we’ve come to believe that the
“searching under the streetlight” metaphor
is useful for understanding both
our research and that of others in this
area.
}

}

@inProceedings{csdl2-12-12,
  author = \t {Robert S. Brewer and Yongwen Xu and George E. Lee and Michelle Katchuck and Carleton A. Moore and Philip M. Johnson},
  title = \t {Energy Feedback for Smart Grid Consumers: Lessons Learned from the {Kukui Cup}},
  booktitle = {Proceedings of Energy 2013},
  pages = {120-126},
  year = \t {2013},
  keywords =   {Sustainability, KukuiCup, Makahiki, Publications-Conferences},
  month = \t {March},
  url = {http://csdl.ics.hawaii.edu/techreports/2012/12-12/12-12.pdf},
  abstract = {
To achieve the full benefits of the Smart Grid, end users must become active participants in the energy ecosystem. This paper presents the Kukui Cup challenge, a serious game designed around the topic of energy conservation which incorporates a variety of energy feedback visualizations, a multifaceted serious game with online educational activities, and real-world activities such as workshops and excursions. We describe our experiences in developing energy feedback visualizations in the Kukui Cup based on in-lab evaluations and field studies in college residence halls. We learned that energy feedback systems should address these factors: they should be actionable, that domain knowledge must go hand in hand with energy feedback systems, and that this feedback must be \`\`sticky'' to lead to changes in behaviors and attitudes.
}
}

@TechReport{csdl2-12-14,
  author = \t {Sara K. Cobble},
  title = \t {Encouraging Environmental Literacy on Campus: A Case Study of the Kukui Cup},
  institution =  "College of Humanities and Social Sciences,
                  Hawaii Pacific University, Honolulu, Hawaii",
  NUMBER = {{CSDL}-12-14},
  year = \t {2012},
  keywords =   {Sustainability, Makahiki, KukuiCup},
  month = \t {December},
  url = {http://csdl.ics.hawaii.edu/techreports/2012/12-14/12-14.pdf},
  abstract = { Environmental literacy measures a person's understanding of ecological
                  principles and the ways in which human systems interact with the
                  environment. It falls on a continuum of varying degrees of aptitude,
                  from nominal to functional to operational, and includes behaviors,
                  attitudes, concerns and knowledge about the environment (Roth,
                  1992). This skill-set comprises both cognitive and affective types of
                  knowledge. A high level of environmental literacy will be necessary to
                  navigate a future in which these skills are needed (King,
                  2000). Unfortunately, only 1-2 percent of American adults are considered
                  environmentally literate (Coyle, 2006).  Environmental education, the
                  key for producing environmentally literate citizens, has been on the
                  rise since it emerged in the 1970s. At the university level, the number
                  of sustainability programs and initiatives is inspiring (Shephard,
                  2006).  However, many of the changes in higher education have been on
                  physical campuses and not inside the classroom, and sustainability is
                  seen more as a prescriptive fix than a radical change in attitude,
                  concern, knowledge and behavior (Sherman, 2008; 2011).  A recent trend
                  on university campuses has been energy-saving competitions in university
                  buildings and on-campus dormitories — over 150 of these competitions
                  have taken place in the last few years, with median energy reductions of
                  22 percent (Johnson et al, 2011). This paper is a case study of one of
                  those competitions: the Kukui Cup at Hawai'i Pacific University
                  (HPU). In the three-weeklong competition, students living on campus
                  played an online game and participated in associated educational
                  activities using resources from the Collaborative Software Design
                  Laboratory at the University of Hawaii at Mānoa. The Kukui Cup was an
                  attempt to use gamification techniques, competition and technology to
                  encourage changes in environmental behaviors, attitudes, concerns and
                  knowledge of oncampus residents, with hopes of improving their overall
                  levels of energy and environmental literacy. This study aims to answer
                  the questions: What is the level of environmental literacy of dorm
                  residents at HPU, and how is it affected by participation in an
                  on-campus energy-saving competition?  }
}


`;
const bibFile = bibtex.parseBibFile(bibString2);


console.log('Finished build-techreports');
