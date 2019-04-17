var path = require('path');


describe('Add todo Lists', function () {
    browser.ignoreSynchronization = true;

    it('Add Customer Test', function () {

        browser.get('https://files.epsilon.now.sh/');
        // browser.get('http://sl-test.herokuapp.com/guinea_pig/file_upload');
        
        var el  = element(by.id("testing-id"))
        // console.log('ACTIONS', browser.actions());
        // console.log('MOUSEDOWN', browser.actions().mouseDown);
        browser.actions().mouseDown(el.getWebElement()).perform()
        
        // var fileToUpload = '/Users/admin/Downloads/download.png',
        // absolutePath = path.resolve(__dirname, fileToUpload);
  
        // element(by.id('myfile')).sendKeys(absolutePath);    
        // element(by.id('submit')).click();


    });
});