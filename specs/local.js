
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
