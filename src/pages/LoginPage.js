import TextInput from "../components/common/TextInput/TextInput";

function LoginPage() {

    return (
      <div className="login-page-container">
        <div className="login-page-wrapper">
          <div className="login-page-title">로그인</div>
          <div className="form-wrapper">
            <TextInput title="이메일" placeholder="이메일을 입력하세요." />
            <TextInput title="비밀번호" placeholder="비밀번호를 입력하세요." />
            <div className="login-form-bottom">
              <div className="checkbox-wrapper">
                <input type="checkbox" />
                <div>비밀번호 저장</div>
              </div>
              <div className="login-action">
                <div>아이디 찾기</div>
                <div>|</div>
                <div>비밀번호 찾기</div>
              </div>
            </div>
            <button className="login-button"><a href="http://175.113.223.199:8000/api/auth/kakao">로그인</a></button>
            {/* <img className="kakao-login-button" src="/img/kakao_login_large_wide.png" /> */}
          </div>
        </div>
      </div>
    );
  }
  
export default LoginPage;