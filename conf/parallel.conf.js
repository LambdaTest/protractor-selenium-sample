exports.config = {
  'specs': [ '../specs/single.js' ],
  'username': process.env.LT_USERNAME || 'LT_USERNAME',
  'accessKey': process.env.LT_ACCESS_KEY || 'LT_ACCESS_KEY',
  seleniumAddress: 'https://'+username+':'+accessKey+'@hub.lambdatest.com/wd/hub',

  'commonCapabilities': {
    'build': 'protractor-selenium-sample',
    'name': 'parallel-local-test',
    'tunnel': true
  },

  'multiCapabilities': [{
    'browserName': 'Chrome',
    'version':'67.0',
    'platform': 'WIN10'
  },{
    'browserName': 'Safari',
    'version':'11.1',
    'platform': 'macOS 10.12'
  },{
    'browserName': 'Edge',
    'version':'15.0',
    'platform': 'WIN10'
  },{
    'browserName': 'Firefox',
    'version':'62.0',
    'platform': 'WIN10'
  },{
    'browserName': 'Internet explorer',
    'version':'10.0',
    'platform': 'WIN10'
  }]
};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
