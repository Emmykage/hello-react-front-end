const GET_GREETINGS = 'greeting/greetings/GET_GREETINGS';

export default function greetingReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}

const getGreeting = () => async (dispatch) => {
  const response = await fetch('/api/v1/greetings');
  const greetings = await response.text();
  dispatch({
    type: GET_GREETINGS,
    payload: greetings,
  });
};
export { getGreeting };
