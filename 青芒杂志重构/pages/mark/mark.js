// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    authorized:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 在页面加载进来时加载用户信息
    wx.getSetting({
      success:res=>{
        // console.log(res.authSetting);
        // 如果用户授权了则res.authSetting["scope.userInfo"]的值将会是true
        if(res.authSetting["scope.userInfo"]){

          // 通过这个api可以获取到用户信息
          wx.getUserInfo({
            success:res=>{
              // console.log(res.userInfo);
              this.setData({
                userInfo:res.userInfo,
                authorized:true
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo(e){
    const userInfo = e.detail.userInfo
    if(userInfo){
      this.setData({
        userInfo,
        authorized:true
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})