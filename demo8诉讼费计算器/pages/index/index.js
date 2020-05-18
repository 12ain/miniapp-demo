// index.js
Page({
  //初始化赋值
  data: {
    fei: "",
    fei2: "",
  },

  //计算处理函数
  fromSubmit: function (e) {
    let inputNum = Number(e.detail.value.input); 
    let Susong = 0; 
    let half = 0; //减半
    if (inputNum <= 10000) {
      Susong = 50;
    } else if (inputNum <= 100000 && a > 10000) {
      Susong = 0.025 * inputNum - 200;
    } else if (inputNum <= 200000 && a > 100000) {
      Susong = 0.02 * inputNum + 300;
    } else if (inputNum <= 500000 && a > 200000) {
      Susong = 0.015 * inputNum + 1300;
    } else if (inputNum <= 1000000 && a > 500000) {
      Susong = 0.01 * inputNum + 3800;
    } else if (inputNum <= 2000000 && a > 1000000) {
      Susong = 0.009 * inputNum + 4800;
    } else if (inputNum <= 5000000 && a > 2000000) {
      Susong = 0.008 * inputNum + 6800;
    } else if (inputNum <= 10000000 && a > 5000000) {
      Susong = 0.007 * inputNum + 11800;
    } else if (inputNum <= 20000000 && a > 10000000) {
      Susong = 0.006 * inputNum + 21800;
    } else if (inputNum > 20000000) {
      Susong = 0.005 * inputNum + 41800;
    }
    //减半诉讼费
    half = 0.5 * Susong;
    //显示计算结果
    this.setData({
      fei: Susong.toFixed(2), //两位小数
      fei2: half.toFixed(2),
    });
  },
  //重置功能
  formReset: function () {
    this.setData({
      fei: "",
      fei2: "",
    });
  },
});
