import React from "react";
import react from "react";
import "../../../../css/panel/articleverificationpanel/articlePage.css";
class TagsAndDateWidgetForArticalVerificationPanel extends react.Component {
  render() {
    return (
      <React.Fragment>
        <div className="tagsAndDate">
          <div>
            <p>tags: {this.props.tags}</p>
            <p>Date of publish: {this.props.dateOfPublish}</p>
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}
export default TagsAndDateWidgetForArticalVerificationPanel;