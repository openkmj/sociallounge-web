import "./TextInput.css";

function TextInput(props) {
    return (
      <div className="text-input-container">
        {props.title && <div className="text-input-title">{props.title}</div>}
        <input className="text-input-form" placeholder={props.placeholder}></input>
      </div>
    );
  }
  
export default TextInput;