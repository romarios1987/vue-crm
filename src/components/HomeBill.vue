<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p class="currency-line" v-for="currency of currencies" :key="currency">
          <span>{{ getCurrency(currency) | currency_filter(currency) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBill",
  props: {
    rates: {
      type: Object
    }
  },
  data: () => ({
    currencies: ["USD", "UAH", "RUB", "EUR"]
  }),
  computed: {
    base() {
      return (
        this.$store.getters.getInfo.bill /
        (this.rates["UAH"] / this.rates["EUR"])
      );
    }
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency]);
    }
  }
};
</script>

<style scoped></style>
