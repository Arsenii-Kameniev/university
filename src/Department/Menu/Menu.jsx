import { useState } from "react";
import style from "./Menu.module.css"
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
function Menu() {
    const [styleLeft, setStyleLeft]=useState("-263px");
    const [isClosed, setIsClosed]=useState(true);
    const Navigate = useNavigate();
    return(
        <div style={{left: styleLeft}} className={`${style.Menu}`}>
            <div className={`${style.List}`}>
                <NavLink className={`${style.NavLink}`} to="/lecturer-list">
                    <span className={`${style.Link}`}>Викладачі</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/planning">
                    <span className={`${style.Link}`}>Планування</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/load">
                    <span className={`${style.Link}`}>Навантаження</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/certification-training">
                    <span className={`${style.Link}`}>Підвищення кваліфікації</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/protocol-of-department-meetings">
                    <span className={`${style.Link}`}>Протоколи засідань кафедри</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/mutal-visit">
                    <span className={`${style.Link}`}>Взаємовідвідування</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/graduation">
                    <span className={`${style.Link}`}>Дипломування</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/connect-with-administration">
                    <span className={`${style.Link}`}>Зв'язок з адміністрацією</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/teacher-tests">
                    <span className={`${style.Link}`}>Тестування</span>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/chat">
                    <span className={`${style.Link}`}>Чат</span>
                </NavLink>
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