//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {
        id:0,
        title: '煮玉米棒',
        des: '145',
        kaluli: 162,
        src:'/images/list/food-1.jpg'
      },
      {
        id: 1,
        title: '红薯',
        des: '200',
        kaluli: 200,
        src: '/images/list/food-2.jpg'
      },
      {
        id: 2,
        title: '鸡蛋',
        des: '80',
        kaluli: 180,
        src: '/images/list/food-3.jpg'
      }
    ]
  },
  onLoad: function () {
  },
})
