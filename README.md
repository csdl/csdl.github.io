# CSDL Home Page

This repository contains the source files and the rendered HTML for https://csdl.ics.hawaii.edu.

  * The "master" branch contains the rendered HTML.
  * The "src" branch contains the source files.

## Installation

To install the system, first [install NPM](https://www.npmjs.com/get-npm).

Second, fork the entire repository, or else download the files for the "src" branch of the repo if you just want to play around.

Third, cd into the src/ directory of the "src" branch, and type `npm install` to download the libraries necessary to build and deploy the system:

```
$ npm install

> fsevents@1.2.12 install /Users/philipjohnson/github/csdl/csdl.github.io/src/node_modules/jest-haste-map/node_modules/fsevents
> node-gyp rebuild

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node

  :
  :

Binary found at /Users/philipjohnson/github/csdl/csdl.github.io/src/node_modules/node-sass/vendor/darwin-x64-64/binding.node
Testing binary
Binary is fine
added 2044 packages from 892 contributors and audited 932326 packages in 62.816s
found 0 vulnerabilities
```

If all goes as planned, you should now be able to run `npm start` to view the system in your browser at http://localhost:3000/:

```
$npm start

Compiled successfully!

You can now view src in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.1.21:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

## Managing the data

The src/data directory contains the "data" used to populate the site with News items, Research projects, Papers, Members, and Sponsors.  When any of these things change, you simply edit one (or more) of these files, then rebuild and redeploy the site.

### News items

To manage News items, edit [src/src/data/NewsData.js](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/NewsData.js). Please make sure these entries are in chronological order. Also, you will want to put any associated images in the [src/public/images](https://github.com/csdl/csdl.github.io/tree/src/src/public/images) directory.

Please be sure to minimize file sizes for these images!

### Research projects

To manage Research projects, edit [src/src/data/ResearchData.js](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/ResearchData.js). Again, these entries should be in chronological order. Also, the longText field is parsed as Markdown.

If the optional videoId field is present with the id of a YouTube video, then that is displayed at the top of the Research project's drilldown description and the bigImage field (if present) is ignored. In other words, if you provide a video, that will be displayed at the beginning of the description, otherwise an image will appear. If both are omitted, that's OK too.

Again, please be sure to minimize file sizes of all images, which should be located in the [src/public/images](https://github.com/csdl/csdl.github.io/tree/src/src/public/images) directory.

### Papers

Managing papers is a tiny bit more complicated. First, I hope you keep your papers citations in bibtex format. If not, fix that now.  Then, copy your .bib file into [src/src/data/PaperData.bib](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/PaperData.bib). You do not need to maintain any ordering on the entries.

Next, you will run a script to convert the PaperData.bib file into a JSON file called PaperData.json. The script is `npm run build-techreports`, and if it successfully parses your bibtex file, it will generate several files as well as output a list of authors and keywords that will be included in the Papers section. For example:

```
$ npm run build-techreports

> src@0.1.0 build-techreports /Users/philipjohnson/github/csdl/csdl.github.io/src
> scripts/build-techreports.js

Starting build-techreports
Writing src/data/PaperData.json
Writing src/data/PaperData.authormap.json
[ 'Aaron Kagawa',
  'Amy Takayesu',
   :
   :
  'William M. Albritton',
  'Yongwen Xu' ]
Writing src/data/PaperData.keywordmap.json
[ 'AEN',
  'Ath-Soft-Eng',
   :
   :
  'WattDepot',
  'Zorro' ]
Writing src/data/PaperData.yearmap.json
Finished build-techreports
```

It's useful to note that this is not the complete list of authors.  For my site, I want to omit certain collaborators who were not members of CSDL from appearing in the drop-down list of authors in the Paper section.  To do this, you just specify their name in [src/src/data/PaperData.authormap.filterlist.json](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/PaperData.authormap.filterlist.json). Of course, the "filtered" author names still appear in the actual citation of a paper; they just can't be searched for using the dropdown. (I did this because the dropdown containing all coauthors would have well over 100 items and that seemed too much.)

In addition to writing out [src/src/data/PaperData.json](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/PaperData.json), the script generates several index files which reduces computation in the deployed site. These index files are [src/src/data/PaperData.authormap.json](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/PaperData.authormap.json), [src/src/data/PaperData.keywordmap.json](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/PaperData.keywordmap.json), and [src/src/data/PaperData.yearmap.json](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/PaperData.yearmap.json).


### Members

To manage Members, edit [src/src/data/MemberData.js](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/MemberData.js). Members can appear in any order.

All of the images should be square and sized to exactly 100x100px. At least I think it looks best that way. Interestingly, you'll notice if an image deviates even by a pixel or two.

If the second entry of the dates field is 'current', then that Member will appear as a current member.

Obviously, sunglasses are mandatory.

### Sponsors

To manage Members, edit [src/src/data/SponsorData.js](https://github.com/csdl/csdl.github.io/blob/src/src/src/data/SponsorData.js). Sponsors should appear in reverse chronological order. Just to keep you on your toes.

The longText field should be Markdown format.  The logo should be a square which will then be rendered as 100px wide.


## Deploying the site

To deploy the site, invoke `npm run deploy`. For example:

```
$ npm run deploy

> src@0.1.0 predeploy /Users/philipjohnson/github/csdl/csdl.github.io/src
> npm run build


> src@0.1.0 build /Users/philipjohnson/github/csdl/csdl.github.io/src
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  169.14 KB (-613 B)  build/static/js/2.3517dd03.chunk.js
  125.13 KB (-393 B)  build/static/js/main.a4d49203.chunk.js
  22.31 KB            build/static/css/2.de424728.chunk.css
  768 B               build/static/js/runtime-main.beeed7e9.js
  217 B               build/static/css/main.467e710e.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy


> src@0.1.0 deploy /Users/philipjohnson/github/csdl/csdl.github.io/src
> gh-pages -b master -d build

Published
```

If the script fails with an authentication error, the simplest solution I've found is to run `git push origin src` on the command line. That will prompt you for your username and password and cache those values for a while so that the script will now succeed.

**Important Note**: `npm run deploy` only commits and pushes the "master" branch of the repository, which contains the rendered version of the site. It does NOT commit the "src" branch of the repository. So, make sure that you push your changes to the src branch to GitHub as well using your git client of choice.

## About the source code

The source code is quite easy to understand as long as you understand [React](https://reactjs.org/) and [Bootstrap](https://getbootstrap.com/). (In reality, this site uses [React-Bootstrap](https://react-bootstrap.github.io/)). If you don't know either React or Bootstrap, this system is simple enough that you might use it as a way of getting familiar with it.

Note that all React components are written as "function components" and use [React Hooks](https://reactjs.org/docs/hooks-intro.html) for managing local component state when needed.

Here's some guidance to get you started looking through the code (all files in the src/src/ directory):

Begin with [index.js](https://github.com/csdl/csdl.github.io/blob/src/src/src/index.js). It's the top-level file, which simply renders the Top, Home, News, Research, Papers, Members, Sponsors, and Bottom components.

Then look at each section's React component.  The News section component is [News.js](https://github.com/csdl/csdl.github.io/blob/src/src/src/News.js). Many sections consist of displaying one or more "cards", and these are always their own component. So, for example, the code for the card that displays a single New item is [NewsCard.js](https://github.com/csdl/csdl.github.io/blob/src/src/src/NewsCard.js).

LMK if you have ideas for improving the site. I've listed a few of mine as [Issues](https://github.com/csdl/csdl.github.io/issues).

## License

MIT.  See [license](LICENSE.md)
