exports.config = {
  'specs': [ '../specs/local.js' ],
  'username': process.env.LT_USERNAME || 'LT_USERNAME',
  'accessKey': process.env.LT_ACCESS_KEY || 'LT_ACCESS_KEY',
  seleniumAddress: 'https://'+username+':'+accessKey+'@hub.lambdatest.com/wd/hub',


  'commonCapabilities': {
    'build': 'protractor-selenium-sample',
    'name': 'parallel-local-test',
    'tunnel': true
  },

  'multiCapabilities': [{
    'browserName': 'Chrome'
  },{
    'browserName': 'Firefox'
  },{
    'browserName': 'Safari'
  }],



// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
