import Menu from "../Menu/Menu";
import style from "./Planning.module.css"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function AddPlan() {
    const [NumOfElements, setNumOfElements] = useState(1);
    const [PlanList, setPlanList] = useState([{}]);
    function putPlanList() {
        return <div className={`${style.PlanList}`}>
            {PlanList.map((item, id) => {
                let dispPlus="inline";
                let dispMinus="inline";
                if(NumOfElements!=id+1 || id==0){
                    dispMinus="none";
                }
                if(NumOfElements!=id+1){
                    dispPlus="none";
                }
                return <div className={`${style.PlanObjectField}`}>
                    <div className={`${style.PlanObject}`}>
                        <input className={`${style.InputInfo}`} />
                        <input className={`${style.InputInfo}`} />
                    </div>
                    <button onClick={()=>{
                        setNumOfElements(NumOfElements-1);
                        let obj=PlanList;
                        obj.pop();
                        setPlanList(obj);
                    }} style={{display: dispMinus}} className={`${style.ButtonPM}`}>-</button>
                    <button onClick={()=>{
                        setNumOfElements(NumOfElements+1);
                        let obj=PlanList;
                        obj.push({});
                        setPlanList(obj);
                    }} style={{display: dispPlus}} className={`${style.ButtonPM}`}>+</button>
                </div>
            })}
        </div>
    }
    return (
        <div className={`${style.Page}`}>
            <Menu></Menu>
            <div className={`${style.PlanningMenu}`}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <span>Назва Планування:</span>
                        <input className={`${style.Input}`} />
                    </div>
                    <button className={`${style.BuutonStOne}`}>Додати</button>
                </div>
                <span>Планування:</span>
                <div className={`${style.PlanObject}`}>
                    <span className={`${style.InputInfo}`} >Назва</span>
                    <span className={`${style.InputInfo}`} >Cпеціалізація</span>
                </div>
                {/* <div className={`${style.PlanList}`}>
                    <div className={`${style.PlanObjectField}`}>
                        <div className={`${style.PlanObject}`}>
                            <input className={`${style.InputInfo}`} />
                            <input className={`${style.InputInfo}`} />
                        </div>
                        <button>+</button>
                    </div>
                </div> */}
                {putPlanList()}
            </div>
        </div >
    )
}
export default AddPlan;