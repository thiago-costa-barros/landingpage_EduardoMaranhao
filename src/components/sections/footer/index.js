import Foto08 from "../../../assets/img_video/foto08.jpg"

import React from "react";
import "./style.css";
import { BehanceSquareOutlined, InstagramOutlined, WhatsAppOutlined, YoutubeOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <div className="footer--container">
            <div className="footer--area">
                <div className="footer--logo">
                    <img className="footer--img" src={Foto08} />
                </div>
                <div className="footer--text">
                    <span class="name">Produzido por Thiago Costa</span>
                    <span class="job">Todos os Direitos Reservados</span>
                </div>
                <div className="footer--thumb">
                    <nav>
                        <ul>
                            <li><a src=""><WhatsAppOutlined className="thumb--img" style={{ fontSize: '45px', color: '#f9f9f9' }} /></a></li>
                            <li><a src=""><InstagramOutlined className="thumb--img" style={{ fontSize: '45px', color: '#f9f9f9' }} /></a></li>
                            <li><a src=""><YoutubeOutlined className="thumb--img" style={{ fontSize: '45px', color: '#f9f9f9' }} /></a></li>
                            <li><a src=""><BehanceSquareOutlined className="thumb--img" style={{ fontSize: '45px', color: '#f9f9f9' }} /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;