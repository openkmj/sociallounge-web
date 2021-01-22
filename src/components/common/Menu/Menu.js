import "./Menu.css";
import { Link, withRouter } from "react-router-dom";
import { useUserState } from "../../../modules/Context";

function Menu(props) {
    const user = useUserState();
    console.log(user);
    return (
        <div className="sl-header-container">
            <div className="sl-header-wrapper">
                <div className="sl-header-logo">
                    {/* 홈 로고 눌렀을때는 새로고침과 같은 효과를 주는게 좋을 듯 */}
                    <a href="/">
                        <img src="img/logo/logo.png" alt="소셜라운지 로고" />
                    </a>
                </div>
                <ul className="sl-header-menu">
                    <li className={props.location.pathname === "/" ? "active" : ""}>
                        <Link to="/">홈</Link>
                    </li>
                    <li className={props.location.pathname === "/moim" ? "active" : ""}>
                        <Link to="/moim">모임</Link>
                    </li>
                    <li>
                        <div className="sl-sub-menu-open">
                            <Link to="/notice">고객지원</Link>
                        </div>
                        <div className="sl-sub-menu">
                            <ul>
                                <li className={props.location.pathname === "/notice" ? "active" : ""}>
                                    <Link to="/notice">공지사항</Link>
                                </li>
                                <li className={props.location.pathname === "/faq" ? "active" : ""}>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                <li>
                                    <a href="http://pf.kakao.com/_TxbPQxb/chat">1대1 문의</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="sl-header-my">
                    {user.user === "" ? (
                        <div>
                            <a href="http://localhost:3000/api/auth/kakao">로그인</a>
                            {/* <Link to="/login">로그인</Link> */}
                        </div>
                    ) : (
                        <div>
                            <Link to="/mypage">마이페이지</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default withRouter(Menu);
