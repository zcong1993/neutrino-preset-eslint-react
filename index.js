const lint = require('neutrino-middleware-eslint')
const merge = require('deepmerge')

module.exports = (neutrino, opts = {}) => {
  neutrino.use(lint, merge.all([
    {
      eslint: {
        baseConfig: {
          extends: ['xo', 'xo-react'],
          env: {
            browser: true,
            commonjs: true,
            es6: true,
            jest: true,
            node: true
          }
        },
        rules: {
          semi: ['error', 'never'],
          indent: ['error', 2, { SwitchCase: 2 }],
          'object-curly-spacing': ['error', 'always'],
          'react/jsx-indent': ['error', 2],
          'react/prop-types': ['error', {
            ignore: ['children']
          }]
        }
      }
    },
    opts,
    !opts.include && !opts.exclude ? { include: [neutrino.options.source], exclude: [neutrino.options.static] } : {}
  ]))
}
