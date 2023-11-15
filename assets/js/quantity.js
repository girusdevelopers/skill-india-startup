
    // function calculateTotal() {
    //     // Get the selected quantities from the dropdowns
    //     var quantityGold = parseInt(document.getElementById("quantityGold").value, 10) || 0;
    //     var quantityPlatinum = parseInt(document.getElementById("quantityPlatinum").value, 10) || 0;
    //     var quantityStartup = parseInt(document.getElementById("quantityStartup").value, 10) || 0;

    //     // Prices for each ticket type
    //     var priceGold = 1599.00;
    //     var pricePlatinum = 3999.00;
    //     var priceStartup = 6499.00;

    //     // Tax and service fees for each ticket type
    //     var taxGold = 299.00;
    //     var serviceFeeGold = 49.99;
    //     var taxPlatinum = 585.00;
    //     var serviceFeePlatinum = 99.99;
    //     var taxStartup = 1199.00;
    //     var serviceFeeStartup = 199.99;

    //     // Calculate the total amount for each ticket type
    //     var totalGold = (priceGold * quantityGold) + taxGold + serviceFeeGold;
    //     var totalPlatinum = (pricePlatinum * quantityPlatinum) + taxPlatinum + serviceFeePlatinum;
    //     var totalStartup = (priceStartup * quantityStartup) + taxStartup + serviceFeeStartup;

    //     // Calculate the overall total amount
    //     var overallTotal = totalGold + totalPlatinum + totalStartup;

    //     // Update the total amount in the HTML
    //     document.getElementById("totalAmount").innerHTML = "Total : ₹" + overallTotal.toFixed(2);
// }
    

function calculateTotal() {
    // Retrieve selected quantity for each ticket type
    const quantityGold = document.getElementById('quantityGold').value;
    const quantityPlatinum = document.getElementById('quantityPlatinum').value;
    const quantityStartup = document.getElementById('quantityStartup').value;

    // Calculate total amount based on prices and quantities
    const totalAmount = (quantityGold * 1849) + (quantityPlatinum * 4684) + (quantityStartup * 7898);

    // Update the total amount in the HTML
    document.getElementById('totalAmount').innerHTML = `<p>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${totalAmount}</p>`;
}


    









    