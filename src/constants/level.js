/* eslint-disable no-unused-vars */
const disabled = {
  enabled: false,
};

// 5x5x5
export const map = {
  112: disabled,
  12: disabled,
  37: disabled,
  62: disabled,
  87: disabled,
};

/* // 10x10x10
export const map = {
  122: disabled,
  22: disabled,
  222: disabled,
  322: disabled,
  422: disabled,
  522: disabled,
  622: disabled,
  722: disabled,
  822: disabled,
  922: disabled,
};
*/

let cubeId = -1;
export const layout = [...new Array(5)] // z
  .map((xRow, x) => [...new Array(5)] // y
    .map((yRow, y) => [...new Array(5)] // x
      .map((zRow, z) => {
        cubeId += 1;
        return cubeId;
      })));
