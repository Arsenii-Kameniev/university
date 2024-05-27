import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./Chat2.module.css"
import { Link } from 'react-router-dom';
import ChatHistory from './ChatHistory';


function Chat2() {
    const dispatch = useDispatch();
    return (
        <div className={`${style.Chat}`}>
            <ChatHistory/>
            <div className={`${style.Input}`}>
                <span style={{margin: `8px`}}><img src='./images/attach.png' className={style.icon1}/></span>
                <input className={`${style.MessageInput}`} placeholder='Type a message'/>
                <span style={{margin: `8px`}}><img src='./images/happy.png' className={style.icon1} /></span>
                <span style={{margin: `8px`}}><img src='./images/paper-plane.png' className={style.icon1} /></span>
            </div>
        </div>
    )
}
export default Chat2;