import { SET_GAINED } from "../actions";
const initialState = 0
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAINED:
      return action.xp;
    default:
      return state;
  }
};
export default Reducer;
