import "./TitleSection.css";

function TitleSection(props) {
    return (
        <div className="title-section-container">
            <div className="title-section">
                <span className="subtitle">SOCIAL LOUNGE</span>
                <div className="title">{props.title}</div>
            </div>
        </div>
    );
}

export default TitleSection;
