import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import FindService from './FindService';
import Header from './components/commons/Header.js';
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <Suspense fallback={(<div>~Loading~</div>)}>
      <Header />
      <Home />
      {/* <FindService /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <Footer />
    </Suspense>

    // <div>
    //   <Service />
    //   <RequestForm />
    //   <Review />
    //   <Footer />
    // </div>
  );
}

export default App;