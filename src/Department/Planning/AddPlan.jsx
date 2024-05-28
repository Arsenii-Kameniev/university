import Menu from "../Menu/Menu";
import style from "./Planning.module.css"
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    selectPlanList,
    addPlan,
    deletePlan,
    putPlan,
    getPlanList,
    selectUser
} from "./plannigSlice"
import { useEffect, useState } from "react";
function AddPlan() {
    const dispatch = useDispatch();
    const User = useSelector(selectUser);
    const PlanList = useSelector(selectPlanList);
    const [NumOfElements, setNumOfElements] = useState(PlanList.length+1);
    const [Value, setValue] = useState("");
    const [UpdateId, setUpdateId] = useState(-1);
    const [EditMode, setEditMode] = useState(false);
    const [File, setFile] = useState("");

    
    useEffect(() => {
        dispatch(getPlanList({ id: User.id }));
    }, [PlanList])

    function putPlanList() {

        return <div className={`${style.PlanList}`}>
            <div className={`${style.PlanObjectField}`}>
                    <div className={`${style.PlanObject}`}>
                        <span style={{ width: "60px", margin: "5px" }}>{1}.</span>
                        <div onChange={(e) => {
                        }} className={`${style.TextArea}`}>
                            <span>Common text</span>
                        </div>
                        <span>Файл додано</span>
                    </div>
                    <button onClick={() => {
                    }}className={`${style.ButtonPM}`}>-</button>
                    <button onClick={() => {
                        setValue("Common text");
                        setEditMode(true);
                    }}className={`${style.ButtonPM}`}>*</button>
                </div>

            {PlanList.map((item, id) => {
                let dispPlus = "inline";
                let dispMinus = "inline";
                let FileStatus = "Файл додано";
                if (PlanList.length <= 1) {
                    if (id == 0) {
                        dispMinus = "none";
                    }
                }
                if (PlanList.length != id + 1) {
                    dispPlus = "none";
                }
                if (item.file == null || item.file == "") {
                    FileStatus = "Без файлу";
                }
                return <div className={`${style.PlanObjectField}`}>
                    <div className={`${style.PlanObject}`}>
                        <span style={{ width: "60px", margin: "5px" }}>{id + 1}.</span>
                        <div onChange={(e) => {
                        }} className={`${style.TextArea}`}>
                            <span>{item.name}</span>
                        </div>
                        <span>{FileStatus}</span>
                    </div>
                    <button onClick={() => {
                        dispatch(deletePlan(item.id));
                    }} style={{ display: dispMinus }} className={`${style.ButtonPM}`}>-</button>
                    <button onClick={() => {
                        setValue(item.name);
                        setUpdateId(item.id);
                        setFile(item.file);
                        setEditMode(true);
                    }} style={{ display: dispPlus }} className={`${style.ButtonPM}`}>*</button>
                </div>
            })}
        </div>
    }
    function putInputArea(e) {
        if (e == false) {
            return <div className={`${style.PlanObjectField}`}>
                <div className={`${style.PlanObject}`}>
                    <textarea onChange={(e) => {
                        setValue(e.target.value);
                    }} style={{ resize: "none", padding: "5px" }} rows={3} value={Value} className={`${style.TextArea}`} />
                    <input onChange={(e)=>{
                        setFile(e.target.value);
                    }} type="file"/>
                </div>
                <button onClick={() => {
                    console.log(Value);
                    console.log("File");
                    console.log(File);
                    dispatch(addPlan({ id: User.id, name: Value, file:File}));
                    setValue("");
                    setFile("");
                }} className={`${style.ButtonPM}`}>+</button>
            </div>
        }
        else {
            return <div className={`${style.PlanObjectField}`}>
                <div className={`${style.PlanObject}`}>
                    <textarea onChange={(e) => {
                        setValue(e.target.value);
                    }} style={{ resize: "none", padding: "5px" }} rows={3} value={Value} className={`${style.TextArea}`} />
                    <input onChange={(e)=>{
                        setFile(e.target.value);
                    }} type="file"/>
                </div>
                <button onClick={() => {
                    dispatch(putPlan({ id: UpdateId, teacherId: User.Id, name: Value, file:File }));
                    setEditMode(false);
                    setValue("");
                    setFile("");
                    setUpdateId(-1);
                }} className={`${style.ButtonPM}`}>{`>`}</button>
            </div>
        }
    }
    return (
        <div className={`${style.Page}`}>
            <Menu></Menu>
            <div className={`${style.PlanningMenu}`}>
                <span>Планування:</span>
                <div className={`${style.PlanObject}`}>
                    <span>Номер</span>
                    <span>Текст</span>
                    <span>Файл</span>
                </div>
                {putPlanList()}
                {putInputArea(EditMode)}
            </div>
        </div >
    )
}
export default AddPlan;