// a variable name must be unique in the same scope
// only code and values that live in the same scope can be acessed by the code

function one() {
  // this `a` only belongs to the `one()` function
  var a = 1;
  console.log(a);
}
function two() {
  // this `a` only belongs to the `two()` function
  var a = 2;
  console.log(a);
}
one();
two();
// 1
// 2
