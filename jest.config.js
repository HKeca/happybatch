module.exports = {
  preset: "ts-jest",
  testURL: "http://localhost/",
  setupFilesAfterEnv: ["<rootDir>setup.ts"],
  testEnvironment: "node"
};
