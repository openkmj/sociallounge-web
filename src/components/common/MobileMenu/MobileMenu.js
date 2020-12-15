import "./MobileMenu.css";
import React from "react";
import { Link, withRouter } from "react-router-dom";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  return (
    <>
      <div className="sl-m-header-container">
        <div className="sl-m-header-wrapper">
          <div
            className="sl-m-header-menu-button"
            onClick={() => {
              setMenuOpen(true);
            }}
          >
            <img src="img/icon/ic-menu.png" alt="메뉴" />
          </div>
          <div className="sl-m-header-logo">
            <Link to="/">
              <img src="img/logo/logo.png" alt="소셜라운지 로고" />
            </Link>
          </div>
          <div className="sl-m-header-my">
            <Link to="/login">
              <img src="img/icon/ic-person.png" alt="마이" />
            </Link>
          </div>
        </div>
      </div>
      <div className="sl-m-menu">
        <div
          className={menuOpen ? "dimmed" : "dimmed off"}
          onClick={() => {
            setMenuOpen(false);
          }}
        ></div>
        <div
          className={
            menuOpen ? "sl-m-menu-container active" : "sl-m-menu-container"
          }
        >
          <div className="sl-m-menu-header">
            <Link
              to="/"
              className="sl-m-menu-header-logo"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <img src="img/logo/mobile_logo.png" alt="mobile-logo" />
            </Link>
            <div
              className="sl-m-menu-header-close"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <img src="img/icon/ic-close.png" alt="menu-close" />
            </div>
          </div>
          <ul className="sl-m-menu-list">
            <li className="sl-m-menu-item">
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                홈
              </Link>
            </li>
            <li className="sl-m-menu-item">
              <Link
                to="/moim"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                모임
              </Link>
            </li>
            <li className="sl-m-menu-item">
              <Link
                to="/magazine"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                매거진
              </Link>
            </li>
            <li
              className="sl-m-menu-item"
              onClick={() => {
                setSubMenuOpen(!subMenuOpen);
              }}
            >
              <div
                className={
                  subMenuOpen
                    ? "sl-m-menu-sub-open active"
                    : "sl-m-menu-sub-open"
                }
              >
                <span>고객지원</span>
                <img
                  src={
                    subMenuOpen
                      ? "img/icon/ic-minus.png"
                      : "img/icon/ic-plus.png"
                  }
                  alt="more"
                />
              </div>
            </li>
            <ul
              className={
                subMenuOpen ? "sl-m-menu-sub-list active" : "sl-m-menu-sub-list"
              }
            >
              <li
                className="sl-m-menu-sub-item"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Link to="/notice">공지사항</Link>
              </li>
              <li className="sl-m-menu-sub-item">
                <Link
                  to="/faq"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li className="sl-m-menu-sub-item">
                <Link
                  to="/notice"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  1대1 문의
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default withRouter(MobileMenu);
