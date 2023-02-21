import PortfolioList from "../../../portfolioImageList";
import "./style.css";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="texto">
                <h4>Conheça nosso</h4>
                <h1>TRABALHO</h1>
                <hr class="rounded-portfolio"></hr>
            </div>
            <div className="portfolio--container">
                <PortfolioList />
            </div>
        </div>
    )
}

export default Portfolio;