import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import apiActions from 'core/api/actions';
import useWebSockets from 'hooks/useWebSockets';

const useStyles = createUseStyles({});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const client = useWebSockets();

  const onClick = () =>
    dispatch(
      apiActions.login(client, {
        password,
        username,
      }),
    );

  return (
    <form>
      <fieldset>
        <input
          className={classes.Input}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
        />
        <input
          className={classes.Input}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button type="button" onClick={onClick}>
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Login;
