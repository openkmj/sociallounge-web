import "./Policy.css";

function Policy(props) {
    return (
      <div className="sl-poicy-container">
        <div className="sl-policy-wrapper">
            <div className="sl-policy-title-head"></div>
            <div className="sl-policy-title">{props.policyTitle}</div>
            <div className="sl-policy-content">
                {props.policyContent.map((item, index) => (
                    <div className="sl-policy-section" key={index}>
                        <div className="sl-policy-subtitle">{item.title}</div>
                        <div className="sl-policy-text">{item.text.split('\n').map((line,index) => (
                            <span key={index}>{line}<br/></span>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  }
  
export default Policy;