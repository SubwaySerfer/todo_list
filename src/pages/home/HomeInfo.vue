<template>
  <valute-item
    :name="currentVal.CharCode"
    :value="currentVal.Value"
    :previousVal="currentVal.Previous"
    @prev-val="prevValute"
    @next-val="nextValute"
  ></valute-item>
</template>

<script>
import ValuteItem from '@/components/home/ValuteItem';
import { mapGetters } from 'vuex';

export default {
  components: { ValuteItem },
  data() {
    return {
      currentVal: '',
      currentValIdx: 0,
      valutes: '',
      isValutes: '',
    };
  },
  created() {
    if (this.$store.getters['home/currentValute'] != null) {
      this.currentVal = this.$store.getters['home/currentValute'];
      this.currentValIdx = this.$store.getters['home/currentValuteIdx'];
    } else {
      this.$store.dispatch('home/getDailyRate');
    }
  },
  computed: {
    ...mapGetters('home', ['valute', 'hasValute', 'currentValute']),
  },
  watch: {
    hasValute() {
      this.getValuteRates(this.currentValIdx);
      this.setRateInfo();
    },
    currentValute(newValue) {
      return (this.currentVal = newValue);
    },
  },
  methods: {
    getValuteRates(id) {
      console.log('get rates');
      this.currentValute = this.valutes[id];
    },
    nextValute() {
      this.$store.commit('home/nextValute');
    },
    prevValute() {
      this.$store.commit('home/prevValute');
    },
    setRateInfo() {
      console.log(this.currentVal);

      this.isValutes = this.hasValute;
      this.valutes = this.valute;
      if (this.$store.state['home/currentValute'] == null) {
        this.$store.commit('home/changeCurrentValute', this.currentVal);
      }
    },
  },
};
</script>
