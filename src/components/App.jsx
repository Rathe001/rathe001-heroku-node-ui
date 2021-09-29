import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import uiActions from 'actions/uiActions';
import CubicLevel from 'components/CubicLevel';

const useStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      imageRendering: 'pixelated',
    },
    body: {
      background: '#333',
      color: 'green',
      fontFamily: 'Verdana',
      fontSize: 14,
      margin: 0,
      overflowY: 'hidden',
      padding: 0,
      perspective: 450,
    },
  },
  app: {
    margin: '0 auto',
  },
  viewport: {
    height: 500,
    margin: '0 auto',
    overflow: 'hidden',
    width: 500,

  },
});

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.init());
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes.viewport}>
        <CubicLevel />
      </div>
    </div>
  );
};

export default App;
