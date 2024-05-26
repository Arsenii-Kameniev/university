import Menu from "../Menu/Menu";
import style from "./Lecturer.module.css"
import { NavLink } from "react-router-dom";
import {
    selectLecturerList,
    setLecturerListl
} from "./lecturerSlice"
import { useSelector } from "react-redux";
import { useState } from "react";
function LecturerList() {

    const LecturerList = useSelector(selectLecturerList);
    const [NameFilter, setNameFilter] = useState("");
    const [SyllabusFilter, setSyllabusFilter] = useState("");
    function putLecturerList() {
        return <div className={`${style.List}`}>
            {LecturerList.filter((item)=>{
                if(item.Name.includes(NameFilter) && item.Syllabus.includes(SyllabusFilter)){
                    return true;
                }
                else{
                    return false;
                }
            }).map((item) => {
                return <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>{item.Name}</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>{item.Syllabus}</span>
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
                    <span>Предмет:</span>
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
                        setSyllabusFilter(e.target.value)
                    }}/>
                </div>
            </div>
            {putLecturerList()}
            {/* <div className={`${style.List}`}>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
                <div className={`${style.ListElement}`}>
                    <NavLink className={`${style.NavLink}`} to={`/lecturer/${`id`}`}>
                        <div className={`${style.LecturerFullName}`}>
                            <span>Full Name</span>
                        </div>
                        <div className={`${style.LecturerSyllabus}`}>
                            <span>Syllabus</span>
                        </div>
                    </NavLink>
                </div>
            </div> */}
        </div >
    )
}
export default LecturerList;