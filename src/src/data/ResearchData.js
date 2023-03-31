export default function getResearchData() {
  return [
    {
      date: '1991 - 1994',
      project: 'CLARE',
      keyword: 'CLARE',
      text: 'Represent human learning of scientific literature to support useful computational manipulations.',
      media: 'images/clare-small.png',
      bigImage: 'images/clare-big.png',
      longText: `
The goal of CLARE research was to construct a useful representation for human learning of scientific literature that also supports useful computational manipulations. The combination of the representation and related computational services should actually lead to improved performance by learners on selected collaborative learning tasks.

Knowledge representation is not only fundamental to machine learning, but is also essential to human learning. However, few existing learning support systems provide representations which help the learner make sense of and organize the subject content of learning, integrate a wide range of classroom activities, and compare and contrast various viewpoints from individual learners.

CLARE is an Egret-based system designed to investigate issues in computer-mediated collaborative learning. This system provides a data and process model implementing a novel meta-cognitive framework for knowledge construction. CLARE facilitates seminar-style environments for review and critique of scientific literature.

We believe that collaborative learning is an active knowledge construction process and assert that knowledge representation plays an essential role in achieving a high level of collaborative support. Our approach involves the definition of a representational framework, called RESRA, which characterizes the thematic structure of learning and research artifacts. We then developed a computer-based tool, CLARE, that facilitates the use of RESRA for various collaborative learning tasks. Finally, we employed a case study to empirically assess the effectiveness of CLARE and these research claims.

CLARE was evaluated through a case study with sixteen usage sessions involving six groups of students from two classes. The case study included a total of about 300 hours of usage and over 80,000 timestamps.

A survey of CLARE’s sessions shows that about 70% of learners think that CLARE provides a novel way of understanding scientific text, and about 80% of learners think that CLARE provides a novel way of understanding their peers’ perspectives. The analysis of the CLARE database also reveals that learners differ greatly in their interpretations of RESRA, strategies for comprehending the online text, and understanding of the selected artifact. We also found that, despite the large amount of time spent on summarization, up to 66% of these learners often fail to correctly represent important features of scientific text and the relationships between those features.
`,
    },
    {
      date: '1993 - 1994',
      project: 'URN',
      keyword: 'URN',
      text: 'Explore representations and processes needed to model user interests and predict relevency of usenet postings.',
      media: 'images/urn-small.png',
      bigImage: '',
      longText: `
URN was an Egret-based system designed to address the “information explosion” that occurs through use of world-wide information resources such as the Internet USENET newsgroups, gopher, and so forth. The problems in filtering relevant and useful knowledge from the avalanche of unrelated, low quality, or outdated information posted and accessible is well-known.

URN attempted to exploit collaboration among people with similar interests to support incremental restructuring, classification, and filtering of these information sources. A prototype collaborative newsreader has been implemented and evaluated to test these mechanisms.

Effective utilization of Usenet can be improved through explicitly collaborative efforts among small groups of people with similar interests who work together to retrieve, filter, and ultimately restructure information produced by Usenet into a form amenable to their own needs.

URN was designed to explore the representations and processes needed to provide a model of the interests of individuals within the group that can be used to predict the relevancy of future Usenet contributions. URN users collaboratively and incrementally create a shared, global representation of the content of each Usenet posting, but individually assess its relevancy to their own personal interests. The collaboration minimizes the overhead to any individual of this annotation, while improving the quality of the data used for relevancy assessment.

Significantly, URN did not require users to agree upon a common single measure of relevancy – URN maintains a separate model of each user’s interests. Instead, URN users focus their collaborative efforts on building a shared representation of each article’s content and structure.

URN was evaluated internally by members of CSDL through a case study involving newsgroup reading. Metrics were collected on user voting behavior in order to show that URN improves the Usenet reading experience.
`,
    },
    {
      date: '1994 - 1995',
      project: 'AEN',
      keyword: 'AEN',
      text: 'Process and tool support for the development of high quality, jointly-authored hypertext documents.',
      media: 'images/aen-small.png',
      bigImage: 'images/aen-big.png',
      longText: `
The goal of AEN research was to develop a better understanding of the nature of collaborative hypertext authoring. AEN research was intended to provide insight into the process and tool support required for the development of high quality, jointly-authored hypertext documents.

With the advent of the World Wide Web, the use of hypertext as a structuring mechanism for richly interdependent information has become ubiquitous. With its rich mechanisms for distribution, the web also allows authors to collaboratively build work products by weaving together smaller sections into an interlinked whole. Unfortunately, relatively little is known about the process of such “collaborative hypertext construction”, and current authoring support consists of little more than traditional configuration control mechanisms. Without an understanding of the appropriate way to collaboratively construct hypertext documents and without appropriate tool support, such jointly authored work products can suffer from quality problems ranging from inconsistency to incompleteness to even incoherency.

AEN research is based upon the notion of a continuum of collaboration, ranging from “weak” collaboration to “strong” collaboration. In strong collaboration, each participant contributes to the construction of every component of the document, and gains new knowledge as a direct result of this construction. The constructed document is not simply a patchwork of individual contributions, but instead, an incremental, emergent synthesis that reflects the knowledge created by the group as a whole. Strong collaboration is the antithesis of a ‘divide and conquer’ approach, whereby the work product is simply sliced up into components, each of which is then developed independently and exclusively by a single author. We call this divide and conquer approach “weak” collaboration.

The AEN system provides tools designed to support a strongly collaborative approach to hypertext document construction. These tools include an access control mechanism, a feedback tool, a dynamic table of contents, a tool for representing virtual presence within the document, and an on-line chat facility.

To evaluate AEN, we performed a case study involving 15 students divided into three software teams who developed a software requirements specification hypertext document over the course of a semester. We hypothesized that use of AEN would lead to the presence of strongly collaborative practice among some of the groups.

During the case study, the three groups spent over 180 hours using AEN. They created 100 document nodes, 111 comment nodes, and 5 figure nodes. You can see an HTML version of the AEN database as it was on 12/13/94, although this representation loses much of the richness of the AEN environment.

To evaluate our hypothesis concerning strong collaboration, we devised five metrics for collaboration:

  * Readers per node (RPN) Measures the average number of readers per node for a group.
  * Editors per node (EPN) Measures the average number of editors per node for a group.
  * Feedback node creation (FNC) Measures the percentage of document nodes containing a link to a comment node.
  * Non-default access control (NAC) Measures the percentage of nodes whose access control has been changed from the default (which is no access for other members.)
  * Evolving Access Control (EAC) Measures the percentage of document nodes that have had their access control changed more than once.

High values for all of these metrics indicate the presence of strong collaboration, while uniformly low values indicate a divide and conquer approach, or weak collaboration. Our results indicate that strong collaboration was present to some extent in all the groups.
`,
    },
    {
      date: '1991 - 1996',
      project: 'CSRS',
      keyword: 'CSRS',
      text: 'The Computer Supported Review System enables declarative definition of review processes and instrumentation for data collection.',
      media: 'images/csrs-small.png',
      bigImage: 'images/csrs-big.gif',
      longText: `
CSRS was a computer-supported software review system that enabled declarative definition of review processes and provides instrumented data collection facilities.

Formal technical review (FTR) is a cornerstone of software quality assurance. However, the labor-intensive and manual nature of review, along with basic unresolved questions about its process and products, means that review is typically under-utilized or inefficiently applied within the software development process.

There were two primary goals for the CSRS research project:

  1. The design, implementation, and evaluation of a computer-supported software review system (CSRS) that enables declarative definition of review processes and provides instrumented facilities for gathering and analyzing review data. For this goal, our approach has been to incrementally design and evaluate the CSRS system over a period of several years, along with public release of the system for use by other research and industry sites.
  2. The use of CSRS as a laboratory testbed for studying differences between review methods under highly controlled conditions. For this goal, we have carried out one controlled experimental study thus far, involving a comparison of review methods designed to assess the impact of the review meeting on review cost and effectiveness. We further extended this research with a comparative analysis of this study with a similar study performed by Adam Porter at the University of Maryland. See the Research References section below for details.

Our results indicate that CSRS increases both the breadth and depth of information captured per person-hour of review time, and that its design captures interesting measures of review process, products, and effort.

Our study of review meetings found that meetings do not significantly increase defect detection effectiveness, but do increase overall review costs. Interestingly, our study also found that the student population studied greatly preferred the meeting-based method over the non-meeting-based method, and believed that the meeting-based method led to higher review quality, even though there was no empirical evidence to support this opinion!
`,
    },
    {
      date: '1995 - 1996',
      project: 'Flashmail',
      keyword: 'Flashmail',
      text: 'Investigate time-dependent electronic messages. One of the earliest "instant messaging" systems.',
      media: 'images/flashmail-small.png',
      bigImage: 'images/flashmail-big.gif',
      longText: `
The goal of Flashmail research was to investigate the nature of time-dependent electronic messages and to evaluate one form of tool support for such messages. Flashmail, to our knowledge, was the earliest implementation of an “instant messaging system”.

Although e-mail has many strengths as a computer-mediated communication (CMC) tool, it also has weaknesses. One problem with e-mail is lack of support for time-dependent messages—messages whose usefulness expires after a short period of time when they are not read. For example, say that you want to hold a meeting with colleagues in one hour. You can send them e-mail, but you have no guarantee that everyone will read their e-mail within the hour. Furthermore, if one of the recipients does not read their mail before the meeting time, the message no longer serves any purpose and simply clutters up their mailbox.

Flashmail is an Egret-based tool that transfers messages between a small, pre-selected group of people, and can virtually guarantee that a message sent to group members will be seen immediately in certain situations. It consists of two basic capabilities: a menu-based mechanism that shows whether members of the group are actively using their workstation, and a message facility that pops up a window on their workstation screen with a message.

Flashmail was evaluated via a case study designed to test the conditions under which user would choose Flashmail or traditional email for communication. Data collection occurred from March 11 through April 15, 1996, and the participants were the members of the Collaborative Software Development Laboratory (CSDL).

We collected data on hundreds of email and Flashmail messages during the study period. For each email or Flashmail message, we collected the time and date when the message was sent, who the senders and receivers were, the time and date at which a reply to a previous message was sent, and the buffer sizes of these messages.

We found that Flashmail messages tend to be short (under 300 characters), and that Flashmail messages receive replies much more rapidly than e-mail.
`,
    },
    {
      date: '1995 - 1996',
      project: 'HI-TIME',
      keyword: 'HI-TIME',
      text: 'Improve telecommunications policy through computer-mediated planning process.',
      media: 'images/hitime-small.png',
      bigImage: '',
      longText: `
The goal of Project HI-TIME was to improve telecommunications policy planning by implementing an iterative, interactive, computer-mediated collaborative planning process. Such a process would enable the State’s telecommunications infrastructure plan to be more efficiently and effectively upgraded to reflect technology and policy shifts in local communities.

In early 1995, the State of Hawaii began work on a revision to its telecommunications policy planning process. The traditional process was manual, time-consuming, and frequently resulted in policy decisions that had already been made obsolete by changes in the telecommunications industry.

Project HI-TIME included a sophisticated, computer-supported collaborative work system intended to both enact the planning process as well as provide access and visibility into the planning process for the general public.

In early 1996, the ambitious collaborative planning process, including the implemented, deployed HI-TIME system, was abandoned and policy planning reverted to the prior approach.
`,
    },
    {
      date: '1990 - 1996',
      project: 'Egret',
      keyword: 'EGRET',
      text: 'A framework providing tool support for the construction of computer-supported cooperative work applications.',
      media: 'images/egret-small.png',
      bigImage: '',
      longText: `
The Egret framework provided tool support for the construction of computer-supported cooperative work applications.  Egret supported the development of six CSCW applications:

  * CLARE: a collaborative learning environment
  * CSRS: a collaborative software review system
  * AEN: a collaborative hypertext authoring environment
  * Flashmail: a collaborative messaging environment 
  * Shemacs: a collaborative editor
  * URN: a collaborative filtering environment 

The Egret framework emerged from our goal to avoid the problem of code replication and application brittleness across these various application domains.

Egret implements a multi-client, multi-server, multi-agent architecture. Egret clients and agents are implemented by a 15 KLOC extension to XEmacs, the X-window Emacs editor. Egret servers are implemented by a 15 KLOC system written in C++.

Egret provides both low and high level storage and communication facilities for the development of (primarily textual) cooperative work applications. Data representations range from unstructured binary storage, to schema-based, typed, structured storage records, to HTML-compatible hypertext. Indexing and local replication mechanisms enable efficient “relational-style” queries over the underlying network database. Inter-process communication is implemented via TCP/IP sockets, and provides a variety of programmatic and interactive client communication facilities. Password mechanisms are provided to facilitate secure collaboration in groups dispersed across the internet. Built-in instrumentation support facilitates research and evaluation of Egret applications.
`,
    },
    {
      date: '1998 - 1999',
      project: 'LOCC',
      keyword: 'LOCC',
      text: 'Grammar-based parsing and analysis for program size computation.',
      media: 'images/locc-small.png',
      bigImage: 'images/locc-big.gif',
      longText: `
Effective program size measurement is difficult to accomplish. Factors such as program implementation language, programmer experience and application domain influence the effectiveness of particular size metrics to such a degree that it is unlikely that any single size metric will be appropriate for all applications.

This research created a tool, LOCC, which provides a grammar-based architecture and interface to the production and use of different size metrics. Developers can use the size metrics distributed with LOCC or can design their own metrics, which can be easily incorporated into LOCC. LOCC pays particular attention to the problem of supporting incremental development, where a work product is not created all at once but rather through a sequence of small changes applied to previously developed programs. LOCC requires that developers of new size metrics support this approach by providing a means of comparing two versions of a program.

LOCC’s effectiveness was evaluated by using it to count over 50,000 lines of Java code, by soliciting responses to a questionnaire sent to users, and by personal reflection on the process of using and extending it. The evaluation revealed that users of LOCC found that it assisted them in their development process, although there were some improvements which could be made.
`,
    },
    {
      date: '1997 - 1998',
      project: 'JavaWizard',
      keyword: 'JavaWizard',
      text: 'Detect and analyze error types in Java programming to improve libraries, tools, and education.',
      media: 'images/jwiz-small.png',
      bigImage: 'images/jwiz-big.jpg',
      longText: `
The goal of the JavaWizard (JWiz) project was to uncover information about the kinds of errors made by Java programmers, and use this information to determine ways in which to improve overall Java software quality.  Better understanding of Java programming errors could lead to improvements in Java software quality in a number of ways, such as:

  * Redesign to prevent/reduce the occurrence of errors due to poor class library design;
  * Targeting problematic idioms or domains where increased education and emphasis is necessary.
  * Automated tool support for error detection.

Our approach involves the development and use of a software tool named JavaWizard (or JWiz). JWiz is a source code analysis tool which searches for certain types of run-time programming errors (such as the use of “==” rather than the “equals” method to compare two strings). Over 50 kinds of Java programming errors are searched for using this tool.

We performed a case study over a period of four weeks, where several student programming projects were analyzed for the occurrence of programming errors of the kind searched for by JavaWiz. The case study was designed to assess whether JavaWiz was useful for detection of Java programming errors, and whether the kinds of errors found appear to suggest useful improvements to the language. Programmers submitted their program after the first clean compile, but before performing any testing. We analyzed these programs using JWiz. After the programmers completed debugging the program (and recording the time spent removing each defect), we gave them the results of the JWiz analysis and asked them which errors they had found during their debugging and how long it took them to remove the errors.

We collected data from 14 students over three programming projects which produced approximately 12,800 lines of code. JavaWiz raised 267 warnings on this code. We classified each warning as one of the following:

  * Functional errors, where the warning must be fixed for the program to work properly.
  * Maintenance errors, where the warning need not be fixed, but the code would be considered to be bad style.
  * False positives, where the warning was produced by code that was properly implemented, according to the developer.

Out of 267 JWiz warnings, there were 79 functional errors, 110 maintenance errors, and 78 false positives. In the case of functional errors, we were able to collect data on the time spent by programmers to detect the errors that JWiz found automatically. This data shows that JavaWizard could have eliminated a total of five and a half hours, or 7.3 percent of the total time spent debugging in the test phase.
`,
    },
    {
      date: '1996 - 1999',
      project: 'PSP Data Quality',
      keyword: 'PSP',
      text: 'Experimental findings from Personal Software Process usage reveals significant errors due to manual data collection and analysis.',
      media: 'images/psp-data-quality-small.png',
      bigImage: '',
      longText: `
This research investigated how natural human error during data collection and analysis impacts on PSP analysis results. The Personal Software Process (PSP) is used by software engineers to gather and analyze data about their work, and to produce empirically based evidence for the improvement of planning and quality in future projects. Published studies have suggested that adopting the PSP results in improved size and time estimation and in reduced numbers of defects found in the compile and test phases of development. However, the results of most studies evaluating the PSP are based on analysis of PSP data – data of unknown accuracy.

There are two basic phases when using the PSP: collection and analysis. In the collection phase a software engineer does actual work, and records primary measures about the work such as time and defect data. In the analysis phase this data is analyzed to provide derived measures such as lines of code per hour or the percentage of defects removed before the first compile. One goal of this research was to learn what kind of errors are made in the analysis phase and to see if there is any evidence of problems in the collection phase. This information provides some idea of the overall quality of PSP data. A second goal was to determine the impact of errors made on commonly used PSP measures such as yield and cost performance index.

In the Fall of 1996 a one-semester software engineering class was taught, covering the PSP. Because of prior concerns about data quality, many steps were taken to address this issue; including curriculum modifications, in-class technical review, and special forms. Using the PSP, 89 projects were completed by 10 students. Then, two database systems were built using Progress 4GL/RDBMS. The first was designed to automate the PSP as far as possible through the process level PSP2. The second was designed to record errors found in PSP data. The class projects were entered into the automated PSP system. Any discrepancies between the paper forms and values generated by the automated system were recorded using the error recording tool. Then all errors collected were analyzed by type, subtype, severity, age, etc. Finally, an attempt was made to correct the students’ PSP data as far as possible. The original and corrected values were compared.

1539 errors were found, mostly analysis errors. 34% were of the most severe type – errors that resulted in multiple bad values on multiple forms for multiple projects. There was also evidence of problems in the collection phase, with 90 errors resulting from conflicts within or between time and defect data. Correction of the data showed that the student errors had a substantial impact on important measures such as yield and cost performance index.
`,
    },
    {
      date: '1997 - 2000',
      project: 'LEAP',
      keyword: 'Leap',
      text: 'Lightweight, empirical, automated, and portable tools and techniques to support individual software process improvement.',
      media: 'images/leap-small.png',
      bigImage: 'images/leap-big.gif',
      longText: `
Project LEAP was designed to investigate the following problems in software process improvement initiatives:

  * Heavyweight development process constraints. For example, many process improvement initiatives require adherence to strict documentation, audit, and development phase constraints.
  * Measurement dysfunction. The use of process metrics for employee performance evaluation can lead to “dysfunctional” behavior which skews the metric in the desired direction while compromising overall organizational performance.
  * Organization-level analysis and improvement. Typical process measurements aggregate data collected from multiple projects and organizations. Such data takes time to accumulate, analyze, and produce meaningful process improvements.
  * Manual data gathering. Measurement may involve time-consuming clerical overhead that lowers the quality of the data and produces resistance to its collection.

The goal of Project LEAP was to produce tools and techniques to support software process improvement for individual software engineers that satisfy the LEAP constraints:

  * Light-weight. LEAP support must be “light-weight”. It must be easy to learn, easy to integrate with existing methods and tools, and above all, not impose significant new overhead on the developer unless that investment of overhead will provide a direct return-on-investment to that same developer.
  * Empirical. LEAP support should be quantitative as well as qualitative. Software developer improvement should be able to be shown through measurements of effort, defects, size, and so forth.
  * Automated. Light-weight support for empirically-based developer improvement virtually demands some form of automation. On the other hand, automation does not by itself guarantee light-weight processes or meaningful empirical evidence of improvement.
  * Portable. As a developer-oriented approach, Project LEAP recognizes that any long-term improvement mechanism must accommodate the fact that software developers change jobs and companies on a regular basis. Useful support cannot be locked into a particular organization such that the developer must “give up” the data and tools when they leave the organization. Rather, LEAP support will be a kind of “personal information assistant” for their software engineering skill set.

To investigate some of the issues of data collection and analysis, we conducted a case study of 16 graduate students in an advanced software engineering course at the University of Hawaii, Manoa. The case study investigated: (1) the relationship between the Leap toolkit’s time collection tools and “collection stage” errors; and (2) different time estimation techniques supported by the Leap toolkit. The major contributions of this research includes (1) the LEAP design philosophy; (2) the Leap toolkit, which is a novel tool for individual developer improvement and software engineering research; and (3) the insights from the case study about collection overhead, collection error and project estimation.
`,
    },
    {
      date: '1999 - 2000',
      project: 'javaJAM',
      keyword: 'JavaJam',
      text: 'Assist developers with reviewing software source, documentation, and comments.',
      media: 'images/javajam-small.png',
      bigImage: 'images/javajam-big.gif',
      longText: `
The goal of javaJAM was to create a virtual environment for assisting developers with reviewing and discussing software source, documentation, and comments.

Software application developers need to share information in order to design, implement and improve software. Such collaboration involves the sharing of source code and documentation. Collaboration also involves the collection and organization of comments and ideas. This collaboration must not be limited by physical constraints such as time-zones and locations.

javaJAM allows for quick navigation by linking specific portions of related source code, documentation, and comments.  javaJAM provides for navigation through applications, applicaction source, application documentation and related comments.  javaJAM allows for and organizes comments as they relate to portions of source and documentation.

javaJAM was evaluated through a case student in a classroom setting where students developed small applications and shared their source with the instructor and each other.  javaJAM was used by students to share completed applications and to collect and make critiques of each others’ work. Student and instructor reaction to javaJAM was generally positive. Students found javaJam to be an easy way to review their projects and post their comments.
`,
    },
    {
      date: '1998 - 2000',
      project: 'MCS',
      keyword: 'MCS',
      text: 'Mailing List Condensation is a system designed to strip out extraneous, conversational aspects of the data stream.',
      media: 'images/mcs-small.png',
      bigImage: 'images/mcs-big.png',
      longText: `
To solve some of the problems inherent in current mailing list archives, MCS implemented a process called condensation whereby one can strip out all the extraneous, conversational aspects of the data stream leaving only the pearls of interconnected wisdom. The Mailing List Condensation System (MCS) allowed certain types of mailing list communities to create condensed archives which are more useful than traditional archives for searching. By taking into account domain-specific aspects of the mailing list, searching can be improved even more.

Electronic mailing lists are popular Internet information sources. Many mailing lists maintain an archive of all messages sent to the list which is often searchable using keywords. While useful, these archives suffer from the fact that they include all messages sent to the list. Because they include all messages, the ability of users to rapidly find the information they want in the archive is hampered. Searches for specific information often return pages of irrelevant or simply useless messages.

The condensation process is performed by a human editor (assisted by a tool), not an AI system. While this adds a certain amount of overhead to the maintenance of the MCS-generated archive when compared to a traditional archive, it makes the system implementation feasible.

The field site chosen for this research is the “jcvs” mailing list for users of the jCVS program (a Java client for the Concurrent Versions System).

A case study approach was used, in which the jcvs mailing list was be studied to determine the appropriate forms of representation and automated mechanisms. Once implemented, these mechanisms were deployed on the jcvs mailing list and surveys of archive users were used to evaluate the system.

We condensed a 1428 message mailing list archive to an archive containing only 177 messages (an 88% reduction). The condensation required only 1.5 minutes of editor effort per message. The condensed archive was adopted by the users of the mailing list.
`,
    },
    {
      date: '1999 - 2002',
      project: 'VCommerce',
      keyword: 'VCommerce',
      text: 'An educational simulation game for teaching high-tech entrepreneurship.',
      media: 'images/vcommerce-small.png',
      bigImage: 'images/vcommerce-big.jpg',
      longText: `
VCommerce research investigated how to design and evaluate an ecommerce simulation environment in order to better understand the process of teaching high tech entrepreneurship.

In the modern internet economy,  entreprenurial skills are increasingly important for professional success and advancement. Traditional computer science curriculums do not provide students with a chance to experience entrepreneurial business development and to determine if this is an appropriate professional path for them to follow.

VCommerce was designed and implemented during Spring semester, 2000, and used in a graduate classroom setting consisting of approximately 50 students from both computer science and business school backgrounds. The students split into small teams and developed business plans and web sites, which were then visited by over 100 consumers. The consumers spent virtual dollars to buy goods and services, then invested virtually in the companies they believed to be the strongest. Results from this research indicate that both students in the classroom and visitors to the site learned about entrepreneurship and had a very positive impression of the experience.

VCommerce was also used in business school classes at Michigan State University in 2001 and 2002.
`,
    },
    {
      date: '2000 - 2002',
      project: 'Inca',
      keyword: 'Inca',
      text: 'Design of an n-tier Enterprise JavaBean application for course approval request processing.',
      media: 'images/inca-small.png',
      bigImage: '',
      longText: `
 Inca was designed to improve the efficiency and effectiveness of course approval request processing. This research project involves: (1) the design of the system as an n-tier Enterprise JavaBean application; (2) the evaluation of the system as a solution to some of the administrative and educational problems faced by the ICS department after two semesters of usage within the department; (3) the development of a performance evaluation method for Enterprise JavaBean applications based upon our experiences with Inca; (4) the evaluation of Inca as the basis for new high tech venture development; and (5) the technology transfer of Inca to other departments within the University and across the University as a whole.
`,
    },
    {
      date: '2000 - 2002',
      project: 'TsunamiSim',
      keyword: 'TsunamiSim',
      text: 'Use of GIS to overlay damages on relief efforts on disaster-afflicted regions.',
      url: '',
      media: 'images/tsunami-sim-small.png',
      bigImage: '',
      longText: `
The goal of TsunamiSim was to investigate the use of web-enabled GIS client-server architectures to dynamically overlay damages and relief efforts onto the geography and infrastructure of a disaster-afflicted region.

When a disaster strikes, response and relief organizations must first assess the location and extent of the damages prior to committing resources. Industrialized nations’ minimize the impact of disasters with robust emergency response infrastructures. Synchronous, distributed decision support systems, map applications, and simulations give disaster managers the ability to train for disasters, and control relief efforts. As a point of reference, specialized software and hardware architectures resourced, designed, and fielded to facilitate disaster management are heavyweight applications. In less developed regions of the world, disaster managers rely on ad hoc means of communication to assess and respond to disasters. As the Internet becomes more ubiquitous, lightweight applications accessible anywhere via computers and hand-held devices are needed to improve disaster management training and control where heavyweight applications are inaccessible.
`,
    },
    {
      date: '2003 - 2004',
      project: 'CLEW',
      keyword: 'Clew',
      text: 'The Collaborative Educational Website supports role-based editing and notifications.',
      media: 'images/clew-small.png',
      bigImage: 'images/clew-big.png',
      longText: `
The Collaborative Educational Website (CLEW) was a Java web application intended to support accurate modeling of a collegiate department.  The CLEW System is designed to solve the traditional collegiate department website’s two main problems.  First, it provides interactive services which will allow users to add various kinds of information to the website.  Secondly, the CLEW System addresses the notification problem by providing tailored email notifications of changes to the website.

The purpose of a collegiate department website is to provide prospective students, current students, faculty, staff, and other academic and industry professionals with information concerning the department.  The information presented on the website should give the user an accurate model of the department, even as it changes overtime.  Some of these changes include: adding new faculty members, new students, new courses, etc.  The more accurately the website models the department, the more aware the website’s users will be of the department.

Traditional collegiate department websites have two primary problems in creating an accurate model of their department.  First, only a few people, usually the department webmasters, can add information to the website.  Second, it is difficult to enable website users to be informed of changes to the website that might be of interest to them.  These two problems decrease the accuracy of the model and hamper its effectiveness in alerting users of changes to the website.  As a result, user awareness of the department is also decreased.

In this research, I replaced the existing Information and Computer Science Department website with the CLEW System in the Spring 2003 Semester.  I evaluated the CLEW System to measure its effectiveness as a model of the department using a pre and post release questionnaire.  I also evaluated usage data of the CLEW System to assess the functionality provided by CLEW.

The results of the evaluations provide evidence that the CLEW System provides a better model than the traditional collegiate department website.
`,
    },
    {
      date: '2004 - 2005',
      project: 'Priority Ranked Inspection',
      keyword: 'PRI',
      text: 'How to prioritize inspection resources and apply them to areas of a system that need them most.',
      media: 'images/pri-small.png',
      bigImage: 'images/pri-big.png',
      longText: `
This research investigated how to prioritize inspection resources and apply them to areas of the system that need them most. It is commonly assumed that defects are not uniformly distributed across all documents in a system. Instead, a relatively small subset of a system accounts for a relatively large proportion of defects. If inspection resources are limited, then it should be more effective to identify and inspect the defect-prone areas.

To support efficient use of inspection resources, we created an inspection process called Priority Ranked Inspection (PRI). PRI uses software product and development process measures to distinguish documents that are “more in need of inspection” (MINI) from those “less in need of inspection” (LINI). Some of the product and process measures include: user-reported defects, unit test coverage, active time, and number of changes. We hypothesize that the inspection of MINI documents will generate more defects with a higher severity than inspecting LINI documents.

Evaluation of the Priority Ranked Inspection method involved a simple exploratory study, which included inspecting MINI and LINI software code and checking to see if MINI code inspections generate more defects than LINI code inspections. The results of the study provide supporting evidence that MINI documents do contain more high-severity defects than LINI documents. In addition, there is some evidence that PRI can provide developers with more information to help determine what documents they should select for inspection.
`,
    },
    {
      date: '2005 - 2006',
      project: 'Continuous GQM',
      keyword: 'C-GQM',
      text: 'Integrate Hackystat real-time measurement with Goal-Question-Metric analysis.',
      media: 'images/continuous-gqm-small.png',
      bigImage: '',
      longText: `
This research investigated the integration of Hackystat metrics collection with the GQM (Goal / Question / Metric) Analysis Paradigm.  GQM is a popular approach for goal-oriented, systematic definition of measurement programs for software-engineering processes and products.  This integration should allow the goal-oriented use of the metric data collected by Hackystat and increase its usefulness for project control.  During the course of this work, an extension to Hackystat called hackyCGQM was implemented. As a result, hackyCGQM enables Hackystat to be used as a Software Project Control Center (SPCC) by providing purposeful high-level representations of the measurement data.

Another interesting side-effect of the combination of Hackystat and hackyCGQM is that this system is able to perform fully automated measurement and analysis cycles. This leads to the development of cGQM, a specialized method for fully automated, GQM based measurement programs.  As a result, hackyCGQM is able to implement a completely automated GQM-based measurement framework. This high degree of automation is made possible by limiting the implemented measurement programs to metrics which can be measured automatically, thus sacrificing the ability to use arbitrary metrics.
`,
    },
    {
      date: '2002 - 2006',
      project: 'JBlanket',
      keyword: 'JBlanket',
      text: 'A new technique called "Extreme Coverage" for measuring test quality.',
      media: 'images/jblanket-small.png',
      bigImage: 'images/jblanket-big.gif',
      longText: `
The JBlanket project investigated a set of guidelines called “extreme coverage” for measuring the quality of unit tests independent of the phase of software development. Extreme coverage uses method-level coverage and applies a set of flexible rules that depend upon the system being tested.

Programmers who write unit tests need to have a set of guidelines indicating when their software has been adequately tested. Measuring test case coverage, a structural testing technique, is one such guideline which can be applied. However, the level of coverage often varies throughout the duration of a project, depending upon the phase of development. These variations in levels can lead to obscure pieces of crucial code being overlooked during testing.

The JBlanket system was implemented in the first half of the Fall 2002 semester and evaluated in an undergraduate second semester Software Engineering course. The course consisted of 13 students who were each assigned to at least one of the services as a semester project. After being introduced to JBlanket and instructed to reach 100% extreme coverage by the end of the semester, their projects were periodically downloaded from a common CVS server and coverage was recorded on an Excel spreadsheet. The students were also given a Pre- and Post-Use questionnaire to gauge the feasibility of extreme coverage.

Results showed that, on the average, the students’ confidence in the quality of their unit tests increased after using JBlanket, and a majority claimed that JBlanket helped them write better unit tests.
`,
    },
    {
      date: '2005 - 2008',
      project: 'SCLC',
      keyword: 'SCLC',
      text: 'Source Code Line Counter supports comment, non-comment, token and other counters for over 25 languages.',
      url: '',
      media: 'images/sclc-small.png',
      bigImage: 'images/sclc-big.gif',
      longText: `
SCLC (Source Code Line Counter) counts the size of different types of source code files, providing the number of comment, non-comment, blank, and total lines. In addition, a count of “tokens” is provided for organizations where code layout variability makes line-oriented size counts unreliable for analysis purposes. The latest stable release of SCLC supports the following file types: Ada, Assembly, Awk, C, C++, Chapel, CSharp, CSS, Eiffel, FORTRAN, HTML, Java, JavaScript, Jess, JSP, Lisp, make, Matlab, Pascal, Perl, PHP, Python, shell, SQL, Tcl, Template, XML, ZPL.
`,
    },
    {
      date: '2005 - 2008',
      project: 'Jupiter',
      keyword: 'Jupiter',
      text: 'Improve code review through an Eclipse plugin',
      media: 'images/jupiter-small.png',
      bigImage: 'images/jupiter-big.jpg',
      longText: `
Software engineers generally agree that code reviews reduce development costs and improve software quality by finding defects in the early stages of software development. In addition, code review software tools help the code review process by providing a more efficient means of collecting and analyzing code review data. On the other hand, software organizations that conduct code reviews often do not utilize these review tools. Instead, most organizations simply use paper or text editors to support their code review processes. Using paper or a text editor is potentially less useful than using a review tool for collecting and analyzing code review data.

This research attempted to address the problems of previous code review tools by creating a lightweight and flexible review tool. This review tool, called “Jupiter”, is an Eclipse IDE Plug-In. We hypothesize that the Jupiter Code Review Tool is more efficient at collecting and analyzing code review data than the text-based approaches. To investigate this hypothesis, we constructed a methodology to compare the Jupiter Review Tool to the text-based review approaches. We carried out a case study using both approaches in a software engineering course with 19 students. The results provide some supporting evidence that Jupiter is more useful and more usable than the text-based code review, requires less overhead than the text-based review, and appears to support long-term adoption. The major contributions of this research are the Jupiter design philosophy, the Jupiter Code Review Tool, and the insights from the case study comparing the text-based review to the Jupiter-based review.
`,
    },
    {
      date: '2003 - 2007',
      project: 'Zorro',
      keyword: 'Zorro',
      text: 'An automated method for detecting test-driven design practices.',
      media: 'images/zorro-small.png',
      bigImage: 'images/zorro-big.png',
      longText: `
Zorro is a Hackystat-based application that was designed to help development groups gain insight into their use of test driven design practices and the impact of this use on their software development process and products. Zorro works by analyzing process data gathered by a Hackystat sensor attached to an interactive development environment such as Eclipse. Examples of such process data includes the editing of a a test case, the compilation and building of the software, the running of a test case, and so forth.

Zorro implemented a set of rules that first partitions the stream of observed developer behaviors gathered by the sensor into a sequence of “episodes”, each of which may or may not correspond to a TDD cycle. A second set of rules are then applied to each episode in order to classify it as an instance of TDD or not. A pilot validation study conducted in the Spring of 2006 indicated that Zorro recognized episodes of TDD with almost 90% accuracy. Further classroom and industrial case studies provide additional evidence for Zorro’s ability to support TDD recognition.
`,
    },
    {
      date: '2003 - 2007',
      project: 'Software Project Telemetry',
      keyword: 'Telemetry',
      text: 'Track process and product metrics automatically through software sensors.',
      media: 'images/software-project-telemetry-small.png',
      bigImage: 'images/software-project-telemetry-big.png',
      longText: `
Software Project Telemetry is a project management technique that uses software sensors to collect metrics automatically and unobtrusively. It then employs a domain-specific language to represent telemetry trends in software product and process metrics. Project management and process improvement decisions are made by detecting changes in telemetry trends and comparing trends between different periods of the same project. Software project telemetry avoids many problems inherent in traditional metrics models, such as the need to accumulate a historical project database and ensure that the historical data remains comparable to current and future projects.

Evaluation of software project telemetry provides evidence that it is an effective approach to (1) automated metrics collection and analysis, and (2) in-process, empirically-guided software development process problem detection and diagnosis. Two empirical studies were carried out to gather evidence: one in software engineering classes, and the other in the Collaborative Software Development Lab. The results suggested that software project telemetry had acceptably-low metrics collection and analysis overhead, and that it provided decision-making value at least in the exploratory context of the two studies.
`,
    },
    {
      date: '2007 - 2009',
      project: 'Software ICU',
      keyword: 'SoftwareICU',
      text: 'Rapidly assess the "health" of one or more projects. ',
      media: 'images/software-icu-small.png',
      bigImage: 'images/software-icu-big.gif',
      longText: `
The “Software ICU” is an analysis  technique for supporting rapid assessment of the “health” of one or more software projects.  Similar to a medical ICU, the Software ICU gathers and presents current values for a variety of project “vital signs” in addition to their recent historical values.

The Software ICU provides mechanisms to “colorize” both current values and trends independently.  The colorization results in a red, yellow, or green color for the recent value or trend, which provides an indication of the “health” of that vital sign.  (Green is good, red is bad, yellow is in the middle.)   A configuration panel allows each user to customize the way in which colorization is applied to the vital sign.

Not all vital signs can be colorized.  For example, the Size vital sign cannot be easily identified as “good” or “bad”.  Nonetheless, it provides useful information about a project in the Software ICU that might be helpful in interpreting other vital signs.  Vital signs that cannot be colorized are presented in white.
`,
    },
    {
      date: '2001 - 2011',
      project: 'Hackystat',
      keyword: 'Hackystat',
      text: 'A framework for collection, analysis, visualization, interpretation, annotation, and dissemination of software development process and product data.',
      media: 'images/hackystat-small.png',
      videoId: 'NrLFIpm0wps',
      longText: `
Hackystat is an open source framework for collection, analysis, visualization, interpretation, annotation, and dissemination of software development process and product data. Hackystat users typically attach software ‘sensors’ to their development tools, which unobtrusively collect and send “raw” data about development to a web service called the Hackystat SensorBase for storage. The SensorBase repository can be queried by other web services to form higher level abstractions of this raw data, and/or integrate it with other internet-based communication or coordination mechanisms, and/or generate visualizations of the raw data, abstractions, or annotations.

For more information, see [https://hackystat.github.io/](https://hackystat.github.io/).
`,
    },
    {
      date: '2009 - 2014',
      project: 'Software Trajectory Analysis',
      keyword: 'Trajectory',
      text: 'A data-mining framework for knowledge discovery from software processes artifacts. ',
      media: 'images/software-trajectory-analysis-small.png',
      bigImage: 'images/software-trajectory-analysis-big.png',
      longText: `
“Software Trajectory Analysis” (STA) is a knowledge discovery workflow through which researchers and practitioners can discover recurrent behaviors associated with observed software development activities.

STA implements a data-mining framework for knowledge discovery from software processes artifacts. By arranging software process artifacts and applying temporal indexing and partitioning, it facilitates creation of a variety of viewing perspectives on the performed processes. Further, by applying data mining tools, it allows extraction of frequent, rare and significant behaviors, through which researchers and practitioners could gain insight on the performed processes activities as well as on the roles of individuals performers and groups.

For more information, please see [http://code.google.com/p/hackystat-ui-trajectory/](http://code.google.com/p/hackystat-ui-trajectory/).
`,
    },
    {
      date: '2009 - 2014',
      project: 'Kukui Cup',
      keyword: 'KukuiCup',
      text: 'An energy challenge investigating energy literacy, conservation, and information technology.',
      media: 'images/kukuicup-logo.jpg',
      videoId: 'EJc0mXS7JCo',
      longText: `
The Kukui Cup Project explores novel ways to utilize concepts from information technology, community-based social marketing, serious games, and educational pedagogy to support sustained change in sustainability-related behaviors.  We held a total of seven Kukui Cup challenges from 2011 - 2013.

Kukui Cup challenges blend real world and online activities, all tied together through game mechanics.   In the real world, players participate in workshops, excursions, and creative events.  They compete to win prizes, and in the process, learn about their current behaviors and their impact on resources such as energy and water.  The online game environment allows players to earn points, achieve badges, increase their sustainability “literacy” through readings and videos, and use social networking mechanisms to engage with friends and family. The Kukui Cup is designed to make the real and online world activities complementary and synergistic.

Kukui Cup challenges are typically designed with the following goals for its participants:

  * Increase knowledge about sustainability issues;
  * Gain insight about the impact of one’s current behaviors and how to change them for increased sustainability;
  * Build community, through awareness of local and national sustainability organizations and initiatives;
  * Create commitment, from minor (turn off the lights when not in use) to major (pursue a profession related to sustainability).

We created short video “micro-documentaries” for the various events in the 2012 Kukui at UH, which provide an interesting perspective on the game.   See this [playlist](https://www.youtube.com/playlist?list=PLIZngQWBOqMxmgWisbcIOMq8vKHmrBcZy&feature=view_all).  [This other playlist](https://www.youtube.com/playlist?list=PLC8E65D5067E2053B) provides over 30 additional videos related to the Kukui Cup. 

For more information, please see [https://kukuicup.org/](https://kukuicup.org/).
`,
    },
    {
      date: '2010 - 2015',
      project: 'Makahiki',
      keyword: 'Makahiki',
      text: 'An open source serious game engine for sustainability.',
      media: 'images/makahiki-image.png',
      bigImage: 'images/makahiki-big.jpg',
      longText: `
Makahiki is an open source “serious game engine for sustainability”. It provides a framework for creating serious games for the purpose of education and behavioral change regarding energy, water, food, and waste generation and use. In concert with WattDepot, Makahiki is used as the core technology for the Kukui Cup project.

For more information, please see [https://makahiki.readthedocs.io/en/latest/](https://makahiki.readthedocs.io/en/latest/).
`,
    },
    {
      date: '2007 - 2015',
      project: 'WattDepot',
      keyword: 'WattDepot',
      text: 'An open source, meter-agnostic RESTful web service for energy data storage, retrieval, and analysis. ',
      media: 'images/WattDepot.png',
      bigImage: 'images/wattdepot-big.png',
      longText: `
Most energy measurement systems are either "personal-scale" or "utility-scale". WattDepot is designed to help those of us in the middle: organizations who want to better manage their energy use, typically across multiple buildings.

To accomplish this, WattDepot provides data aggregation. For example, a building might have multiple meters monitoring energy consumption, one per floor. WattDepot can represent the power consumed by individual floors, as well as an aggregate source representing the building as a whole. Aggregations can be nested, so that floors can be aggregated into buildings, and buildings into campuses.

WattDepot will run on all major operating systems. We provide an HTTP API which can be used by any modern programming language or environment to communicate with WattDepot servers. To simplify development, we provide client libraries for popular languages including Java, Javascript, and Python.

WattDepot can support any meter that implements an HTTP-based protocol for data transmission. We provide bindings for the Shark 200s and Egauge meters.

WattDepot is architecturally decoupled from its back-end storage system, allowing it to support both relational and NoSQL repositories.

For more information, please see [http://wattdepot.org](http://wattdepot.org).
`,
    },
    {
      date: '2019 - 2021',
      project: 'InternAloha',
      keyword: 'internaloha',
      text: 'Providing guidance and recommendations to help UH undergraduates find computer science internships',
      media: 'images/internaloha-small.png',
      bigImage: 'images/internaloha-big.png',
      longText: `
The goal of the InternAloha project is to develop a system that can lower the overhead for Hawaii students who are seeking an internship in computer science.  

InternAloha is intended to differ from other systems by not only providing access to internship listings, but by also providing the ability to recommend to students the activities and classes that will improve their prospects to obtain an internship in the area of their choice in future. 

For more information, please see [https://internaloha.github.io/](https://internaloha.github.io/)
`,
    },
    {
      date: '2020 - 2021',
      project: 'UH Department Dashboard',
      keyword: 'uh-dept-dashboard',
      text: 'Support for evidence-based academic unit assessment and improvement',
      media: 'images/uh-dept-dashboard-small.png',
      bigImage: 'images/uh-dept-dashboard-big.png',
      longText: `
The goal of the UH Department Dashboard project is to provide a way for an academic unit to efficiently and effectively improve over time through access to up-to-date measures of teaching, research, service, and resources. Each academic unit can build a custom dashboard that contains the specific measures that they believe will be helpful to them in understanding and improving their unique situation over time.

More specifically, this project will develop a set of tools that an academic unit can use to create a custom static web site with analyses and visualizations. Additional tools will allow the academic unit to populate the dashboard by retrieving data from a variety of sources, such as: STAR, Banner, MyGrants, CES, UHF, Office of Institutional Research, Google Scholar, Academic Analytics, and/or other online sites. When automated collection is not possible for data deemed important by an academic unit, then manual collection can be used.

For more information, please see [https://uh-dept-dashboard.github.io/documentation/](https://uh-dept-dashboard.github.io/documentation/)
`,
    },
    {
      date: '2015 - present',
      project: 'Athletic Software Engineering',
      keyword: 'Ath-Soft-Eng',
      text: 'Pedagogical innovations for "high performance" software engineering education.',
      media: 'images/athletic-software-engineering-small.png',
      bigImage: 'images/athletic-software-engineering-big.jpg',
      longText: `
Modern web application development provides an attractive application area for introductory software engineering education, as students have direct experience with the domain and it provides them with the potential to gain practical, real-world skills. Achieving this potential requires the development of competency with a multiple component tech stack for web application development, which is challenging to acquire within a single semester. 

In this research, we designed, implemented, and evaluated a new pedagogy called “athletic software engineering” which is intended to help students efficiently and effectively acquire competency with a multiple component tech stack as a precursor to a web application development project. So far, we have evaluated the pedagogy over 4 years and six semesters with 286 students and found strong evidence for its effectiveness.
`,
    },
    {
      date: '2013 - 2020',
      project: 'Open Power Quality',
      keyword: 'PowerQuality',
      text: 'Open source hardware and software for low-cost distributed power quality data collection, analysis, and visualization.',
      media: 'images/opqlogo.png',
      videoId: 'cGrQcyEZ5GI',
      longText: `
The goal of the Open Power Quality project is to develop and evaluate technology to support three important improvements to electrical infrastructure: 

  1. Increase the capacity of small and large electrical grids to employ distributed, intermittent forms of renewable energy.
  
  2. Gain insight into lifespan and failure rate problems in consumer electronics due to poor power quality.
  
  3. Provide an independent, low cost source of useful power quality data to consumers, researchers, and public policy makers.

The OPQ system architecture consists of four major open source hardware and software components that provide end-to-end support for the capture, triggering, analysis, and reporting of consumer level local and global PQ events.

  * OPQ Box is a hardware device that detects the electrical waveform from a standard residential outlet and communicates both low and high fidelity representations of the waveform to other OPQ system components.

  * OPQ Makai monitors incoming low fidelity data from OPQ Boxes, requests high fidelity data when necessary, and stores the results in a MongoDB database.
  
  * OPQ Mauka analyzes data, creates "events" when it detects anomolies, and can tell OPQ Makai to request high fidelity data from one or more OPQ Boxes to facilitate analysis.

  * OPQ View is a visualization platform for displaying the results for data capture and analysis.

For more information, see [https://openpowerquality.org](https://openpowerquality.org).`,
    },
    {
      date: '2014 - present',
      project: 'Morea Framework',
      keyword: 'Morea',
      text: 'Generate educational websites organized by Modules, Outcomes, Readings, Experiences, and Assessments.',
      media: 'images/morea-module.png',
      videoId: 'DIbVvGHOhow',
      longText: `
Morea implements a simple pedagogical design pattern: a course is a sequence of modules, each with one or more learning outcomes. Modules can combine one or more passive readings (providing background) with one or more active experiences (in-class work or homework). Finally, a module can contain one or more assessments to help students determine if they've achieved the learning outcomes. These five representations: Modules, Outcomes, Readings, Experiences, and Assessments form the acronym "Morea". 

Our experience shows that students and teachers both benefit by making this course design explicit. For example, Morea generates course websites that organize course content in multiple ways: by modules, outcomes, readings, experiences, and assessments. This makes it easier for teachers to design well structured courses, and easier for students to understand what they need to learn and how to learn it.

In addition, Morea makes it possible to represent dependencies between courses at the module-level. So, instead of saying that the course ICS 311 requires the courses ICS 241, 211, and 141, you can instead explicitly represent that the ICS 311 module called "Growth of Functions" depends upon the modules "Algorithms" from ICS 141, "Big-O Notation" from ICS 211, and "Advanced Counting Techniques" from ICS 241. To see this in action, check out [the ICS 311 Growth of Functions module](http://courses.ics.hawaii.edu/ReviewICS311/modules/growth/).  Module-level dependency representation makes it easier to answer questions like "What should be the content of the core curriculum?"  The answer could be: "only those modules that are actually required by later modules in the curriculum." 

For more information, please see [http://morea-framework.github.io/](http://morea-framework.github.io/).
`,
    },
    {
      date: '2015 - present',
      project: 'RadGrad',
      keyword: 'RadGrad',
      text: 'Improve the undergraduate degree experience through increased engagement and retention.',
      media: 'images/radgrad_logo.png',
      videoId: 'uGxwFldWtfs',
      longText: `
The fundamental goal of the RadGrad Project is to provide students, faculty, and advisors with an alternative perspective on the undergraduate degree program---which traditionally boils down to a single kind of activity (coursework) and a single metric for success (grade point average). Our alternative perspective is called the Degree Experience, and it gives first class status to both curricular activities (courses) and extracurricular activities (discipline-oriented events, activities, clubs, etc.)

To establish the first class status of extracurricular activities, the Degree Experience perspective replaces GPA as the single metric for success with a three component metric called ICE that assesses student development with respect to Innovation, Competency, and Experience. Each student's Degree Experience also includes a representation of their disciplinary interests and career goals that helps them assess the relevance of potential curricular and extracurricular activities. Finally, the Degree Experience perspective is voluntary. It complements but does not change any existing undergraduate degree requirements of a university.

For more information, see [https://radgrad.org](https://radgrad.org)`,
    },
    {
      date: '2022 - present',
      project: 'Geo Garden Club',
      keyword: 'GeoGardenClub',
      text: 'Growing better gardens, gardeners, and communities, one plant at a time',
      media: 'images/geogardenclub.png',
      longText: `
Food insecurity is an important problem in the U.S. and globally.

Home gardens are an important, underutilized resource for addressing food insecurity.

Geo Garden Club is designing and implementing collaborative technologies to improve the efficiency and effectiveness of home gardeners.

For more information, see <https://geogardenclub.com>`,
    },
  ].reverse();
}
