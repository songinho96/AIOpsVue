<template>
  <div>
    <highCharts :options="chartOptions"></highCharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';

export default {
  components: {
    highCharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
};
</script>
