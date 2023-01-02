import React from 'react';
import "../style/Header.css";

const Header = ()=>{

    return(
        <nav>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/usestate">UseState</a>
            <a href="/axios">Axios</a>

        </nav>
    )
}

export default Header;


