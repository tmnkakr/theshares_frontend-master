import React from "react";
import react from "react";
import parse from 'html-react-parser';
import '../../../../css/panel/articleverificationpanel/articleContent.css'
class MainArticleContentForArticalVerificationPanel extends react.Component {
  render() {
    return (
      <React.Fragment>
          <div className="parent-container-article">
              {parse(this.props.content)}
          </div>
      </React.Fragment>
    );
  }
}
export default MainArticleContentForArticalVerificationPanel;
