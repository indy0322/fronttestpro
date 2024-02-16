import { useEffect, useState } from "react";
import axios from "axios";
import testService from "../services/testServices";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import {Translator, Translate} from 'react-auto-translate';
import 'bulma/css/bulma.css'



function Test() {

    const [userToken, setToken] = useState()
    const [lang, setLang] = useState('ko')
    const [id, setId] = useState()
    const [pw, setPw] = useState()
    const [resgisterId, setRegisterId] = useState()
    const [registerPw, setRegisterPw] = useState()
    const [registerName, setRegisterName] = useState()
    const [tourList, setTourList] = useState([])

    const [googleLang, setGoogleLang] = useState('ko')

    const [script, setScript] = useState('')

    const handleId = (e) => {
        setRegisterId(e.target.value)
    }

    const handlePw = (e) => {
        setRegisterPw(e.target.value)
    }

    const handleName = (e) => {
        setRegisterName(e.target.value)
    }
    

    const handleLang = (e) => {
        setLang(e.target.value)
    }

    const handleChangeLang = (e) => {
        setGoogleLang(e.target.value)
    }

    

    useEffect(async () => {
        console.log(`${process.env.REACT_APP_GOOGLEKEY}`)
        const key = `Ptb926c0Feu4UG1IH76IjAHxpnG8psQyzx7amXPbEX0CFKUJiig7K7lmGsBiv0HaZnNsVAlOx5Bkxk51BMPlFQ%3D%3D`

        
        /*await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${googleKey}&target=ja&q=안녕하세요`)
            .then((res) => {
                console.log(res.data.data.translations[0].translatedText)
            })*/
        testService.searchStay(setTourList,key)

        
    },[])
    
    

    const{
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startlisen = () => {
        SpeechRecognition.startListening({
        continuous: false,
        language: lang
      })
    }

    if(!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support recognition.</span>
    }

    

    const onClickPlay = () => {
        const script = document.getElementById("script")
        console.log(script.innerHTML)
        if(script.innerHTML !== ""){
            console.log(script.innerHTML)
            const utterThis = new SpeechSynthesisUtterance(script.innerHTML)
            utterThis.pitch = 1
            utterThis.rate = 1
            utterThis.lang = lang
            window.speechSynthesis.speak(utterThis)
            //utterThis.onend()
        }
    }




    const onClickBtn = async() => {
        
        await testService.nodetest()
    }

    const onLogin = async() => {
        await testService.login(setToken,{id: id, pw: pw})
    }

    const changeId = (e) => {
        setId(e.target.value)
    }

    const changePw = (e) => {
        setPw(e.target.value)
    }

    const registerBtn = () => {
        testService.register({name: registerName, email: resgisterId, password: registerPw})
    }

    const onAuth = () => {
        let headers = new Headers()

        let option = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": userToken
            },
            //method: "GET",
        }

        try{
            testService.auth(option)
        }catch(err){
            console.log(err)
        }
    }

    //const [innerState, setInnerState] = useState(false)

    const onOpenClose = () => {
        //setInnerState(!innerState)
        const container = document.getElementsByClassName("container")[0]
        const stateClose = document.getElementsByClassName("close")[0]
        const stateOpen = document.getElementsByClassName("open")[0]
        const inner = document.getElementsByClassName("inner")[0]
        if(stateClose){
            inner.style.height = "20vh"
            container.style.height = '35vh'
            container.classList.remove("close")
            container.classList.add("open")
        }
        else if(stateOpen){
            inner.style.height = "0vh"
            container.style.height = '15vh'
            container.classList.remove("open")
            container.classList.add("close")
        }
    }
    
    

    return(
        <div>
        <Translator
            //cacheProvider={cacheProvider}
            /*from='ko'
            to={googleLang}
            googleApiKey={process.env.REACT_APP_GOOGLEKEY}*/
        >
            
            <h1 class="testScreen"><Translate>테스트 화면</Translate></h1>
            <button onClick={onClickBtn}><Translate>연습</Translate></button>
            <button onClick={onLogin}>로그인</button>
            <button onClick={onAuth}>인증</button>
            <input onChange={changeId}></input>
            <input onChange={changePw}></input>
        </Translator>

        {/*<iframe
                width="450"
                height="250"
                frameborder="0" 
                style={{border:"0"}}
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCMUpRd2v-ZsH7IAeBnrnGOn8YvrgOZAyY&origin=37.0080,127.2763&destination=Кёнбоккун&mode=transit&language=${googleLang}`}
                allowfullscreen
            >
    </iframe>*/}

            <div>
                <select onChange={handleChangeLang}>
                    <option value={'ko'}>한국</option>
                    <option value={"ja"}>일본</option>
                    <option value={"zh-CN"}>중국</option>
                    <option value={"ru"}>러시아</option>
                </select>
                {/*tourList.map((e) => {
                    return(<p><Translator
                        //cacheProvider={cacheProvider}
                        //from='ko'
                        //to={googleLang}
                        //googleApiKey={process.env.REACT_APP_GOOGLEKEY}
                    ><Translate>{e.addr1}</Translate></Translator></p>)
                })*/}
            </div>
            
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={startlisen}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p id="script">{transcript}</p>
            <button onClick={onClickPlay}>재생</button>

            <div>
                <select onChange={handleLang}>
                    <option value={'ko'}>한국어</option>
                    <option value={"ja"}>일본어</option>
                    <option value={"zh-CN"}>중국어</option>
                    <option value={"ru"}>러시아어</option>
                </select>
            </div>

            

            <div>
                이름:<input onChange={handleName}></input>
                이메일:<input onChange={handleId}></input>
                비밀번호:<input onChange={handlePw}></input>
                <button onClick={registerBtn}>회원가입</button>
            </div>

            
            <div className="container close" style={{height:"15vh",width:"100vw",backgroundColor:"black",bottom:"0",position:"fixed", transition: "height 0.5s"}}>
                <button className="btn open" style={{color:"red"}} onClick={onOpenClose}>open</button>
                <div className="inner" style={{backgroundColor:"yellow",height:"0vh",width:"100vw",bottom:"10vh",position:"fixed", transition:"height 0.5s"}}><p>안뇽하세요</p></div>
            </div>
            <div className="bottomNav" style={{height:"10vh",width:"100vw",backgroundColor:"red",bottom:"0",position:"fixed"}}>

            </div>
            
            
    </div>
    )
}

export default Test;