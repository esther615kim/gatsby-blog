import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import ResizeObserver from "resize-observer-polyfill";
// import { boxSizing, lineHeight } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        marginLeft: '22%',
        width: '40%',
    },
    perfect: {
        fontSize: '40px',
    },
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
    },
    con: {
        fontSize: '16px',
        // maxHeight: '14px',
        // color: '#fa9682',
        lineHeight: '25px',
    },
    // con_close: {
    //     overflow: 'hidden',
    //     textOverflow: 'ellipsis',
    //     display: '-webkit-box',
    //     WebkitBoxOrient: 'vertical',
    // },
    date: {
        color: '#B5B5B5',
        fontSize: '14px',
    },
    more: {
        display: 'flex',
        justifyContent: 'center',
    },
}));




export default function Review() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [closed, setClosed] = useState(false);

    const handleMoreBtn = () => {
        setClosed(!closed);
    };

    return (
        <div className={classes.root}>
            <h2>리뷰</h2>
            <div className={classes.review_list}>
                <div>
                    <Box
                        sx={{
                            '& > legend': { mt: 5 },
                        }}
                    >
                        <Typography component="legend"></Typography>
                        <p className={classes.perfect}>5.0&nbsp;
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </p>
                    </Box>
                </div>

                <div>
                    <ul className={classes.ul}>
                        <li>
                            <div>
                                <div>
                                    <Typography component="legend"></Typography>
                                    <p><strong>가**&nbsp;</strong>
                                        <Rating name="read-only" size="small" value={value} readOnly />
                                        <span className={classes.date}>&nbsp;2021.09.18</span></p>
                                </div>
                                <div>
                                    <p className={classes.con}>갑작스럽게 발견한 돈벌레때문에 집에 못들어가고 이 업체 찾아봤는데 매우 만족합니다 ! 약 한시간동안 꼼꼼히 봐주시고 예방책 알려주셔서 다음에 또 이용하게 될 것 같습니다 =)</p>
                                    {/* <p className={closed ? "" : "con_close"}>{DataTransfer.introduction}</p> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div>
                                    <Typography component="legend"></Typography>
                                    <p><strong>추**&nbsp;</strong>
                                        <Rating name="read-only" size="small" value={value} readOnly />
                                        <span className={classes.date}>&nbsp;2021.09.18</span></p>
                                </div>
                                <div>
                                    <p className={classes.con}>엄청 친절하시고 설명도 잘해주셨어요! 만족합니다!!</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div>
                                    <Typography component="legend"></Typography>
                                    <p><strong>박**&nbsp;</strong>
                                        <Rating name="read-only" size="small" value={value} readOnly />
                                        <span className={classes.date}>&nbsp;2021.09.17</span></p>
                                </div>
                                <div>
                                    <p className={classes.con}>어제저녁에요청했는데<br />오늘아침에 방문해주셨습니다!<br />빠른방문감사드립니다.<br />바퀴가 없어졌으면 좋겠네요!</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div>
                                    <Typography component="legend"></Typography>
                                    <p><strong>이**&nbsp;</strong>
                                        <Rating name="read-only" size="small" value={value} readOnly />
                                        <span className={classes.date}>&nbsp;2021.09.17</span></p>
                                </div>
                                <div>
                                    <p className={classes.con}>사실 이전에 세*코 무료진단상담을 받아봤거든요, 두 분이 오셔서 부엌만 봐주고 가셨고 6개월엔 2**,***원... 자취생에겐 좀 부담스러운 가격이기도 했고 무료진단이라 그런지 아주 자세히는 안 봐주시더라구요.
                                        바퀴 많기로 유명한 동네라(...) 시청이나 도청은 방역도 안 해주나?! 하고 빡쳐서 네이버에 **동 방역이라고 검색했다가 숨고 통해서 해방플러스를 알게 됐는데 견적 많이 받아봤지만 고용 수에서부터 압도적이고 리뷰도 정말 99.9% 좋은 말만 있어서 상담드리고 급여일 이후인 어제(16일) 방문해주셨습니다.
                                        오시자마자 제일 먼저 부엌부터 살펴봐주셨는데 세*코나 부동산 방역업체에선 말해주지 않은 싱크대 밑 하수도 배관이 거의 열려있다시피 된걸 보여주시면서 테이핑 작업 해주셨고 현관문도 틈이 커서 외부에서 들어오기 쉽다며 문틈도 막아주셨어요. 생각도 못했네요, 정말로...
                                        8~10평 정도 되는 원룸인데 건물이 오래되어 그런지 바퀴가 정말 많고 이 집은 좀 심각하다, 라는 말을 세*코에서 들었는데요 해방플러스 기사님(?)(대표님?)은 그렇게 심한 편은 아니라고 하셨어요. 약도 2개월 정도는 간다고 하시네요, 불과 1달 전인 약이 굳어서 바퀴가 안 먹는다는 말을 들었었는데 아니라는 말을 듣고 허허...ㅠ
                                        바퀴 좋아하는 분들이 있겠나 싶긴 하지만요.. 정말 싫어하고 시체도 잘 못 치우거든요 한마리 시체 치우는데만 30분을 넘게 빗자루랑 파리채 들고 왔다갔다 할 정도로요, 그래서 정기관리는 어떻게 진행되는지 먼저 여쭤봤는데 제가 방역을 잘하고 있었고 나올만한 구멍은 막아놨고 관리만 잘하면 정기관리는 안 받아도 될 것 같다고 해주셨어요.
                                        모니터링 트랩 여기저기 놔주시고 베란다 방충망은 뭘 쓰면 좋은지도 알려주시고 뭔가 믿음이 확 간달까요 리뷰가 좋은 이유를 알 것 같았어요.
                                        사실 오늘도 아침에 방황하는 놈 하나를 봐서 파리채로 후려쳤는데 그새 도망갔더라구요, 근데 전같았으면 내내 신경쓰이고 그랬을걸 지금은 딱히...?
                                        오늘 퇴근하면 알려주신대로 관리 할거예요!</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div>
                                    <Typography component="legend"></Typography>
                                    <p><strong>박**&nbsp;</strong>
                                        <Rating name="read-only" size="small" value={value} readOnly />
                                        <span className={classes.date}>&nbsp;2021.09.16</span></p>
                                </div>
                                <div>
                                    <p className={classes.con}>좀벌레 때문에 스트레스 많이 받아서
                                        늦은 시간에 연락 드렸는데 날짜도 바로 잡아주시고
                                        일이 늦게 끝나서 밤 10시에 예약 했는데 일찍 와주시고 죄송하고 너무 감사합니다
                                        꼼꼼히 봐주시고 살충제도 뿌려주시고
                                        주기적으로 이용할게요 ^^</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.more}>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined">리뷰 더보기</Button>
                </Stack>
            </div>
        </div>
    );
}