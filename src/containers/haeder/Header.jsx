import React from "react";
import { Link } from "react-router-dom";
import './header.css'



const Header = () => {
    
    return(
            <div className="header">
             <div className="header-container">
            <div>
                <Link to=''><img className="img-logo" src="./img/random.svg" alt="logo"/></Link>
            </div>
            <div className="header-right">
                <div className="button-block">
                   <Link style={{display:'flex'}} to='/signin'> <p className="button-signin">вход/регистрация</p><img className="icon" src="./img/vhod.png" alt="icon"/></Link>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Header