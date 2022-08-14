import React, { startTransition } from "react";
import { Link } from "react-router-dom";
import './header.css'
import setAuthToken from "../../helpers/serAuthToken";
import { Navigator } from "react-router";
import Logout from "../logout/logout";

const Header = () => {

  
    return(
            <div className="header">
             <div className="header-container">
            <div>
                <Link to=''><img className="img-logo" src="./img/logo.png" alt="logo"/></Link>
            </div>
            <div className="header-right">
                <div className="button-block">
                   <Link to='/signin'> <button  className="button-signin">Войти</button></Link>
                <Logout/>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Header