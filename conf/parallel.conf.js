username= process.env.LT_USERNAME || "<your username>",
accessKey=  process.env.LT_ACCESS_KEY || "<your accessKey>",

exports.config = {
  'specs': [ '../specs/single.js' ],

  seleniumAddress: 'https://'+username+':'+accessKey+'@hub.lambdatest.com/wd/hub',

  'commonCapabilities': {
    'build': 'protractor-selenium-sample',
    'tunnel': false
  },

  'multiCapabilities': [{
    'browserName': 'Chrome',
    'version':'71.0',
    'platform': 'Windows 10'
  },{
    'browserName': 'Safari',
    'version':'12.0',
    'platform': 'macOS Mojave'
  },{
    'browserName': 'MicrosoftEdge',
    'version':'18.0',
    'platform': 'Windows 10'
  },{
    'browserName': 'Firefox',
    'version':'66.0',
    'platform': 'Windows 10'
  },{
    'browserName': 'Internet explorer',
    'version':'11.0',
    'platform': 'Windows 10'
  }],

  onPrepare: () => {

    myReporter = {
      specStarted: function(result) {
        specStr= result.id
        spec_id = parseInt(specStr[specStr.length -1])
        browser.getProcessedConfig().then(function (config) {
          var fullName = config.specs[spec_id];
          browser.executeScript("lambda-name="+fullName.split(/(\\|\/)/g).pop())
        });
      },
      specDone: function(result) {
        browser.executeScript("lambda-status="+result.status);
      }
    };
    jasmine.getEnv().addReporter(myReporter);
},
  onComplete: () => {
    browser.quit();
  }

};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
