import Menu from "../Menu/Menu";
import style from "./Planning.module.css"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function Planning() {
    return (
        <div className={`${style.Page}`}>
            <Menu></Menu>
            <div className={`${style.Planning}`}>
                <NavLink className={`${style.NavLink}`} to="/planning/add-plan">
                    <div className={`${style.BuutonStOne}`}>
                        <span>Додати планування</span>
                    </div>
                </NavLink>
                <NavLink className={`${style.NavLink}`} to="/planning/my-plans">
                    <div className={`${style.BuutonStOne}`}>
                        <span>Перейти до моїх планувань</span>
                    </div>
                </NavLink>
            </div>
        </div >
    )
}
export default Planning;