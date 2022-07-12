
username= process.env.LT_USERNAME || "<your username>",
accessKey=  process.env.LT_ACCESS_KEY || "<your accessKey>",

exports.config = {
  'specs': ['../specs/fileupload.js'],

  seleniumAddress: 'https://'+ username +':'+ accessKey  +'@hub.lambdatest.com/wd/hub',

  'capabilities': {
    'build': 'protractor-LambdaTest-Single',
    'browserName': 'chrome',
    'version':'latest',
    'platform': 'Windows 10'
  },
  onPrepare: () => {

    myReporter = {
      specStarted: function(result) {
        specStr= result.id
        spec_id = parseInt(specStr[specStr.length -1])
        browser.getProcessedConfig().then(function (config) {
          var fullName = config.specs[spec_id];
          browser.executeScript("lambda-name="+fullName.split(/(\\|\/)/g).pop())
        });
      }
    };
    jasmine.getEnv().addReporter(myReporter);
},
  onComplete: (passed) => {
    if(passed)
      browser.executeScript("lambda-status=passed");
    else 
      browser.executeScript("lambda-status=failed");
    browser.quit();
  }

};
