export const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  console.log(">>>>", action);
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
