import {
    GET_POSTS_FULFILLED,
    GET_POSTS_PENDING,
    GET_POSTS_REJECTED,
  } from "../constants/postConstants";
  
  const initState = {
    posts: [],
    isLoading: false,
    error: null,
  };
  
  const postReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_POSTS_PENDING: {
        return { ...state, isLoading: true };
      }
  
      case GET_POSTS_FULFILLED: {
        return { ...state, posts: action.payload, isLoading: false };
      }
  
      case GET_POSTS_REJECTED: {
        return { ...state, isLoading: false, error: action.error };
      }
      default:
        return state;
    }
  };
  
  export default postReducer;
  