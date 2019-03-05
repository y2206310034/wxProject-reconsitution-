class List {
    constructor(key){
        this.key = key;
    }
    setList(value){
        wx.setStorageSync(this.key,value);
    }
    getList(){
        return wx.getStorageSync(this.key) || [];
    }
    addList(article){
        const likeList = this.getList();
        likeList.unshift(article);
        this.setList(likeList)
    }
    removeList(key,value){
        const likeList = this.getList();

        let myIndex;
        likeList.forEach((ele,index)=>{
            if(ele[key] == value){
                myIndex = index;
            }
        })

        likeList.splice(myIndex,1);

        this.setList(likeList);
    }
    // 需要传入两个值 第一个是希望通过那个属性获取状态 
    //               第二个是当前元素中与这个属性相对应的值
    getStatus(key,value){
        const likeList = this.getList();
        let myIndex;
        const likeStatus = likeList.some(ele=>{
            return ele[key] == value;
        })
        return likeStatus;
    }

}

export {List}