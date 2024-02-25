import { useEffect, useState } from "react";
import OpenAI from "openai";
import testService from "../services/testServices";


//tts 기능 현재 완성본, openai를 사용해야 함 nodejs 서버와 연계해야 함. (바이너리 파일을 blob으로 바꾸고 그 blob을 주소로 바꾸어 주소를 오디오로 실행하는 것이 정답)
function Tts() {

    const [lang, setLang] = useState('ko')
    const [sentence, setSentence] = useState('')
    
    

    const Handle = async() => {
        const openai = new OpenAI({
            apiKey: '',
            dangerouslyAllowBrowser: true
        })
    
        const mp3 = await openai.audio.speech.create({
            model: "tts-1",
            voice: "alloy",
            input: "hello"
        })

        const file = await mp3.arrayBuffer()
        const reader = new FileReader(file)
    
        //console.log(await mp3.arrayBuffer())

    }

    const audioCall = async () => {
        const aaa = await testService.audioMp3({speak: sentence})
        console.log(aaa)
        const tmp = new Audio(aaa)
        tmp.play()
        
        setTimeout(() => {
            URL.revokeObjectURL(aaa)
            console.log('삭제됨')
        },2000)
    }

    const onChangeSentence = (e) => {
        setSentence(e.target.value)
    }
    

    return(
        <div>
            <div id="map" style={{width:"50vw", height:"50vh"}}></div>
            <select>
                    <option value={'ko'}>한국어</option>
                    <option value={"ja"}>일본어</option>
                    <option value={"zh-CN"}>중국어</option>
                    <option value={"ru"}>러시아어</option>
            </select>
            <button onClick={Handle}>재생</button>
            <button onClick={audioCall}>호출</button>
            <input onChange={onChangeSentence}></input>
            
            
        </div>
    )
}

export default Tts;