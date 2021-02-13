const reverseString = function (word) {
  let splitStr = word.split(""); // ['h','e','l','l','o'];
  let revArr = splitStr.reverse(); // ['o','l','l','e','h'];
  let joinArr = revArr.join(""); // "olleh";
  return joinArr;

}

module.exports = reverseString
