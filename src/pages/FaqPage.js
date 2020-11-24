import React from "react";
import axios from "axios";
import TitleSection from "../components/common/TitleSection/TitleSection";
import NoticeTable from "../components/common/NoticeTable/NoticeTable";

function FaqPage() {
  const [faqList, setFaqList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/faq")
      .then((result) => {
        console.log(result.data);
        setFaqList(
          result.data.data.map((item) => ({
            title: item.faqTitle,
            desc: item.faqDesc,
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
      <div className="page-wrapper notice-page-wrapper">
        <NoticeTable data={faqList} iconText={"Q"} />
      </div>
    </div>
  );
}

export default FaqPage;
