import axios from "axios";

import { SEARCH_MOVIES } from "./types";

export const searchMovies = (movie) => async (dispatch) => {
   try {
      const res = await axios.get(`/api/search/${movie}`);
      dispatch({ type: SEARCH_MOVIES, payload: res.data });
   } catch (error) {
      console.log(error);
   }
};
