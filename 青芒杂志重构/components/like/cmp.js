// components/like/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:Boolean
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
    onLike(){

      const like = !this.data.like
      this.setData({
        like
      })


      // 通过注册事件  可以在article组件中触发事件拿到该组件中的数据
      this.triggerEvent("like",{
        like
      })
    }
  }
})
