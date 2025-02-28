var containsNearbyDuplicate = function(nums, k) {
    let mySet = new Set();
    for(let i = 0;i < nums.length;i++){  
        if(mySet.has(nums[i]))
            return true;
        mySet.add(nums[i])
        if(i >= k)
            mySet.delete(nums[i-k]);
        
    }
    return false
};

//time complexity: O(n)
//space complexity: O(k)