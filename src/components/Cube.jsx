import { useSelector, shallowEqual } from 'react-redux';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const wall1 = 'https://static.turbosquid.com/Preview/2014/08/01__18_23_50/Imamyj1m.bmp188802a2-cf2b-448e-b3b3-5dad1d056b17Larger.jpg';
const ceiling1 = 'https://cdnb.artstation.com/p/assets/images/images/003/956/219/large/daniel-rodriguez-scifi-panel-bitmap.jpg?1478886414';
const floor1 = 'https://i.pinimg.com/236x/b7/cb/d7/b7cbd7ff5d0fb97a4450820fbee7f2f6--sci-fi-panel-noctis.jpg';

const stone = 'https://previews.123rf.com/images/tashatuvango/tashatuvango1406/tashatuvango140600217/29173879-gray-old-stone-road-surface-seamless-tileable-texture-.jpg';

const useStyles = createUseStyles({
  back: {
    transform: 'translateZ(-100px)',
  },
  bottom: {
    transform: 'rotateX(90deg)',
    transformOrigin: 'bottom',
  },
  cube: {
    bottom: 0,
    height: 100,
    left: 0,
    position: 'absolute',
    transformStyle: 'preserve-3d',
    width: 100,
  },
  debug: {
    color: '#fff',
    fontSize: '2em',
    fontWeight: 700,
    position: 'absolute',
    textAlign: 'center',
    top: '35%',
    width: '100%',
  },
  face: {
    background: 'url(/rathe001-heroku-node-ui/textures/grid.jpeg)',
    backgroundSize: 'contain',
    height: 100,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 100,
  },
  front: {
    zIndex: 10,
  },
  hidden: {
    visibility: 'hidden',
  },
  left: {
    transform: 'rotateY(90deg)',
    transformOrigin: 'left',
  },
  right: {
    transform: 'rotateY(-90deg)',
    transformOrigin: 'right',
  },
  top: {
    transform: 'rotateX(-90deg)',
    transformOrigin: 'top',
  },
});

const Cube = ({
  cubeId, x, y, z,
}) => {
  const cube = useSelector((state) => state?.level?.map?.[cubeId] ?? {}, shallowEqual);
  const cubeSize = useSelector((state) => state.ui.cubeSize);

  const classes = useStyles({
    cubeId, cubeSize, x, y, z,
  });

  return cube.enabled !== false && (
    <div
      className={classes.cube}
      data-id={cubeId}
      style={{
        transform: `translate3d(${x * 100}px, ${y * -100}px, -${z * 100}px)`,
      }}
    >
      <div className={classnames(
        classes.face,
        classes.front,
      )}
      >
        <span className={classes.debug}>{cubeId}</span>

      </div>
      <div className={classnames(
        classes.face,
        classes.back,
      )}
      />
      <div className={classnames(
        classes.face,
        classes.top,
      )}
      />
      <div className={classnames(
        classes.face,
        classes.bottom,
      )}
      />
      <div className={classnames(
        classes.face,
        classes.left,
      )}
      />
      <div className={classnames(
        classes.face,
        classes.right,
      )}
      />
    </div>
  );
};

Cube.propTypes = {
  cubeId: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
};

export default Cube;
