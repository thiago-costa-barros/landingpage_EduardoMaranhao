import "./style.css";
import Foto08 from "../../../../assets/img_video/foto08.jpg"

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
                            <li><a href="">FOTOS</a></li>
                            <li><a href="">VIDEOS</a></li>
                            <li><a href="">CLIENTES</a></li>
                            <li><a href="">QUEM SOU EU</a></li>
                            <li><a href="">CONTATOS</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Menu