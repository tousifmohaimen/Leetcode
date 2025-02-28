// Source: 167. Two Sum II - Input array is sorted
// my solution with brute force approach
// time complexity: O(n^2)
// space complexity: O(1)


var twoSum = function(numbers, target) {
    for(let i = 0;i < numbers.length;i++){
        for(let j=i + 1;j<numbers.length;j++){
            if(numbers[j] === target - numbers[i])
                return [i + 1, j + 1];
        }
    }
};

// as this is a sorted array, we can use two pointer approach

var twoSum = function(numbers, target) {
    let left = 0; // Pointer at the start of the array
    let right = numbers.length - 1; // Pointer at the end of the array

    while (left < right) {
        const sum = numbers[left] + numbers[right]; // Calculate the sum
        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-based indices
        } else if (sum < target) {
            left++; // Move the left pointer to the right
        } else {
            right--; // Move the right pointer to the left
        }
    }
};