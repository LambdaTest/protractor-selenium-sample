var path = require('path'),
    remote = require('selenium-webdriver/remote');


describe('Non Angular Upload', function () {
    browser.ignoreSynchronization = true;

    it('Open Upload Site', function () {
        browser.get('https://fileconvoy.com/');
    });

    it('should upload file', function() {
        browser.setFileDetector(new remote.FileDetector);
        var fileToUpload = 'small.jpg';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        element(by.css('input[type="file"]')).sendKeys(absolutePath);   
        element(by.id('readTermsOfUse')).click();
        element(by.id('upload_button')).click();
    });

});
