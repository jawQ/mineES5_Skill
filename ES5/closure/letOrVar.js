// 使用var:
function test() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr[i] = function () {
      return i;
    };
  }
  for (var a = 0; a < 10; a++) {
    console.log(arr[a]());
  }
}
test(); // 输出10个10



// 使用let:
// 使用var:
function test() {
  var arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = function () {
      return i;
    };
  }
  for (var a = 0; a < 10; a++) {
    console.log(arr[a]());
  }
}
test(); // 0~9


// 问题:
/**
 * 1. 为什么第2个循环内,使用了let来声明i,就能够让下面的循环输出0~9???
 * 
 */