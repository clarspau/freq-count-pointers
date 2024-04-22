// add whatever parameters you deem necessary
function separatePositive(nums) {
     let start = 0;
     let end = nums.length - 1;

     while (start < end) {
          // if the start is negative and the end is positive, swap them
          if (nums[start] < 0 && nums[end] > 0) {
               [nums[start], nums[end]] = [nums[end], nums[start]];

               // move the pointers
               start++;
               end--;
          }
          else {
               if (nums[start] > 0) {
                    start++;
               }
               else {
                    end--;
               }
          }
     }
     return nums;
}
