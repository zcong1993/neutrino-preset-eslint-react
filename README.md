# neutrino-preset-eslint-react

[![NPM version](https://img.shields.io/npm/v/neutrino-preset-eslint-react.svg?style=flat)](https://npmjs.com/package/neutrino-preset-eslint-react) [![NPM downloads](https://img.shields.io/npm/dm/neutrino-preset-eslint-react.svg?style=flat)](https://npmjs.com/package/neutrino-preset-eslint-react) [![CircleCI](https://circleci.com/gh/zcong1993/neutrino-preset-eslint-react/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/neutrino-preset-eslint-react/tree/master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/zcong1993/neutrino-preset-eslint-react)

> Neutrino preset for react project adding [xo](https://github.com/sindresorhus/xo)'s base JS ESLint config, following the [xo](https://github.com/sindresorhus/xo) styleguide

## Install

```bash
# yarn
$ yarn add --dev neutrino-preset-eslint-react
# npm
$ npm install --save-dev neutrino-preset-eslint-react
```

## Usage

After adding the eslint react preset to your Neutrino-built project, edit your project's package.json to add the preset for
linting **before** your build preset. For example, if you are building your project using `neutrino-preset-react`:

```json
{
  "scripts": {
    "start": "neutrino start --use neutrino-preset-eslint-react neutrino-preset-react",
    "build": "neutrino build --use neutrino-preset-eslint-react neutrino-preset-react"
  }
}
```
Or if you are using a `.neutrinorc.js`, add this preset to your use array instead of `--use` flags:

```js
module.exports = {
  use: [
    'neutrino-preset-eslint-react',
    'neutrino-preset-react'
  ]
};
```

## Middleware options

This preset uses the same middleware options as [neutrino-middleware-eslint](https://neutrino.js.org/middleware/neutrino-middleware-eslint).
If you wish to customize what is included, excluded, or any ESLint options, you can provide an options object with the
middleware and this will be merged with our internal defaults for this preset. Use an array pair instead of a string
to supply these options.

```js
module.exports = {
  use: [
    ['neutrino-preset-eslint-react', {
      eslint: {
        rules: {
          semi: ['error', 'always']
        }
      }
    }]
  ]
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**neutrino-preset-eslint-react** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/neutrino-preset-eslint-react/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
