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

        // assuming you have "test.jpg" right near the spec itself
        input.sendKeys(path.resolve(__dirname, "small.jpg"));

    });
});