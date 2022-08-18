import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes'

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchUserRequest, fetchUserSuccess, fetchUserFailure }
