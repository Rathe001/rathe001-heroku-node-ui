import React from 'react';
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
  const classes = useStyles();
  const dispatch = useDispatch();

  const send = () => {
    dispatch(
      apiActions.sendInput({
        message: 'this is my test thing',
      }),
    );
  };

  return (
    <input
      className={classes.Input}
      type="text"
      onChange={() => {}}
      onKeyPress={(e) => e.key === 'Enter' && send()}
      value=""
      placeholder="Enter message"
    />
  );
};

export default Input;
