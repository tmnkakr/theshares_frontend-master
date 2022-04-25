import react from "react";
import "../../../css/editor/classbased/textFieldForEditor.css";

class UpperTrayForWidgets extends react.Component {
  render() {
    return (
      <react.Fragment>
        <div className="utilitytrayouter">
          <center>
            <div>
              <button
                onClick={(e) =>
                  this.props.addWidgetFunction("TextField", e, "upperTray")
                }
              >
                <i className={this.props.classNameForButtons}>article</i>
              </button>
              <button
                onClick={(e) => {
                  this.props.handleClickForImageDialog("upper");
                }}
              >
                <i className={this.props.classNameForButtons}>image</i>
              </button>
              <button onClick={(e) => {
                  this.props.handleClickForVideoDialog("upper");
                }}>
                <i className={this.props.classNameForButtons}>movie</i>
              </button>
            </div>
          </center>
        </div>
      </react.Fragment>
    );
  }
}
export default UpperTrayForWidgets;
