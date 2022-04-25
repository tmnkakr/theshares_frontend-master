import react from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";

class ImageSelectorDialog extends react.Component {
  state = {
    errorContent:""
  }
  componentDidMount(){
    console.log('mountedd')
  }
  render() {
    const uniqueIdForFindingSelectedImage = `ImageTakingButtonInsideWidget${this.props.widgetNumber}`;
    return (
      <Dialog
        open={this.props.shouldOpen}
        onClose={() => this.props.dialogDealingFunction()}
      >
        <DialogTitle>Select Image</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Note: you can only select images (of type png,jpg) of size less than
            5 mb only

          </DialogContentText>
          <DialogContentText style={{ color: 'red' }}>
         {this.state.errorContent}
          </DialogContentText>
          <input type="file" id={uniqueIdForFindingSelectedImage} />
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
              let selectedImagePath = document.getElementById(
                uniqueIdForFindingSelectedImage
              );
              if (
                selectedImagePath.files.length === 1 &&
                (selectedImagePath.files[0].type === "image/jpeg" ||
                  selectedImagePath.files[0].type === "image/png")
              ) {
                this.setState({errorContent:""})
                console.log(e.target)
                if(this.props.whichTrayIconWasPressed === 'upper'){
                  mediaObject = selectedImagePath.files[0]
                  selectedImagePath = URL.createObjectURL(
                    selectedImagePath.files[0]
                  );
                  console.log(typeof selectedImagePath)
                  this.props.addWidgetFunction(
                    "ImageWidget",
                    e,
                    "upperTray",
                    selectedImagePath,
                    mediaObject
                  );
                  this.props.dialogDealingFunction();
                } else if(this.props.whichTrayIconWasPressed === 'lower'){
                  mediaObject = selectedImagePath.files[0]
                  selectedImagePath = URL.createObjectURL(
                    selectedImagePath.files[0]
                  );
                  this.props.addWidgetFunction(
                    "ImageWidget",
                    e,
                    "lowerTray",
                    selectedImagePath,
                    mediaObject
                  );
                  this.props.dialogDealingFunction();
                }
                else{
                  // means left tray icon was clicked
                  mediaObject = selectedImagePath.files[0]
                  selectedImagePath = URL.createObjectURL(
                    selectedImagePath.files[0]
                  );
                  this.props.addWidgetFunction(
                    "ImageWidget",
                    undefined,
                    undefined,
                    selectedImagePath,
                    mediaObject
                  );
                  this.props.dialogDealingFunction();
                }
              }
              else {
                // either multiple images picked or they are not of png,jpeg format
                this.setState({errorContent:"either multiple images picked or they are not of png,jpeg format"})
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

export default ImageSelectorDialog;
