// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
     let strIdx1 = 0;
     let strIdx2 = 0;

     while (strIdx2 < str2.length) {
          // if the characters match, move to the next character in str1
          if (str2[strIdx2] === str1[strIdx1]) {
               strIdx1++;
          }
          // if the index of str1 is equal to the length of str1, that means we have found all characters.
          if (strIdx1 === str1.length) {
               return true;
          }

          // move to the next character in str2
          strIdx2++;
     }
     return false;
}
