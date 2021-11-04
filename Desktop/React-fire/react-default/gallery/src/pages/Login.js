import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from './cookie';

const Login = (props) => {

  function handleLogin() {
    setCookie("user_id", "chuchu", 10);
    setCookie("user_pwd", "1111", 10);
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          Log in
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="ID"
            placeholder="your id"
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="PASSWORD"
            placeholder="your password."
          // _onChange={() => {
          // }}
          />
        </Grid>

        <Button
          text="Login" _onClick={handleLogin()}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
