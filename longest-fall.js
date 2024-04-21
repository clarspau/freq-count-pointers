// add whatever parameters you deem necessary
function longestFall(nums) {
     let counter = 1;
     let maxCounter = 1;

     // if the array is empty, return 0
     if (nums.length === 0) {
          return 0;
     }

     for (let i = 1; i < nums.length; i++) {
          // check if the current number is less than the previous number
          if (nums[i] < nums[i - 1]) {
               counter++;
               maxCounter = Math.max(counter, maxCounter);
          }
          else {
               counter = 1;
          }
     }
     return maxCounter;
}
