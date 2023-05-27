<template>
  <div class="container">
    <h2>city</h2>
    <img src="" alt="icon weather" />
    <span>temperature</span>
    <p>weather description</p>
    <p>wind speed</p>
    <p>humidy</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      icon: '',
      temperature: '',
      weatherDescription: '',
      windSpeed: '',
      humidy: '',
      weatherInfo: null,
    };
  },
  created() {
    //TODO: нужно получить данные из vuex, чтобы их использовать!
    // this.weatherInfo = this.$store.getters['home/getWeather'];
    // console.log(this.weatherInfo);
  },
  methods: {},
};
</script>

<style scoped>
.container {
  width: 20rem;
  height: 15rem;
  background-color: aqua;
}
</style>
