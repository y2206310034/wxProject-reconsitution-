// components/article/cmp.js

import {List} from "../../models/list.js"

let likeModel = new List("likeList");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    article:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus:false
  },
  attached(){

    const article = this.data.article;
    const artId = article.artId;

    const likeStatus = likeModel.getStatus("artId",artId)

    this.setData({
      likeStatus
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      // console.log(e.detail)
      const like = e.detail.like;
      const article = this.data.article;
      const artId = article.artId;
      // const likeList = likeModel.getLikeList(); 
      if(like){

        // 缓存文章
        likeModel.addList(article)

      }else{

        // 将文章从缓存中移走
        likeModel.removeList("artId",artId);
      }
    }
  }
})
