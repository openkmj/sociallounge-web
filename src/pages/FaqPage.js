import React from "react";
import axios from "axios";
import TitleSection from "../components/common/TitleSection/TitleSection";
import NoticeTable from "../components/common/NoticeTable/NoticeTable";
import Tab from "../components/common/Tab/Tab";

function FaqPage() {
  const [faqList, setFaqList] = React.useState([]);
  const [currentFaqList, setCurrentFaqList] = React.useState([]);
  const tabs = ["전체", "회원", "신청 및 결제", "모임 참여", "환불", "기타"];
  const [currentTab, setCurrentTab] = React.useState(0);
  const setTab = (index) => {
    setCurrentTab(index);
    if (index === 0) {
      setCurrentFaqList(faqList);
    } else {
      var _faqList = [];
      for (var i = 0; i < faqList.length; i++) {
        if (faqList[i].type === index) {
          _faqList.push(faqList[i]);
        }
      }
      setCurrentFaqList(_faqList);
    }
    // window.scrollTo(0, 600);
  };
  React.useEffect(() => {
    axios
      .get("/faq")
      .then((result) => {
        console.log(result.data);
        setFaqList(
          result.data.data.map((item) => ({
            title: item.faqTitle,
            desc: item.faqDesc,
            type: item.faqType,
          }))
        );
        setCurrentFaqList(
          result.data.data.map((item) => ({
            title: item.faqTitle,
            desc: item.faqDesc,
            type: item.faqType,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="page-container">
      <TitleSection title="FAQ" />
      <div className="page-wrapper faq-page-wrapper">
        <div className="faq-page-tab">
          <Tab currentTab={currentTab} setTab={setTab} tabs={tabs} />
        </div>
        <NoticeTable data={currentFaqList} iconText={"Q"} />
      </div>
    </div>
  );
}

export default FaqPage;
