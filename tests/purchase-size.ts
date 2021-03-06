import { expect } from "chai";
import { checkout, productPopup, purchase } from '../pages';
import { confirmation } from '../pages/confirmatiom';

describe('Purchase N products', function () {
    it("Search yellow duck on the page", function() {
        purchase.openYellowDuckItem();
        expect(productPopup.isLoaded()).to.equal(
            true,
            "Expected that product box is displayed"
        );
        expect(purchase.confirmationTitle()).to.equal('Yellow Duck');
    });

    // TODO: fix page object
    it('Should demonstrate the selectByAttribute command', () => {
        const selectBox = $('select[name="options[Size]"]');
        const value = selectBox.getValue();
        console.log(value);

        selectBox.selectByAttribute('value', 'Medium');
        console.log(selectBox.getValue()); // returns "someValue5"

        let element = $('[value="Medium"]');
        console.log(element.isSelected()); // outputs: true
    });

    it("Clicks the Buy button and close popup", function() {
        productPopup.addToCart();
        productPopup.closePopup();
        expect($(productPopup.boxProduct).isVisible()).to.be.false;
    });

    it("Opens cart page", function() {
        checkout.openCart();
        expect(checkout.pageTitle()).includes('Checkout');
    });

    it("Fills required fields and save customer data", function() {
        checkout.typeFirstName();
        checkout.typeLastName();
        checkout.typeAddress1();
        checkout.typeAddress2();
        checkout.typeEmail();
        checkout.typePhone();
        checkout.typeCity();
        checkout.typePostcode();
        checkout.clickSaveDetails();
    });

    it("Confirm order and proceed", function() {

        checkout.confirmOrder();
        expect(confirmation.isLoaded()).to.equal(
            true,
            "Expected that confirmation page appears"
        );
        expect(confirmation.pageTitle()).includes('Order Success');
        expect(confirmation.confirmationTitle()).to.match(
            /Your order #.* is successfully completed!/
        );
    });
});
