import List01 from "./List01/list01";
import List02 from "./List02/list02";
import List03 from "./List03/list03";
import List04 from "./List04/list04";
import List05 from "./List05/list05";
import List06 from "./List06/list06";

import "./style.css";

const PortfolioList = () => {
    return (
        <div className="list--container">
            <div className="col01">
                <span><List01 /></span>
                <span><List02 /></span>
            </div>
            <div className="col02">
                <span><List05 /></span>
                <span><List04 /></span>
            </div>
            <div className="col03">
                <span><List03 /></span>
                <span><List06 /></span>
            </div>
        </div>
    );
};
export default PortfolioList;