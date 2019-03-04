

import {Request} from "../utils/request.js"

// 将请求数据写进单独的文件中，以防止在主文件中冗余
// 当多次使用时也可以降低耦合


class IndexModel extends Request{
    getArticleList(magazineId=0,start=0){
        // 将通过getData返回的promise对象返回
        return this.getData({
            url:`/getIndexArticleList/${magazineId}/${start}`
        })
    }
    getMarkTypeList(magazineId=0){
        return this.getData({
            url:`/getMarkTypeList/${magazineId}`
        })
    }
    getRecommendInfo(magazineId=0){
        return this.getData({
            url:`/getRecommendInfo/${magazineId}`
        })
    }
} 

export {IndexModel}