import react from "react";
import TopmostTrayForPanel from "./topmostTray";
import UserNameTagForArticalVerificationPanel from "./userNameTag";
import CommentsAreaForArticalVerificationPanel from "./commentsArea";
import TagsAndDateWidgetForArticalVerificationPanel from "./tagsAndDateWidget";
import "../../../../css/panel/articleverificationpanel/articlePage.css";
import MainArticleContentForArticalVerificationPanel from "./articleContent";
import DialogPage from "./dialogForArticlePage";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import LoadingWidgetForPanel from "./loadingWidget";
import axios from "axios";
class ArticlePageForArticalVerificationPanel extends react.Component {
  ip="43.204.60.203"
  state = {
    isLoading: true,
    currentComment:"",
    articleAid:"none",
    articleTags: "none",
    submissionDate: "none",
    contributorId: "none",
    content: "none",
    shouldDialogOpen: false,
    dialogMessage: "",
    dialogTitle: "",
    dialogSuccessFunction: undefined,
  };
  discardArticle = () => {
    const data = {
      articleId: this.state.articleAid,
      publisherId: this.props.adminId,
      comment: this.state.currentComment
    };
    if(data.comment.length<10){
      alert('please add a comment of atleast 10 size')
      return
    }
    axios
      .post(
        `http://${this.ip}:4000/app/panel/articleverification/discardarticle`,
        data
      )
      .then((res) => {
        console.log(res,45)
  }).catch((message)=>{
    console.log(message,23344)
  })
  };
  discardButtonClicked = () => {
    this.setState({
      dialogSuccessFunction: this.discardArticle,
      dialogMessage: "Are you sure you want to discard this article?",
      dialogTitle: "Alert",
      shouldDialogOpen: !this.state.shouldDialogOpen,
    });
  };
  resendArticle = () => {
    const data = {
      articleId: this.state.articleAid, 
      publisherId: this.props.adminId,
      comment: this.state.currentComment
    };
    if(data.comment.length<10){
      alert('please add a comment of atleast 10 size')
      return
    }
    axios
      .post(
        `http://${this.ip}:4000/app/panel/articleverification/resendarticle`,
        data
      )
      .then((res) => {
        console.log(res,45)
  }).catch((message)=>{
    console.log(message,23344)
  })
};
updateCurrentComment = (text) => {
  this.setState({
    currentComment: text
  })
}
  resendButtonClicked = () => {
    this.setState({
      dialogSuccessFunction: this.resendArticle,
      dialogMessage: "Are you sure you want to resend this article?",
      dialogTitle: "Alert",
      shouldDialogOpen: !this.state.shouldDialogOpen,
    });
  };
  publishButtonClicked = () => {
    this.setState({
      dialogSuccessFunction: this.publishArticle,
      dialogMessage: "Are you sure you want to publish this article?",
      dialogTitle: "Alert",
      shouldDialogOpen: !this.state.shouldDialogOpen,
    });
  };
  loadingDealer = () => {
    this.setState({
      isLoading:!this.state.isLoading
    })
  }
  publishArticle = () => {
    
    if (this.props.adminId) {
      const data= {
      publisherId: this.props.adminId,
      articleId:this.state.articleAid
      }
      
      this.loadingDealer()
      axios
        .post(
          `http://${this.ip}:4000/app/panel/articleverification/publisharticle`,
          data
        )
        .then((res) => {
          if(res.data.success===1){
            alert("Article has been published")
          } else {
            alert(`Article couldn't be published because ${res.data.message}`)
          }
          this.loadingDealer()
        })
        .catch((data) => {
          alert(`${data}`)
          this.loadingDealer()
        });
    } else {
      alert("You have to sign in first");
    }
  };
  publishButtonClicked = () => {
    this.setState({
      dialogSuccessFunction: this.publishArticle,
      dialogMessage: "Are you sure you want to publish this article?",
      dialogTitle: "Alert",
      shouldDialogOpen: !this.state.shouldDialogOpen,
    });
  };
  dialogDealingFunction = () => {
    this.setState({
      shouldDialogOpen: !this.state.shouldDialogOpen,
    });
  };
  getArticleDetails = (articleId) => {
    const data = {
      articleId,
    };
    axios
      .post(
        `http://${this.ip}:4000/app/panel/articleverification/articledata`,
        data
      )
      .then((res) => {
        if (res.data.success === 1) {
          this.setState({
            isLoading: false,
            articleTags: res.data.data.tags,
            submissionDate: res.data.data.date_of_submission,
            contributorId: res.data.data.contributor_id,
            content: res.data.data.content,
            articleAid: res.data.data.aid
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    const articleId = this.props.location.state?.articleId;
    if(!articleId){
      alert('You are not authorized!!!')
    } else {
      this.getArticleDetails(articleId);
    }
    
  }
  render() {
    if (this.props.authorized && !this.state.isLoading) {
      return (
        <react.Fragment>
          <DialogPage
            dialogMessage={this.state.dialogMessage}
            shouldOpen={this.state.shouldDialogOpen}
            dialogTitle={this.state.dialogTitle}
            dialogDealingFunction={this.dialogDealingFunction}
            onSuccess={this.state.dialogSuccessFunction}
          />
          <div className="parent_container">
            <TopmostTrayForPanel></TopmostTrayForPanel>

            <div className="container">
              <div className="row">
                <div className="col-md">
                  <UserNameTagForArticalVerificationPanel
                    contributorName={"Yash Mathur"}
                    contributorId={this.state.contributorId}
                  ></UserNameTagForArticalVerificationPanel>
                </div>
                <div className="col-md">
                  <TagsAndDateWidgetForArticalVerificationPanel
                    tags={this.state.articleTags}
                    dateOfPublish={Date(this.state.submissionDate)}
                  ></TagsAndDateWidgetForArticalVerificationPanel>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <MainArticleContentForArticalVerificationPanel
                    content={this.state.content}
                  ></MainArticleContentForArticalVerificationPanel>
                </div>
              </div>
              <div className="row">
                <div className="col-sm btnsOfArticlepage">
                  <button
                    className="btn-success"
                    onClick={this.publishButtonClicked}
                  >
                    Publish
                  </button>
                </div>
                <div className="col-sm btnsOfArticlepage">
                  <button
                    className="btn-danger"
                    onClick={this.discardButtonClicked}
                  >
                    Discard
                  </button>
                </div>
                <div className="col-sm btnsOfArticlepage">
                  <button
                    className="btn-warning"
                    onClick={this.resendButtonClicked}
                  >
                    Resend
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <CommentsAreaForArticalVerificationPanel currentCommentUpdateFunction={this.updateCurrentComment}></CommentsAreaForArticalVerificationPanel>
                </div>
              </div>
            </div>
          </div>
        </react.Fragment>
      );
    } else if (this.props.authorized) {
      return <LoadingWidgetForPanel />;
    } else {
      return <Navigate to="/panel/articleverification" />;
    }
  }
}

export default function (props) {
  const navigation = useNavigate();
  const location = useLocation();
  return (
    <ArticlePageForArticalVerificationPanel
      {...props}
      navigation={navigation}
      location={location}
    />
  );
}
