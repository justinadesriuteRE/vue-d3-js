<template>
  <div class="charts">
    <h1 class="animated bounceInRight">Bitcoin Price Index History</h1>

    <div class="loading animated bounceInRight" v-if="loading">
      <p>Loading...</p>
    </div>

    <div class="error animated bounceInRight" v-else-if="showError">
      <p class="big">🙁</p>
      <p>Error accessing the API: {{ error.message }}</p>
      <p v-if="error.response">Response: {{ error.response }}</p>
    </div>

    <div class="animated bounceInRight" v-else>

      <!-- Vue Component -->
      <LineChartJs :data="chartData" :options="chartOptions"/>

      <p class="updated">Updated: {{ updated }}</p>
      <p class="box disclaimer">{{ disclaimer }}</p>
    </div>
  </div>
</template>

<script>
  import LineChartJs from '../components/LineChartJs.vue';
  import axios from 'axios';
  import _ from 'lodash';

  export default {
    name: 'ChartJsLineChart',
    components: {
      LineChartJs,
    },
    methods: {
      /**
       * Get data method uses axios to get data via a HTTP API Endpoint
       */



      getData() {
        axios
          .get('https://api.coindesk.com/v1/bpi/historical/close.json') // HTTP GET Request
          .then(response => {
            // Parse the response data into a format that highcharts understands
            this.chartOptions.series[0].data = this.parseData(response.data['bpi']);

            // Assign the last updated time
            this.updated = response.data.time.updated;

            // Assign the disclaimer text
            this.disclaimer = response.data.disclaimer;
          })
          .catch(error => { // Executes if an error occurs if code is not >= 200 && < 300
            this.showError = true;
            this.error     = error;
          })
          .finally(() => this.loading = false); // Always occurs even if there is an error
      },
    },

     parseData(response) {
        return _.map(response, (value, key) => [moment(key, 'YYYY-MM-DD').valueOf(), value]);
      },

    /**
     * The data object for the Vue instance.
     * Must declare all root-level reactive properties upfront to be reactive.
     */
    data() {
      return {
        loading: true,
        updated: null,
        showError: false,
        error: null,
        chartData: {
          datasets: [
            {
              label: 'Bitcoin (BTC/USD)',
              backgroundColor: '#f7931a',
              borderColor: '#f7931a',
              fill: false,
              data: null,
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: (value) => '$' + value,
                },
              },
            ],
          },
        },
      };
    },

    /**
     * Called after the instance has been mounted
     */
    mounted() {
      this.getData();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
