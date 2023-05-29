export default {
  weather(state) {
    return state.weather;
  },
  valute(state) {
    return state.dailyRate;
  },
  hasValute(state) {
    return state.dailyRate != null;
  },
  currentValute(state) {
    return state.currentValute;
  },
  currentValuteIdx(state) {
    return state.currentValuteIdx;
  },
};
