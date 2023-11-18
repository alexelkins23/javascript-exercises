const removeFromArray = function(arr, ...args) {
  for (const arg of args) {
    const index = arr.indexOf(arg);
    if (index !== undefined) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
