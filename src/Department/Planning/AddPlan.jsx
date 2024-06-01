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
    selectUser,
    setPlanList
} from "./plannigSlice"
import { useEffect, useRef, useState } from "react";
function AddPlan() {
    const dispatch = useDispatch();
    const User = useSelector(selectUser);
    const GlobalPlanList = useSelector(selectPlanList);
    // const [PlanList, setPlanList]=useState([]);
    const [Value, setValue] = useState("");
    const [UpdateId, setUpdateId] = useState(-1);
    const [EditMode, setEditMode] = useState(false);
    const [Counter, setCounter] = useState(0);
    // var formData = new FormData();
    // var imagefile = document.querySelector('#file');
    // formData.append("image", imagefile.files[0]);
    // axios.post('upload_file', formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // })

    const File = useRef();

    useEffect(() => {
        dispatch(getPlanList({ id: User.id }));
        // console.log(GlobalPlanList);
    }, [Counter])

    function putPlanList() {

        return <div className={`${style.PlanList}`}>
            {/* {console.log("Plan")}
            {console.log(GlobalPlanList.items)}
            {console.log(GlobalPlanList)} */}
            {GlobalPlanList.items.map((item, id) => {
                let dispPlus = "inline";
                let dispMinus = "inline";
                let FileStatus = "Файл додано";
                if (GlobalPlanList.items.length <= 1) {
                    if (id == 0) {
                        dispMinus = "none";
                    }
                }
                if (GlobalPlanList.items.length != id + 1) {
                    dispPlus = "none";
                }
                if (item.file == null || item.file == "") {
                    FileStatus = "Без файлу";
                }
                return <div key={`${item.id}`} className={`${style.PlanObjectField}`}>
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
                        setTimeout(()=>{
                            setCounter(Counter+1);
                        }, 125);
                    }} style={{ display: dispMinus }} className={`${style.ButtonPM}`}>-</button>
                    <button onClick={() => {
                        setValue(item.name);
                        setUpdateId(item.id);
                        setEditMode(true);
                    }} className={`${style.ButtonPM}`}>*</button>
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
                    <input ref={File} onChange={(e) => {
                    }} type="file" />
                </div>
                <button onClick={() => {
                    // console.log(Value);
                    // console.log("File");
                    // console.log(File.current.files[0]);
                    let formData = new FormData();
                    formData.append("File", File.current.files[0])
                    dispatch(addPlan({ id: User.id, name: Value, file: formData }));
                    //dispatch(addPlan({ id: User.id, name: Value}));
                    setTimeout(()=>{
                        setCounter(Counter+1);
                    }, 125);
                    
                    setValue("");
                }} className={`${style.ButtonPM}`}>+</button>
            </div>
        }
        else {
            return <div className={`${style.PlanObjectField}`}>
                <div className={`${style.PlanObject}`}>
                    <textarea onChange={(e) => {
                        setValue(e.target.value);
                    }} style={{ resize: "none", padding: "5px" }} rows={3} value={Value} className={`${style.TextArea}`} />
                    
                    <input ref={File} onChange={(e) => {
                    }} type="file" />
                </div>
                <button onClick={() => {
                    // console.log("File");
                    // console.log(File.current.files[0]);
                    let formData = new FormData();
                    formData.append("File", File.current.files[0])
                    dispatch(putPlan({ id: UpdateId, teacherId: User.id, name: Value, file: formData}));
                    //dispatch(putPlan({ id: UpdateId, teacherId: User.id, name: Value}));
                    setEditMode(false);
                    setValue("");
                    setUpdateId(-1);
                    setTimeout(()=>{
                        setCounter(Counter+1);
                    }, 125);
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