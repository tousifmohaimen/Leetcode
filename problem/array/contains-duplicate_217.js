//My solution
//time complexity: O(n^2)
//space complexity: O(1)


// var containsDuplicate = function(nums) {
//     for(let i = 0;i < nums.length;i++){
//         for(let j = i + 1;j <nums.length;j++){
//             if(nums[i] === nums[j])
//                 return true;
//         }
//     }
//     return false
// };

//more optimized solution
//time complexity: O(n log n) if we consider the sort function
//space complexity: O(1)

// var containsDuplicate = function(nums) {
//     nums.sort((a,b) => a - b);
//     for(let i = 0;i < nums.length - 1;i++){
//         if(nums[i] === nums[i + 1])
//             return true;
//     }
//     return false
// }

//best optimized solution using set
//time complexity: O(n)
//space complexity: O(n)

var containsDuplicate = function(nums) {
    let mySet = new Set();
    for(let i = 0;i < nums.length;i++){
        if(mySet.has(nums[i]))
            return true;
        mySet.add(nums[i]);
    }
    return false;
}