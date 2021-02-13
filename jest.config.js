module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["./tests/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
};
