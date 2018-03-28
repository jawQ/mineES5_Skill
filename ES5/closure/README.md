```javascript
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
var getnum = outfunc() // 这一步执行完，outfunc()这个函数不是把innerFunc()这个函数作为返回值吗？那此时innervar这个局部变量不是应该被回收了吗？
console.log(getnum)
debugger;
getnum() // 1
```


## 疑惑：
1. 为什么第一次调用完getnum()这个函数后，outfunc()这个函数的局部变量 innervar 不会被垃圾回收机制销毁？
为什么还能给innerFuc()这个函数使用呢？不明白