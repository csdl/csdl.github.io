# Developer Guide

This branch (src/) of the csdl.github.io repo contains the src files for building the site.

To build a new version of the site:

  1. Edit the contents of the src/ directory. Within that directory, you can run `npm start` to preview the site.

  2. When you are ready to publish, run the script `npm run build` from within the src/ directory. This will build the HTML version of the site and commit it to the master branch of csdl.github.io.  It will also leave a copy of those HTML files in the root directory of this branch. Those files can be ignored.

  3. Use GitHub Desktop to commit your changes to the src/ branch.  The gitignore file should prevent any build artifacts from being committed to this branch.
