const sumAll = function(start, end) {
  if (typeof(start) !== "number" || typeof(end) !== "number") return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  if (end < start) {
    const temp = start;
    start = end;
    end = temp;
  }
  let sum = 0;
  for (i = start; i <= end; ++i) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
