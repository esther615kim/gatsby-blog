import React from 'react'

//NR
import Search from './components/MainPage/Search.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LocalMaster from './components/MainPage/LocalMaster.js';
import FindMaster from './components/FindMasterPage/SearchCategory.js';

//SuZzie
import Popular from "./components/cards/Popular";
import Magazine from "./components/cards/Magazine";
// import Tips from "./components/cards/Tips";
import Hidden from "./components/cards/Hidden";

//효효
import RequestForm from "./components/RequestForm";
import Review from "./components/Review";
import Service from "./components/Service";


function Home() {
  return (
    <div>

      <Switch>
        <Route path='/findmaster' component={FindMaster} />
        <div style={{ paddingTop: '190px', paddingLeft: '123px', minHeight: 'calc(100vh - 80px)' }}>
          <Search />
        </div>
      </Switch>
      {/* cards */}
      <Popular />
      <Hidden />
      <Magazine />
      <LocalMaster />

      {/* footer에 붙어 있어서 가져옴 => 컴포넌트화 필요 */}
      {/* <div className={classes.join}>
        <p className={classes.more}><strong>더 많은 고객을 만날 기회!</strong><br />
          가입 직후 <strong>내 조건에 맞는 요청서</strong>를<br />
          무료로 받아보고 만나고 싶은<br />
          고객과 연락해보세요.</p>
        <Button variant="contained" size="medium" color="secondary" className={classes.margin_1}>
          마스터로 가입하기
        </Button>
      </div> */}

    </div>
  )
}

export default Home;
