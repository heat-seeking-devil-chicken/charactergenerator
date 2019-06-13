import * as types from "../constants/actionTypes";

export const homeUpdate = payload => ({
  type: types.HOMEUPDATE,
  payload: payload
});

export const specialtyUpdate = payload => ({
  type: types.SPECIALTYUPDATE,
  payload: payload
});

export const stereotypeUpdate = payload => ({
  type: types.STEREOTYPEUPDATE,
  payload: payload
});
