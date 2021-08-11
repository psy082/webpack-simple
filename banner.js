const childProcess = require("child_process");

module.exports = function banner() {
  const commit = childProcess.execSync("git rev-parse --short HEAD");
  const user = childProcess.execSync("git config user.name");
  const date = new Date().toLocaleDateString();

  return (
    `CommitVersion: ${commit}Build Date: ${date}\nAuthor: ${user}`
  );
}