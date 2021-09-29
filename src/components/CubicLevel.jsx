import { useSelector, shallowEqual } from 'react-redux';
import { createUseStyles } from 'react-jss';
import Cube from 'components/Cube';

const useStyles = createUseStyles({
  cubicLevel: {
    height: 500,
    transform: 'translateZ(360px)',
    transformStyle: 'preserve-3d',
    width: 500,
  },
});

const CubicLevel = () => {
  const classes = useStyles();
  const levelLayout = useSelector((state) => state?.level?.layout, shallowEqual) || [];

  return (
    <div className={classes.cubicLevel}>
      {levelLayout
        .map((zAxis, z) => zAxis
          .map((yAxis, y) => yAxis
            .map((xAxis, x) => (
              <Cube x={x} y={y} z={z} key={xAxis} cubeId={xAxis} />
            ))))}
    </div>
  );
};

export default CubicLevel;
