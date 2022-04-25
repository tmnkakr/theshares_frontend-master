import React from "react";
import react from "react";
import "../../../../css/panel/articleverificationpanel/articlePage.css";
class UserNameTagForArticalVerificationPanel extends react.Component {
  render() {
    return (
      <React.Fragment>
        <div className="userNameTagParent">
          <div>
            <span className="material-icons md-48">account_circle</span>
          </div>
          <div style={{"lineHeight":"1rem",color:"green",margin:"auto 1rem"}}>
              <p>contributor name: {this.props.contributorName}</p>
              <p>contributor id: {this.props.contributorId}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default UserNameTagForArticalVerificationPanel;
