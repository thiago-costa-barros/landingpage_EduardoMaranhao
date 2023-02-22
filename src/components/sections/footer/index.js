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
            </div>
        </div>
    )
}

export default Footer;