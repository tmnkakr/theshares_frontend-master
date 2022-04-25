import react from "react";

import "../../../css/editor/classbased/editorPage.css";
import LeftTrayForEditor from "./leftTrayForEditor";
import MainTextArea from "./mainTextAreaForEditor";
import TopmostTrayForEditor from "./topmostTrayForEditor";
import TextField from "./textFieldForEditor";
import ImageWidget from "./imageWidgetForTextEditor";
import VideoWidget from "./VideoWidgetForTextEditor"
class EditorPage extends react.Component {
  state = {
    totalWidgets: [],
    currentWidgetNumber: 0,
    totalWidgetsInString: [],
    mediaWidgets: new Map(),
    previewContent: ""
  };

  commnFunctionForWidgetsAddedByUpperTray(whereToInsertInArray,newWidget,typeOfWidget,mediaObject){
    this.state.totalWidgets.splice(whereToInsertInArray, 0, newWidget);
          this.state.totalWidgetsInString.splice(
            whereToInsertInArray,
            0,
            `${typeOfWidget}${this.state.currentWidgetNumber}`
          );
          if(!`${typeOfWidget}`.startsWith('TextField') && mediaObject){
            this.state.mediaWidgets.set(`${typeOfWidget}${this.state.currentWidgetNumber}`,mediaObject)
          }

  }
  commonFunctionForWidgetsAddedByLeftTrayIcons(newWidget, typeOfWidget,mediaObject) {
    this.state.totalWidgets.push(newWidget);
    this.state.totalWidgetsInString.push(
      `${typeOfWidget}${this.state.currentWidgetNumber}`
    );
    if(!`${typeOfWidget}`.startsWith('TextField') && mediaObject){
      this.state.mediaWidgets.set(`${typeOfWidget}${this.state.currentWidgetNumber}`,mediaObject)
    }
    this.setState({
      totalWidgets: this.state.totalWidgets,
      currentWidgetNumber: this.state.currentWidgetNumber + 1,
      totalWidgetsInString: this.state.totalWidgetsInString,
      mediaWidgets: this.state.mediaWidgets,
    });
    console.log(this.state.totalWidgetsInString);
  }
  addWidgetFunction = (
    typeOfWidget,
    e,
    modeOfClick,
    pathOfMedia = undefined,
    mediaAsObject = undefined,
  ) => {
    let newWidget;
    if (e) {
      // means widget was added by the click of tray on widgets
      if (modeOfClick === "upperTray") {
        // if upper tray icon was clicked
        if (typeOfWidget === "TextField") {
          const widgetWhichWasClicked = e.target.classList[2];
          const widgetIndexWhichWasClicked = this.state.totalWidgetsInString.indexOf(widgetWhichWasClicked);
          console.log(`index clicked wass ${widgetIndexWhichWasClicked}`);
          const whereToInsertInArray = widgetIndexWhichWasClicked;
          newWidget = (
            <TextField
              key={this.state.currentWidgetNumber}
              widgetNumber={this.state.currentWidgetNumber}
              addWidgetFunction={this.addWidgetFunction} 
              typeOfWidget={typeOfWidget}
            />
          );
          this.commnFunctionForWidgetsAddedByUpperTray(whereToInsertInArray,newWidget,typeOfWidget)
        } else if (typeOfWidget === "ImageWidget") {
          const widgetWhichWasClicked = e.target.classList[0];
          const widgetIndexWhichWasClicked = this.state.totalWidgetsInString.indexOf(widgetWhichWasClicked);
          console.log(`index clickked wass ${widgetIndexWhichWasClicked}`);
          const whereToInsertInArray = widgetIndexWhichWasClicked;
          newWidget = (
            <ImageWidget
              key={this.state.currentWidgetNumber}
              widgetNumber={this.state.currentWidgetNumber}
              addWidgetFunction={this.addWidgetFunction}
              pathOfImage={pathOfMedia} 
              typeOfWidget={typeOfWidget}
            />
          );
          this.commnFunctionForWidgetsAddedByUpperTray(whereToInsertInArray,newWidget,typeOfWidget,mediaAsObject)
        } else if (typeOfWidget === "VideoWidget") {
          const widgetWhichWasClicked = e.target.classList[0];
          const widgetIndexWhichWasClicked = this.state.totalWidgetsInString.indexOf(widgetWhichWasClicked);
          console.log(`index clickked wass ${widgetIndexWhichWasClicked}`);
          const whereToInsertInArray = widgetIndexWhichWasClicked;
          newWidget = (
            <VideoWidget
              key={this.state.currentWidgetNumber}
              widgetNumber={this.state.currentWidgetNumber}
              addWidgetFunction={this.addWidgetFunction}
              pathOfVideo={pathOfMedia} 
              typeOfWidget={typeOfWidget}
            />
          );
          this.commnFunctionForWidgetsAddedByUpperTray(whereToInsertInArray,newWidget,typeOfWidget,mediaAsObject)
        }
        this.setState({
          totalWidgets: this.state.totalWidgets,
          currentWidgetNumber: this.state.currentWidgetNumber + 1,
          totalWidgetsInString: this.state.totalWidgetsInString,
          mediaWidgets: this.state.mediaWidgets
        });
      } else {
        // means Click was done from lower tray
        if (typeOfWidget === "TextField") {
          const widgetWhichWasClicked = e.target.classList[2];
          const widgetIndexWhichWasClicked = this.state.totalWidgetsInString.indexOf(widgetWhichWasClicked);
          console.log(`index clicked wass ${widgetIndexWhichWasClicked}`);
          const whereToInsertInArray = widgetIndexWhichWasClicked +1 ;
          newWidget = (
            <TextField
              key={this.state.currentWidgetNumber}
              widgetNumber={this.state.currentWidgetNumber}
              addWidgetFunction={this.addWidgetFunction} 
              typeOfWidget={typeOfWidget}
            />
          );
          this.commnFunctionForWidgetsAddedByUpperTray(whereToInsertInArray,newWidget,typeOfWidget,mediaAsObject)
        } 
        else if (typeOfWidget === "ImageWidget") {
          const widgetWhichWasClicked = e.target.classList[0];
          const widgetIndexWhichWasClicked = this.state.totalWidgetsInString.indexOf(widgetWhichWasClicked);
          console.log(`index clicked wass ${widgetIndexWhichWasClicked}`);
          const whereToInsertInArray = widgetIndexWhichWasClicked + 1 ;
          newWidget = (
            <ImageWidget
              key={this.state.currentWidgetNumber}
              widgetNumber={this.state.currentWidgetNumber}
              addWidgetFunction={this.addWidgetFunction}
              pathOfImage={pathOfMedia} 
              typeOfWidget={typeOfWidget}
            />
            
          );
          this.commnFunctionForWidgetsAddedByUpperTray(whereToInsertInArray,newWidget,typeOfWidget,mediaAsObject)
        } else if (typeOfWidget === "VideoWidget") {
          const widgetWhichWasClicked = e.target.classList[0];
          const widgetIndexWhichWasClicked = this.state.totalWidgetsInString.indexOf(widgetWhichWasClicked);
          console.log(`index clicked wass ${widgetIndexWhichWasClicked}`);
          const whereToInsertInArray = widgetIndexWhichWasClicked + 1 ;
          newWidget = (
            <VideoWidget
              key={this.state.currentWidgetNumber}
              widgetNumber={this.state.currentWidgetNumber}
              addWidgetFunction={this.addWidgetFunction}
              pathOfVideo={pathOfMedia} 
              typeOfWidget={typeOfWidget}
            />
            
          );
          this.commnFunctionForWidgetsAddedByUpperTray(whereToInsertInArray,newWidget,typeOfWidget,mediaAsObject)
        } 
        this.setState({
          totalWidgets: this.state.totalWidgets,
          currentWidgetNumber: this.state.currentWidgetNumber + 1,
          totalWidgetsInString: this.state.totalWidgetsInString,
          mediaWidgets: this.state.mediaWidgets
        });
      }
    } else {
      // means widget was added by the click of left tray icons on editor page
      if (typeOfWidget === "TextField") {
        newWidget = (
          <TextField
            key={this.state.currentWidgetNumber}
            widgetNumber={this.state.currentWidgetNumber}
            addWidgetFunction={this.addWidgetFunction} 
            typeOfWidget={typeOfWidget}
          />
        );
        this.commonFunctionForWidgetsAddedByLeftTrayIcons(
          newWidget,
          typeOfWidget
        );
      }
      else if (typeOfWidget === 'ImageWidget'){
        newWidget = (
          <ImageWidget
            key={this.state.currentWidgetNumber}
            widgetNumber={this.state.currentWidgetNumber}
            addWidgetFunction={this.addWidgetFunction}
            pathOfImage={pathOfMedia} 
            typeOfWidget={typeOfWidget}
          />
        );
        this.commonFunctionForWidgetsAddedByLeftTrayIcons(
          newWidget,
          typeOfWidget,
          mediaAsObject
        );
      } else if (typeOfWidget === 'VideoWidget'){
        newWidget = (
          <VideoWidget
            key={this.state.currentWidgetNumber}
            widgetNumber={this.state.currentWidgetNumber}
            addWidgetFunction={this.addWidgetFunction}
            pathOfVideo={pathOfMedia} 
            typeOfWidget={typeOfWidget}
          />
        );
        this.commonFunctionForWidgetsAddedByLeftTrayIcons(
          newWidget,
          typeOfWidget,
          mediaAsObject
        );
      }
    }
    console.log(this.state.mediaWidgets)
  };
  updateForPreview = (data) => {
    this.setState({previewContent: data})
  }
  render() {
    return (
      <div className="parent_container">
        <TopmostTrayForEditor
          addWidgetFunction={this.addWidgetFunction}
          currentWidgetNumber={this.state.currentWidgetNumber}
        />
        <div className="l2_container">
          <LeftTrayForEditor
            addWidgetFunction={this.addWidgetFunction}
            currentWidgetNumber={this.state.currentWidgetNumber}
            widgetsList = {this.state.totalWidgetsInString} 
            updateForPreview = {this.updateForPreview} 
            mediaWidgets = {this.state.mediaWidgets}
          />
          <MainTextArea
            addWidgetFunction={this.addWidgetFunction}
            currentWidgetNumber={this.state.currentWidgetNumber}
            widgets={this.state.totalWidgets} 
            previewContent={this.state.previewContent}
          />
        </div>
      </div>
    );
  }
}
export default EditorPage;
