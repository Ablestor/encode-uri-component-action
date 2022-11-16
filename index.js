const core = require("@actions/core");

try {
  const string = core.getInput("string");
  core.setOutput("string", encodeURIComponent(string));
} catch (error) {
  core.setFailed(error.message);
}
