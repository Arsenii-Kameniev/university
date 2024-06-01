import Menu from "../Menu/Menu";
import style from "./Lecturer.module.css"
import {
    selectUser,
    getUser,
    getselectScientificAndPedagogicalActivities,
    selectScientificAndPedagogicalActivities,
    selectTraineeships,
    getTraineeships,
} from "./lecturerSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
function LecturerInfo() {
    const dispatch = useDispatch();
    let { LecturerId } = useParams();
    const User = useSelector(selectUser);
    const Traineeships = useSelector(selectTraineeships);
    const ScientificAndPedagogicalActivities = useSelector(selectScientificAndPedagogicalActivities);
    useEffect(() => {
        // console.log("LecturerId");
        // console.log(LecturerId);
        dispatch(getUser({ id: LecturerId }));
        // console.log(GlobalPlanList);
    }, [])
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
                            <span>{User.firstName}</span>
                            <span>{User.lastName}</span>
                        </div>
                        <span>Контактні Данні:</span>
                        <div className={`${style.Block}`}>
                            <span>{User.departmentEmail}</span>
                            <span>{User.email}</span>
                            <span>{User.phoneNumber}</span>
                        </div>
                        <span>Кафедра:</span>
                        <div className={`${style.Block}`}>
                            <span>{User.departmentName}</span>
                        </div>
                        <span>Науково-Педагогічна Активність:</span>
                        <div className={`${style.Block}`}>
                            {ScientificAndPedagogicalActivities.map((item) => {
                                return <span key={`${item.id}`}>{item.name}</span>
                            })}
                        </div>
                        <span>Стажування:</span>
                        <div className={`${style.Block}`}>
                            {Traineeships.map((item) => {
                                return <span key={`${item.id}`}>{item.name}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LecturerInfo;