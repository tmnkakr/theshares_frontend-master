import react from "react";
import "../../../css/editor/classbased/imageWidget.css";
import VideoSelectorDialog from "./VideoSelectorDialog";
import ImageSelectorDialog from "./ImageSelectorDialog";
import UpperTrayForWidgets from "./upperTrayForEachWidget";
import LowerTrayForWidgets from "./lowerTrayForEachWidget";
class ImageWidget extends react.Component {
  state = {
    isImageDialogOpen: false,
    imagePath: "",
    isVideoDialogOpen: false,
    videoPath: "",
    whichTrayIconWasPressed: "",
  };
  classNameForButtons = "";
  constructor(props) {
    super(props);
    this.classNameForButtons = `material-icons md-18 ${
      this.props.typeOfWidget
    }${JSON.stringify(this.props.widgetNumber)}`;
  }
  handleClickForImageDialog = (tray) => {
    if (tray) {
      this.setState({
        isImageDialogOpen: !this.state.isImageDialogOpen,
        whichTrayIconWasPressed: tray,
      });
    } else {
      this.setState({
        isImageDialogOpen: !this.state.isImageDialogOpen,
        whichTrayIconWasPressed: "",
      });
    }
  };
  handleClickForVideoDialog = (tray) => {
    if (tray) {
      this.setState({
        isVideoDialogOpen: !this.state.isVideoDialogOpen,
        whichTrayIconWasPressed: tray,
      });
    } else {
      this.setState({
        isVideoDialogOpen: !this.state.isVideoDialogOpen,
        whichTrayIconWasPressed: "",
      });
    }
  };
  render() {
    
    return (
      <react.Fragment>
        <ImageSelectorDialog
          shouldOpen={this.state.isImageDialogOpen}
          dialogDealingFunction={this.handleClickForImageDialog}
          addWidgetFunction={this.props.addWidgetFunction}
          widgetNumber={this.props.widgetNumber}
          typeOfWidget={this.props.typeOfWidget}
          whichTrayIconWasPressed={this.state.whichTrayIconWasPressed}
        />
        <VideoSelectorDialog
          shouldOpen={this.state.isVideoDialogOpen}
          dialogDealingFunction={this.handleClickForVideoDialog}
          addWidgetFunction={this.props.addWidgetFunction}
          widgetNumber={this.props.widgetNumber}
          typeOfWidget={this.props.typeOfWidget}
          whichTrayIconWasPressed={this.state.whichTrayIconWasPressed}
        />
        <div>
        <UpperTrayForWidgets
            addWidgetFunction={this.props.addWidgetFunction}
            classNameForButtons={this.classNameForButtons}
            handleClickForImageDialog={this.handleClickForImageDialog} 
            handleClickForVideoDialog={this.handleClickForVideoDialog}
          />
          <center>
          <img className="image_properties" alt="Not available for this moment" 
            id={`ImageWidget${this.props.widgetNumber}`}
            src={this.props.pathOfImage}      //process.env.PUBLIC_URL 
          ></img>
          </center>
          <LowerTrayForWidgets
            addWidgetFunction={this.props.addWidgetFunction}
            classNameForButtons={this.classNameForButtons}
            handleClickForImageDialog={this.handleClickForImageDialog} 
            handleClickForVideoDialog={this.handleClickForVideoDialog}
          />
        </div>
      </react.Fragment>
    );
  }
}
export default ImageWidget;
