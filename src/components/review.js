import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import testService from "../services/testServices";
import 'bulma/css/bulma.css'

function Review() {
    
    const isDesktop = useMediaQuery({ query: '(min-width:769px)' })
    const isMobile = useMediaQuery({ query: '(max-width:768px)' })

    const params = useParams()
    const [tourName, setTourName] = useState()
    const [nickName, setNickName] = useState()
    const [reviewContent, setReviewContent] = useState()


    useEffect(() => {
        console.log(params)

        const tourname = document.getElementsByClassName("tourname")[0]
        const nickname = document.getElementsByClassName("nickname")[0]

        tourname.defaultValue = params.tourId
        nickname.defaultValue = "kim"
        setNickName(nickname.value)
        setTourName(tourname.value)

        console.log(tourname.value)
    },[])


    const onClickReviewRegister = () => {
        testService.reviewRegister({nickname:nickName, tourname:tourName, review:reviewContent})
    }

    const onChangeReview = (e) => {
        setReviewContent(e.target.value)
    }


    return(
        <div>
            {isDesktop && <div>
            <nav class="navbar" role="navigation" aria-label="main navigation" style={{height:"8vh"}}>
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                    <img src="#" width="112" height="28"/>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Home
                        </a>
                        <a class="navbar-item">
                            Map
                        </a>
                        <a class="navbar-item">
                            Translation
                        </a>
                        <a class="navbar-item">
                            Wishlist
                        </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-link">
                                Log in
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="contentsContainer" style={{top:"8vh",position:"fixed", alignItems:"center"}}>
                <div className="field" style={{marginBottom:"5vh", marginTop:"5vh"}}>
                    <label className="label">관광지명</label>
                    <div className="control" style={{width:"50vw",marginLeft:"25vw",marginRight:"25vw"}}>
                        <input className="tourname input is-success" type="text" disabled/>
                    </div>
                </div>
                <div className="field" style={{marginBottom:"5vh"}}>
                    <label className="label">닉네임</label>
                    <div className="control" style={{width:"50vw",marginLeft:"25vw",marginRight:"25vw"}}>
                        <input className="nickname input is-success" type="text" disabled/>
                    </div>
                </div>
                <div className="field" style={{marginBottom:"10vh"}}>
                    <label className="label">내용</label>
                    <div className="control" style={{width:"50vw",marginLeft:"25vw",marginRight:"25vw"}}>
                        <textarea className="textarea is-success" onChange={onChangeReview}></textarea>
                    </div>
                </div>
                <div class="field is-grouped" style={{alignItems:"center",justifyContent:"center"}}>
                    <div class="control">
                        <button class="button is-link" onClick={onClickReviewRegister}>리뷰 등록</button>
                    </div>
                </div>
            </div>
            </div>}


            {isMobile && <div>
                <div className="contentsContainer" style={{top:"2vh",position:"fixed"}}>
                    <div className="field">
                        <label className="label">관광지명</label>
                        <div className="control" style={{width:"90vw",margin:"5vw"}}>
                            <input className="tourname input is-success" type="text" disabled/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">닉네임</label>
                        <div className="control" style={{width:"90vw",margin:"5vw"}}>
                            <input className="nickname input is-success" type="text" disabled/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">내용</label>
                        <div className="control" style={{width:"90vw",margin:"5vw"}}>
                            <textarea className="textarea is-success" onChange={onChangeReview}></textarea>
                        </div>
                    </div>
                    <div class="field is-grouped" style={{alignItems:"center",justifyContent:"center"}}>
                        <div class="control">
                            <button class="button is-link" onClick={onClickReviewRegister}>리뷰 등록</button>
                        </div>
                    </div>
                </div>
                <div className="bottomNav" style={{height:"10vh",width:"100vw",backgroundColor:"white",bottom:"0",position:"fixed",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img type="button" src="/images/main.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                    <img type="button" src="/images/blackheart.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                    <img type="button" src="/images/translate.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                    <img type="button" src="/images/map.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                    <img type="button" src="/images/user.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                </div>
            </div>}
            
        </div>
    )
}

export default Review;