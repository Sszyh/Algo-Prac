/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Math.max(...prices);
    let maxProfit = 0;
    console.log(minPrice);
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

maxProfit([7,1,5,3,6,4]);