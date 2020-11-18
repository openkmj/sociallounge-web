import "./Pagination.css";

function Pagination(props) {
    return (
      <div className="pagination-container">
          <button className="pagination-side-buttion">{"<"}</button>
          {props.pages.map((item, index) => (
            <button onClick={()=>{props.setCurrentPage(index+1)}} 
            className={props.currentPage===item?"pagination-page-button active":"pagination-page-button"}
            key={index}>{item}</button>))
          }
          <button className="pagination-side-buttion">{">"}</button>
      </div>
    );
  }
  
export default Pagination;