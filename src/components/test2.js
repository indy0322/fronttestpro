import { useEffect } from "react"



function Test2() {

    let voices = []
    let s
    function setSpeech() {
        return new Promise(
            function (resolve, reject) {
                let synth = window.speechSynthesis;
                let id;
    
                id = setInterval(() => {
                    if (synth.getVoices().length !== 0) {
                        resolve(synth.getVoices());
                        clearInterval(id);
                    }
                }, 10);
            }
        )
    }

    useEffect(() => {
        s = setSpeech().then((v) => {
            v.forEach((voice) => {
                console.log(voice.name)
                voices.push(voice.name)
                console.log(voices)
                const option = document.createElement("option")
                const voiceSelect = document.getElementById("voiceSelect")
                option.value = voice.name
                option.textContent = voice.name
                voiceSelect.appendChild(option)

            })
        })

    })
    
    
    
    /*s.then((v) => {
        v.forEach((voice) => {
            console.log(voice.name)
            voices.push(voice.name)
        })
    });*/ 
    
    


    return (
        <div>
             <select id="voiceSelect">
                
             </select>
        </div>
    )
}

export default Test2