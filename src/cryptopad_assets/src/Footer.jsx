import React from "react";
import "./styles.css";

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return <div className = "copyright">
        <footer>Copyright &copy; {year}</footer>
    </div>
}


export default Footer;