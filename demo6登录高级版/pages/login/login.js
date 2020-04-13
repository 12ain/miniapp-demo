// pages/login/login.js
Page({
  data: {
    disabled: true,
    btnstate: "default",
    account: "",
    password: "",
  },
  accountInput: function (e) {
    var content = e.detail.value;
    console.log(content);
    if (content != "") {
      this.setData({ disabled: false, btnstate: "primary", account: content });
    }
  },
  pwdBlur: function (e) {
    var password = e.detail.value;
    if (password != "") {
      this.setData({ password: password });
    }
  },
  // 检查信息合法性
  checkLogin() {
    if (this.data.account.length == 0) {
      wx.showToast({
        title: "用户名不能为空",
        icon: "loading",
        duration: 2000,
      });
      return false;
    } else if (this.data.password.length == 0) {
      wx.showToast({
        title: "密码不能为空",
        icon: "loading",
        duration: 2000,
      });
      return false;
    } else {
      wx.showToast({
        title: "登陆成功",
        icon: "success",
        duration: 2000,
      });
      return true;
    }
  },
});
