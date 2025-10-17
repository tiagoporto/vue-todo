# vue-todo ![Open Source Love](https://raw.githubusercontent.com/ellerbrock/open-source-badges/master/badges/open-source-v3/open-source.svg?sanitize=true)

[![License](https://img.shields.io/github/license/tiagoporto/vue-todo.svg?style=flat-square)](https://github.com/tiagoporto/vue-todo/blob/main/LICENSE)

> To-do SPA in [Vue.js](https://vuejs.org).

## Status

[![Checks Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/vue-todo/checks.yml?label=checks&style=flat-square&branch=main)](https://github.com/tiagoporto/vue-todo/actions/workflows/checks.yml?query=branch%3Amain)
[![Tests Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/vue-todo/unit-tests.yml?label=unit%20tests&style=flat-square&branch=main)](https://github.com/tiagoporto/vue-todo/actions/workflows/unit-tests.yml?query=branch%3Amain)
[![Coverage](https://img.shields.io/codecov/c/github/tiagoporto/vue-todo/main?style=flat-square)](https://app.codecov.io/gh/tiagoporto/vue-todo/tree/main)
[![Mutation Score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/vue-todo/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/vue-todo/main)

## Technologies

- [ESlint](https://eslint.org)
- [Prettier](https://prettier.io)
- [EditorConfig](https://editorconfig.org)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Babel](https://babeljs.io)
- [webpack](https://webpack.js.org)
- [Vue](https://vuejs.org)
  - [Vue Router](https://router.vuejs.org)
  - [Vuex](https://vuex.vuejs.org)
- [Typescript](https://www.typescriptlang.org)
- [Stylus](http://stylus-lang.com)
- [Jest](https://jestjs.io)
- [Stryker Mutator](https://stryker-mutator.io)

## Pre-requisites

- [Git]()
- [Node.js](https://nodejs.org)

## Development Guidelines

### Editor

The recommended editor for this project is [VS Code](https://code.visualstudio.com/).

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

## Hooks

Hooks run some scripts before git commands

### Pre-push

Before run the command `git push`, will execute application checks

- Prettier
- Eslint
- Typescript

## License

vue-todo is released under the terms of the [MIT license](https://github.com/tiagoporto/vue-todo/blob/main/LICENSE).
