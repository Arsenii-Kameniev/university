import Menu from "../Menu/Menu";
import style from "./Lecturer.module.css"
import { NavLink } from "react-router-dom";
import {
    selectLecturerList,
    setLecturerList,
    getLecturerList
} from "./lecturerSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
function LecturerList() {
    const dispatch = useDispatch();
    const LecturerList = useSelector(selectLecturerList);
    const [NameFilter, setNameFilter] = useState("");
    const [EmailFilter, setEmailFilter] = useState("");
    
    useEffect(() => {
        dispatch(getLecturerList());
        // console.log(GlobalPlanList);
    }, [])

    function putLecturerList() {
        return <div className={`${style.List}`}>
            {LecturerList.filter((item)=>{
                if(item.userName.includes(NameFilter) && item.email.includes(EmailFilter)){
                    return true;
                }
                else{
                    return false;
                }
            }).map((item) => {
                return <div key={`${item.id}`} className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${item.id}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>{item.userName}</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>{item.email}</span>
                        </div>
                    </NavLink>
                </div>
            })}
        </div>
    }
    return (
        <div className={`${style.Page}`}>
            <Menu></Menu>
            <div style={{ borderStyle: "none" }} className={`${style.ListElement}`}>
                <div className={`${style.LecturerFullName}`}>
                    <span>Викладач:</span>
                </div>
                <div className={`${style.LecturerSyllabus}`}>
                    <span>Скринька:</span>
                </div>
            </div>

            <div style={{ borderStyle: "none" }} className={`${style.ListElement}`}>
                <div className={`${style.LecturerFullName}`}>
                    <input onChange={(e)=>{
                        setNameFilter(e.target.value)
                    }}/>
                </div>
                <div className={`${style.LecturerSyllabus}`}>
                    <input onChange={(e)=>{
                        setEmailFilter(e.target.value)
                    }}/>
                </div>
            </div>
            {putLecturerList()}
        </div >
    )
}
export default LecturerList;