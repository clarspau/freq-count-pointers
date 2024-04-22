// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
     let result = {};

     for (let i = 0; i < keys.length; i++) {
          if (values[i] === undefined) {
               result[keys[i]] = null;
          }
          else {
               result[keys[i]] = values[i];
          }
     }
     return result;
}
