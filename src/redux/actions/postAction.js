import axios from "axios";
import {
  GET_POSTS_FULFILLED,
  GET_POSTS_PENDING,
  GET_POSTS_REJECTED,
} from "../constants/postConstants";

export const getPosts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: GET_POSTS_PENDING });
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: GET_POSTS_FULFILLED, payload: reponse.data });
    } catch (error) {
      // error.response.data là format của axios
      dispatch({ type: GET_POSTS_REJECTED, error: error.response.data });
    }
  };
};
