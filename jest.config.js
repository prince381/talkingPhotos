/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true,
    coverageProvider: "v8",
    transform: {
      "^.*\\.(ts|tsx)$": "ts-jest"
    }
};