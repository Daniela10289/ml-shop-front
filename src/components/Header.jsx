import React from "react";
import "@styles/Header.scss";
import ic_Search from "@assets/ic_Search.png";
import logo from "@assets/Logo_ML.png";

export default function Header() {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="header">
                        <form className="form" action="">    
                        <img src={logo} alt="" />
                            <input className="search" type="text" />
                            <button className="button" type="submit">
                                <img src={ic_Search} alt="search" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}
