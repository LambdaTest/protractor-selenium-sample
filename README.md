# Protractor Tutorial 
---
![LambdaTest Logo](https://www.lambdatest.com/static/images/logo.svg)

![Protractor Logo](https://www.lambdatest.com/blog/wp-content/uploads/2020/04/1_8FualX4XQbOUJDrg8yQAjQ.jpeg)


This tutorial will help you automate your selenium tests using Protractor on LambdaTest Cloud Selenium Grid. 
## Prerequisites for Protractor tutorial for Selenium and JavaScript
* **Node.js and 
Package Manager (npm)** : Install Node.js from [here](https://nodejs.org/en/#home-downloadhead) Or Install Node.js with [Homebrew](http://brew.sh/)
```
$ brew install node
```

* **LambdaTest Credentials**
   * Set LambdaTest username and access key in environment variables. It can be obtained from [LambdaTest Automation Dashboard](https://automation.lambdatest.com/)    
    example:
   - For linux/mac
    ```
    export LT_USERNAME="YOUR_USERNAME"
    export LT_ACCESS_KEY="YOUR ACCESS KEY"

    ```
    - For Windows
    ```
    set LT_USERNAME="YOUR_USERNAME"
    set LT_ACCESS_KEY="YOUR ACCESS KEY"

    ```
## Setup for Running the test
   * Clone the github repo in your local browser using ```git clone https://github.com/LambdaTest/protractor-selenium-sample.git``` or download it directly from [here](https://github.com/LambdaTest/protractor-selenium-sample/archive/master.zip)
   * Navigate to the folder in which you have cloned or downloaded the repo and install dependencies by using `npm install`
   * Update `fileupload.conf.js` files inside the `conf/` directory with your LambdaTest Username and Access Key. 
   
## Executing Protractor JavaScript Test

### Test Scenario 

The following code will run a test on LambdaTest Selenium Grid which will open a [URL](https://lambdatest.github.io/sample-todo-app/) and then strike the first and second items in the list, followed by addition of a new item. After this, it will quit the browser. 


To execute Protractor Javascript test on LambdaTest Selenium Grid, we'll need to navigate to the folder in which `conf` files are present. Inside this directory, we can run the the tests in single or parallel. 

To start a test, say we run a test with the file name "single" we'd need to run the following command: 
```npm run single``` 
This command will run the following code in your LambdaTest Selenium Grid. 

```
username= process.env.LT_USERNAME || "<your username>",
accessKey=  process.env.LT_ACCESS_KEY || "<your accessKey>",

exports.config = {
  'specs': ['../specs/single.js'],

  seleniumAddress: 'https://'+ username +':'+ accessKey  +'@hub.lambdatest.com/wd/hub',

  'capabilities': {
    'build': 'protractor-LambdaTest-Single',
    'browserName': 'chrome',
    'version':'73.0',
    'platform': 'Windows 10',
    'video': true,
    'network': true,
    'console': true,
    'visual': true
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

```
### Desired Capabilities 

Now we have a first script ready. Let us specify the capabilities to run the script on LambdaTest cloud-based Selenium Grid. LambdaTest provides a [capability generator](https://www.lambdatest.com/capabilities-generator/) to the capabilities in all the major languages. All you need to do is to select the OS, Resolution, Browser, Version and the code will be generated. You can just copy it and paste it in your code.

```  'capabilities': {
    'build': 'protractor-LambdaTest-Single',
    'browserName': 'chrome',
    'version':'73.0',
    'platform': 'Windows 10',
    'video': true,
    'network': true,
    'console': true,
    'visual': true
  },
  ```

This code will fire up a virtual machine with Chrome 73 on Windows 10 and will perform the given function. 


 #### Output from the command line 

 ![Output](https://www.lambdatest.com/blog/wp-content/uploads/2020/04/Command-line-Protractor.png)
 
 ##### Output on LambdaTest Dashboard
![Automation Dashboard](https://www.lambdatest.com/blog/wp-content/uploads/2020/04/Automation-dashboard.png)


## Parallel Testing for Protractor JavaScript

Will use the same test script over different configuration to demonstrate parallel testing. Parallel testing with Protractor will help you to run multiple test cases simultaneously.

* **Parallel Test**- Here is JavaScript file to run Protractor Testing on a parallel environment i.e. different operating system (Windows 10 and Mac OS Catalina) and different browsers (Chrome, Mozilla Firefox,Internet Explore, Edge, and Safari).

```
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
```

Now lets define the capabilities. Since, we are performing parallel testing over different configurations we will make use of <code>multiCapabilities[]</code>. 
```
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

```
Know how many concurrent sessions are needed by using our [Concurrency Test Calculator](https://www.lambdatest.com/concurrency-calculator?ref=github)

#### Output from the command line 
 
![Output](https://www.lambdatest.com/blog/wp-content/uploads/2020/04/command-line-parallel-output.png) 
 
Below we see a screenshot that depicts our Protractor code is running over different browsers i.e Chrome, Firefox, IE, Edge, and Safari on the LambdaTest Selenium Grid Platform. The results of the test script execution along with the logs can be accessed from the [LambdaTest Automation dashboard](automation.lambdatest.com).

#### Output from Automation Dashboard
![Automation Dashboard](https://www.lambdatest.com/blog/wp-content/uploads/2020/04/parallel-automation.png)


## Running your tests
- To run a single test, run `npm run single`
- To run parallel tests, run `npm run parallel`

###  Performing an automation test on your local hosted application| Local Testing
To perform an automation test on a file or application hosted on your local environment or behind firewall, follow the given steps: 

- Set tunnel value to `true` in test capabilities

So for example, if I have to run the above script for a locally hosted web-application then my capabilities class would be :

```
"tunnel" : true;
```

> OS specific instructions to download and setup tunnel binary can be found at the following links.
>    - [Windows](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+Windows)
>    - [Mac](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+MacOS)
>    - [Linux](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+Linux)

### Important Note:
Some Safari & IE browsers, doesn't support automatic resolution of the URL string "localhost". Therefore if you test on URLs like "http://localhost/" or "http://localhost:8080" etc, you would get an error in these browsers. A possible solution is to use "localhost.lambdatest.com" or replace the string "localhost" with machine IP address. For example if you wanted to test "http://localhost/dashboard" or, and your machine IP is 192.168.2.6 you can instead test on "http://192.168.2.6/dashboard" or "http://localhost.lambdatest.com/dashboard".


## About LambdaTest

[LambdaTest](https://www.lambdatest.com/) is a cloud based selenium grid infrastructure that can help you run automated cross browser compatibility tests on 2000+ different browser and operating system environments. LambdaTest supports all programming languages and frameworks that are supported with Selenium, and have easy integrations with all popular CI/CD platforms. It's a perfect solution to bring your [selenium automation testing](https://www.lambdatest.com/selenium-automation) to cloud based infrastructure that not only helps you increase your test coverage over multiple desktop and mobile browsers, but also allows you to cut down your test execution time by running tests on parallel.

### Resources

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)
##### [Protractor Documentation](https://www.protractortest.org/#/api)
