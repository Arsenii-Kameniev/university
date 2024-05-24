import style from "./Lecturer.module.css"
function LecturerInfo() {

    return(
        <div className={`${style.Page}`}>
            <div className={`${style.List}`}>
                <div className={`${style.ListElement}`}>
                    <div className={`${style.LecturerFullName}`}>
                        <span>Full Name</span>
                    </div>
                    <div className={`${style.LecturerSyllabus}`}>
                        <span>Syllabus</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LecturerInfo;