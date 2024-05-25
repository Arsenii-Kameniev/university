import React, { useState } from 'react';
import styles from './Main.module.css';
import Menu from '../../../Department/Menu/Menu';
export function Main() {
    return (
        <>
        <Menu></Menu>
            <div className={styles.body}>
                <div className={styles.upperRow}>

                </div>
                <div className={styles.left}>
                    <div className={styles.leftColumn}>

                    </div>
                    <div className={styles.page}>
                        <div className={styles.staticsHW}>
                            <p>Статистика по виконанням домашньої роботи</p>
                            <div className={styles.rowHW}>
                                <div className={styles.tableHW}>
                                    <div className={styles.tableItem}>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.rowHW}>
                                <div className={styles.columnHW}>
                                    <h2>Num</h2>
                                    <h3>Виконано</h3>
                                </div>
                                <div className={styles.columnHW}>
                                    <h2>Num</h2>
                                    <h3>Пропущено</h3>
                                </div>
                                <div className={styles.columnHW}>
                                    <h2>Num</h2>
                                    <h3>Відсоток зданих робіт</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}