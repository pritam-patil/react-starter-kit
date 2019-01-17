![React: v16](https://img.shields.io/badge/react-v16.7-blue.svg)
![material-ui: v3.0](https://img.shields.io/badge/material--ui-v3.0-ff69b4.svg)
![webpack: v4.12.1](https://img.shields.io/badge/webpack-v4.12.1-yellow.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)
![Build: passing](https://img.shields.io/badge/build-passing-green.svg)

![site-logo](https://github.com/pritam-patil/react-material-webpack-boiler/raw/master/src/static/images/favicon.ico "Logo Title")

# React-Material-Webpack boilerplate

The project serves as a **starter kit** for any ReactJS project. You can use this as a **rapid prototyping** alternative to create-react-app utility.
##### [Live Demo](http://special-chalk.surge.sh/)  :fries:

## Features

* Comes with basic layout with Material UI
* Styling support with **SCSS**
* Basic server setup with *express*
* Storybook is provided for standalone development of components
* Contains handling of 404 error (page not found) paths
* Handles **JS disabled on browser** scenario**
* Prettier and ESLint configured with *EditorConfig* support
* Basic routing is configured to easliy add new routes.
* Skeleton for Redux is added for **development and production mode stores** with support for redux--dev-tools extension for easy adoption
* Barebone for testing with some added test cases
* **Optimized** bundle size
* Variaty of **favicons** for different devices and screen sizes configured
* Morever, **CSP** (Content Security Policy) and **Meta Tags** for Seach Engine Optiomization (**SEO**) are already configured.
* Hooks for precommit to lint code and prepush to run tests is added. And **much more**. :speaker:

> ** To check the behavior, disable the Javascript in your browser once you have this project up and running.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have following installed to use the software -


* [npm](https://www.npmjs.com/get-npm) / [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)
* [node](https://nodejs.org/en/download/)
* [git](https://www.atlassian.com/git/tutorials/install-git)

## Setup

To get a copy of this project and start developing,

```bash
git clone git@github.com:antonfisher/react-express-webpack.git
cd react-express-webpack
npm install
```

### Running the project

To develop the project locally, you need only do -


```bash
npm install
npm run start
```

> With hot reloading support, the app will start getting server on port 3000.

To run the production mode for deployment purposes, do -

```bash
npm run prebuild
```
> *dist* directory would be created by running above command.

## Running the tests

Enzyme-Jest is used as a testing library. To run tests, do -

```bash
npm run test
```

Run tests with coverage, do -

```bash
npm run test:coverage
```

## Other Scripts

Serve the app using express server, run -

```bash
npm run serve
```
> Express server will start on port 3000,

Run linter -

```bash
npm run lint
```

Fix the linting errors and write -

```bash
npm run lint:write
```

Run prettier -

```bash
npm run prettier
```

Run storybook -

```bash
npm run storybook
```
> Your stories will start getting server on port 6006.

Build storybook -

```bash
npm run build-storybook
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* [**Pritam Patil**](https://github.com/pritam-patil)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
