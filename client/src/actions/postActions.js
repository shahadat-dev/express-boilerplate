import axios from 'axios'

import { ADD_POST, GET_ERRORS, POST_LOADING } from './types'

// Add Post
export const addPost = postData => dispatch => {
  dispatch(setPostLoading())

  axios
    .post('/api/posts', postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  }
}
