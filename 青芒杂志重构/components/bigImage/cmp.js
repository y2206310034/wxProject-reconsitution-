// components/bigImage/cm.js

// 在行为的文件中是什么名字这里必须写啥不能够映射
import {myBeh} from "../behaviors/my-behaviors.js"

Component({
  /**
   * 组件的属性列表
   */
  behaviors:[myBeh],
  //  properties 和 data都能够实现数据绑定   但是使用时properties的优先级高
  properties: {
    // 设置属性的两种形式   如果用下边的设置的话    属性的默认值就会随着数据类型的改变而改变
    mySrc:{
      type:String,
      value:"",
      observer:function(newVal,oldVal,a){
      }
    },
    // mainTitle:String
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

  }
})
