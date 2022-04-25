import react from "react";
import ImageSelectorDialog from "./ImageSelectorDialog";
import VideoSelectorDialog from "./VideoSelectorDialog";
import "../../../css/editor/classbased/leftTrayForEditor.css";
class LeftTrayIcons extends react.Component {
  state = {
    isImageDialogOpen: false,
    imagePath: "",
    isVideoDialogOpen: false,
    videdoPath: "",
  };
  handleClickForVideoDialog = (tray) => {
    this.setState({ isVideoDialogOpen: !this.state.isVideoDialogOpen});
  };
  handleClickForImageDialog = (tray) => {
    this.setState({ isImageDialogOpen: !this.state.isImageDialogOpen});
  };
  render() {
    return (
      <react.Fragment>
        <ImageSelectorDialog
          shouldOpen={this.state.isImageDialogOpen}
          dialogDealingFunction={this.handleClickForImageDialog}
          addWidgetFunction={this.props.addWidgetFunction}
          widgetNumber={this.props.widgetNumber} 
          typeOfWidget={"ImageWidget"}
        />
        <VideoSelectorDialog
          shouldOpen={this.state.isVideoDialogOpen}
          dialogDealingFunction={this.handleClickForVideoDialog}
          addWidgetFunction={this.props.addWidgetFunction}
          widgetNumber={this.props.widgetNumber} 
          typeOfWidget={"VideoWidget"}
        />
        <button
          className="btn"
          onClick={() => {
            this.props.addWidgetFunction("TextField");
          }}
        >
          <span className="material-icons md-24 icon container-md">
            article
          </span>
        </button>
        <button className="btn" onClick={() => {
            this.handleClickForImageDialog();
          }}>
          <span className="material-icons md-24 icon container-md">image</span>
        </button>
        <button className="btn"  onClick={() => {
            this.handleClickForVideoDialog();
          }}>
          <span className="material-icons md-24 icon container-md">movie</span>
        </button>
      </react.Fragment>
    );
  }
}
export default LeftTrayIcons;
