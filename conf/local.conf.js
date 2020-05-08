const LambdaTest = require("@lambdatest/node-tunnel"),
  username = process.env.LT_USERNAME || "<your username>",
  accessKey = process.env.LT_ACCESS_KEY || "<your accessKey>";
exports.config = {
  specs: ["../specs/local.js"],

  seleniumAddress:
    "http://" + username + ":" + accessKey + "@hub.lambdatest.com/wd/hub",

  capabilities: {
    build: "protractor-selenium-sample",
    name: "single-test",
    browserName: "chrome",
    version: "67.0",
    platform: "Windows 10",
    video: true,
    network: true,
    console: true,
    visual: true,
    tunnel: true,
  },
  beforeLaunch: function () {
    return new Promise(function (resolve, reject) {
      exports.lambdaLocal = new LambdaTest();
      const tunnelOpts = {
        user: username,
        key: accessKey,
        logFile: "local.log",
        // proxyHost: "localhost",
        // proxyPort: "8082",
        // proxyUser: "foo",
        // proxyPass: "bar",
      };
      exports.lambdaLocal.start(tunnelOpts, (err) => {
        if (err) return reject(err);
        exports.lambdaLocal.getTunnelName().then((tunnelName) => {
          console.log("Tunnel Name : " + tunnelName);
          console.log("Tunnel is Running Successfully");
          exports.config.capabilities.tunnelName = tunnelName;
          resolve();
        });
      });
    });
  },
  afterLaunch: function () {
    return new Promise((resolve, reject) => {
      exports.lambdaLocal.stop(resolve);
    });
  },
  onPrepare: () => {
    myReporter = {
      specStarted: function (result) {
        specStr = result.id;
        spec_id = parseInt(specStr[specStr.length - 1]);
        browser.getProcessedConfig().then(function (config) {
          var fullName = config.specs[spec_id];
          browser.executeScript(
            "lambda-name=" + fullName.split(/(\\|\/)/g).pop()
          );
        });
      },
      specDone: function (result) {
        browser.executeScript("lambda-status=" + result.status);
      },
    };
    jasmine.getEnv().addReporter(myReporter);
  },
  onComplete: () => {
    browser.quit();
  },
};
