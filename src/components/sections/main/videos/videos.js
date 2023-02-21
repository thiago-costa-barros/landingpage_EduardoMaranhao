import Video01 from "../../../../assets/img_video/video01.mp4";
import Video02 from "../../../../assets/img_video/video02.mp4";
import Video03 from "../../../../assets/img_video/video11.mp4";
import Video04 from "../../../../assets/img_video/video04.mp4";
import Video05 from "../../../../assets/img_video/video05.mp4";
import Video06 from "../../../../assets/img_video/video06.mp4";
import Video07 from "../../../../assets/img_video/video07.mp4";
import Video08 from "../../../../assets/img_video/video08.mp4";
import Video09 from "../../../../assets/img_video/video09.mp4";
import Video10 from "../../../../assets/img_video/video10.mp4";

import React from 'react';
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

const Videos = () => {
    const videoProperties = [
        {
            id: 1,
            title: "",
            scr: Video01,
        },
        {
            id: 2,
            scr: Video02
        },
        {
            id: 3,
            scr: Video03
        },
        {
            id: 4,
            scr: Video04
        },
        {
            id: 5,
            scr: Video05
        },
        {
            id: 6,
            scr: Video06
        },
        {
            id: 7,
            scr: Video07
        },
        {
            id: 8,
            scr: Video08
        },
        {
            id: 9,
            scr: Video09
        },
        {
            id: 10,
            scr: Video10
        },
    ]
    return (
        <div className="section">
            <div className="texto">
                <h2>DIREÇÃO DE VIDEOS</h2>
                <hr class="rounded-video"></hr>
            </div>
            <div className="container">
                <div className="carousel">
                    <Carousel interval={null} pause={false}>
                        {videoProperties.map((videoObj) => {
                            return (
                                <Carousel.Item
                                    key={videoObj.id}
                                >
                                    <ReactPlayer
                                        muted={true}
                                        url={videoObj.scr}
                                        pip={true}
                                        width="100%"
                                        controls={true}
                                        playing={false}
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )

}
export default Videos;
