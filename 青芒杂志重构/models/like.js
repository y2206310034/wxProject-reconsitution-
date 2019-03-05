class LikeModel {
    setLikeList(value){
        wx.setStorageSync("likeList",value);
    }
    getLikeList(){
        return wx.getStorageSync("likeList") || [];
    }
    addLikeList(article){
        const likeList = this.getLikeList();
        likeList.unshift(article);
        this.setLikeList(likeList)
    }
    removeLikeList(artId){
        const likeList = this.getLikeList();

        let myIndex;
        likeList.forEach((ele,index)=>{
            if(ele.artId == artId){
                myIndex = index;
            }
        })

        likeList.splice(myIndex,1);

        this.setLikeList(likeList);
    }
    getLikeStatus(artId){
        const likeList = this.getLikeList();
        let myIndex;
        const likeStatus = likeList.some((ele,index)=>{
            return ele.artId == artId;
        })
        return likeStatus;
    }

}

export {LikeModel}