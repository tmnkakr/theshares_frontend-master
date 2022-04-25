import React from "react";

import { Routes, Route } from 'react-router-dom'
import EditorPage from './components/editor/classbased/editorPage'
// import LoginPageForArticalVerificationPanel from './components/panel/articleverficationpanel/classbased/loginPage'
// import HomePageForArticalVerificationPanel from './components/panel/articleverficationpanel/classbased/homePage'
// import ArticlePageForArticalVerificationPanel from './components/panel/articleverficationpanel/classbased/articlePage'
import axios from "axios";
import S from "./components/S";
axios.defaults.withCredentials = true
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
      <>
        <Routes>
          <Route path='/' element={<S />} />
          <Route exact path="/editor" element={<EditorPage />} />
          {/* <Route path='/panel/articleverification ' element={<LoginPageForArticalVerificationPanel authorizeUser={this.authorizeUser} />} />
          <Route path='/panel/articleverification/homepage' element={<HomePageForArticalVerificationPanel authorized={this.state.authorised} />} />
          <Route path='/panel/articleverification/articlepage' element={<ArticlePageForArticalVerificationPanel authorized={this.state.authorised} adminId={this.state.adminId} />} /> */}

        </Routes>
      </>
    );
  }
}
export default App;
