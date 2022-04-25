import React from "react";
import react from "react";
import '../../../../css/panel/articleverificationpanel/commentsArea.css'
class CommentsAreaForArticalVerificationPanel extends react.Component {
    state = {
        data:[]
    }
    addComment=() => {
        let comment = window.prompt('Are you feeling lucky');
        if(comment.length > 10){
            console.log(typeof comment,34)
            this.props.currentCommentUpdateFunction(comment)
            let obj = {
                sender:'kick',
                receiver:'batuski',
                message:comment,
                date: '12/12/12'
            }
            let data = Array.from(this.state.data)
            data.push(<ul key={data.length}>
                <li>sender: {obj.sender}</li>
                <li>reciver: {obj.receiver}</li>
                <li>message: {obj.message}</li>
            </ul>)
            this.setState({
                data:data
            })
        } else {
            alert(`Either you haven't entered any text or you have entered a comment of small size keep it smaller!`)
        }
        
    }
    componentDidMount(){
        let comments= [
            {
                sender:'yash',
                receiver:'person',
                message:'HI this is a comment',
                date: '12/12/12'
            },
            {
                sender:'yash',
                receiver:'person',
                message:'HI this is a comment',
                date: '12/12/12'
            },
            {
                sender:'ram',
                receiver:'raju',
                message:'HI this is a comment',
                date: '12/12/12'
            },
            {
                sender:'yash',
                receiver:'person',
                message:'HI this is a comment',
                date: '12/12/12'
            },
            {
                sender:'yash',
                receiver:'yash',
                message:'HI this is a comment',
                date: '12/12/12'
            },
            {
                sender:'shyam',
                receiver:'raju',
                message:'HI this is a comment',
                date: '12/12/12'
            },
            {
                sender:'yash',
                receiver:'person',
                message:'HI this is a comment',
                date: '12/12/12'
            }
        ]
        let temp =[]
        for(let i=0;i<comments.length;i++){
            temp.push(<ul key={i}>
                <li>sender: {comments[i].sender}</li>
                <li>reciver: {comments[i].receiver}</li>
                <li>message: {comments[0].message}</li>
            </ul>)
        }
        this.setState({
            data:temp
        })
    }
  render() {
    return (
      <React.Fragment>
          <div className="parent-container">
              {this.state.data}
          </div>
          <div className="row">
              <div className="col-sm btnsOfArticlepage">
                <button className="btn-success" onClick={this.addComment}>Add Comment</button>
              </div>
              
          </div>
      </React.Fragment>
    );
  }
}
export default CommentsAreaForArticalVerificationPanel;
