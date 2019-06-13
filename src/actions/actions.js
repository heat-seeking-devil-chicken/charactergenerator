import * as types from "../constants/actionTypes";
import axios from 'axios';

export const verifyLogin = (username, password) => (dispatch, getState) => {
  const credential = {username: username, password: password};
  axios.post('/login', credential)
  .then(res => {
    if(res.status === 200){
      return dispatch(
        passVerification({
            type: types.PASSVERIFICATION,
            payload: res.data
        })
      );
    }
  }).catch(err => {
    console.log(err)
  })
  ;
};

export const passVerification = payload => {
return(
    {
      type: types.PASSVERIFICATION,
      payload: payload
    }
  )
};

// export const verifyLogin = (username, password) => (dispatch,getState) => {
//   console.log('LOGIN SENT TO VERIFYLOGIN')
//   console.log('THIS IS USERNAME', username)
//   console.log('THIS IS PASSWORD', password)
//   axios({
//     method: 'post',
//     url: '/api/testsignin', //test api route
//     data: { 'username': username, 'password': password }, //must send body of data in this format
//   })
//     .then(response => {
//         console.log('verifyLogin response', response.data)
//         // return res.json()
//         return dispatch(
//             postUsernameAndPasswordSuccess({
//                 type: types.POST_USERNAME_AND_PASSWORD_SUCCESS,
//                 payload: response.data
//             })
//         )
//     })
//     //If we receive an error from the server (i.e. incorrect username or password), we dispatch action creator postUsernameAndPasswordFailure
//     .catch(
//       error => dispatch(
//         postUsernameAndPasswordFailure({
//           type: types.POST_USERNAME_AND_PASSWORD_FAILURE,
//           payload: error
//         })
//       )
//     )
// }



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
