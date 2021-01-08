import axios from "axios";

function ApplyPage() {
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

    return (
        <div className="page-container">
            <div className="page-wrapper apply-page-wrapper">
                <div className="apply-info">
                    <div className="apply-info-box">
                        <div className="apply-info-title">주문/결제</div>
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
                        <div className="apply-info-title">결제정보</div>
                        <div className="apply-info-detail">
                            <div>
                                <div>결제방법</div>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="apply-info payment-info">
                    <div className="apply-info-box">
                        <div className="apply-info-title">결제내용</div>
                        <div className="apply-info-detail">
                            <div>상품정보</div>
                        </div>
                    </div>
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
