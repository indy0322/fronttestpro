import { useState } from "react"
import { Button } from "bootstrap"
import { useEffect } from "react"


function Main() {

    useEffect(() => {
        let headers = new Headers({
            "Content-Type": "application/json",
        })
        const token = localStorage.getItem("user")
        if(token && token !== null){
            headers.append("Authorization", "Barer " + token)
        }

        let option = {
            headers: headers,
            method: "POST",
            body: JSON.stringify({token: token})
        }
        
        fetch("/auth",option)
            .then(async (response) => {
                if(response.status === 403){
                    window.location.href = "/"
                }
                else if(response.status == 200){
                   return await response.json()
                }
                else{
                    new Error(response);
                }
            }).then((res) => {
                //setArticleId(res.responsedata)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const onClickCardBtn = () => {
        let option = {
            method: "POST",
            body: JSON.stringify({register: "register"})
        }

        fetch("/inform",option)
    }

    return(
        <div>
            <h1>홈 페이지</h1>
            <button onClick={onClickCardBtn}>카드 인식</button>
        </div>
    )
}

export default Main;