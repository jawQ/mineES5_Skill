// 删除:

// 源数组:
var arr = [4, 5, 6];


/**
 * 方法1: pop()
 * 定义： 删除并返回数组的最后一个元素。
 * 缺点: 
 *      1. 会破坏源数组。
 *  */


 function _pop(_arr) {
   var result_arr = _arr.pop()
   console.log('查看被pop的数组其中一个元素')
   console.log(result_arr)
 }
//  _pop(arr);

/**
 * 方法2: shift()
 * 定义： 删除并返回数组的第一个元素。
 * 缺点: 
 *      1. 会破坏源数组。
 *  */

function _shift(_arr) {
  var result_arr = _arr.shift()
  console.log('查看被pop的数组其中一个元素')
  console.log(result_arr)
}

// _shift(arr);

/**
 * 方法3: splice()
 * 
 * 定义： 删除数组元素，也可以添加元素。
 * 
 * 语法: arrayObject.splice(i(开始删除/添加的索引),count(你想删除的数量),item1,.....,itemX(添加的值))
 * 
 * 注意: 如果只给了开始索引,后面参数都没给,那么就是从索引位置到结束都删了;
 * 
 * 优点：
 *      1. 能够选择删除元素，也能选择添加元素；
 * 缺点: 
 *      1. 会改变源数组。
 *  */

 function _splice(_arr) {
  // 删除:
  // var result_arr = _arr.splice(1)
  // 添加
  // 再索引1处，添加2个元素,并不删除元素：
  // var result_arr = _arr.splice(1, 0, '张', '国', '荣')
  // 或
  // var result_arr = _arr.splice(1, '张', '国', '荣')

  // 再索引1处，添加2个元素,并删除1个元素：
  // var result_arr = _arr.splice(1,1,'张','国','荣')
  console.log('查看被splice后会怎样')
  console.log(result_arr)
  console.log('看看源数组被改变没')
  console.log(_arr)
 }

// _splice(arr);






 /**
 * 方法1: delete arr[i]
 * 定义： delete 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。
 * 
 * 优点：
 * 缺点: 
 *      1. 会改变源数组。
 *      2. 即使删除了值，但是数组的length不变。
 *  */
function _delete(_arr) {
  console.log('源数组');
  console.log(_arr);
  var delete_arr = delete _arr[1];
  console.log('delete后');
  console.log(delete_arr);
  console.log('删除后数组');
  console.log(_arr);
}
_delete(arr);