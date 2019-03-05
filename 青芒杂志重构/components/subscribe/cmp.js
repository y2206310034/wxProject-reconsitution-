// components/subscribe/cmp.js

import {List} from "../../models/list.js"

let tagList = new List("tagList");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class:"common",
  },
  attached(){
    const tagId = this.data.tagId;
    const className = tagList.getStatus("tagId",tagId) === true ? 'subscribe':'common';
    this.setData({
      class:className
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){

      const mark = {
        tag:this.data.tag,
        tagId:this.data.tagId
      }
      // const tagList = tagList.getLikeList(); 
      if(this.data.class=="common"){
        tagList.addList(mark)
        // 存数据
      }else{
        // 删数据
        tagList.removeList("tagId",mark.tagId);
      }

      // console.log(mark);
      this.setClassName();
    },
    setClassName(){
      let className="";
      if(this.data.class == "common"){
        className="subscribe"
      }else{
        className="common"
      }
      this.setData({
        class:className
      })
    }
  }
})
