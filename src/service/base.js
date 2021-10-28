import axios from 'axios'
const ERR_OK = 0
// const baseURL = '/'
const baseURL = process.env.NODE_ENV === 'production' ? 'http://ustbhuangyi.com/music-next/' : '/'

axios.defaults.baseURL=baseURL

export function get(url , params){
    return axios.get(url,{
        params
    }).then((res) => {
        const serverCode = res.data
        if(serverCode.code === ERR_OK){
            return serverCode.result
        }
    }).catch((e) => {
        console.log(e)
    })
}

