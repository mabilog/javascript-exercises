const leapYears = function (year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

  /*
  (year % 100 === 0 ) // this is returning a true/false value
  (year % 400 === 0 ) // Also returning a true or false
  (year % 4 === 0 )   // Another true/false
  
  If this first evaluation is true, return the result of this second evaluation. Otherwise, return the true/false of this third evaluation.

 */
}

module.exports = leapYears
