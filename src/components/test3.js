import { useState } from "react";


function Test3(){
    const SpeechRecog = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecog()
    recognition.lang = 'ja'
    recognition.continuous = false

    const [audioState, setAudioState] = useState(false)
    const [transcript, setTranscript] = useState()

    const speechStart = () => {
        setAudioState(true)
        recognition.start()
    }

    const speechEnd = () => {
        setAudioState(false)
        recognition.stop()
    }

    recognition.onend = () => {
        setAudioState(false)
    }

    recognition.onresult = (event) => {
        setTranscript(event.results[0][0].transcript)
    }

    return (
        <div>
            <p>Microphone: {audioState ? 'on' : 'off'}</p>
            <button onClick={speechStart}>Start</button>
            <button onClick={speechEnd}>Stop</button>
            <button>Reset</button>
            <p>{transcript}</p>
        </div>
    )
}

export default Test3