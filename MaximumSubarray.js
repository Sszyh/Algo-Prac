/**
 * @param {number[]} nums
 * @return {number}
 */ 

var maxSubArray = function(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
      let tempSum = nums[i];
      if (tempSum > max) {
          max = tempSum;
      }
      for (let j = i + 1; j < nums.length; j++) {
          tempSum = tempSum + nums[j];
          if (tempSum > max) {
              max = tempSum;
          }
      }
  }
   if (max > nums[nums.length -1 ]) {
    return max;
  } else {
    return nums[nums.length -1 ]
  }
};
// O(N 2)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
      let tempSum = 0;
      for (let j = i; j < nums.length; j++) {
          tempSum += nums[j];
          max = Math.max(tempSum, max);
      }
  }
  return max;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let tempSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
      let num = nums[i];
      tempSum = Math.max(num, tempSum + num);
      max = Math.max(max, tempSum);
  }
  return max;
};

// O(N) Kadane's algorithm