const { Neutrino } = require('neutrino')

const mw = () => require('../')

const options = {
  eslint: {
    rules: {
      semi: ['error', 'always']
    }
  }
}

test('loads preset', () => {
  expect(mw).not.toThrow()
})

test('uses prese', () => {
  const api = new Neutrino()
  expect(() => api.use(mw())).not.toThrow()
})

test('instantiates', () => {
  const api = new Neutrino()
  api.use(mw())
  expect(() => api.config.toConfig()).not.toThrow()
})

test('instantiates with options', () => {
  const api = new Neutrino()
  api.use(mw(), options)
  expect(() => api.config.toConfig()).not.toThrow()
})

test('exposes lint command', () => {
  const api = new Neutrino()
  api.use(mw())
  expect(typeof api.commands.lint).toBe('function')
})

test('exposes eslintrc config', () => {
  const api = new Neutrino()

  expect(typeof api.call('eslintrc', [mw()])).toBe('object')
})
