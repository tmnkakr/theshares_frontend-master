
import React from "react";
class LoadingWidgetForPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div style={{width:'100%',height:'0','paddingBottom':'89%',position:'relative'}}><center><iframe src={"https://giphy.com/embed/eJWyod5gLxdcY"} width={"10%"} height={"10%"} style={{position:"absolute"}} frameBorder={"0"} className={"giphy-embed"} allowFullScreen></iframe></center></ div>
      </React.Fragment>
    );
  }
}
export default LoadingWidgetForPanel;
