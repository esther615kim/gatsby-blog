// import * as React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  Button,
  OutlinedInput,
  InputAdornment,
  FormControl,
  Link,
  Divider,
  Container,
  IconButton,
  Typography,
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
//#F79489 버튼색


const useStyles = makeStyles({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop: "4rem",
    borderRadius: 5,
    width: 380,
    height: 680,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  },
  formControl: {
    width: "80%"
  },
  btnBig: {
    width: "80%", margin: 4, padding: 1.5
  },
  title: {
    marginLeft: 45,
    marginBottom: 5,
    textAlign: "left"
  },
})

export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Paper
        className={classes.container}
      >
        <Typography align="center" mb={5} variant="h4">
          LOGIN
        </Typography>

        <FormControl m={2} className={classes.formControl} >
          <Typography variant="subtitle1" gutterBottom>
            Email
          </Typography>
          <OutlinedInput
            id="outlined-adornment-password"
            type="email"
            label="email"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography variant="subtitle1" gutterBottom>
            Password
          </Typography>
          <OutlinedInput
            id="outlined-adornment-password"
            type="password"
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  {<Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button className={classes.btnBig} variant="contained">
          <Typography color="common.white" variant="h6">
            Login
          </Typography>
        </Button>

        <Button sx={{ width: 280 }} variant="text">
          <Typography gutterButtom color="grey.700" variant="subtitle1">
            Reset password
          </Typography>
        </Button>

        <Divider variant="middle" />

        <Button
          className={classes.btnBig}
          sx={{ background: '#f9e000' }}
          variant="contained"
        >
          <Typography color="common.black" variant="h6">Kakao Login</Typography>
        </Button>

        <Typography pt={2} color="common.black" variant="button">Not registered yet?</Typography>

      </Paper>
    </div>
  );
};
