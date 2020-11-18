import "./TitleSection.css";

function TitleSection(props) {
    return (
      <div className="title-section-container page-container">
          <div className="title-section-text page-wrapper">
            <div className="title-section-sl">SOCIAL LOUNGE</div>
            <div className="title-section-title-wrapper">
                <div className="title-section-title">{props.title}</div>
                <div className="title-section-line"></div>
            </div>
          </div>
      </div>
    );
  }
  
export default TitleSection;