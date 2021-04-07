import { SEARCH_MOVIES } from "../actions/types";

const initalState = {
   data: [],
};

export default function (state = initalState, action) {
   const { type, payload } = action;

   switch (type) {
      case SEARCH_MOVIES:
         console.log(payload);
         return {
            ...state,
            data: payload,
         };

      default:
         return state;
   }
}
