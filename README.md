# Technical Exercise

Thank you for taking the time to work on this technical exercise.

This exercise is meant to test your ability to build a single page application:

- Access a public API and fetch data from it
- Display that data on the page
- Update the UI of the page without refreshing
- Build a polished user experience you’d be proud to ship

This exercise is broken down into two categories, product requirements and engineering requirements.

## Product Requirements

Perform a search against any public photo API and display the results on a page.

You can use any API that you want, but we’ve created a token for you to search against the [Giphy API](https://developers.giphy.com/docs/)(`LiT4XaeBUDCDtVpLNuTcc8fzKv84AmW6`). You can lookup their documentation on how to access their search endpoint.

We expect:

1. A single page with a search input and a list (or grid) of photo thumbnails
1. The initial page load should contain an "empty state" in place of the photo thumbnails
1. After the user enters a search query the results should be displayed on the page
1. The thumbnail should be clickable and link to the full resolution version

If you have extra time we would like to see the photo thumbnail open a lightbox when you click it (instead of linking to the full resolution version).

## Engineering Requirements

- The single page app should be built via React.js
- You’re free to use any http client library
- You’re free to use any state management library
- You’re free to use any CSS library
- You don't need to focus on cross browser concerns, it only needs to work in one major browser (Chrome, FireFox, Safari, Edge)
- **Please commit your code as you progress through the challenge**
  - We use mercurial at Kareo but feel free to use git if you want to. Just rename `.hgignore` to `.gitignore`
  - As part of your submission please include the SCM folder (.hg or .git) so we can your commit history

## Getting started

We have provided this repo as a starting point so you can focus on code without having to worry about getting your project setup.

We only ask that you’re on the latest LTS version of node.js (this is reflected in the `.nvmrc` file). Then you can run:

```sh
$ npm install
$ npm start
```

## Seeking help

This project was initialized using create-react-app, please see their documentation for any technical issues you might run into.

If anything else is unclear or just have other technical questions, please email eric.wolfe@kareo.com

## Submitting your code

1. Remove the `node_modules` directory
1. Zip this directory
1. Upload it to the provided link (attached in our email to you)

---

## Technologies ##

1. [ReactJS](https://reactjs.org)
2. [Redux](https://redux.js.org/)
3. HTML5
4. SCSS
5. [Create React App](https://github.com/facebook/create-react-app) as project builder.

## Setting up develop environment ##

1. Make sure you have [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) in your OS.
2. Clone this repository in your local machine.
3. Run `$ yarn install`
4. Run development environment `$ yarn start`

## Production deliverable ##

1. Make sure you have NodeJS and NPM or Yarn in your OS.
2. Clone this repository in your local machine.
3. Run `$ yarn install`
4. Run build `$ yarn build`

>*Production files will be under the folder **build***

## Lint your code ##

1. [Eslint](https://eslint.org/)
2. Using [JS Standard](https://standardjs.com/)
3. Run `$ yarn lint`*
4. If you want to run and autofix your code run `$ yarn lint-fixup`**

> *You can check the eslint errors in your IDE with these tools:*

>1. ATOM: [linter-eslint](https://atom.io/packages/linter-eslint)

>2. Sublime Text: [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter-eslint)

>3. Visual Studio Code: [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

> ***Keep in mind that some fixes could edit your code, please make double check to your code and test it before a commit.*
