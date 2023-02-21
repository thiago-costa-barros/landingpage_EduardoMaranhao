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
                            <li><a href="https://wa.me/5585999911448" target={"_blank"}><WhatsAppOutlined className="thumb--img"
                                style={{ fontSize: '45px', color: '#f9f9f9', cursor: 'pointer' }} /></a></li>
                            <li><a href="https://www.instagram.com/_eduardomaranhao/" target={"_blank"}><InstagramOutlined className="thumb--img"
                                style={{ fontSize: '45px', color: '#f9f9f9', cursor: 'pointer' }} /></a></li>
                            <li><a href="https://www.youtube.com/@eduardomaranhao3822" target={"_blank"}><YoutubeOutlined className="thumb--img"
                                style={{ fontSize: '45px', color: '#f9f9f9', cursor: 'pointer' }} /></a></li>
                            <li><a href="https://www.behance.net/eduardomaranhao" target={"_blank"}><BehanceSquareOutlined className="thumb--img"
                                style={{ fontSize: '45px', color: '#f9f9f9', cursor: 'pointer' }} /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;