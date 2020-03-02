import { SET_XP } from "../actions";
const initialState = {
    ancient: 0,
    medieval: 0,
    industrial:0,
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_XP:
      return action.xp;
    default:
      return state;
  }
};
export default Reducer;
