const WorkerPlugin = require("worker-plugin");

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new WorkerPlugin({
      // use "self" as the global object when receiving hot updates.
      globalObject: "self",
    })
  );
  return config;
}
