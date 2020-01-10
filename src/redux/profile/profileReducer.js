const initialState = { user:"6035512080"};

export default function(state = initialState, action) {
    switch (action.type) {
      case "add_info":
        return { counter: state.counter + 1 };
      default:
        return state;
    }
  }