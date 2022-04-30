//import { Switch } from "@material-ui/core";
import React from "react";
//import { Routes } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import EditorPage from './components/editor/classbased/editorPage'
import NotFound from "./components/functionbased/NotFound";
import LoginPageForArticalVerificationPanel from './components/panel/articleverficationpanel/classbased/loginPage'
// import HomePageForArticalVerificationPanel from './components/panel/articleverficationpanel/classbased/homePage'
// import ArticlePageForArticalVerificationPanel from './components/panel/articleverficationpanel/classbased/articlePage'
//import axios from "axios";

//axios.defaults.withCredentials = true
class App extends React.Component {
  // state = {
  //   authorised: JSON.parse(localStorage.getItem("authorized")) ?? false,
  //   adminId: parseInt(JSON.parse(localStorage.getItem("adminId"))) ?? undefined,
  //   extras: {}
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   // Persist authorized state changes to localStorage
  //   if (prevState.authroised !== this.state.authorised) {
  //     console.log('changed')
  //     localStorage.setItem("authorized", JSON.stringify(this.state.authorised));
  //     localStorage.setItem("adminId", JSON.stringify(this.state.adminId));
  //   } 
  // }
  // authorizeUser = (authorizeState, adminId) => {
  //   this.setState({
  //     authorised: authorizeState,
  //     adminId: adminId
  //   })
  // }
  render() {
    return (
 
      <Router>
        <Switch>

          <Route path='/editor'> 
            <EditorPage />
          </Route>

          <Route exact path='/404'> 
            <NotFound />
          </Route>

          <Route  path='/'> 
            <LoginPageForArticalVerificationPanel />
          </Route>

          <Redirect to="/404" />

        </Switch >
        {/* <Route path='/online'>
            <Online/>
          </Route>
          <Route path='/skill'>
            <Skill/>
          </Route>
          <Route path='/grammar'> 
            <Grammar/>
          </Route>
          <Route path='/vocabulary'>
            <Vocabulary/>
          </Route> */}
      </Router>

      /* <Route path='/panel/articleverification/homepage' element={<HomePageForArticalVerificationPanel authorized={this.state.authorised} />} />
       <Route path='/panel/articleverification/articlepage' element={<ArticlePageForArticalVerificationPanel authorized={this.state.authorised} adminId={this.state.adminId} />} /> */

    )
  }
}

export default App;
