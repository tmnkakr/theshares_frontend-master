
import react from "react";
import parse from "html-react-parser";
import axios from "axios";

import "../../../css/editor/classbased/leftTrayForEditor.css";
import LeftTrayIcons from "./leftTrayIconsForEditor";
class LeftTrayForEditor extends react.Component {
  parseData = (wantString) => {
    let ctr = 0
    
    if (wantString) {
      // means data is required in string format
      let innerdataOfWidget;
      let result = "";
      this.props.widgetsList.forEach((element) => {
        if (`${element}`.startsWith("TextField")) {
          // means we are going to parse text
          innerdataOfWidget = document.getElementById(element);

          result +=
            `${innerdataOfWidget.lastChild.firstChild.innerHTML}`;
        } else if (`${element}`.startsWith("ImageWidget")) {
          // means we are going to parse image
          innerdataOfWidget = document.getElementById(element);
          const pathOfImage = innerdataOfWidget.getAttribute("src");
          result += `<br><br><br><center><img src=${pathOfImage}></img></center>`;
        } else if (`${element}`.startsWith("VideoWidget")) {
          // means we are going to parse video
          innerdataOfWidget = document.getElementById(element);
          const pathOfVideo = innerdataOfWidget.firstChild.getAttribute("src");
          result += `<br><br><br><center><video width="320" height="240" controls ><source src=${pathOfVideo} type="video/mp4" /></video></center>`;
        }
      });
      return result;
    } else {
      // means data is required in array of objects
      let countImage = 0
      let countVideo = 0;
      let innerdataOfWidget;
      let result = [];
      let tempObject;
      this.props.widgetsList.forEach((element) => {
        if (`${element}`.startsWith("TextField")) {
          // means we are going to parse text
          innerdataOfWidget = document.getElementById(element);
          tempObject = {
            typeOfWidget: "TextField",
            name: element,
            data: `${innerdataOfWidget.lastChild.firstChild.innerHTML}`,
          }
          result.push(tempObject)
        } else if (`${element}`.startsWith("ImageWidget") && this.props.mediaWidgets.has(element)) {
          // means we are going to parse image
          innerdataOfWidget = document.getElementById(element);
          const pathOfImage = innerdataOfWidget.getAttribute("src");
          let ext = `${this.props.mediaWidgets.get(element).name}`.split(".")
          ext = ext[ext.length - 1]
          tempObject = {
            typeOfWidget: "ImageWidget",
            data: `<br><br><br><center><img src=${pathOfImage}></img></center>`,
            path: pathOfImage,
            name: element,
            pathForBackend: `image-${ctr}.${ext}`
          }
          result.push(tempObject)
          ctr++;
          countImage++;
        } else if (`${element}`.startsWith("VideoWidget")) {
          // means we are going to parse video
          innerdataOfWidget = document.getElementById(element);
          const pathOfVideo = innerdataOfWidget.firstChild.getAttribute("src");
          tempObject = {
            typeOfWidget: "VideoWidget",
            data:  `<br><br><br><center><video width="320" height="240" controls ><source src=${pathOfVideo} type="video/mp4" /></video></center>`,
            path: pathOfVideo,
            name: element,
          }
          result.push(tempObject)
          ctr++;
          countVideo++;
        }
      }
      );
      return [result,countImage,countVideo];
    }
  };
  submitForReview = async (e) => {
    e.preventDefault()
    let dataForMedia = new FormData()
    let fullData = this.parseData(false)[0]
    let tempData;
    fullData.forEach(element => {
      tempData = this.props.mediaWidgets.get(element.name)
      dataForMedia.append('media',tempData)
    });

    const config =  {
      'content-type': 'multipart/form-data',
    }
    // "https://run.mocky.io/v3/7ff7446f-a4b1-4b54-aba6-18c3310f245e"
    //uploading images first
    axios.post(`http://localhost:4000/app/editor/uploadMedia`,dataForMedia,config).then(res => {
      const totalMediaUploadedWas = res.data.data.totalUploadedMedia
      const data = this.parseData(false)
      const htmlFile = data[0]
      const imagesParsed = data[1]
      const videosParsed = data[2]
      if((imagesParsed + videosParsed) === totalMediaUploadedWas){
        // means all media got uploaded properly now we can send html content
        alert('Media have been uploaded')
        axios.post(`http://localhost:4000/app/editor/uploadArticle`,{htmlFile: htmlFile},config).then(res => {
          // means file has been uploaded
          alert('file uploaded successfully')
      }).catch(error => {
        console.log(error)
      })
      }
    }).catch(err => {
      console.log(err)
    })
  };
  preview = () => {
    let data = parse(this.parseData(true));
    this.props.updateForPreview(data);
  };

  
  render() {
    return (
      <react.Fragment>
        <div className="l2_container_child1">
          <div>
            <LeftTrayIcons
              className="l2_container_child1_1"
              addWidgetFunction={this.props.addWidgetFunction}
              widgetNumber={this.props.currentWidgetNumber}
            />
          </div>

          <div className="l2_container_child1_2">
            <center>
              <button onClick={(e)=>this.submitForReview(e)} className="bigbtn">
                Submit For Review
              </button>
            </center>
            <center>
              <button className="bigbtn" onClick={this.preview}>
                Preview
              </button>
            </center>
          </div>
        </div>
      </react.Fragment>
    );
  }
}

export default LeftTrayForEditor;
