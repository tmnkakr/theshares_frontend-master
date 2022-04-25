import react from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";

class DialogPage extends react.Component {
  componentDidMount(){
    console.log('mountedd')
  }
  render() {
    return (
      <Dialog
        open={this.props.shouldOpen}
        onClose={() => this.props.dialogDealingFunction()}
      >
        <DialogTitle>{this.props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
              {this.props.dialogMessage}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={(e) => {
            //   this.setState({errorContent:""})
              this.props.dialogDealingFunction()
            }}
            color="primary"
          >
            Close
          </button>
          <button 
            onClick={(e) => {
                this.props.onSuccess()
                this.props.dialogDealingFunction()
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

export default DialogPage;
