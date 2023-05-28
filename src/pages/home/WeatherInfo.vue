<template>
  <div class="container">
    <h2>{{ city }}</h2>
    <img :src="icon" alt="icon weather" />
    <span>{{ temperature }}</span>
    <p>{{ weatherDescription }}</p>
    <p>{{ windSpeed }}</p>
    <p>{{ humidity }}</p>
  </div>
  <button @click="check"></button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      city: '',
      icon: '',
      temperature: '',
      weatherDescription: '',
      windSpeed: '',
      humidity: '',
      weatherInfo: null,
    };
  },
  created() {
    //TODO: нужно получить данные из vuex, чтобы их использовать!
    // this.weatherInfo = this.$store.getters['home/getWeather'];
    // console.log(this.weatherInfo);
  },
  computed: {
    ...mapGetters('home', ['weather']),
  },
  methods: {
    check() {
      console.log(this.weather);
      this.city = this.weather.name;
      this.temperature = Math.round(this.weather.main.temp);
      this.icon = this.weather.weather.id;
      this.weatherDescription = this.weather.weather.description;
      this.windSpeed = this.weather.wind.speed;
      this.humidity = this.weather.main.humidity;
    },
  },
};
</script>

<style scoped>
.container {
  width: 20rem;
  height: 15rem;
  background-color: aqua;
}
</style>
