import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from '../actions/index';

const INITIAL_STATE = { all: [], loading: false, error: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS_BEGIN:
          return {
            ...state,
            loading: true
          };

        case FETCH_POSTS_SUCCESS:
          return {
            ...state,
            loading: false,
            all: action.payload.data.items
          };

        case FETCH_POSTS_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload.error
          };

        default:
            return state;
    }
}
