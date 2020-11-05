const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "DEC") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  } else if (action.type === "REMOVE") {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  } else return state;
};

export default reducer;
