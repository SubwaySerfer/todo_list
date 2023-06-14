<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <div class="container" v-else>
    <h2>{{ city }}</h2>
    <span class="weather-info">{{ temperature }}°C</span>
    <p class="weather-info">{{ weatherDescription }}</p>
    <p class="weather-info">Wind speed: {{ windSpeed }} m/s</p>
    <p class="weather-info">humidity: {{ humidity }}%</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      city: '',
      temperature: '',
      weatherDescription: '',
      windSpeed: '',
      humidity: '',
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters('home', ['weather']),
  },
  created() {
    if (this.$store.getters['home/weather'] == null) {
      this.$store.dispatch('home/getWeather');
    } else {
      this.getWeatherInfo();
    }
  },
  //TODO: add weather icons

  watch: {
    weather() {
      this.getWeatherInfo();
    },
  },
  methods: {
    getWeatherInfo() {
      this.city = this.weather.name;
      this.temperature = Math.round(this.weather.main.temp);
      this.weatherDescription = this.weather.weather[0].description;
      this.windSpeed = this.weather.wind.speed;
      this.humidity = this.weather.main.humidity;
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.container {
  width: auto;
  height: min-content;
  gap: 1rem;
  background-color: rgb(181, 184, 184);
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
.weather-info {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
}
</style>
