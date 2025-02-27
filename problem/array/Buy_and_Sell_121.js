/* My first Solution
time complexity: O(n)
space complexity: O(n)


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

//time complexity: O(n),space complexity: O(1);
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let i= 0;i < prices.length;i++){
        minPrice = Math.min(prices[i],minPrice);//1
        maxProfit = Math.max(maxProfit,prices[i] - minPrice); //5
    }
    return maxProfit;
};