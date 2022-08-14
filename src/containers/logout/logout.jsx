import React from "react";
import axios from "axios";

 const Logout = () => {

    const hanlLogout = (token) => {
        if(token) {
            delete axios.defaults.headers.common['Authorization']
            } 
            console.log('')
    }
    return (
        <button onClick={hanlLogout}> Выйти</button>
    )
 }

 export default Logout