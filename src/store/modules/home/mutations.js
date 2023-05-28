export default {
  setWeather(state, payload) {
    // console.log(state, payload);
    state.weather = payload;
    // console.log(payload.name, payload.weather);
    // console.log(state.weather);
  },
  setRate(state, payload) {
    state.dailyRate = payload;
  },
};
