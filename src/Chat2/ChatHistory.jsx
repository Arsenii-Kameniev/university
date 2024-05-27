import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./Chat2.module.css"
import { Link } from 'react-router-dom';

function ChatHistory() {
    const dispatch = useDispatch();
    return (
        <div className={`${style.ChatHistory}`}>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatHistory;