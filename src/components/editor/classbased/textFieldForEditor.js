import react from "react";
import ReactQuill from 'react-quill';
import ImageSelectorDialog from "./ImageSelectorDialog";
import VideoSelectorDialog from "./VideoSelectorDialog";
import "../../../css/editor/classbased/textFieldForEditor.css";
import UpperTrayForWidgets from "./upperTrayForEachWidget";
import LowerTrayForWidgets from "./lowerTrayForEachWidget";
class TextField extends react.Component {
  classNameForButtons = "";
  constructor(props) {
    super(props);
    this.classNameForButtons = `material-icons md-18 ${
      this.props.typeOfWidget
    }${JSON.stringify(this.props.widgetNumber)}`;
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    isImageDialogOpen: false,
    imagePath: "", 
    text: '', 
    isVideoDialogOpen: false,
    videoPath: "",
    whichTrayIconWasPressed: "",
  };
  handleChange(value) {
    this.setState({ text: value })
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
        <div className="textfield_parent_container">
          <UpperTrayForWidgets
            addWidgetFunction={this.props.addWidgetFunction}
            classNameForButtons={this.classNameForButtons}
            handleClickForImageDialog={this.handleClickForImageDialog} 
            handleClickForVideoDialog={this.handleClickForVideoDialog}
          />
          {/* <textarea
            className="text"
            id={`TextField${this.props.widgetNumber}`}
          ></textarea> */}
          <ReactQuill value={this.state.text}
                  onChange={this.handleChange} id={`TextField${this.props.widgetNumber}`}/>
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
export default TextField;
