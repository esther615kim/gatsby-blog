import React from "react";
import './shared/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from './pages/PostList';
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Header from "./components/Header";
import { Grid } from "./elements";

function App() {
  return (

    <BrowserRouter>
      <Grid>
        <Header></Header>
        <Routes>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Routes>
      </Grid>
      <Grid>
        <Login />
      </Grid>
    </BrowserRouter>
  )
}

export default App;




{/* //전달할 props가 있는 경우 아래와 같이 */ }
{/* <Route exact path="/info" render={() => <Info userInfo={userInfo} />} /> */ }

