import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
// import { Height } from '@material-ui/icons';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  join: {
    marginTop: '5%',
    marginLeft: '26%',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  call: {
    color: '#fa9682',
    fontSize: 'x-large',
    fontWeight: 'bold',
  },
  margin: {
    margin: theme.spacing(1),
    backgroundColor: '#fa9682',
  },
  margin_1: {
    backgroundColor: '#fa9682',
  },
  left: {
    paddingRight: '15%',
  },
  bar: {
    backgroundColor: '#fa9682',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    marginLeft: '20%',
  },
  li: {
    padding: '1%',
  },
  span: {
    fontWeight: 'bold',
  },
  p_b: {
    marginLeft: '22.1%',
    fontSize: 'x-small',
  },
  ul_b: {
    listStyle: 'none',
    marginLeft: '20%',
    fontSize: 'x-small',
  },
  href: {
    textDecoration: 'none',
    color: 'black',
    visibility: 'none',
    focus: 'none',
  },
  img_1: {
    paddingLeft: '10%',
    paddingRight: '1%',
  },
  img: {
    paddingRight: '1%',
  },
  more: {
    fontSize: '24px',
  },
  // bottom_left: {
  //   width: '60%',
  // },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div className={classes.join}>
        <p className={classes.more}><strong>더 많은 고객을 만날 기회!</strong><br />
          가입 직후 <strong>내 조건에 맞는 요청서</strong>를<br />
          무료로 받아보고 만나고 싶은<br />
          고객과 연락해보세요.</p>
        <Button variant="contained" size="medium" color="secondary" className={classes.margin_1}>
          마스터로 가입하기
        </Button>
      </div> */}

      <CssBaseline />
      {/* <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          THE MASTER
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'본 페이지는 THE MASTER 웹 사이트의 Footer부분 구현 컴포넌트입니다.'}
          {'Material UI를 활용했고 css부분을 아주 신경 썼습니다 ....'}
        </Typography>
        <Typography variant="body1">footer</Typography>
      </Container> */}
      <footer className={classes.footer}>
        {/* <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container> */}
        <ul className={classes.ul}>
          <div className={classes.left}>
            <p className={classes.call}>
              1599-5319
            </p>
            <p>
              평일 10:00 - 18:00 <br />
              (점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)
            </p>
            {/* <div className={classes.bar}>
              <Button /> <Button />
            </div> */}
            <Button variant="contained" size="medium" color="secondary" className={classes.margin}>
              <img src="https://assets.cdn.soomgo.com/icons/icon-download-appstore.svg" />APP STORE
            </Button>
            <Button variant="contained" size="medium" color="secondary" className={classes.margin}>
              <img src="https://assets.cdn.soomgo.com/icons/icon-download-appstore.svg" />PLAY STORE
            </Button>
          </div>

          <li className={classes.li}>
            <span className={classes.span}>마스터소개</span>
            <div>
              <a className={classes.href} href="#회사소개">회사소개</a><br />
              <a className={classes.href} href="#채용안내">채용안내</a><br />
            </div>
          </li>

          <li className={classes.li}>
            <span className={classes.span}>고객안내</span>
            <div>
              <a className={classes.href} href="#이용안내">이용안내</a><br />
              <a className={classes.href} href="#안전정책">안전정책</a><br />
              <a className={classes.href} href="#예상금액">예상금액</a><br />
              <a className={classes.href} href="#마스터찾기">마스터찾기</a><br />
              <a className={classes.href} href="#더마스터보증">더마스터보증</a><br />
              <a className={classes.href} href="#마스터에게묻다">마스터에게묻다</a><br />
            </div>
          </li>

          <li className={classes.li}>
            <span className={classes.span}>마스터안내</span>
            <div>
              <a className={classes.href} href="#이용안내">이용안내</a><br />
              <a className={classes.href} href="#마스터가이드">마스터가이드</a><br />
              <a className={classes.href} href="#마스터가입">마스터가입</a><br />
              <a className={classes.href} href="#마스터센터">마스터센터</a><br />
            </div>
          </li>

          <li className={classes.li}>
            <span className={classes.span}>고객센터</span>
            <div>
              <a className={classes.href} href="#공지사항">공지사항</a><br />
              <a className={classes.href} href="#자주묻는질문">자주묻는질문</a><br />
            </div>
          </li>
        </ul>

        <div>
          <span>
            <p className={classes.p_b}>(주)브레이브모바일은 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한<br />
              의무와 책임은 거래당사자에게 있습니다.</p>
          </span>
        </div>

        <ul className={classes.ul_b}>
          <li className={classes.bottom_left}>
            상호명:(주)브레이브모바일 · 대표이사:KIM ROBIN H · 개인정보책임관리자:김태우 · 주소:서울특별시 강남구 테헤란로 415, L7 강남타워 5층
            <a className={classes.img_1} href="#facebook"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-facebook.svg" alt="마스터 페이스북" /></a>
            <a className={classes.img} href="#instagram"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-instagram.svg" alt="마스터 인스타그램" /></a>
            <a className={classes.img} href="#blog"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-naverblog.svg" alt="마스터 블로그" /></a>
            <a className={classes.img} href="#post"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-naverpost.svg" alt="마스터 포스트" /></a>
            <a className={classes.img} href="#news"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-tistory.svg" alt="마스터 스토리" /></a>
          </li>
          <li>
            사업자등록번호:120-88-22325 · 통신판매업신고증:제 2015-서울강남-00567 호 · 직업정보제공사업 신고번호:서울청 제 2019-21호
          </li>
          <li>
            고객센터:1599-5319 · 이메일:support@soomgo.com
          </li>
          <li>
            Copyright ©Brave Mobile Inc. All Rights Reserved.
          </li>

        </ul>
      </footer>
    </div>
  );
}