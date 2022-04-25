import react from "react";
import "../../../../css/panel/articleverificationpanel/topmostTray.css";
class CardForPanel extends react.Component {
  
  render() {
    return (
      <react.Fragment>
        <div className="card" style={{width: "18rem",margin:"10px 10px"}}>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              {this.props.tags}
            </p>
            <button type="button" className="btn btn-outline-success" onClick={()=>this.props.openArticle(this.props.aid)}>Open</button>
          </div>
        </div>
      </react.Fragment>
    );
  }
}
export default CardForPanel;
