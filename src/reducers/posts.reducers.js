import {postsActionTypes} from "../constants/ActionTypes";

const initialState = {
  posts: []
};

const posts = (state = initialState, action) => {
  switch (action.type) {
      case postsActionTypes.GET_POSTS:
          return {
              ...state,
              posts: action.posts
          }
  }

  return state;
};

export default posts;