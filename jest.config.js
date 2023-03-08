/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    /* eslint-disable-next-line no-useless-escape */
    '^[$]{1}utils\/(.*)': '<rootDir>/src/utils/$1',
  },
};
