// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    magazineTypeArr:["青芒","兴趣","物质","世界","新事","灵魂"],
    magazineIndex:0,

    // 这个参数是为了  通过点击控制nav的移动
    activeId:"magazine"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){

      const lastIndex = this.data.magazineIndex;
      const index = e.currentTarget.dataset.index;
      this.setData({
        magazineIndex:index,
        activeId:`magazine${index === 0 ? 0 : index - 1}`
      })

      // 这一步是为了防止多次点击同一标签产生多次网络请求，减少网络带宽，增强用户体验
      if(lastIndex == this.data.magazineIndex){
        return;
      }
      this.triggerEvent("nav",{
        index
      })
    }
  }
})
