// add whatever parameters you deem necessary
function constructNote(msg, letters) {
     let msgFreq = {};
     let lettersFreq = {};

     // frequency counter for msg
     for (let char of msg) {
          msgFreq[char] = ++msgFreq[char] || 1;
     }

     // frequency counter for letters
     for (char of letters) {
          lettersFreq[char] = ++lettersFreq[char] || 1;
     }

     // check if msg can be constructed from letters
     for (let char in msgFreq) {
          // if there are not enough letters, then return false
          if (!lettersFreq[char]) {
               return false;
          }
          if (msgFreq[char] > lettersFreq[char]) {
               return false;
          }
     }
     return true;

}
