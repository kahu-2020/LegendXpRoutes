import { SET_ROUTEMOBS } from "../actions";
const initialState = []
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTEMOBS:
      return action.mobs;
    default:
      return state;
  }
};
export default Reducer;
