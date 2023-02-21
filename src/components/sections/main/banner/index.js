import BannerCarousel from "../../../carousels/bannerCarousel";
import "./style.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner--container">
                <BannerCarousel/>
            </div>
        </div>
    )
}

export default Banner;