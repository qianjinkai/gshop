// ajax请求函数模块
import axios from 'axios'

export default function ajax(url='',data={},type='GET') {

    return new Promise(function(resolve,reject){
        
        let promist
        if(type === 'GET'){
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            })
            promist = axios.get(url)
        }else{
            promise = axios.post(url,data)
        }

        promist.then(function(response){
            resolve(response.data)
        }).catch(function(error){
            require(error)
        })

    })

    

}