import react from "react";
import TopmostTrayForPanel from "./topmostTray";
// import "../../../css/editor/classbased/editorPage.css";
import MainLoginAreaForPanel from "./mainLoginArea";
class LoginPageForArticalVerificationPanel extends react.Component {
  
  render() {
    return (
      <div className="parent_container">
        
        <TopmostTrayForPanel></TopmostTrayForPanel>
        <MainLoginAreaForPanel authorizeUser={this.props.authorizeUser}></MainLoginAreaForPanel>
        
      </div>
    );
  }
}
export default LoginPageForArticalVerificationPanel;
