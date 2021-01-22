import axios from "axios";
import Select from "../components/common/Select/Select";
import React from "react";

function ApplyPage() {
    const [currentOption, setCurrentOption] = React.useState("kakaopay");

    const iamportPaymentCallback = (res) => {
        console.log(res);
        var msg = "";
        if (res.success) {
            msg = "결제 완료";
            axios
                .post("/apply", { imp_uid: res.imp_uid })
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            msg = "결제 실패" + res.error_msg;
        }
        alert(msg);
    };
    const iamportPayment = () => {
        var IMP = window.IMP;
        IMP.init("imp91597861");
        const data = {
            pg: "kakaopay",
            merchant_uid: "mid" + new Date().getTime(),
            amount: 1000, //가격
            name: "소셜라운지 아이템", // 주문명
            buyer_name: "민재",
            buyer_tel: "01035073290",
            buyer_email: "openkmj@gmail.com",
        };
        IMP.request_pay(data, iamportPaymentCallback);
    };

    const options = [
        {
            name: "카카오페이",
            value: "kakaopay",
        },
        {
            name: "신용카드",
            value: "card",
        },
    ];

    return (
        <div className="page-container">
            <div className="page-wrapper apply-page-wrapper">
                <div className="apply-info">
                    <div className="apply-info-box">
                        <div className="title">주문/결제</div>
                        <div className="apply-info-detail">
                            <div className="apply-info-detail-item">
                                <div>이름</div>
                                <input></input>
                            </div>
                            <div className="apply-info-detail-item">
                                <div>연락처</div>
                                <input></input>
                            </div>
                            <div className="apply-info-detail-item">
                                <div>이메일</div>
                                <input></input>
                            </div>
                        </div>
                    </div>
                    <div className="apply-info-box">
                        <div className="title">결제정보</div>
                        <div className="apply-info-detail">
                            <div>
                                <div>결제방법</div>
                                <Select options={options} currentOption={currentOption} setOption={setCurrentOption} />
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="payment-info">
                    <div className="payment-info-box">
                        <div className="title">결제내용</div>
                        <div className="payment-info-detail">
                            <div>상품정보</div>
                            <div className="purchase-item">
                                <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/40fa543c-7a9c-456a-a411-4173d5417e8d/_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210122T221118Z&X-Amz-Expires=86400&X-Amz-Signature=ca6e6a28d30736cd2144dfdbca3ba3385372325438ff3a6d6de5ab16397e50cb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_1.png%22" />
                                <div className="item-text">
                                    <div className="title">영어회화 classy</div>
                                    <div className="date">2020.10.17(토) 17:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="payment-info-detail purchase-detail">
                            <div className="price">
                                <div className="price-title">총 결제금액</div>
                                <div className="total-price">10,000원</div>
                            </div>
                            <div className="terms">
                                <div className="term-agree">
                                    <div>
                                        <input type="checkbox" />
                                        <span className="term-title">개인정보 제 3자 동의(필수)</span>
                                    </div>
                                    <div className="term-detail">
                                        <u>자세히보기</u>
                                    </div>
                                </div>
                                <div className="term-agree">
                                    <div>
                                        <input type="checkbox" />
                                        <span className="term-title">소셜라운지 이용약관 동의(필수)</span>
                                    </div>
                                    <div className="term-detail">
                                        <u>자세히보기</u>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>결제하기</button>
                </div>
            </div>
            <button
                onClick={() => {
                    iamportPayment();
                }}
            >
                결제!
            </button>
        </div>
    );
}

export default ApplyPage;
