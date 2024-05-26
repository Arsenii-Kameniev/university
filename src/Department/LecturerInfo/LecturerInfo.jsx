import Menu from "../Menu/Menu";
import style from "./Lecturer.module.css"
import { NavLink, useParams } from "react-router-dom";
function LecturerInfo() {
    let { LecturerId } = useParams();
    return (
        <div className={`${style.Page}`}>
            <Menu></Menu>
            <div className={`${style.Lecturer}`}>
                <div className={`${style.LecturerInfo}`}>
                    <div className={`${style.LecturerPhoto}`}>
                    </div>
                    <div className={`${style.LecturerFullInfo}`}>
                        <span>Викладач:</span>
                        <div className={`${style.Block}`}>
                            <span>First Name</span>
                            <span>Second Name</span>
                            <span>Father`s Name</span>
                        </div>
                        <span>Контактні Данні:</span>
                        <div className={`${style.Block}`}>
                            <span>Phone Number</span>
                            <span>EMail</span>
                        </div>
                        <span>Дисципліни:</span>
                        <div className={`${style.Block}`}>
                            <span>???</span>
                            <span>???</span>
                            <span>???</span>
                        </div>
                        <span>Науково-Педагогічна Активність:</span>
                        <div className={`${style.Block}`}>
                            <span>???</span>
                            <span>???</span>
                            <span>???</span>
                        </div>
                        <span>Предмети Викладання:</span>
                        <div className={`${style.Block}`}>
                            <span>Syllabus</span>
                            <span>Syllabus</span>
                            <span>Syllabus</span>
                        </div>
                        <span>Стажування:</span>
                        <div className={`${style.Block}`}>
                            <span>???</span>
                            <span>???</span>
                            <span>???</span>
                            <span>???</span>
                            
                        </div>
                        <span>Стажування:</span>
                        <div className={`${style.Block}`}>
                            <span>???</span>
                            <span>???</span>
                            <span>???</span>
                            <span>???</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LecturerInfo;