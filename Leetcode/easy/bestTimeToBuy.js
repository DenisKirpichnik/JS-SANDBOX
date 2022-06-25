/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let lowPrice = prices[0]
    let profit = 0;
    for (let i =1; i< prices.length; i++){
        if(prices[i] < lowPrice){
            lowPrice = prices[i]
        } else {
            profit = Math.max(prices[i] - lowPrice, profit)
        }
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))