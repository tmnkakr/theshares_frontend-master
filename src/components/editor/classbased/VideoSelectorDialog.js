import react from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";

class VideoSelectorDialog extends react.Component {
  state = {
    errorContent:""
  }
  render() {
    const uniqueIdForFindingSelectedVideo = `VideoTakingButtonInsideWidget${this.props.widgetNumber}`;
    return (
      <Dialog
        open={this.props.shouldOpen}
        onClose={() => this.props.dialogDealingFunction()}
      >
        <DialogTitle>Select Video</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Note: you can only select mp4 videos under size 50mb
          </DialogContentText>
          <DialogContentText style={{ color: 'red' }}>
         {this.state.errorContent}
          </DialogContentText>
          <input type="file" id={uniqueIdForFindingSelectedVideo} />
        </DialogContent>
        <DialogActions>
          <button
            onClick={(e) => {
              this.setState({errorContent:""})
              this.props.dialogDealingFunction()
            }}
            color="primary"
          >
            Close
          </button>
          <button
            className={`${this.props.typeOfWidget}${this.props.widgetNumber}`} 
            onClick={(e) => {
              let mediaObject;
              let selectedVideoPath = document.getElementById(
                uniqueIdForFindingSelectedVideo
              );
              if (
                selectedVideoPath.files.length === 1 &&
                (selectedVideoPath.files[0].type === "video/mp4")
              ) {
                this.setState({errorContent:""})
                console.log(e.target)
                if(this.props.whichTrayIconWasPressed === 'upper'){
                  mediaObject = selectedVideoPath.files[0]
                  selectedVideoPath = URL.createObjectURL(
                    selectedVideoPath.files[0]
                  );
                  this.props.addWidgetFunction(
                    "VideoWidget",
                    e,
                    "upperTray",
                    selectedVideoPath,
                    mediaObject
                  );
                  this.props.dialogDealingFunction();
                } else if(this.props.whichTrayIconWasPressed === 'lower'){
                  mediaObject = selectedVideoPath.files[0]
                  selectedVideoPath = URL.createObjectURL(
                    selectedVideoPath.files[0]
                  );
                  this.props.addWidgetFunction(
                    "VideoWidget",
                    e,
                    "lowerTray",
                    selectedVideoPath,
                    mediaObject
                  );
                  this.props.dialogDealingFunction();
                }
                else{
                  // means left tray icon was clicked
                  mediaObject = selectedVideoPath.files[0]
                  selectedVideoPath = URL.createObjectURL(
                    selectedVideoPath.files[0]
                  );
                  this.props.addWidgetFunction(
                    "VideoWidget",
                    undefined,
                    undefined,
                    selectedVideoPath,
                    mediaObject
                  );
                  this.props.dialogDealingFunction();
                }
              }
              else {
                // either multiple images picked or they are not of png,jpeg format
                this.setState({errorContent:"either didn't picked video or they are not of mp4 format"})
              }
            }}
            color="primary"
            autoFocus
          >
            Yes
          </button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default VideoSelectorDialog;
