import react from "react";
import "../../../../css/panel/articleverificationpanel/topmostTray.css";
import axios from "axios";
import {useHistory} from 'react-router-dom';
class MainLoginAreaForPanel extends react.Component {
  ip="43.204.60.203"
  goButtonClicked =() => {
    try {
      const userId = document.getElementById("userId").value;
      const password = document.getElementById("password").value;
      const securityKey = document.getElementById("securityKey").value;
      const data = {
        userId,
        password,
        securityKey,
      };
      axios
        .post(
          `http://${this.ip}:4000/app/panel/articleverification/signin`,
          data,
          { withCredentials:true},
        )
        .then((res) => {
          // means file has been uploaded
          if (res.data.success === 1) {
            let uid;
            if(res.data.data.uid){
                uid = res.data.data.uid
            } else {
            uid = parseInt(userId)
            }
            this.props.authorizeUser(true,uid)
            // session changes are getting lost here
            this.props.navigation('/panel/articleverification/homepage')
          } else {
            alert(res.data.message);
          }
          
        })
        .catch((error) => {
          alert(`${error.message}`);
        });
    } catch (error) {
      alert(`${error.message}`);
    }
  }
  render() {
    return (
      <react.Fragment>
        <div id="mainLoginPanelArea">
          <label htmlFor="userId" className="children">
            User id:
          </label>
          {"   "}
          <input type="text" id="userId" name="userId" className="children" />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          {"   "}
          <input type="text" id="password" name="password" />
          <br />
          <br />
          <label htmlFor="securityKey">Security Key:</label>
          {"   "}
          <input type="text" id="securityKey" name="securityKey" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button className="btn" onClick={this.goButtonClicked}>
            GO
          </button>
        </div>
      </react.Fragment>
    );
  }
}

// Wrap and export
export default function(props) {
  const history = useHistory();

  return <MainLoginAreaForPanel {...props} history={history} />;
}
