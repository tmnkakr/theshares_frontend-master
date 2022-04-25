import react from "react";
import "../../../css/editor/classbased/mainTextAreaForEditor.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
class MainTextArea extends react.Component {
  render() {
    return (
      <react.Fragment>
        <Tabs className="panels" forceRenderTabPanel={true}>
          <TabList>
            <Tab>Writing Pad</Tab>
            <Tab>Preview</Tab>
          </TabList>

          <TabPanel>
            <div className="l2_container_child2" id="editor_area">
              {this.props.widgets.map((widget) => widget)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="l2_container_child2">
              {this.props.previewContent}
            </div>
          </TabPanel>
        </Tabs>
      </react.Fragment>
    );
  }
}
export default MainTextArea;
