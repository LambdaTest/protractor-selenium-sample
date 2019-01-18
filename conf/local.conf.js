username= process.env.LT_USERNAME || <your username>,
accessKey=  process.env.LT_ACCESS_KEY || <your accessKey>,

exports.config = {
  'specs': [ '../specs/local.js' ],

  seleniumAddress: 'https://'+username+':'+accessKey+'@hub.lambdatest.com/wd/hub',

  'capabilities': {
    'build': 'protractor-selenium-sample',
    'name': 'single-test',
    'browserName': 'chrome',
    'version':'67.0',
    'platform': 'WIN10',
    'video': true,
    'network': true,
    'console': true,
    'visual': true,
    'screen_resolution': '1024x768',
    'tunnel': true
  }
};
