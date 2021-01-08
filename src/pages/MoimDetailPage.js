import { Link, withRouter } from "react-router-dom";

function MoimDetailPage() {
    return (
        <div className="page-container">
            <div className="page-wrapper detail-page-wrapper">
                <div className="detail-left">
                    <div className="detail-main-section">
                        <div className="detail-main-img">사진</div>
                        <div className="detail-main-info">
                            <div className="detail-main-type">[원데이]</div>
                            <div className="detail-main-title">공책한권 글쓰기 소모임</div>
                            <div className="detail-main-subtitle">우리는 일단 씁니다. 공책 1권을 채우도록</div>
                            <div className="detail-main-tag-list">
                                <div className="detail-main-tag">#글쓰기</div>
                                <div className="detail-main-tag">#공책한권</div>
                                <div className="detail-main-tag">#소모임</div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-info-section">
                        <div className="detail-info">
                            <div className="detail-info-line"></div>
                            <div className="detail-info-title">프로젝트 소개</div>
                            <div className="detail-info-img">이미지</div>
                            <div className="detail-info-desc">
                                {"글쓰기를 좋아하는데 매일같이 쓰다 말았나요? 또는, 누구에게도 보여주지 못한 채 덮어두었나요? 그렇다면 소셜라운지 글쓰기 모임 '공책한권'에 참여해보세요.\n\n우리는 일단 씁니다. 공책 1권을 채우도록. 같이 합니다.\n글쓰기 습관을 위해 1주일에 1번씩 90분씩.\n\n글쓰기를 좋아하는데 매일같이 쓰다 말았나요? 또는 누구에게도 보여주지도 못한 채 덮어두었나요?\n\n그렇다면 소셜라운지 아 길다."
                                    .split("\n")
                                    .map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </div>
                        </div>
                        <div className="detail-info">
                            <div className="detail-info-line"></div>
                            <div className="detail-info-title">소모임 일정</div>
                            <div className="detail-info-img">이미지</div>
                            <div className="detail-info-desc">
                                글쓰기를 좋아하는데 매일같이 쓰다 말았나요? 또는, 누구에게도 보여주지 못한 채 덮어두었나요? 그렇다면 소셜라운지 글쓰기 모임
                                '공책한권'에 참여해보세요. 우리는 일단 씁니다. 공책 1권을 채우도록. 같이 합니다. 글쓰기 습관을 위해 1주일에 1번씩 90분씩.
                                글쓰기를 좋아하는데 매일같이 쓰다 말았나요? 또는 누구에게도 보여주지도 못한 채 덮어두었나요? 그렇다면 소셜라운지 아 길다.
                            </div>
                        </div>
                        <div className="detail-info">
                            <div className="detail-info-line"></div>
                            <div className="detail-info-title">커리큘럼</div>
                            <div className="detail-info-img">이미지</div>
                            <div className="detail-info-desc">
                                글쓰기를 좋아하는데 매일같이 쓰다 말았나요? 또는, 누구에게도 보여주지 못한 채 덮어두었나요? 그렇다면 소셜라운지 글쓰기 모임
                                '공책한권'에 참여해보세요. 우리는 일단 씁니다. 공책 1권을 채우도록. 같이 합니다. 글쓰기 습관을 위해 1주일에 1번씩 90분씩.
                                글쓰기를 좋아하는데 매일같이 쓰다 말았나요? 또는 누구에게도 보여주지도 못한 채 덮어두었나요? 그렇다면 소셜라운지 아 길다.
                            </div>
                        </div>
                        <div className="detail-info">
                            <div className="detail-info-line"></div>
                            <div className="detail-info-title">장소</div>
                            <div className="detail-info-location">
                                <div>경기도 안산시 단원구 고잔로55 중앙오피스텔 607호</div>
                                <div className="copy">복사</div>
                            </div>
                            <div className="detail-info-map">이미지</div>
                        </div>
                    </div>
                </div>

                <div className="detail-right">
                    <div className="detail-apply-section">
                        <div className="detail-apply-title">
                            <div className="detail-main-title">공책한권 글쓰기 소모임</div>
                            <div className="detail-main-subtitle">우리는 일단 씁니다. 공책 1권을 채우도록</div>
                        </div>
                        <div className="detail-apply-info">
                            <div className="">
                                <div className="">
                                    <div className="">일정</div>
                                    <div className="">10월 11일부터 매주 일요일</div>
                                </div>
                                <div className="">
                                    <div className="">장소</div>
                                    <div className="">안산 중앙동 소셜라운지</div>
                                </div>
                                <div className="">
                                    <div className="">참여비</div>
                                    <div className="">50,000원</div>
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                        <div className="detail-apply-button">
                            <Link to="/apply">"신청하기"</Link>
                        </div>
                    </div>
                    <div className="detail-statistics-section">
                        <div className="detail-statistics-title">이번 시즌 참여자들은</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MoimDetailPage);
