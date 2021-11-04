import React, { useState, useEffect } from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from '../pages/cookie';

const Header = (props) => {
    const [is_login, setIsLogin] = useState(false);// 로긴확인 

    // 쿠키확인용 => 겟쿠키 가져옴
    useEffect(() => {
        let cookie = getCookie("user_id");
        console.log(cookie);

        cookie ? setIsLogin(true) : setIsLogin(false);
    }, [is_login])
    if (is_login) {
        return (
            <React.Fragment>
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>gallery</Text>
                    </Grid>

                    <Grid is_flex>
                        <Button text="mypage"></Button>
                        <Button
                            text="logout"
                            onClick={() => {
                                deleteCookie("user_id");
                                setIsLogin(false);
                                console.log("logout!");
                            }}>
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>gallery</Text>
                </Grid>

                <Grid is_flex>
                    <Button text="login"></Button>
                    <Button text="singup"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {}

export default Header;