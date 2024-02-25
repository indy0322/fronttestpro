import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import 'bulma/css/bulma.css';
import { useNavigate } from "react-router-dom";
import {Translator, Translate} from 'react-auto-translate';

function Login() {

    useEffect(() => {
        let lang = JSON.parse(localStorage.getItem('language'))
        if(lang){
            console.log(lang.lang1)
            console.log(lang.lang2)
            setGoogleLang(lang.lang1)
        }
    },[])

    const [googleLang, setGoogleLang] = useState('ko')
    const isDesktop = useMediaQuery({ query: '(min-width:769px)' })
    const isMobile = useMediaQuery({ query: '(max-width:768px)' })


    const modalClose = () => {
        const modal = document.getElementsByClassName("modal")[0]

        modal.classList.remove("is-active")
    }

    const modalOpen = () => {
        const modal = document.getElementsByClassName("modal")[0]

        modal.classList.add("is-active")
    }

    const onClicklanguageBtn = () => {
        const languageContainer = document.getElementsByClassName("languageContainer")[0]
        const languageContainerBtn = document.getElementsByClassName("languageContainerBtn")[0]
        const langBtnOpen = document.getElementsByClassName("langBtnOpen")[0]
        const langBtnClose = document.getElementsByClassName("langBtnClose")[0]
        
        if(langBtnOpen){
            languageContainer.style.width = "0"
            languageContainerBtn.style.width = "4vw"
            languageContainerBtn.classList.remove("langBtnOpen")
            languageContainerBtn.classList.add("langBtnClose")
        }
        else if(langBtnClose){
            languageContainer.style.width = "30vw"
            languageContainerBtn.style.width = "35vw"
            languageContainerBtn.classList.add("langBtnOpen")
            languageContainerBtn.classList.remove("langBtnClose")
        }
    }

    const onClickContentLanguage = () => {
        const contentsLanguage = document.getElementsByClassName("contentsLanguage")[0]
        const isActive = document.getElementsByClassName("is-active")[0]
        const languageOpen = document.getElementsByClassName("languageOpen")[0]
        if(languageOpen){
            contentsLanguage.classList.remove("is-active")
            contentsLanguage.classList.remove("languageOpen")
        }else if(!languageOpen){
            contentsLanguage.classList.add("is-active")
            contentsLanguage.classList.add("languageOpen")
        }

    }

    const onClickChangeLanguage = (e) =>{
        const contentLanguageTitle = document.getElementsByClassName("contentLanguageTitle")[0]
        contentLanguageTitle.innerHTML = e.target.innerHTML
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

                        
                    </div>
                </nav>
                <div className="emailPasswordContainer" style={{width:"30vw",marginRight:"35vw",marginLeft:"35vw",marginTop:"2vw", marginBottom:"3vw"}}>
                    <label className="label" style={{float:"left"}}>이메일</label>
                    <input class="email input is-info" type="text" placeholder="Email" style={{marginBottom:"2vw"}}></input>
                    <label className="label" style={{float:"left"}}>비밀번호</label>
                    <input className="password input is-info" type="text" placeholder="Password" ></input>
                </div>
                <div class="buttons" style={{alignItems:"center",justifyContent:"center"}}>
                    <button className="button is-info">로그인</button>
                    <button className="button is-success" onClick={modalOpen}>회원가입</button>
                </div>



                <div className="modal">
                    <div className="modal-background modalBackground" onClick={modalClose}></div>
                    <div className="modal-content" style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
                        <div className="box" style={{width:"30vw"}}>
                            <button class="delete deleteBtn" aria-label="close" style={{float:"right"}} onClick={modalClose}></button>
                    
                            <label className="label" style={{float:"left"}}>이메일</label>
                            <input class="email input is-info" type="text" placeholder="Email" style={{marginBottom:"2vw"}}></input>
                            <label className="label" style={{float:"left"}}>비밀번호</label>
                            <input className="password input is-info" type="text" placeholder="Password" style={{marginBottom:"2vw"}}></input>
                            <div className="sss" style={{width:"100vw"}}>
                                <label className="label" style={{float:"left"}}>인증번호</label>
                            </div>
                            <div style={{float:"left"}}> 
                                <input className="password input is-danger" type="text" placeholder="Certifiacation" style={{marginBottom:"2vw",width:"19vw",float:"left"}}></input>
                                <button className="registerBtn button is-danger" style={{float:"right",marginLeft:"1vw"}}>번호 발송</button>
                            </div>
                            <div>
                                <button className="registerBtn button is-success" style={{marginTop:"2vw"}}>회원가입</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>}




            {isMobile && <div>
                <Translator
                    //cacheProvider={cacheProvider}
                    from='ko'
                    to={googleLang}
                    googleApiKey={process.env.REACT_APP_GOOGLEKEY}
                >
                <div className="container" style={{paddingTop:"30vh"}}>
                    <div className="emailPasswordContainer" style={{width:"90vw",margin:"5vw"}}>
                        <label className="label" style={{float:"left"}}><Translate>이메일</Translate></label>
                        <input class="email input is-info" type="text" style={{marginBottom:"2vw"}}></input>
                        <label className="label" style={{float:"left"}}><Translate>비밀번호</Translate></label>
                        <input className="password input is-info" type="text" ></input>
                    </div>
                    <div class="buttons" style={{alignItems:"center",justifyContent:"center"}}>
                        <button className="button is-info"><Translate>로그인</Translate></button>
                        <button className="button is-success" onClick={modalOpen}><Translate>회원가입</Translate></button>
                    </div>
                </div>
                

                <div className="bottomNav" style={{height:"10vh",width:"100vw",backgroundColor:"white",bottom:"0",position:"fixed",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img type="button" src="/images/main.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                    <img type="button" src="/images/blackheart.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                    <img type="button" src="/images/translate.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                    <img type="button" src="/images/map.png" style={{width:"12vw",marginLeft:"3vw",marginRight:"3vw"}}></img>
                </div>


                <div className="languageContainerBtn langBtnClose" style={{zIndex:"1", backgroundColor: "rgba(0,0,0,0)",top:"40vh",right:"0", position:"fixed", width:"4vw",height:"8vh",transition: "width 0.5s"}}>
                    <button className="languageBtn open button is-success" style={{color:"red", height:"8vh",width:"1vw",padding:"2vw",float:"left",writingMode:"vertical-rl",fontSize:"3vw"}} onClick={onClicklanguageBtn}><Translate>언어</Translate></button>
                </div>
                </Translator>
                <div className="languageContainer" style={{zIndex:"2", backgroundColor:"white",top:"40vh",right:"0", position:"fixed", width:"0vw",height:"8vh",transition: "width 0.5s"}}>

                    <div className="contentsLanguage languageOpen dropdown" style={{margin:"2vw"}}>
                        <div className="dropdown-trigger">
                            <button className="button is-info" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={onClickContentLanguage}>
                                <span className="contentLanguageTitle">한국어</span>
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu3" role="menu" style={{width:"100%"}}>
                            <div className="dropdown-content" style={{width:"25vw",height:"30vh",overflowY:"scroll"}}>
                                <a href="#" class="dropdown-item" style={{width:"15vw",padding:"1vw"}} onClick={onClickChangeLanguage}>
                                    한국어
                                </a>
                                <a className="dropdown-item" style={{width:"15vw",padding:"1vw"}} onClick={onClickChangeLanguage}>
                                    日本語
                                </a>
                                <a href="#" className="dropdown-item" style={{width:"15vw",padding:"1vw"}} onClick={onClickChangeLanguage}>
                                    English
                                </a>
                                <a href="#" className="dropdown-item" style={{width:"15vw",padding:"1vw"}} onClick={onClickChangeLanguage}>
                                    中文
                                </a>
                                <a href="#" className="dropdown-item" style={{width:"15vw",padding:"1vw"}} onClick={onClickChangeLanguage}>
                                    Русский
                                </a>
                                <a href="#" className="dropdown-item" style={{width:"15vw",padding:"1vw"}} onClick={onClickChangeLanguage}>
                                    عربي    
                                </a>
                                <a href="#" className="dropdown-item" style={{width:"15vw",padding:"1vw"}} onClick={onClickChangeLanguage}>
                                    Português
                                </a>
                                <a href="#" className="dropdown-item" style={{width:"15vw",padding:"1vw"}} onClick={onClickChangeLanguage}>
                                    Español
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="modal">
                    <div className="modal-background modalBackground" onClick={modalClose}></div>
                    <div className="modal-content">
                        <div className="box" style={{width:"90vw",margin:"5vw"}}>
                            <button class="delete deleteBtn" aria-label="close" style={{float:"right"}} onClick={modalClose}></button>
                    
                            <label className="label" style={{float:"left"}}>이메일</label>
                            <input class="email input is-info" type="text" placeholder="Email" style={{marginBottom:"2vw"}}></input>
                            <label className="label" style={{float:"left"}}>비밀번호</label>
                            <input className="password input is-info" type="text" placeholder="Password" style={{marginBottom:"2vw"}}></input>
                            <label className="label" style={{float:"left"}}>인증번호</label>
                            <div style={{float:"left"}}>
                                <input className="password input is-danger" type="text" placeholder="Certifiacation" style={{marginBottom:"2vw",width:"40vw",float:"left"}}></input>
                                <button className="registerBtn button is-danger" style={{float:"right",marginLeft:"1vw"}}>번호 발송</button>
                            </div>
                            <div>
                                <button className="registerBtn button is-success" style={{marginTop:"2vw"}}>회원가입</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Login;