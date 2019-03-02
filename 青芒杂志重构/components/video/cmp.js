// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
    posterSrc:String,
    duration:String,
    videoId:String,
    mainTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster:true
  },
  lifetimes:{

    // created 这个生命周期data数据是获取不到的  
    attached(){
      // 可以直接获取到methods中的方法
      this._getVideoInfo();
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onVideoPlayTap(){
      this._toggleVideoPoster();
      this.video.play();
    },
    onMaskTap(){
      this._toggleVideoPoster();

      // 防止某些设备stop后再次播放不能回到0
      this.video.seek(0);
      this.video.stop();
    },
    onVideoEnd(){
      this._toggleVideoPoster();
    },
    _toggleVideoPoster(){
      this.setData({
        showPoster:!this.data.showPoster
      })
    },
    _getVideoInfo(){
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id,this);
    }
  }
})
