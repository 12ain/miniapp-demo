//index.js
//获取应用实例
const app = getApp()

Page({


  data: {
    test: [
      {
        img: '/images/list/food-1.jpg',
        title: '爱心早餐',
        type: '健康养生',
        look: '3098浏览',
        say: '7评论'
      },
      {
        img : '/images/list/food-2.jpg',
        title : '困了只想喝咖啡',
        type : '家庭医生在线',
        look : '2999浏览',
        say : '14评论'
      },
      {
        img : '/images/list/food-3.jpg',
        title : '橘子多吃变小黄人',
        type : '家庭医生在线',
        look : '1356浏览',
        say : '5评论'
      },
      {
        img: '/images/list/food-4.jpg',
        title: '搜狐新闻，手机用久了',
        type: '广告',
        look: '506浏览',
        say: '3评论'
      },
      {
        img : '/images/list/food-5.jpg',
        title : '困了只想喝咖啡',
        type : '家庭医生在线',
        look : '299浏览',
        say : '13评论'
      }
    ]

  },

  onLoad: function () {
  },

})