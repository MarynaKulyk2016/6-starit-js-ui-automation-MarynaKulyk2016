import { expect } from "chai";

describe('Customer', function () {
    it('Should open homepage', function () {
        browser.url('/');
        const title = browser.getTitle();
        expect(title).to.be.equal('My Store | Online Store');
    });

    it("Opens customer service page", function() {
        const defaultMenu = $('#default-menu');
        const customerServiceLink = defaultMenu.$('.customer-service a');
        customerServiceLink.click();
        expect($('#box-customer-service').isVisible()).to.be.true;
    });

    it("Fills in the form inputs", function() {
        const contactForm = $('form[name="contact_form"]');
        const contactEmail = contactForm.$('input[name="email"]');

        contactEmail.addValue('wuxox@utoo.email');

        browser.addValue('input[name="name"]', 'Test name');
        browser.addValue('input[name="subject"]', 'Test subject');
        browser.addValue('textarea[name="message"]', 'Test message');

        $('button[name="send"]').click();
        //TODO: fix after error won't appear
        expect($('.alert-danger').isVisible()).to.be.true;
    });
});