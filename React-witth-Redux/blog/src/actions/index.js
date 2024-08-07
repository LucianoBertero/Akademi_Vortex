import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// };

export const fetchUser = _.memoize(function (id) {
  return async function (dispatch) {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
});
