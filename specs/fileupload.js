var path = require('path'),
    remote = require('selenium-webdriver/remote');

describe("File upload test", function () {
    beforeEach(function () {
        browser.setFileDetector(new remote.FileDetector());
        browser.get("https://angular-file-upload.appspot.com/");
    });

    it("should upload an image", function () {
        var input = element(by.model("picFile")),
            uploadedThumbnail = $("img[ngf-src=picFile]");

        // no image displayed
        expect(uploadedThumbnail.isDisplayed()).toBe(true);

        // assuming you have "test.jpg" right near the spec itself
        input.sendKeys(path.resolve(__dirname, "cat.jpg"));

        // there is a little uploaded image displayed
        expect(uploadedThumbnail.isDisplayed()).toBe(true);
    });
});