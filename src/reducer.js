export const initialState = {
  theme: localStorage.getItem("theme"),
};

console.log("theme", initialState.theme);
const reducer = (state, action) => {
  console.log("action ", action.theme);
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};

export default reducer;
