import React from "react";
import axios from "axios";
import TitleSection from "../components/common/TitleSection/TitleSection";
import NoticeTable from "../components/common/NoticeTable/NoticeTable";
import Select from "../components/common/Select/Select";

function FaqPage() {
    const [faqList, setFaqList] = React.useState([]);
    const [currentFaqList, setCurrentFaqList] = React.useState([]);
    const [currentOption, setCurrentOption] = React.useState(0);
    const options = [
        {
            name: "전체",
            value: "0",
        },
        {
            name: "회원",
            value: "1",
        },
        {
            name: "신청 및 결제",
            value: "2",
        },
        {
            name: "모임 참여",
            value: "3",
        },
        {
            name: "환불",
            value: "4",
        },
        {
            name: "기타",
            value: "5",
        },
    ];
    const setOption = (index) => {
        setCurrentOption(index);
        if (index === "0") {
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
                    <Select options={options} currentOption={currentOption} setOption={setOption} />
                </div>
                <NoticeTable data={currentFaqList} iconText={"Q"} />
            </div>
        </div>
    );
}

export default FaqPage;
