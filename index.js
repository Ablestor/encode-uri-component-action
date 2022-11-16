const core = require("@actions/core");
const LZString = require("lz-string");

try {
  const string = core.getInput("string");
  core.setOutput("string", LZString.compressToEncodedURIComponent(string));
} catch (error) {
  core.setFailed(error.message);
}
