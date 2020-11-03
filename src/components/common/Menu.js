import "./Menu.css";
import { Link, withRouter } from "react-router-dom";

function Menu() {
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
                <li><Link to="/" >홈</Link></li>
                <li><Link to="/moim" >모임</Link></li>
                <li><Link to="/magazine" >매거진</Link></li>
                <li><div>고객지원</div></li>
            </ul>
            <div className="sl-header-my">
                <div><Link to="/login" >로그인</Link></div>
                <div><Link to="/signup">회원가입</Link></div>
            </div>
        </div>
      </div>
    );
  }
  
export default withRouter(Menu);