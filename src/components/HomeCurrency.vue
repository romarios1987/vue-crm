<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>Дата</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="currency of currencies" :key="currency">
              <td>{{ currency }}</td>
              <td>{{ rates[currency].toFixed(3) }}</td>
              <td>{{ date | filter_date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCurrency",
  props: {
    rates: {
      type: Object
    },
    date: {
      type: String
    }
  },
  data: () => ({
    currencies: ["USD", "UAH", "RUB", "EUR"]
  })
};
</script>

<style scoped></style>
