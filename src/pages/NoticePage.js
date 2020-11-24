import React from "react";
import axios from "axios";
import TitleSection from "../components/common/TitleSection/TitleSection";
import NoticeTable from "../components/common/NoticeTable/NoticeTable";

function NoticePage() {
  const [noticeList, setNoticeList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/notice")
      .then((result) => {
        console.log(result.data);
        setNoticeList(
          result.data.data.map((item) => ({
            title: item.noticeTitle,
            desc: item.noticeDesc,
            date: item.noticeDate,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="page-container">
      <TitleSection title="공지사항" />
      <div className="page-wrapper notice-page-wrapper">
        <NoticeTable data={noticeList} showDate iconText={"공"} />
      </div>
    </div>
  );
}

export default NoticePage;
