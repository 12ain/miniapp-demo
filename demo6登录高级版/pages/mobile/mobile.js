// pages/mobile/mobile.js
Page({
  data: {
    disabled: true,
    btnstate: "default",
    mobile: "",
  },
  mobileblur: function (e) {
    var content = e.detail.value;
    if (content != "") {
      this.setData({ disabled: false, btnstate: "primary", account: content });
    } else {
      this.setData({ disabled: true, btnstate: "default", mobile: "" });
    }
  },
});
