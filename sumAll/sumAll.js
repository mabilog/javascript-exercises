const sumAll = function (x, y) {
  /*
  1. The arguments being passed much be integers.
  Meaning, no objects nor strings. --ERROR

  2. Min and Max must be positives.

  3. Min and Max must be defined.
  */

  if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
  if (x < 0 || y < 0) return "ERROR";
  if (y < x) {
    let temp = x;
    x = y;
    y = temp;
  }
  return result = (y * (y + x) / 2);
}

module.exports = sumAll
