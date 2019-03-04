//index.js
//获取应用实例
import {IndexModel} from "../../models/index.js"
const indexModel = new IndexModel()
import {random} from "../../utils/randomStr.js"


// 如果用api设置tabBar时设置颜色需要用#666666不能够简写为#666


Page({
  data: {
    more:"",
    magazineId:0,
    loading:true,
    articleList:[],
    markTypeList:[],
    recommendInfo:{}
  },
  onReachBottom(){

    // 在这里改变自定义组件的属性值  可以在组件的对应属性的observer监控到属性的改变

    this.setData({
      more:random(20)
    })
  },
  onCatalog(){
    wx.navigateTo({
      url:"/pages/catalog/catalog"
    })
  },

// 点击nav时触发的事件  
  onNav(e){
    const magazineId = e.detail.index;


    this.setMagazineId(magazineId);
    this.resetData();
    this.scrollPageToTop();
    this._getInfo( magazineId );
  },

  resetData(){
    this.setData({
      // 在请求数据之前将数据先清空   解决在加载数据时不显示骨架图的问题（如果不删除的话，图片连接就一直存在）
      articleList:[],
      markTypeList:[],
      recommendInfo:{}
    })
  },
  setMagazineId(magazineId){
    this.setData({
      magazineId,
    })
  },


  onLoad: function (options) {
    this._getInfo();
  },

  scrollPageToTop(){
    // 控制页面滚动的api
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  _getInfo(magazineId){

    const articleList = indexModel.getArticleList(magazineId)
    const markTypeList = indexModel.getMarkTypeList(magazineId)
    const recommendInfo = indexModel.getRecommendInfo(magazineId)

    Promise.all([articleList,markTypeList,recommendInfo]).then(res=>{
      this.setData({
        articleList:res[0],
        markTypeList:res[1],
        recommendInfo:res[2]
      })
      this.hideLoading();
    })
  },
  hideLoading(){
    this.setData({
      loading:false
    })
  }
})


