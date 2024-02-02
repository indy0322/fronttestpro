import { useEffect, useState } from "react";
import 'bulma/css/bulma.css'

function Introduce() {

    const onOpenClose = () => {
        //setInnerState(!innerState)
        const reviewContainer = document.getElementsByClassName("reviewContainer")[0]
        const stateClose = document.getElementsByClassName("close")[0]
        const stateOpen = document.getElementsByClassName("open")[0]
        const review = document.getElementsByClassName("review")[0]
        const btn = document.getElementsByClassName("btn")[0]
        if(stateClose){
            review.style.height = "20vh"
            reviewContainer.style.height = '33vh'
            reviewContainer.classList.remove("close")
            reviewContainer.classList.add("open")
            btn.innerHTML = "close"
        }
        else if(stateOpen){
            review.style.height = "0vh"
            reviewContainer.style.height = '13vh'
            reviewContainer.classList.remove("open")
            reviewContainer.classList.add("close")
            btn.innerHTML = "open"
        }
    }

    const onClickHeart = () => {
        const heartBtn = document.getElementsByClassName("heartBtn")[0]
        const heartFull = document.getElementsByClassName("heartFull")[0]
        const heartEmpty = document.getElementsByClassName("heartEmpty")[0]
        if(heartFull){
            heartBtn.innerHTML = "🤍"
            heartBtn.classList.remove("heartFull")
            heartBtn.classList.add("heartEmpty")
        }
        else if(heartEmpty){
            heartBtn.innerHTML = "❤️"
            heartBtn.classList.remove("heartEmpty")
            heartBtn.classList.add("heartFull")
        }
    }


    return(
        <div>
            <div style={{height:"100vh",width:"100vw",bottom:"0",position:"fixed"}}>
                
                <figure className="image is-1by1" style={{height:"40vh"}}>
                    <img style={{width:"100vw", height:"40vh",top:"0",position:"fixed"}} src="http://tong.visitkorea.or.kr/cms/resource/33/2678633_image2_1.jpg"/>
                </figure>
                <span className="heartBtn heartFull" type="button" style={{top:"0",right:"2vw",position:"fixed",fontSize:"10vw"}} onClick={onClickHeart}>❤️</span>
                
                <div className="columns">
                    <div className="column is-primary">
                        First column
                    </div>
                    <div className="column">
                        Second column
                    </div>
                    <div className="column">
                        Third column
                    </div>
                    <div className="column">
                        Fourth column
                    </div>
                </div>
            </div>
            <div className="reviewContainer close" style={{height:"13vh",width:"100vw",backgroundColor: "rgba(0,0,0,0)",bottom:"0",position:"fixed", transition: "height 0.5s"}}>
                <button className="btn open button is-light" style={{color:"red", height:"3vh"}} onClick={onOpenClose}>open</button>
                <div className="review" style={{backgroundColor:"yellow",height:"0vh",width:"100vw",bottom:"10vh",position:"fixed", transition:"height 0.5s", scrollSnapType:"y mandatory"}}>
                    <div className="box">
                        I'm in a box.
                    </div>
                    <div className="box">
                        I'm in a box2.
                    </div>
                    <div className="box">
                        I'm in a box3.
                    </div>
                    <div className="box">
                        I'm in a box4.
                    </div>
                    <div className="box">
                        I'm in a box.
                    </div>
                    <div className="box">
                        I'm in a box.
                    </div>
                </div>
            </div>
            <div className="bottomNav" style={{height:"10vh",width:"100vw",backgroundColor:"red",bottom:"0",position:"fixed"}}>

            </div>
        </div>
    )
}

export default Introduce