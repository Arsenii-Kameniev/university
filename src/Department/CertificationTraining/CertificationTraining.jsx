import style from "./CertificationTraining.module.css"
import Menu from "../Menu/Menu";

function CertificationTraining() {

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
                                <h2 className={`${style.center}`}>Підвищення кваліфікації</h2>
                            </div>
                            <div style={{ borderStyle: "none" }} className={`${style.ListElement}`}>
                                <div className={`${style.LecturerFullName}`}>
                                    <b>Створення запиту на підвищення кваліфікації:</b>
                                </div>
                                <div className={`${style.LecturerFullName}`}>
                                    <span style={{ fontSize: 14 }}>Для створення запиту потрібно написати назву Вашої кваліфікації на поточний час та прикріпити файл з поясненнями для підвищення</span>
                                </div>
                            </div>
                            <div className={`${style.Card}`}>
                                <div className={`${style.simpleRow}`}>
                                    <div className={`${style.LecturerFullName}`}>
                                        <span>Назва: </span>
                                    </div>
                                    <div className={`${style.LecturerFullName}`}>
                                        <input></input>
                                    </div>
                                </div>
                                <div className={`${style.simpleRow}`}>
                                    <div className={`${style.LecturerSyllabus}`}>
                                        <span>Прикріпити файл: </span>
                                    </div>
                                    <div className={`${style.LecturerSyllabus}`}>
                                        <input type="file"></input>
                                    </div>
                                </div>
                            </div>
                            <button className={`${style.BuutonStOne}`} onClick={() => {
                                
                            }}>Створити запит</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CertificationTraining;