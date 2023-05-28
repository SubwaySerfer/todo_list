export default {
  setWeather(state, payload) {
    state.weather = payload;
  },
  setRate(state, payload) {
    state.dailyRate = payload;
    console.log(payload);
  },
};
