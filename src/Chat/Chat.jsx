import Menu from "../Department/Menu/Menu";
import styles from "./Chat.module.css";
import { useState } from 'react';
import * as React from "react";
import { useMouse } from "@uidotdev/usehooks";
import { useEffect } from 'react';
import Chat2 from "../Chat2/Chat2";
function Chat() {
    const [mouse, ref] = useMouse();
    const useMousePosition = () => {
        const [
            mousePosition,
            setMousePosition
        ] = React.useState({ x: null, y: null });

        React.useEffect(() => {
            const updateMousePosition = ev => {
                setMousePosition({ x: ev.clientX, y: ev.clientY });
            };

            window.addEventListener('mousemove', updateMousePosition);

            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            };
        }, []);

        return mousePosition;
    };
    const mousePosition = useMousePosition();
    const [respInf, SetRespInf] = useState('');
    const [coordinateX, SetCoordinateX] = useState(0);
    const [coordinateY, SetCoordinateY] = useState(0);
    const [hideDiv1, SetHideDiv1] = useState(true);
    const [hideDiv2, SetHideDiv2] = useState(true);
    useEffect(() => {
        console.log(JSON.stringify(mousePosition));
        if (mousePosition.x < coordinateX - 40 || mousePosition.y < coordinateY - 40 || mousePosition.x > coordinateX + 80 || mousePosition.y > coordinateY + 100) {
            SetHideDiv1(true);
            SetHideDiv2(true);
        }
    }, [mousePosition])
    return (
        <>
            <Menu></Menu>
            <div className={hideDiv1 ? styles.hide : styles.followingDiv} style={{ left: coordinateX - 40, top: coordinateY - 40 }}>
                <div className={styles.optionsShow}>
                    <button className={styles.optionButtonType1}>Reply</button>
                    <button className={styles.optionButtonType1}>Edit</button>
                    <button className={styles.optionButtonType1}>Pin</button>
                    <button className={styles.optionButtonType1}>Delete</button>
                </div>
            </div>
            <div className={hideDiv2 ? styles.hide : styles.followingDiv} style={{ left: coordinateX - 40, top: coordinateY - 40 }}>
                <div className={styles.optionsShow}>
                    <button className={styles.optionButtonType1}>Reply</button>
                    <button className={styles.optionButtonType1}>Pin</button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.upperRow}>

                </div>
                <div className={styles.left}>
                    <div className={styles.leftColumn}>

                    </div>
                    <div className={styles.page}>
                        <Chat2></Chat2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;