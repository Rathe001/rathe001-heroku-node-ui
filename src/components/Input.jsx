import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import apiActions from 'core/api/actions';

const useStyles = createUseStyles({
  Input: {
    background: '#111111',
    border: '1px solid #666666',
    bottom: 0,
    color: 'green',
    fontFamily: 'Verdana',
    fontSize: 16,
    padding: 10,
    position: 'fixed',
    width: '100%',
  },
});

const Input = () => {
  const [input, setInput] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  const send = (message) =>
    dispatch(
      apiActions.sendInput({
        message,
      }),
    );

  return (
    <input
      className={classes.Input}
      type="text"
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          send(e.target.value);
          setInput('');
        }
      }}
      value={input}
      placeholder="Enter message"
    />
  );
};

export default Input;
