// components/nineImg/cmp.js
import {myBeh} from "../behaviors/my-behaviors.js"


Component({
  /**
   * 组件的属性列表
   */
  behaviors:[myBeh],

  properties: {
    imageArr:Array
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
    // 给自定义组件添加的事件需要写在这个里边
    onTap(e){
      const index=e.currentTarget.dataset.index;
      const imageArr=this.data.imageArr;
      wx.previewImage({
        urls:imageArr,
        current:imageArr[index]
      })
    },
  }
})
