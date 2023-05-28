<template>
  <valute-item
    :name="currentValute.CharCode"
    :value="currentValute.Value"
    :previousVal="currentValute.Previous"
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
      currentValute: '',
      currentValIdx: 0,
      valutes: null,
      isValutes: '',
    };
  },
  created() {
    this.$store.dispatch('home/getDailyRate');
  },
  computed: {
    ...mapGetters('home', ['valute', 'hasValute']),
  },
  watch: {
    hasValute(newVal, oldVal) {
      if (newVal != oldVal) {
        this.isValutes = this.hasValute;
        this.valutes = this.valute;
        this.getValuteRates(this.currentValIdx);
      }
      console.log(this.valutes);
    },
  },
  methods: {
    getValuteRates(id) {
      this.currentValute = this.valutes[id];
    },
    nextValute() {
      if (this.currentValIdx == this.valutes.length - 1) {
        this.currentValIdx = 0;
      } else {
        this.currentValIdx++;
      }
      this.getValuteRates(this.currentValIdx);
    },
    prevValute() {
      if (this.currentValIdx == 0) {
        this.currentValIdx = this.valutes.length - 1;
      } else {
        this.currentValIdx--;
      }
      this.getValuteRates(this.currentValIdx);
    },
  },
};
</script>
