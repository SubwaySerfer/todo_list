export default {
  setWeather(state, payload) {
    state.weather = payload;
  },

  setRate(state, payload) {
    payload.forEach((el) => {
      if (el.Nominal == 10) {
        el.Value = (el.Value / 10).toFixed(4);
        el.Previous = (el.Previous / 10).toFixed(4);
      }
    });
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
