export default {
  async getWeather(context) {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=antalya&lang=eng&appid=b36d6f3b2c0483838333724905825a12&units=metric';

    try {
      const response = await fetch(url);
      const result = await response.json();
      // console.log(result, context);
      context.commit('setWeather', result);
    } catch (error) {
      console.error(error);
    }
  },
};