/* My first Solution

var maxProfit = function(prices) {
    let minPrice = Math.min(...prices);
    let buyIndex = prices.indexOf(minPrice);
    let maxProfit = 0;
    for(let i = buyIndex + 1;i < prices.length;i++){
        let Profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit,Profit);
    }
    return maxProfit;
};

*/
//More optimized solution
