import ImgBio from "../../../../assets/img_video/bio02.jpg"

import "./style.css";
import React from "react";

const Depoimentos = () => {
    return (
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
    )
}

export default Depoimentos;