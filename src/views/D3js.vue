<template>
  <div class="d3js">
    <D3js/>
  </div>
</template>

<script>
  import D3js from '../components/D3js.vue';
  import * as d3 from 'd3';
  import axios from 'axios';

  const data = [99, 71, 78, 25, 36, 92];

  export default {
    name: 'd3js',
    components: {
      D3js,
    },
    methods: {



      // define a method that will be used to get the data from the API
      getData() {
        // console.log('testing the getData() call');
        axios
          .get('https://repods.io/api/markode/FIFAWorldCup/reports/5818', {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
              "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            },
            auth: {
                username: '908ce8e1-95bc-43b7-a9f3-20512f2851b7',
                password: ''
            }
          }) // HTTP GET Request
          // .get('https://api.chucknorris.io/jokes/random')
          .then(response => {
            // console.log('give me the result', response.data.value);
            console.log('give me the result', response);
          })


          .catch(error => { // Executes if an error occurs if code is not >= 200 && < 300

          })
          .finally(() => this.loading = false); // Always occurs even if there is an error
      },

      parseData(response) {
        // return _.map(response, (value, key) => [moment(key, 'YYYY-MM-DD').valueOf(), value]);
      },

    },
    data() {
      // return the data
      return {
        devServer:  {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
      }
    }
    },

    mounted() {
      const svg = d3.select(this.$el)
        .append('svg')
        .attr('width', 500)
        .attr('height', 270)
        .append('g')
        .attr('transform', 'translate(0, 10)');

      const x = d3.scaleLinear().range([0, 430]);
      const y = d3.scaleLinear().range([210, 0]);

      d3.axisLeft().scale(x);
      d3.axisTop().scale(y);
      x.domain(d3.extent(data, (d, i) => i));
      y.domain([0, d3.max(data, d => d)]);
      const createPath = d3.line()
        .x((d, i) => x(i))
        .y(d => y(d));

      svg.append('path').attr('d', createPath(data));


      this.getData();
    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  svg {
    margin: 25px;
  }
  path {
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;
  }
</style>
