import { useState } from "react";
import style from "./Menu.module.css"
function Menu() {
    const [styleLeft, setStyleLeft]=useState("-263px");
    const [isClosed, setIsClosed]=useState(true);
    return(
        <div style={{left: styleLeft}} className={`${style.Menu}`}>
            <div className={`${style.List}`}>
                <span className={`${style.Link}`}>link1</span>
                <span className={`${style.Link}`}>link2</span>
                <span className={`${style.Link}`}>link3</span>
                <span className={`${style.Link}`}>link4</span>
                <span className={`${style.Link}`}>link5</span>
                <span className={`${style.Link}`}>link6</span>
                <span className={`${style.Link}`}>link7</span>
                <span className={`${style.Link}`}>link8</span>
                <span className={`${style.Link}`}>link9</span>
            </div>
            <div onClick={()=>{
                if(!isClosed){
                    setIsClosed(true);
                    setStyleLeft("-263px");
                }
                else{
                    setIsClosed(false);
                    setStyleLeft("0px");
                }
            }} className={`${style.Open}`}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M37,43l-13-6l-13,6V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4V43z"/></svg>
            </div>
        </div>
    )
}
export default Menu;