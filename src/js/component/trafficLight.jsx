import React, {useState} from "react";
import '../../styles/trafficLight.css'

const TrafficLight = () => {

    const [selectColor, setSelectColor] = useState("")

    return (
        <>
                
             <div className="stem"></div>
             <div className="traffic-light-body">
                 <div className={
                       selectColor === "red" ? "red selected" : "red"
                 }
                    onClick={() => setSelectColor("red")}
                 ></div>
                 <div className={
                    selectColor === "yellow" ? "yellow selected" : "yellow"
                 }
                 onClick={() => setSelectColor("yellow")}
                 ></div>
                  <div className={
                    selectColor === "green" ? "green selected" : "green"
                  }
                  onClick={() => setSelectColor("green")}
                  ></div>
             </div>
           
        </>
    );
}

export default TrafficLight;