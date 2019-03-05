

class SubscribeModel{
    setMyTagList(value){
        wx.setStorageSync("markTagList",value)
    }
    getMyTagList(){
        return wx.getStorageSync("markTagList")||[];
    }
}
export{SubscribeModel}