/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//SOLUTION 1 = BRUTEFORCE SOLUTION - o(n^2)
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for(let j=i + 1 ; j <nums.length; j++){
            if(nums[j] === target - nums[i]){
                return [i,j]
            }
        }
    }
};

//SOLUTION 2 = USING HASHMAP - o(n) => most optimized solution
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i =0;i < nums.length;i++){
        let temp = target - nums[i];
        if(map.has(temp)){
            return [map.get(temp),i]
        }
        map.set(nums[i],i);
    }
}
