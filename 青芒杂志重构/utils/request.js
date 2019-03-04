
// var baseUrl="https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine"


class Request{
    baseUrl = "https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine"
    getData({url,methods="GET",data={}}){
        var promise = new Promise( (resolve,reject) =>{
            wx.request({
                url:this.baseUrl + url,
                success:res=>{
                    if(res.data.code == 0){
                        resolve(res.data.data)
                    }else{
                        reject()
                        this._showError()
                    }
                },
                fail:err=>{
                    reject()
                    this._showError()
                }
            })
        })
        return promise;
    }
    _showError(){
        wx.showToast({
            title:"请求错误",
            icon:"none"
        })
        
    }
}

export {Request}


// // 这里需要传入一个对象   对象的属性为   url  和  success回调
// function request(parmas){
//     wx.request({
//         url:baseUrl + parmas.url,
//         success:function(res){
//             if(res.data.code == 0){
//                 parmas.success(res.data)
//             }else{
//                 showError();
//             }
//         },
//         fail:function(){
//             showError();
//         }
//     })
// }
// function showError(){
//     wx.showToast({
//         title:"请求错误",
//         icon:"none"
//     })
// }

