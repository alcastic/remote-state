import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  const [nickName, setNickName] = useState('')
  const [name, setName] = useState('')

  const handleOnChangeNickName = event => {
    setNickName(event.target.value)
  };

  const handleOnChangeName = event => {
      setName(event.target.value)
  };

  const handleOnClick = event => {
    console.log(nickName + " - " + name)
  };

  return (
    <div className={classes.root}>
      <TextField id="standard-basic" onChange={handleOnChangeNickName} label="Nick" />
      <TextField id="standard-basic" onChange={handleOnChangeName} label="Name" />
      <Button variant="contained" onClick={handleOnClick} color="primary" href="#contained-buttons">Enter</Button>
    </div>
  );
}
