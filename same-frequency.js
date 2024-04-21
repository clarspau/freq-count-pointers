// add whatever parameters you deem necessary
function sameFrequency(nums1, nums2) {
     // converting nums to strings so it's easy to iterate over each digit
     let str1 = nums1.toString();
     let str2 = nums2.toString();

     // if the length of the two strings are not equal, return false
     if (str1.length !== str2.length) {
          return false;
     }

     // create an empty object to store the frequency of each digit
     let freqCounter1 = {};
     let freqCounter2 = {};

     for (let i = 0; i < str1.length; i++) {
          freqCounter1[str1[i]] = (freqCounter1[str1[i]] || 0) + 1;
     }

     for (let j = 0; j < str2.length; j++) {
          freqCounter2[str2[j]] = (freqCounter2[str2[j]] || 0) + 1;
     }

     for (let key in freqCounter1) {
          if (freqCounter1[key] !== freqCounter2[key]) {
               return false;
          }
     }
     return true;
}
