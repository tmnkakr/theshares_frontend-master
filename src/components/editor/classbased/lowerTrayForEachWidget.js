import react from "react";
class LowerTrayForWidgets extends react.Component {
  render() {
    return (
      <react.Fragment>
        <div className="utilitytrayouter">
          <center>
            <div>
              <button
                onClick={(e) =>
                  this.props.addWidgetFunction("TextField", e, "lowerTray")
                }
              >
                <i className={this.props.classNameForButtons}>article</i>
              </button>
              <button
                onClick={(e) => this.props.handleClickForImageDialog("lower")}
              >
                <i className={this.props.classNameForButtons}>image</i>
              </button>
              <button onClick={(e) => {
                  this.props.handleClickForVideoDialog("lower");
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
export default LowerTrayForWidgets;
