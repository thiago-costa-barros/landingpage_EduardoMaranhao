import { Component, React, useEffect, useState } from "react";
import "./style.css";
import Foto08 from "../../../../assets/img_video/foto08.jpg"
import { Link } from "react-scroll";
import { UpCircleFilled } from "@ant-design/icons";


class Menu extends Component {

    state = { clicked: false };
    handCLick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <div className="menu">
                <div className="header">
                    <div className="header--logo">
                        <img src={Foto08} className="header--logo_img" />
                    </div>
                    <div className="header--nav">
                        <nav>
                            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                                <li><a href=""><Link to="start" offset={-100} smooth={true} duration={750}>INICIO</Link></a></li>
                                <li><a href=""><Link to="fotos" offset={-100} smooth={true} duration={750}>FOTOS</Link></a></li>
                                <li><a href=""><Link to="videos" offset={-100} smooth={true} duration={750}>VIDEOS</Link></a></li>
                                <li><a href=""><Link to="clientes" offset={-100} smooth={true} duration={750}>CLIENTES</Link></a></li>
                                <li><a href=""><Link to="bio" offset={-100} smooth={true} duration={750}>BIO</Link></a></li>
                            </ul>
                            <div id="mobile">
                                <i id="bar"
                                    onClick={this.handCLick}
                                    className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="start--hiden">
                    <Link to="start" smooth={true} duration={750}><UpCircleFilled style={{ cursor: 'pointer', fontSize: '45px', color: '#666666' }} /></Link>
                </div>
            </div>
        )
    }
}
export default Menu