export default {
  weather(state) {
    return state.weather;
  },
  hasWeather(state) {
    return state.weather != null;
  },
  valute(state) {
    return state.dailyRate;
  },
  hasValute(state) {
    return state.dailyRate != null;
  },
};
