
describe('Add todo Lists', function () {
    browser.ignoreSynchronization = true;

    it('Add Customer Test', function () {


        browser.get('https://files.epsilon.now.sh/');
        element  = element(by.id("testing-id"))
        browser.actions().mouseDown(element.getWebElement()).perform()

    });

});
