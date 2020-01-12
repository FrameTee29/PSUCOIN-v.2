import { INCREMENT, DECREMENT, RESET } from "../actions/types";

const initialState = { Frame: 10 };

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { Frame: state.Frame + 1 };
    case DECREMENT:
      return { Frame: state.Frame - 1 };
    case RESET:
      return { Frame: 0 };
    default:
      return state;
  }
}
