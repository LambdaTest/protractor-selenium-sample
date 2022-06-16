# Run Selenium Tests With Protractor On LambdaTest

<p align="center">
<img height="500" src="https://user-images.githubusercontent.com/95698164/172000250-2a4e49e5-ec0b-452a-b1bc-3674e75ecd76.png">
</p>

<p align="center">
  <a href="https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/c/LambdaTest" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn how to use Protractor framework to configure and run your JavaScript automation testing scripts on the [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?).*

[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## Table of Contents

* [Pre-requisites](#pre-requisites)
* [Run Your First Test](#run-your-first-test)
* [Executing the Test](#executing-the-test)
* [Testing Locally Hosted or Privately Hosted Projects](#testing-locally-hosted-or-privately-hosted-projects)

## Pre-requisites 

Before getting started with Selenium automation testing on LambdaTest, you need to:

* Download and install **NodeJS**. You should be having **NodeJS v6** or newer. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on LambdaTest’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

Clone the LambdaTest’s [protractor-selenium-sample repository](https://github.com/LambdaTest/protractor-selenium-sample) and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/protractor-selenium-sample
cd protractor-selenium-sample
```
Install the required project dependencies using the command below:

```bash
npm install
```

### Setting up Your Authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?) or through [LambdaTest Profile](https://accounts.lambdatest.com/login/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?).

Set LambdaTest `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  ```bash
  export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```
  * For **Windows**:
  ```bash
  $env:LT_USERNAME='YOUR_USERNAME'
  $env:LT_ACCESS_KEY='YOUR ACCESS KEY'
  ```

## Run Your First Test

### Sample Test with ProtractorJS

Let’s check a sample **Protractor** Selenium code running on LambdaTest Selenium Grid. This is a simple Protractor test automation script that tests a sample to-do list app. 
```js
 // single.js

describe('Add todo Lists', function () {
    browser.ignoreSynchronization = true;

    it('Add Customer Test', function () {


        browser.get('https://lambdatest.github.io/sample-todo-app/');

	browser.driver.findElement(by.name('li1')).then(function (foundElement) {
                foundElement.click();
            });

	browser.driver.findElement(by.name('li2')).then(function (foundElement) {
                foundElement.click();
            });

	browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
            });

	browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
                foundElement.click();
            });


		var foo = element(by.xpath('//html/body/div/div/div/ul/li[6]/span'));
        	expect(foo.getText()).toEqual("Yey, Let's add it to list");

    });

});
```

### Configuration of Your Test Capabilities

In this code, we are passing browser, browser version, and operating system information, along with LambdaTest Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```js
 capabilities = {
    build: 'protractor-LambdaTest-Single',
    browserName: 'chrome',
    version:'latest',
    platform: 'Windows 10',
  },
```
> You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.

## Executing the Test

The tests can be executed in the terminal using the following command:

```bash
npm run single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using Protractor Framework

### Executing Parallel Tests with Protractor

To run parallel tests using **Protractor**, we would have to execute the below command in the terminal:

```bash
npm run parallel
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?).

## Testing Locally Hosted or Privately Hosted Projects

You can test your locally hosted or privately hosted projects with [LambdaTest Selenium grid cloud](https://www.lambdatest.com/selenium-automation/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?) using LambdaTest Tunnel app. All you would have to do is set up an SSH tunnel using LambdaTest Tunnel app and pass toggle `tunnel = True` via desired capabilities. LambdaTest Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [LambdaTest Tunnel documentation](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish LambdaTest Tunnel.

>Download the binary file of:
* [LambdaTest Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [LambdaTest Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [LambdaTest Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **LambdaTest Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```js
const capabilities = {
        tunnel: true,
}
```

## Additional Links

* [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
* [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

## Tutorials 📙

Check out our latest tutorials on JavaScript automation testing 👇

* [Automated Cross Browser Testing With Protractor & Selenium](https://www.lambdatest.com/blog/automated-cross-browser-testing-with-protractor-selenium/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)
* [Complete Guide To Selenium Locators In Protractor (Examples)](https://www.lambdatest.com/blog/selenium-locators-in-protractor/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)
* [Protractor Tutorial: Handle Mouse Actions & Keyboard Events](https://www.lambdatest.com/blog/protractor-tutorial-handle-mouse-actions-keyboard-events/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)
* [Complete Guide To Handle Multiple Windows With Selenium & Protractor](https://www.lambdatest.com/blog/handle-multiple-windows-selenium-protractor/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)
* [Protractor Tutorial: Handling Timeouts With Selenium](https://www.lambdatest.com/blog/protractor-tutorial-handling-timeouts-with-selenium/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)
* [Protractor Tutorial: Handling iFrames & Frames in Selenium](https://www.lambdatest.com/blog/protractor-tutorial-handling-iframes-frames-in-selenium/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)
* [How To Handle Alerts And Popups In Protractor With Selenium?](https://www.lambdatest.com/blog/handle-alerts-popups-in-selenium-protractor/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)
* [How To Debug Protractor Tests for Selenium Test Automation?](https://www.lambdatest.com/blog/how-to-debug-protractor-tests-for-selenium-test-automation/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)

## Documentation & Resources :books:
      
Visit the following links to learn more about LambdaTest's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

* [LambdaTest Documentation](https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample)
* [LambdaTest Blog](https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample)
* [LambdaTest Learning Hub](https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample)    

## LambdaTest Community :busts_in_silhouette:

The [LambdaTest Community](https://community.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At LambdaTest ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/) 
      
## About LambdaTest

[LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on LambdaTest for their testing needs.    

### Features

* Run Selenium, Cypress, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
* Real-time cross browser testing on 3000+ environments.
* Test on Real device cloud
* Blazing fast test automation with HyperExecute
* Accelerate testing, shorten job times and get faster feedback on code changes with Test At Scale.
* Smart Visual Regression Testing on cloud
* 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
* Automated Screenshot testing across multiple browsers in a single click.
* Local testing of web and mobile apps.
* Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
* Geolocation testing of web and mobile apps across 53+ countries.
* LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop viewports
    
[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)
      
## We are here to help you :headphones:

* Got a query? we are available 24x7 to help. [Contact Us](support@lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample?)
* For more info, visit - [LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=protractor-selenium-sample)
