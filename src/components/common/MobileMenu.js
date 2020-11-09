import "./MobileMenu.css";

function MobileMenu() {
    return (
      <div className="sl-m-header-container">
        <div className="sl-m-header-wrapper">
            
            <div className="sl-m-header-menu-button">
                <img src="img/icon/ic-menu.png" alt="메뉴"/>
            </div>
            <div className="sl-m-header-logo">
                <img src="img/logo/logo.png" alt="소셜라운지 로고" />
            </div>
            <div className="sl-m-header-my">
                <img src="img/icon/ic-person.png" alt="마이"/>
            </div>
        </div>
      </div>
    );
  }
  
export default MobileMenu;