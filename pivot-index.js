// add whatever parameters you deem necessary
function pivotIndex(nums) {
     let rightSum = nums.reduce((a, b) => a + b, 0);
     let leftSum = 0;
     // no valid pivotIdx, return -1;
     let pivotIdx = -1;

     for (let i = 0; i < nums.length; i++) {
          // adjust rightSum before comparing leftSum and rightSum
          rightSum -= nums[i];

          if (leftSum === rightSum) {
               pivotIdx = i;
               break;
          }
          // adjust leftSum after comparing leftsum and rightSum
          leftSum += nums[i];
     }
     return pivotIdx;
}
