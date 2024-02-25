import {useEffect, useState} from "react";
import { Loader } from "@googlemaps/js-api-loader";
import OpenAI from "openai";



//구글지도는 언어를 선택할 시, 페이지를 새로고침해서 다시 언어를 설정해주어야 한다. 현재 아래 페이지는 미완성
function Testgooglemap() {
    

    let lang = JSON.parse(localStorage.getItem('language'))
        if(lang){
            console.log(lang.lang1)
            console.log(lang.lang2)
    }

    var loader = new Loader({
        apiKey:process.env.REACT_APP_GOOGLEKEY,
        version:'weekly',
        language:lang.lang1
    })
    const initMap = async (lat,lng,destination) => {

        const mapOptions = {
            center: {
            lat: -34.397,
            lng: 150.644
            },
            zoom: 4
        };

        loader.load().then((google) => {
            var directionsRenderer = new google.maps.DirectionsRenderer()
            var map = new google.maps.Map(document.getElementById("map"), mapOptions)
            directionsRenderer.setMap(map)

           var directionsService = new google.maps.DirectionsService()

            var request = {
                origin: destination,
                destination: {lat: lat, lng: lng},
                travelMode: google.maps.TravelMode.TRANSIT
            };

            directionsService.route(request, function(response, status){
                if(status == 'OK'){
                    directionsRenderer.setDirections(response)
                }
            })
        })
    
        /*loader.importLibrary('maps').then(({Map}) => {
            new Map(document.getElementById("map"), mapOptions);
        }).catch((e) => {
            // do something
        });*/

    }
    navigator.geolocation.getCurrentPosition(async(position) => {
        
        initMap(position.coords.latitude,position.coords.longitude,lang.lang2)
    
    },(err) => {
        console.log(err)
    })
    
    //const [lang, setLang] = useState('')

    

    const [lat,setLat] = useState()
    const [lng,setLng] = useState()
    

    
    

    

    

    const Handle = () => {
        
        /*loader.load().then((google) => {
            var directionsRenderer = new google.maps.DirectionsRenderer()
            var directionsService = new google.maps.DirectionsService()

            var request = {
                origin: "경복궁",
                destination: "광화문",
                travelMode: google.maps.TravelMode.TRANSIT
            };

            directionsService.route(request, function(response, status){
                if(status == 'OK'){
                    directionsRenderer.setDirections(response)
                }
            })
        })*/
        
        /*loader.importLibrary('routes').then(async ({DirectionsRenderer, DirectionsService}) => {
            
            var request = {
                origin: "경복궁",
                destination: "광화문",
                travelMode: window.google.maps.TravelMode.TRANSIT
              };

              new DirectionsRenderer().route(request, function(result, status){
                if(status == 'OK'){
                    new DirectionsService().setDirections(result)
                }
            })
        })*/
    }

    

    return(
        <div>
            <div id="map" style={{width:"50vw", height:"50vh"}}></div>
            <select onChange={Handle}>
                    <option value={'ko'}>한국어</option>
                    <option value={"ja"}>일본어</option>
                    <option value={"zh-CN"}>중국어</option>
                    <option value={"ru"}>러시아어</option>
            </select>
            <button onClick={Handle}>경로</button>
        </div>
        
    )
}

export default Testgooglemap;