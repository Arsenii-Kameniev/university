import Menu from "../Menu/Menu";
import style from "./ConnectWithAdmin.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectConnectWithAdmin } from "./connectWithAdminSlice";
function ConnectWithAdmin() {
    const ConnectWithAdmin = useSelector(selectConnectWithAdmin);
    const [NameFilter, setNameFilter] = useState("");
    function putConnectWithAdmin() {
        return (<>
            <div className={`${style.List}`}>
                {ConnectWithAdmin.filter((item) => {
                    if (item.Name.includes(NameFilter)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }).map((item) => {
                    return (<>
                        <div className={`${style.Card}`}>
                            <div className={`${style.simpleRow}`}>
                                <div className={`${style.LecturerFullName}`}>
                                    <span>Викладач: </span>
                                </div>
                                <div className={`${style.LecturerFullName}`}>
                                    <span>{item.Name}</span>
                                </div>
                            </div>
                            <div className={`${style.simpleRow}`}>
                                <div className={`${style.LecturerSyllabus}`}>
                                    <span>Пошта: </span>
                                    <span>Номер телефону: </span>
                                </div>
                                <div className={`${style.LecturerSyllabus}`}>
                                    <span>{item.Email}</span>
                                    <span>{item.Number}</span>
                                </div>
                            </div>
                        </div>
                    </>);
                })}
            </div>
        </>);
    }
    return (
        <>
            <Menu></Menu>
            <div className={style.body}>
                <div className={style.upperRow}>

                </div>
                <div className={style.left}>
                    <div className={style.leftColumn}>

                    </div>
                    <div className={style.page}>
                        <div className={`${style.Page}`}>

                            <div className={`${style.Admin}`}>
                                <h2 className={`${style.center}`}>Зв'язок з адміністрацією</h2>
                                <div className={`${style.row1}`}>
                                    <div className={`${style.LecturerSyllabus}`}>
                                        <span>Пошта: </span>
                                        <span>Номер телефону: </span>
                                    </div>
                                    <div className={`${style.LecturerSyllabus}`}>
                                        <span>Email</span>
                                        <span>Phone Number</span>
                                    </div>
                                </div>
                            </div>

                            {/* <div className={`${style.Card}`}>
                                <div className={`${style.simpleRow}`}>
                                    <div className={`${style.LecturerFullName}`}>
                                        <span>Викладач: </span>
                                    </div>
                                    <div className={`${style.LecturerFullName}`}>
                                        <span>Name</span>
                                    </div>
                                </div>
                                <div className={`${style.simpleRow}`}>
                                    <div className={`${style.LecturerSyllabus}`}>
                                        <span>Пошта: </span>
                                        <span>Номер телефону: </span>
                                    </div>
                                    <div className={`${style.LecturerSyllabus}`}>
                                        <span>Email</span>
                                        <span>Phone Number</span>
                                    </div>
                                </div>
                            </div> */}
                            <div style={{ borderStyle: "none" }} className={`${style.ListElement}`}>
                                <div className={`${style.LecturerFullName}`}>
                                    <span>Зв'язок з викладачами:</span>
                                </div>
                            </div>

                            <div style={{ borderStyle: "none" }} className={`${style.ListElement}`}>
                                <p>Ім'я: </p>
                                <div className={`${style.LecturerFullName}`}>
                                    <input onChange={(e) => {
                                        setNameFilter(e.target.value)
                                    }} />
                                </div>
                            </div>
                            {putConnectWithAdmin()}
                        </div >
                    </div>
                </div>
            </div>
        </>
    );
}
export default ConnectWithAdmin;