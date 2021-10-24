import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    section: {
        display: 'block',
        margin: '0px auto',
        // backgroundColor: '#fa9682',
    },
    h4_4: {
        textAlign: 'center',
        marginBottom: '1.875rem',
        fontSize: '1.375rem',
    },
    section_4: {
        display: 'flex',
    },
    num: {
        color: '#fa9682',
        fontSize: '1.25rem',
    },
    section__4: {
        paddingLeft: '15px',
        paddingRight: '15px',
    },
    img_4: {
        display: 'block',
        margin: '0px auto',
    },
    h5: {
        textAlign: 'center',
        fontSize: '1rem',
    },
    p_4: {
        textAlign: 'center',
        lineHeight: '1.43',
        color: '#737373',
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <section>
                <div>
                    <form>
                        <div>
                            <div>완료 시 평균 4개 견적 도착</div>
                        </div>
                        <div>

                        </div>
                        <div>
                            <button type="button" class="step-btn color-teal"> 다음 </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h4>

                    </h4>
                    <p>

                    </p>
                    <h4>

                    </h4>
                    <p>

                    </p>
                </div>
            </section>
            <section className={classes.section}>
                <h4 className={classes.h4_4}>
                    요청서를 보낸 후 어떻게 진행되는지 알려드릴게요
                </h4>
                <div className={classes.section_4}>
                    <div className={classes.section__4}>
                        <div className={classes.num}>
                            1
                        </div>
                        <img className={classes.img_4} width="92px" height="68" src="https://i.ibb.co/10N132P/1.png" />
                        <div>
                            <h5 className={classes.h5}>요청서 작성</h5>
                            <p className={classes.p_4}>도움이 필요한 서비스의 요청서를 상<br />세히 작성하고 고수를 소개받으세요</p>
                        </div>
                    </div>

                    <div className={classes.section__4}>
                        <div className={classes.num}>
                            2
                        </div>
                        <img className={classes.img_4} width="92px" height="68" src="https://i.ibb.co/hRBnMhm/2.png" />
                        <div>
                            <h5 className={classes.h5}>견적 비교</h5>
                            <p className={classes.p_4}>최대 48시간 이내에 고수들이 제공하<br />는 견적을 받아보고 꼼꼼히 비교해 보 <br />세요</p>
                        </div>
                    </div>

                    <div className={classes.section__4}>
                        <div className={classes.num}>
                            3
                        </div>
                        <img className={classes.img_4} width="92px" height="68" src="https://i.ibb.co/7XN8bQL/3.png" />
                        <div>
                            <h5 className={classes.h5}>연락 및 거래</h5>
                            <p className={classes.p_4}>원하는 고수와 채팅 및 전화(안심번<br />호)를 통해 거래하세요</p>
                        </div>
                    </div>

                    <div className={classes.section__4}>
                        <div className={classes.num}>
                            4
                        </div>
                        <img className={classes.img_4} width="92px" height="68" src="https://i.ibb.co/bFvZ1ff/4.png" />
                        <div>
                            <h5 className={classes.h5}>리뷰 쓰기</h5>
                            <p className={classes.p_4}>거래가 잘 마무리 되었다면 서비스<br />에 대한 리뷰를 남겨주세요</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}