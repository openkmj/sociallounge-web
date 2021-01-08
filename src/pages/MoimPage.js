import TitleSection from "../components/common/TitleSection/TitleSection";
import Pagination from "../components/common/Pagination/Pagination";
import { Link, withRouter } from "react-router-dom";

function MoimPage() {
    return (
        <div className="page-container">
            <TitleSection title="소모임" />
            <div className="page-wrapper moim-page-wrapper">
                <div>여기는 소모임 페이지~</div>
                <Link to="/moimDetail">"소모임 페이지로 고고"</Link>
                <div>
                    <div className="moim-list-title">소모임</div>
                    <div className="moim-list-subtitle">함께 만나 취미를 공유하며 서로 소통해요.</div>
                </div>
                <div className="item-list"></div>
                <div className="item-list-pagination">
                    <Pagination totalPage={5} currentPage={1} setCurrentPage={console.log} />
                </div>
            </div>
        </div>
    );
}

export default withRouter(MoimPage);
