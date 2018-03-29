var _arr = [5, 2, 1, 2, 4, 3, 5, 6, 7, 1, 0];
function removeDoubel(array) {
  var i,
    k,
    len = array.length;
  for (i = 0; i < len; i++) {
    debugger
    for (k = i+1; k < len; k++) {
      if (array[i] == array[k]) {
        array.splice(k,1);
        len--;
        k--;
      }
    }
  }
  return array;
}
console.log(removeDoubel(_arr));