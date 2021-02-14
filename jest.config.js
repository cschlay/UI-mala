module.exports = {
  verbose: true,
  coverageReporters: ["text-summary", "html"],
  setupFilesAfterEnv: ["./tests/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy",
  },
};
