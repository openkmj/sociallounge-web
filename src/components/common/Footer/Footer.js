import "./Footer.css";
import { Link, withRouter } from "react-router-dom";

function Footer() {
    return (
      <div className="sl-footer-container">
        <div className="sl-footer-wrapper">
            <div className="sl-footer-top">
                <div className="sl-footer-logo">
                    <img src="img/logo/footer_logo.png" alt="푸터 로고"></img>
                </div>
                <ul className="sl-footer-policy">
                    <li><Link to="/terms">이용약관</Link></li>
                    <li><Link to="/privacy">개인정보처리방침</Link></li>
                    <li>사업자정보확인</li>
                </ul>
            </div>
            <div className="sl-footer-bottom">
                <ul className="sl-footer-biz-info">
                    <li>상호: 소셜라운지 | 대표: 최도영</li>
                    <li>주소: 경기도 안산시 단원구 고잔로 55 중앙오피스텔 607호</li>
                    <li>사업자등록번호: 219-30-71066 | 통신판매: 2020-경기안산-1970</li>
                </ul>
                <div className="sl-footer-contact">
                    <span>Contact</span>
                    tel : 010-3588-9084 | e-mail : satpary73@gmail.com | 카카오톡 채널
                </div>
                <div className="sl-footer-sns">
                    <img src="img/icon/ic-instargram.png" alt="인스타"></img>
                    <img src="img/icon/ic-facebook.png" alt="페북"></img>
                    <img src="img/icon/ic-blog.png" alt="블로그"></img>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default withRouter(Footer);