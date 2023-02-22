import Logo01 from "../../../../assets/img_video/logos/cliente01.png";
import Logo02 from "../../../../assets/img_video/logos/cliente02.png";
import Logo03 from "../../../../assets/img_video/logos/cliente03.png";
import Logo04 from "../../../../assets/img_video/logos/cliente04.png";
import Logo05 from "../../../../assets/img_video/logos/cliente05.png";
import Logo06 from "../../../../assets/img_video/logos/cliente06.png";
import Logo07 from "../../../../assets/img_video/logos/cliente07.png";
import Logo08 from "../../../../assets/img_video/logos/cliente08.png";

import React from "react";
import "./style.css";

const Jobs = () => {
    return (
        <div className="jobs--container">
            <div className="texto">
                <h2>CLIENTES</h2>
                <hr class="rounded-video"></hr>
            </div>
            <div className="jobs--row">
                <div className="jobs--row--line">
                    <div  >
                        <img className="jobs--img" src={Logo01} />
                    </div>
                    <div >
                        <img className="jobs--img" src={Logo02} />
                    </div>
                    <div >
                        <img className="jobs--img" src={Logo03} />
                    </div>
                </div>
                <div className="jobs--row--line">
                    <div >
                        <img className="jobs--img" src={Logo06} />
                    </div>
                    <div  >
                        <img className="jobs--img" src={Logo07} />
                    </div>
                </div>
                <div className="jobs--row--line">
                    <div >
                        <img className="jobs--img" src={Logo08} />
                    </div>
                    <div >
                        <img className="jobs--img" src={Logo05} />
                    </div>
                    <div >
                        <img className="jobs--img" src={Logo04} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs;