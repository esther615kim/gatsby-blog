// import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";



// const tutorialSteps = [
//   {
//     label: "고객의 요청서가 도착해요",
//     imgPath: "https://i.ibb.co/smxnPXP/requstform-p1.png",
//   },
//   {
//     label: "마스터의 견적을 발송하세요",
//     imgPath: "https://i.ibb.co/F5NFCX7/requstform-p2.png",
//   },
//   {
//     label: "고객과 연락하세요",
//     imgPath: "https://i.ibb.co/nPQ3Sth/requstform-p3.png",
//   },
//   {
//     label: "거래가 완료되었어요",
//     imgPath: "https://i.ibb.co/0K8xBPn/requstform-p4.png",
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 300,
//     flexGrow: 1,
//     marginLeft: 1200,
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 200,
//     maxWidth: 300,
//     overflow: "hidden",
//     display: "block",
//     width: "100%",
//   },
// }));



// const RequestForm = () => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = tutorialSteps.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };


//   return (
//     <div className={classes.root}> 
//       <Paper square elevation={0} className={classes.header}>
//         <Typography>{tutorialSteps[activeStep].label}</Typography>
//       </Paper>
//       <img
//         className={classes.img}
//         src={tutorialSteps[activeStep].imgPath}
//         alt={tutorialSteps[activeStep].label}
//       />
//       <MobileStepper
//         steps={maxSteps}
//         position='static'
//         variant='text'
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size='small'
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </div>
//   );
// };

// export default RequestForm;


// // import Slider from "react-styled-carousel";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { CallMissedSharp } from "@material-ui/icons";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0px',
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://assets.cdn.soomgo.com/images/provider-info/receive-request.png"/>
            <h2>고객의 요청서가 도착해요</h2>
            <a>전문 활동 분야를 등록하면<br/>고객이 도움이 필요한 서비스에 대해<br/>작성한 요청서가 도착해요</a>
          </div>
          <div>
            <img src="https://assets.cdn.soomgo.com/images/provider-info/send-quote.png"/>
            <h2>마스터님의 견적을 발송하세요</h2>
            <a>답변 보낼 고객을 선택하고<br/>견적을 보낸 후 고용 기회를 잡아보세요</a>
          </div>
          <div>
            <img src="https://assets.cdn.soomgo.com/images/provider-info/contact-user.png"/>
            <h2>고객과 연락하세요</h2>
            <a>견적을 보낸 고객과<br/>채팅 및 전화(안심번호)를 통해<br/>의뢰를 진행하세요</a>
          </div>
          <div>
            <img src="https://assets.cdn.soomgo.com/images/provider-info/handshake.png"/>
            <h2>거래가 완료되었어요</h2>
            <a>거래를 통해 서로 도움을<br/>주고 받고 이제 나도 마스터!</a>
          </div>
        </Slider>
      </div>
    );
  }
}