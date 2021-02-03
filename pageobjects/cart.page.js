const Page = require('./page');

class CartPage extends Page {
    
    get proceedToCheckoutButton () { return $('#columns').$('a[title="Proceed to checkout"]') }
    get cartSummary () {return $('#cart_summary')}


    

    open (path) {
        return super.open(path);
    }

    isCartEmpty () {
        return this.cartSummary == undefined
    }
}

module.exports = new CartPage();