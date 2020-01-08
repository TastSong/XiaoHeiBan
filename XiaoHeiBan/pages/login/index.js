// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    angle: 0
  },

  /***
   * 登录
   */
  goToIndex: function () {
    
  },
  /**
   * 去注册
   */
  toRegister: function () {

  },
  /**
   * 找回密码
   */
  toFindPass: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载")
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("监听页面显示")
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("监听页面初次渲染完成")
      let that = this
      wx.onAccelerometerChange(function(res){
        let angle = -(res.x * 30).toFixed(1)
        if(angle > 10){
          angle = 10
        }else if(angle < -10){
          angle = -10
        }
        that.setData({
          angle: angle
        })
      })
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("监听页面卸载")
    wx.stopAccelerometer({
      
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("监听页面下拉到最顶层")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("页面上拉触底")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("点击分享按钮")
  }
})