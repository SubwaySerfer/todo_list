export default {
  async getWeather(context) {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=antalya&lang=eng&appid=b36d6f3b2c0483838333724905825a12&units=metric';

    try {
      const response = await fetch(url);
      const result = await response.json();
      context.commit('setWeather', result);
    } catch (error) {
      console.error(error);
    }
  },
  async getDailyRate(context) {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    try {
      const response = await fetch(url);
      const result = await response.json();
      let newResults = [
        result.Valute.USD,
        result.Valute.EUR,
        result.Valute.TRY,
      ];
      context.commit('setRate', newResults);
      if (context.currentValute == null) {
        context.commit('initCurrentValute');
      }
    } catch (error) {
      console.log(error);
    }
  },
};
