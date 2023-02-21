import Bg01 from "../../../assets/img_video/bg01.jpg";
import Bg02 from "../../../assets/img_video/bg08.jpg";
import Bg03 from "../../../assets/img_video/bg10.jpg";
import Bg04 from "../../../assets/img_video/bg04.jpg";
import Bg05 from "../../../assets/img_video/bg05.jpg";
import Bg06 from "../../../assets/img_video/bg06.jpg";
import Bg07 from "../../../assets/img_video/bg07.jpg";
import Bg08 from "../../../assets/img_video/job03/img07.jpg";
import Bg09 from "../../../assets/img_video/bio01.jpg";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';

export default function BannerCarousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img src={Bg01} /></SwiperSlide>
                <SwiperSlide><img src={Bg02} /></SwiperSlide>
                <SwiperSlide><img src={Bg03} /></SwiperSlide>
                <SwiperSlide><img src={Bg04} /></SwiperSlide>
                <SwiperSlide><img src={Bg05} /></SwiperSlide>
                <SwiperSlide><img src={Bg06} /></SwiperSlide>
                <SwiperSlide><img src={Bg07} /></SwiperSlide>
                <SwiperSlide><img src={Bg08} /></SwiperSlide>
                <SwiperSlide><img src={Bg09} /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}