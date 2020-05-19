const maxProfit = function (price) {
    if (price.length === 0) {
        return 0;
    }
    let minPrice = price[0];
    let maxProfit = 0;

    for (let i = 0; i < price.length; i++) {

        if (price[i] < minPrice) {
            minPrice = price[i];
        } else if (price[i] - minPrice > maxProfit) {
            maxProfit = price[i] - minPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));