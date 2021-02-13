const removeFromArray = function (...args) {
  let array = args[0];
  return array.filter(item => !args.includes(item));
}

module.exports = removeFromArray
