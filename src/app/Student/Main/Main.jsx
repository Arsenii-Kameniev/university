import React, { useState } from 'react';
import styles from './Main.module.css';
export function Main() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.upperRow}>

                </div>
                <div className={styles.left}>
                    <div className={styles.leftColumn}>

                    </div>
                    <div className={styles.page}>
                        <div className={styles.staticsHW}>
                            <p>Статистика по виконанням домашньої роботи</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}