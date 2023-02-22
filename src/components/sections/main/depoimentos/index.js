import ImgBio from "../../../../assets/img_video/bio02.jpg"

import "./style.css";
import React from "react";
import { BehanceSquareOutlined, InstagramOutlined, WhatsAppOutlined, YoutubeOutlined } from "@ant-design/icons";

const Depoimentos = () => {
    return (<>
        <div className="depoiment--container">
            <div className="texto">
                <h2>QUEM SOU EU</h2>
                <hr class="rounded-video"></hr>
            </div>
            <div className="depoiment--area">
                <div class="container">
                    <div class="testimonial mySwiperBio">
                        <div class="testi-content swiper-wrapper">
                            <div class="slide swiper-slide">
                                <img src={ImgBio} class="image" />
                                <p>
                                    Sou um profissional apaixonado pelo o que faço.
                                    Com experiência na área de Design, Social Media e Marketing, trabalhei em agência de
                                    comunicação integrada que desenvolve e executa estratégias criativas para empresas e
                                    instituições nacionais e locais.
                                </p>
                                <i class="bx bxs-quote-alt-left quote-icon"></i>
                                <div class="details">
                                    <span class="name">Eduardo Maranhão</span>
                                    <span class="job">Diretor de Conteúdo e Motion Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contato--area">
                    <a href="https://wa.me/5585999911448" target={"_blank"}><WhatsAppOutlined className="thumb--img"
                    style={{ fontSize: '45px', color: '#111111', cursor: 'pointer' }} /></a>
                    <a href="https://www.instagram.com/_eduardomaranhao/" target={"_blank"}><InstagramOutlined className="thumb--img"
                    style={{ fontSize: '45px', color: '#111111', cursor: 'pointer' }} /></a>
                    <a href="https://www.youtube.com/@eduardomaranhao3822" target={"_blank"}><YoutubeOutlined className="thumb--img"
                    style={{ fontSize: '45px', color: '#111111', cursor: 'pointer' }} /></a>
                    <a href="https://www.behance.net/eduardomaranhao" target={"_blank"}><BehanceSquareOutlined className="thumb--img"
                    style={{ fontSize: '45px', color: '#111111', cursor: 'pointer' }} /></a>
        </div>
    </>
    )
}

export default Depoimentos;