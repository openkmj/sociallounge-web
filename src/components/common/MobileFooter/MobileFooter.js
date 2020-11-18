import "./MobileFooter.css";
import { Link, withRouter } from "react-router-dom";

function MobileFooter() {
    return (
      <div className="sl-m-footer-container">
        <div className="sl-m-footer-wrapper">
            <div className="sl-m-footer-top">
                <div className="sl-m-footer-logo">
                    <img src="img/logo/footer_logo.png" alt="푸터 로고"></img>
                </div>
                <ul className="sl-m-footer-biz-info">
                    <li>상호: 소셜라운지 | 대표: 최도영</li>
                    <li>주소: 경기도 안산시 단원구 고잔로 55 중앙오피스텔 607호</li>
                    <li>사업자등록번호: 219-30-71066</li>
                    <li>통신판매: 2020-경기안산-1970</li>
                </ul>
                <div className="sl-m-footer-contact">
                    <div><span>Contact</span></div>
                    <div>tel : 010-3588-9084</div>
                    <div>e-mail : satpary73@gmail.com</div>
                    <div><a href="https://pf.kakao.com/_TxbPQxb" target="_blank" rel="noreferrer">카카오톡 채널</a></div>
                </div>
            </div>
            <div className="sl-m-footer-bottom">
                <div className="sl-m-footer-policy">
                    <Link to="/terms">이용약관</Link>
                    {" | "}
                    <Link to="/privacy">개인정보처리방침</Link>
                    {" | "}
                    <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2193071066" target="_blank" rel="noreferrer">사업자정보확인</a>
                </div>
                <div className="sl-m-footer-sns">
                    <img src="img/icon/ic-instargram.png" alt="인스타" onClick={()=>{window.open('https://www.instagram.com/sociallounge_official/')}}></img>
                    <img src="img/icon/ic-facebook.png" alt="페북" onClick={()=>{window.open('https://www.facebook.com/sociallounge.official')}}></img>
                    <img src="img/icon/ic-blog.png" alt="블로그" onClick={()=>{window.open('https://blog.naver.com/proteamblog')}}></img>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default withRouter(MobileFooter);