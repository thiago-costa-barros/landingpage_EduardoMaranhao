import { React, useEffect, useState } from "react";
import "./style.css";
import Foto08 from "../../../../assets/img_video/foto08.jpg"
import { Link } from "react-scroll";
import { UpCircleFilled } from "@ant-design/icons";


const Menu = () => {

    return (
        <div className="menu">
            <div className="header">
                <div className="header--logo">
                    <img src={Foto08} className="header--logo_img" />
                </div>
                <div className="header--nav">
                    <nav>
                        <ul>
                            <li><a href="">INICIO</a></li>
                            <li><a href=""><Link to="fotos" smooth={true} duration={750}>FOTOS</Link></a></li>
                            <li><a href=""><Link to="videos" smooth={true} duration={750}>VIDEOS</Link></a></li>
                            <li><a href=""><Link to="clientes" smooth={true} duration={750}>CLIENTES</Link></a></li>
                            <li><a href=""><Link to="bio" smooth={true} duration={750}>QUEM SOU EU</Link></a></li>
                            <li><a href=""><Link to="contatos" smooth={true} duration={750}>CONTATOS</Link></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="start--hiden">
                <Link to="start" smooth={true} duration={750}><UpCircleFilled style={{ cursor: 'pointer', fontSize: '45px', color: '#666666' }} /></Link>
            </div>
        </div>
    )
}
export default Menu