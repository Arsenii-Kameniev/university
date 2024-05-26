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
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/lecturer-list`);
                    }
                }>Викладачі</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/lessons-schedule`);
                    }
                }>Розклад занять</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/news`);
                    }
                }>Новини</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/students`);
                    }
                }>Студенти</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/attendance-of-groups`);
                    }
                }>Відвідуваність груп</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/educational-materials`);
                    }
                }>Навчальні матеріали</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/load`);
                    }
                }>Навантаження</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/profile`);
                    }
                }>Профіль</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/planning`);
                    }
                }>Планування</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/homework`);
                    }
                }>Домашні завдання</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/connect-with-admin`);
                    }
                }>Зв'язок з адміністрацією</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/contacts`);
                    }
                }>Контакти</span>
                <span className={`${style.Link}`} onClick={
                    ()=>{
                        Navigate(`/chat`);
                    }
                }>Чат</span>
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