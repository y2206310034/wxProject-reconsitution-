// components/articleList/cmp.js

import {IndexModel} from "../../models/index.js"
const indexModel = new IndexModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:Object,
    more:{
      type:String,
      value:"",
      observer:"loadMore"
    },
    // magazineId:Number
    magazineId:{
      type:Number,
      value:0,
      observer:"hasMoreData"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    // 判断是否有更多的数据加载回来
    noMoreData:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore(){

      if(this._isLock() || this.data.noMoreData){
        return ;
      }

      this._loadLock();

      // 这两个值是为了确定请求数据的地址 
      // magazineId是获取哪一类型的数据
      const magazineId = this.properties.magazineId;
      // start通过数据长度可以知道下一个从哪个数据开始请求
      const start = this.properties.articleList.length;

      indexModel.getArticleList(magazineId,start).then(res=>{

        this._setMoreData(res);
        this._unLoadLock();
      })
    },

    hasMoreData(){
      this.setData({
        noMoreData:false
      })
    },

    // 上锁是为了防治网络状况不好的情况下出现多次请求同意数据
    _isLock(){
      return this.data.loading;
    },

    _loadLock(){
      this.setData({
        loading:true
      })
    },

    // 设置数据  数组合并
    _setMoreData(list){
      const combineList = this.properties.articleList.concat(list);

      if(combineList.length === this.properties.articleList.length){
        this.setData({
          noMoreData:true
        })
        return ;
      }
      this.setData({
        articleList:combineList
      })
    },

    _unLoadLock(){
      this.setData({
        loading:false
      })
    }
  }
})
