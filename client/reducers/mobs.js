import { SET_MOBS } from "../actions";
const initialState = []
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBS:
      return action.mobs;
    default:
      return state;
  }
};
export default Reducer;
