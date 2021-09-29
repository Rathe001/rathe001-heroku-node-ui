import { layout, map } from 'constants/level';

export const initialState = {
  level: {
    layout,
    map,
  },
  player: {
    x: 0,
    y: 0,
    z: 0,
  },
  ui: {
    cubeSize: 100,
    isLoading: false,
  },
};

export default initialState;
