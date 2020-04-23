# Developer Guide

This branch (src/) of the csdl.github.io repo contains the src files for building the site.

### Developer Workflow

  1. Edit the contents of the src/ directory. Within that directory, you can run `npm start` to preview the site.

  2. When you are ready to publish, run the script `npm run deploy` from within the src/ directory. This will build the HTML version of the site and commit it to the master branch of csdl.github.io.  It will also leave a copy of those HTML files in the root directory of this branch. Those files can be ignored.

  3. Use GitHub Desktop to commit your changes to the src/ branch.  The gitignore file should prevent any build artifacts from being committed to this branch.

If the script fails with an authentication error, the simplest workaround is to run `git push origin master` on the command line. That will prompt you for your username and password and cache those values for a while so that the script will now succeed.

### Next steps

  * Comment the code.
  * Revise this readme to document site management.
  * After show more..., returning to show less... puts sectionToggle at always Recent.

### Post initial deploy

  * Move TR Library into this repo.
  * Implement permalinks for projects and TR lib selections.
  * Convert to TypeScript.
