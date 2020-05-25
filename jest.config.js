const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/.*\\.ts'],
  coveragePathIgnorePatterns: ['.*\\.spec\\.ts'],
  globals: {
    'ts-jest': {
      packageJson: '<rootDir>/package.json',
    },
    __DEV__: false,
  },
}
