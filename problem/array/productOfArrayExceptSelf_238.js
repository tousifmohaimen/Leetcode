// Brute force solution
//time complexity: O(n^2)
//space complexity: O(n)
// var productExceptSelf = function(nums) {
//     let answer = []
//     for(let i = 0;i < nums.length;i++){
//         let product = 1;
//         for(let j=0;j < nums.length;j++){
//             if(i != j)
//                 product *= nums[j]
//         }
//         answer[i] = product
//     }
//     return answer
// };

//Optimized solution
var productExceptSelf = function(nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);
    let pre = 1;
    let post = 1;
    for(let i = 0;i < n;i++){
        answer[i] = pre;
        pre = pre * nums[i];
    }
    for(let i = n;i >= 0;i--){
        answer[i] = post * answer[i];
        post = post * nums[i];
    }
    return answer;
       
}
//time complexity of this solution is O(n)
//space complexity of this solution is O(1) as we are using the answer array to store the result