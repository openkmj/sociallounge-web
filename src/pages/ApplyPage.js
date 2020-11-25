import axios from "axios";

function ApplyPage() {
  const iamportPaymentCallback = (res) => {
    console.log(res);
    if (res.success) {
      var msg = "결제 완료";
      axios
        .post("/apply", { imp_uid: res.imp_uid })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      var msg = "결제 실패" + res.error_msg;
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
    <div>
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
