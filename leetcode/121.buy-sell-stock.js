/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let maxProfit = 0;

  for (let r = 1; r < prices.length; r++) {
    if (l < r) {
      let profit = prices[r] - prices[l];
      console.log(profit);
      maxProfit = Math.max(maxProfit, profit);
    } else {
      l += 1;
    }
  }
  return maxProfit;
};

const arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));
