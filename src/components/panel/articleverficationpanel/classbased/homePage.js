import react from "react";
import TopmostTrayForPanel from "./topmostTray";
import CardForPanel from "./cardForPanel";
import {Navigate,useNavigate} from 'react-router-dom'
import axios from "axios";

class HomePageForArticalVerificationPanel extends react.Component {
  ip="43.204.60.203"
  state = {
    data: [],
  };
  openArticle = (articleId) => {
    this.props.navigation('/panel/articleverification/articlepage',{state:
      {articleId:articleId}
    })
  }
  componentDidMount() {
    console.log("loaded");
    this.getUnverifiedArticles();
  }
  
  getUnverifiedArticles() {
    let data = [];
    let cnt = 0;
    let temp = [];
    axios
    .get(
      `http://${this.ip}:4000/app/panel/articleverification/getunverifiedarticles`,
      data
    )
    .then((res) => {
      
      console.log(res)
      if (res.data.success === 1) {
        const articles = res.data.data.articles 
        for (let i = 0; i < articles.length; i++) {
          if (cnt > 2) {
            data.push(<div className="row" key={`extra${i}`}>{temp}</div>);
            cnt = 0;
            temp = [];
          }
          if (cnt <= 2) {
            temp.push(
              <div className="col-sm" key={i}>
                <CardForPanel title={articles[i].title} tags={articles[i].tags} aid={articles[i].aid} openArticle={this.openArticle}></CardForPanel>
              </div>
            );
            cnt++;
          }
          
        }
        if(temp.length !=0){
            data.push(<div className="row" key={`last one`}>{temp}</div>);
        }
        this.setState({
          data: data,
        });
      } else {
        throw new Error(`${res.data.message}`);
      }
      
    })
    .catch((error) => {
      alert(error.message);
    });
    
  }
  render() {
    if (this.props.authorized) {
      return (
      
        <div className="parent_container">
          <TopmostTrayForPanel></TopmostTrayForPanel>
          <div className="container">{this.state.data}</div>
        </div>
      );
    } else {
      return (
        <Navigate to='/panel/articleverification'  />
      )
    }
    
  }
}

// Wrap and export
export default function(props) {
  const navigation = useNavigate();

  return <HomePageForArticalVerificationPanel {...props} navigation={navigation} />;
}
