exports.config = {
  'specs': [ '../specs/single.js' ],
  'username': process.env.LT_USERNAME || 'nikhily',
  'accessKey': process.env.LT_ACCESS_KEY || 'MXZzl3jLwoc7IyAzGHJOFvotwZXIjnOIbhlcYHAZHeiVkXtQXb',
  seleniumAddress: 'https://'+username+':'+accessKey+'@hub.lambdatest.com/wd/hub',

  'capabilities': {
    'build': 'protractor-LambdaTest-Single',
    'name': spec,
    'browserName': 'chrome',
    'version':'67.0',
    'platform': 'WIN10',
    'video': true,
    'network': true,
    'console': true,
    'visual': true,
    'screen_resolution': '1024x768'
  }
};
