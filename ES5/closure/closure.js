var outfunc = function() {
  var innervar = 0;

  function innerFunc() {
    return (function() {
      console.log('查看被赋值后再调用内部函数时，变量的值')
      console.log(innervar)
      innervar = innervar+1;
      return innervar;
    })()
  }
  return innerFunc;
}
var getnum = outfunc()

getnum() // 1
getnum() // 2
getnum() // 3