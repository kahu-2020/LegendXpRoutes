import { SET_XP } from "../actions";
const initialState = {
    ancxp: 0,
    medxp: 0,
    indusxp:0,
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
