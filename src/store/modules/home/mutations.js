export default {
  setWeather(state, payload) {
    state.weather = payload;
  },

  setRate(state, payload) {
    state.dailyRate = payload;
  },
  nextValute(state) {
    if (state.currentValuteIdx >= state.dailyRate.length - 1) {
      state.currentValuteIdx = 0;
    } else {
      state.currentValuteIdx++;
    }
    state.currentValute = state.dailyRate[state.currentValuteIdx];
  },
  prevValute(state) {
    if (state.currentValuteIdx <= 0) {
      state.currentValuteIdx = state.dailyRate.length - 1;
    } else {
      state.currentValuteIdx--;
    }
    state.currentValute = state.dailyRate[state.currentValuteIdx];
  },
  initCurrentValute(state) {
    state.currentValute = state.dailyRate[0];
  },
};
