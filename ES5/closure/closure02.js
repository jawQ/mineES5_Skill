var scope = "global scope";
function checkscope() {
  var scope = "local scope"; // 1. 当checkscope这个函数被调用时，这个scope变量将被新的虚拟对象保存起来，并将该对象添加到作用域链
  
  function f() { // 当前这个嵌套函数，对应一条作用域链，该链指向一个变量，该变量是绑定对象
    return (function () {
      return scope;
    })()
  }
  return f;
}

checkscope()