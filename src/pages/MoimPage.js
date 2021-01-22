import TitleSection from "../components/common/TitleSection/TitleSection";
import { Link, withRouter } from "react-router-dom";

function MoimPage() {
    return (
        <div className="page-container">
            <TitleSection title="소모임" />
            <div className="page-wrapper moim-page-wrapper">
                <div className="moim-page-section" id="season">
                    <div className="title-line"></div>
                    <div className="season-title">무지개 시즌 참여자 모집중</div>
                    <div className="season-date">2020년 1월 8일 ~ 2020년 2월 22일</div>
                    <div className="season-img" />
                    {/* <img className="season-img" src="./img/logo/logo.png" /> */}
                </div>
                <div className="moim-page-section">
                    <div className="title-line"></div>

                    <div className="section-title">정기모임</div>
                    <div className="section-subtitle">이번 시즌 소셜라운지가 준비한 정기 모임에 함께하세요.</div>
                    <div className="season-moim-list">
                        <div className="season-moim-item">
                            <div className="subtitle">독서를 통해 몰랐던 내 모습을 찾아보세요.</div>
                            <div className="title">
                                <Link to="/moimDetail/1">독서모임</Link>
                            </div>
                            <div className="img" />
                            <button className="button">자세히 보기</button>
                        </div>
                        <div className="season-moim-item">
                            <div className="subtitle">독서를 통해 몰랐던 내 모습을 찾아보세요.</div>
                            <div className="title">독서모임</div>
                            <div className="img" />
                            <button className="button">자세히 보기</button>
                        </div>
                        <div className="season-moim-item">
                            <div className="subtitle">독서를 통해 몰랐던 내 모습을 찾아보세요.</div>
                            <div className="title">독서모임</div>
                            <div className="img" />
                            <button className="button">자세히 보기</button>
                        </div>
                    </div>
                </div>
                <div className="moim-page-section">
                    <div className="title-line"></div>
                    <div className="section-title">이벤트 모임</div>
                    <div className="section-subtitle">소셜라운지에서 취미 생활을 즐겨봐요.</div>
                    <div className="event-moim-list">
                        <div className="event-moim-item">
                            <div className="item-wrapper">
                                <div className="item-top">
                                    <div className="status">
                                        <div className="status-icon"></div>
                                        <div className="status-text">모집 진행 중</div>
                                    </div>
                                    <div className="date">2020-11-10</div>
                                </div>
                                <div className="item-bottom">
                                    <div className="title">와인 클래스</div>
                                    <div className="hashtags">#와인클래스 #원데이 #와인</div>
                                </div>
                            </div>
                        </div>
                        <div className="event-moim-item">
                            <div className="item-wrapper">
                                <div className="item-top">
                                    <div className="status">
                                        <div className="status-icon"></div>
                                        <div className="status-text">모집 진행 중</div>
                                    </div>
                                    <div className="date">2020-11-10</div>
                                </div>
                                <div className="item-bottom">
                                    <div className="title">와인 클래스</div>
                                    <div className="hashtags">#와인클래스 #원데이 #와인</div>
                                </div>
                            </div>
                        </div>
                        <div className="event-moim-item">
                            <div className="item-wrapper">
                                <div className="item-top">
                                    <div className="status">
                                        <div className="status-icon"></div>
                                        <div className="status-text">모집 진행 중</div>
                                    </div>
                                    <div className="date">2020-11-10</div>
                                </div>
                                <div className="item-bottom">
                                    <div className="title">와인 클래스</div>
                                    <div className="hashtags">#와인클래스 #원데이 #와인</div>
                                </div>
                            </div>
                        </div>
                        <div className="event-moim-item">
                            <div className="item-wrapper">
                                <div className="item-top">
                                    <div className="status">
                                        <div className="status-icon"></div>
                                        <div className="status-text">모집 진행 중</div>
                                    </div>
                                    <div className="date">2020-11-10</div>
                                </div>
                                <div className="item-bottom">
                                    <div className="title">와인 클래스</div>
                                    <div className="hashtags">#와인클래스 #원데이 #와인</div>
                                </div>
                            </div>
                        </div>
                        <div className="event-moim-item">
                            <div className="item-wrapper">
                                <div className="item-top">
                                    <div className="status">
                                        <div className="status-icon"></div>
                                        <div className="status-text">모집 진행 중</div>
                                    </div>
                                    <div className="date">2020-11-10</div>
                                </div>
                                <div className="item-bottom">
                                    <div className="title">와인 클래스</div>
                                    <div className="hashtags">#와인클래스 #원데이 #와인</div>
                                </div>
                            </div>
                        </div>
                        <div className="event-moim-item">
                            <div className="item-wrapper">
                                <div className="item-top">
                                    <div className="status">
                                        <div className="status-icon"></div>
                                        <div className="status-text">모집 진행 중</div>
                                    </div>
                                    <div className="date">2020-11-10</div>
                                </div>
                                <div className="item-bottom">
                                    <div className="title">와인 클래스</div>
                                    <div className="hashtags">#와인클래스 #원데이 #와인</div>
                                </div>
                            </div>
                        </div>
                        <div className="event-moim-item">
                            <div className="item-wrapper">
                                <div className="item-top">
                                    <div className="status">
                                        <div className="status-icon"></div>
                                        <div className="status-text">모집 진행 중</div>
                                    </div>
                                    <div className="date">2020-11-10</div>
                                </div>
                                <div className="item-bottom">
                                    <div className="title">와인 클래스</div>
                                    <div className="hashtags">#와인클래스 #원데이 #와인</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MoimPage);
