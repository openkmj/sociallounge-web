import axios from "axios";
import { useUserDispatch, useUserState } from "../modules/Context";

function MyPage({ history }) {
    const user = useUserState();
    const dispatch = useUserDispatch();
    const logout = () => {
        axios
            .get("/auth/logout")
            .then((result) => {
                console.log(result);
                dispatch({
                    type: "LOGOUT",
                });
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="page-wrapper">
            <div className="">
                <button
                    onClick={() => {
                        logout();
                    }}
                >
                    로그아웃
                </button>
                <h1 className="my-page-title">마이페이지</h1>
                <div className="my-page-content">
                    <div className="personal-info">
                        <div>개인정보</div>
                        <div>비밀번호</div>
                    </div>
                    <div>
                        <div>신청목록</div>

                        <div className="apply-list">
                            <div>상품정보테이블</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
