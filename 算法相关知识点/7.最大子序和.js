console.time();
function maxSubArray(nums) {
    const memo = [];
    memo[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        memo[i] = Math.max(nums[i] + memo[i - 1], nums[i]);
    }
    return Math.max.apply(null, memo);
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);

console.log(result);
console.timeEnd();