// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,

    // 通过tagId控制下个页面获取的数据
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
      // wx.navigateTo({
      //   url:""
      // })
      this._showError();
    },
    _showError(){
      wx.showToast({
        title:"当前小程序为测试版本，不能点击跳转哦~",
        icon:"none",
        duration:1000,
        mask:true
      })
    }


  }
})
