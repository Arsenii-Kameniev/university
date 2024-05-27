import style from './Tests.module.css';
import Menu from '../../Department/Menu/Menu';
import { useEffect, useState } from "react";

export function Tests() {
    const [NumOfElements, setNumOfElements] = useState(0);
    const [PlanList, setPlanList] = useState([{}]);
    const [Theme, setTheme] = useState();
    const [Link, setLink] = useState();
    const [Delete, setDelete] = useState();
    const [Reload, setReload] = useState(0);
    const [Card, setCard] = useState([]);
    useEffect(() => {
    }, Reload);
    function putPlanList() {
        return <div className={`${style.PlanList}`}>
            {Card.map((item, id) => {
                // let dispPlus = "inline";
                // let dispMinus = "inline";
                // if (NumOfElements != id + 1 || id == 0) {
                //     dispMinus = "none";
                // }
                // if (NumOfElements != id + 1) {
                //     dispPlus = "none";
                // }

                return <div className={`${style.PlanObjectField}`}>
                    <div className={`${style.Card}`}>
                        <div className={`${style.simpleRow}`}>
                            <span className={`${style.InputText}`} >Тема: </span>
                            <span className={`${style.InputInfo}`}>{item.theme}</span>
                        </div>
                        <div className={`${style.simpleRow}`}>
                            <span className={`${style.InputText}`} >Лінк: </span>
                            <span className={`${style.InputInfo}`}>{item.link}</span>
                        </div>
                    </div>
                    <button onClick={() => {
                        if (NumOfElements > 0) {
                            setNumOfElements(NumOfElements - 1);
                        }
                        setDelete(id);
                        setReload(Reload + 1);
                    }} className={`${style.ButtonPM}`}>-</button>
                    {/* <button onClick={() => {
                        setNumOfElements(NumOfElements + 1);
                        let obj = PlanList;
                        obj.push({});
                        setPlanList(obj);
                    }} style={{ display: dispPlus }} className={`${style.ButtonPM}`}>+</button> */}
                </div>
            })}
        </div>
    }
    return (<>
        <Menu></Menu>
        <div className={style.body}>
            <div className={style.upperRow}>

            </div>
            <div className={style.left}>
                <div className={style.leftColumn}>

                </div>
                <div className={style.page}>
                    <div className={`${style.Page}`}>
                        <div className={`${style.PlanningMenu}`}>
                            <h1>Тестування</h1>
                            <button className={`${style.BuutonStOne}`} onClick={() => {
                                setNumOfElements(NumOfElements + 1);
                                let obj = Card;
                                obj.push({ theme: Theme, link: Link });
                                setCard(obj);
                            }}>Додати</button>
                            <div className={`${style.Card}`}>
                                <div className={`${style.simpleRow}`}>
                                    <span className={`${style.InputText}`} >Тема: </span>
                                    <input className={`${style.InputInfo}`} onChange={(e) => {
                                        setTheme(e.target.value);
                                    }} />
                                </div>
                                <div className={`${style.simpleRow}`}>
                                    <span className={`${style.InputText}`} >Лінк: </span>
                                    <input className={`${style.InputInfo}`} onChange={(e) => {
                                        setLink(e.target.value);
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className={`${style.Page}`}>
                        <div className={`${style.PlanningMenu}`}>
                            <span>Тести викладача:</span>
                            {putPlanList()}
                        </div>
                    </div >
                </div>
            </div>
        </div>
    </>);
}