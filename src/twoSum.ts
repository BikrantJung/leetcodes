/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function twoSum(nums: number[], target: number): number[] {
  let object: Record<number, number> = {};
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const diff = target - num;
    if (diff in object) return [object[diff], index];
    object[num] = index;
  }
  return;
}
console.log(twoSum([5, 12, 7, 2, 1, 8, 4], 12));
