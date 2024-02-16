import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import testService from "../services/testServices";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import {Translator, Translate} from 'react-auto-translate';
import 'bulma/css/bulma.css'
import { GoogleMap,LoadScript,DirectionsService,DirectionsRenderer,useJsApiLoader,useLoadScript } from '@react-google-maps/api';

const center = {
    lat: 37.5760222,
    lng: 126.9769000
}




function TestMapNew() {

    const Handle =(e)=> {
        isLoaded = useJsApiLoader({
            googleMapsApiKey: process.env.REACT_APP_GOOGLEKEY,//process.env.REACT_APP_GOOGLEKEY,
            language: e.target.value,
            libraries: ['places']
        })   
    }
    useEffect(() => {
        let lang = JSON.parse(localStorage.getItem('language'))
        console.log(lang.lang1)
        console.log(lang.lang2)
        
        setGoogleLang(lang.lang1)
    })

    const langRef = useRef()
    const [googlelang, setGoogleLang] = useState('')
   
    
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: '',//process.env.REACT_APP_GOOGLEKEY,
        language: "ko",
        libraries: ['places']
    })


    const [directionsResonse, setDirectionsResponse] = useState(null)

    const originRef = useRef()

    const destinationRef = useRef()

    

    

    const calculateRoute = async () => {
        if(originRef.current.value === '' || destinationRef.current.value === ''){
            return
        }
        const directions = new window.google.maps.DirectionsService()
        const result = await directions.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: window.google.maps.TravelMode.TRANSIT
        })
        setDirectionsResponse(result)

    }

    return(
        <div>
            
            {isLoaded ? <GoogleMap 
                center={center}
                zoom={12}
                mapContainerStyle={{height:'400px',width:"100%"}}
            >
                {directionsResonse && <DirectionsRenderer directions={directionsResonse}/>}
            </GoogleMap>:(<p>loading</p>)}
           
            
            
            
            <div>
                <input ref={originRef}></input>
                <input ref={destinationRef}></input>
                <button onClick={calculateRoute}>검색</button>
            </div>

            <select ref={langRef} onChange={Handle}>
                    <option value={'ko 한국어'} ref={langRef}>한국어</option>
                    <option value={"ja 일본어"}>일본어</option>
                    <option value={"zh-CN 중국어"}>중국어</option>
                    <option value={"ru 러시아어"}>러시아어</option>
            </select>
        </div>
    )
}

export default TestMapNew