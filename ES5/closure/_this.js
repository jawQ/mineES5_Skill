var obj = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(() => {
        this.count++;
        console.log("a");
        console.log(this);
        console.log(this.count);
      }, 100);
    }
  }
};

// var obj = {
//   count: 0,
//   cool: () => {
//     // if (this.count < 1) {
//     // this.count++;
//     console.log("a");
//     console.log(this);
//     console.log(this.count);
//     // setTimeout(, 100);
//     // }
//   }
// };


// var obj = {
//   count: 0,
//   cool: function () {
//     // if (this.count < 1) {
//     // this.count++;
//     console.log("a");
//     console.log(this);
//     console.log(this.count);
//     // setTimeout(, 100);
//     // }
//   }
// };
obj.cool(); // a