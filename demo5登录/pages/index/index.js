//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图
    imgs: [{
        url: 'http://temp.im/640x260/ccc'
      },
      {
        url: 'http://temp.im/640x260/ccc'
      },
      {
        url: 'http://temp.im/640x260/ccc'
      }
    ],
    // 登录信息
    loginInfo: {
      'username': '',
      'password': ''
    }
  },
  // 获取用户输入的用户名
  usernameInput: function(e) {
    let target = "loginInfo.username"
    this.setData({
      [target]: e.detail.value
    })
  },
  // 获取用户输入的密码
  passwordInput: function(e) {
    let target = "loginInfo.password"
    this.setData({
      [target]: e.detail.value
    })
  },
  // 检查信息合法性
  checkLogin() {
    if (this.data.loginInfo.username.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 2000
      })
      return false;
    } else if (this.data.loginInfo.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 2000
      })
      return false;
    } else {
      wx.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 2000
      })
      return true;
    }
  },
  // 开始登录
  login() {
    this.checkLogin()
  }
})