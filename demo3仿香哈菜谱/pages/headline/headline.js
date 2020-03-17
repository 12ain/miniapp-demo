// pages/headline/headline.js
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    test: [
      {
        img: '/images/list/food-2.jpg',
        title: '困了只想喝咖啡',
        type: '家庭医生在线',
        look: '2999浏览',
        say: '14评论'
      },
      {
        img: '/images/list/food-3.jpg',
        title: '橘子多吃变小黄人',
        type: '家庭医生在线',
        look: '1356浏览',
        say: '5评论'
      },
      {
        img: '/images/list/food-4.jpg',
        title: '搜狐新闻，手机用久了',
        type: '广告',
        look: '506浏览',
        say: '3评论'
      },
      {
        img: '/images/list/food-5.jpg',
        title: '困了只想喝咖啡',
        type: '家庭医生在线',
        look: '299浏览',
        say: '13评论'
      },
      {
        img: '/images/list/food-1.jpg',
        title: '火鸡美酒圣诞树',
        type: '健康养生',
        look: '3098浏览',
        say: '7评论'
      },
    ]
  },
  onLoad: function () {

    var that = this;

    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },

  //  tab切换逻辑
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
})