import axios from 'axios';

export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

// Loading state
export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = response => ({
  type: FETCH_POSTS_SUCCESS,
  payload: response
})

export const fetchPostsError = error => ({
    type: FETCH_POSTS_ERROR,
    payload: error
});

export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    const request = axios.get('https://cdn.contentful.com/spaces/liw71xf5jo1c/entries?access_token=15656085d39fc38835069bf8727270d8d6cf8b7c91a3c611c277a1d536e5a927&content_type=reactTutorialPost');
    return request.then(
      response => dispatch(fetchPostsSuccess(response)),
      error => dispatch(fetchPostsError(error))
    );
  }
}
