export default {
  addRequest(state, payload) {
    // state.requestsList.push(payload);
    console.log(state, payload, 'create');
    // state.commit('requests/validateRequest');
  },
  validateRequest(state, payload) {
    // console.log(state, 'validate', payload);
    console.log(payload);
    state.isValidRequest = true;
  },
};
