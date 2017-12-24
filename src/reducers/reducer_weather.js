import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Don't ever manipulate state direclty! We return a completely new instance of state.
      // So never use state.push(action.payload.data)
      return [ action.payload.data, ...state ];
      break;
  
    default:
      return state;
  }
}
