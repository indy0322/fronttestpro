import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import 'bulma/css/bulma.css'

function Review() {
    
    const isDesktop = useMediaQuery({ query: '(min-width:769px)' })
    const isMobile = useMediaQuery({ query: '(max-width:768px)' })

    const params = useParams()
    const [tourName, setTourName] = useState()

    useEffect(() => {
        console.log(params)
        setTourName(params.tourId)

        const input = document.getElementsByClassName("input")[0]
        input.defaultValue = "경복궁"
        console.log(input.value)
    },[])
    return(
        <div>
            {isDesktop && <div>
                <p>데스크탑</p>
            </div>}


            {isMobile && <div>
                <div className="contentsContainer" style={{top:"2vh",position:"fixed"}}>
                    <div className="field">
                        <label className="label">관광지명</label>
                        <div className="control" style={{width:"90vw",margin:"5vw"}}>
                            <input className="input is-success" type="text" disabled/>
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