import axios from "axios";


class testService{

    async searchStay(key){
        return await axios.get(`https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${key}&numOfRows=30&MobileOS=WIN&_type=json&MobileApp=test&listYN=Y&keyword=경복궁 창동`)
                .then((res) => {
                    console.log(res.data.response.body.items.item)
                })
    }

    nodetest(){
        return axios.post(`/api/nodetest`,{title: "fffff"})
    }

    async login(setToken,data){
        return await axios.post(`/api/login`, data)
                .then((res) => {
                    console.log(res.data.token)
                    setToken(res.data.token)
                })
    }

    async auth(option){
        try{
            return await axios.get(`/api/auth`,option)
                .then((res) => {
                    console.log(res)
                })
        }
        catch(err){
            if(err.response.data.code == '401'){
                console.log(err.response.data.message)
            }
            if(err.response.data.code == '419'){
                console.log(err.response.data.message)
            }
            
        }
        /*return fetch('/api/auth',option)
                .then(async(res) => {
                    return await res.json()
                })
                .then((res) => {
                    console.log(res.message)
                    if(res.message === "정상 토큰"){
                        console.log(res.data.nickname)
                    }
                    else{
                        console.log("잘못된 토큰 또는 토큰이 없다")
                    }
                })*/
    }

    async register(data) {
        return await axios.post(`/api/register`,data)
            .then((res) => {
                console.log(res)
            })
    }
}

export default new testService()