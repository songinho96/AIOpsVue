<template>
  <div class="chart">
    <div class="top">
      <div class="left">
        <div style="font-weight: 700">PIE CHART</div>
        <div>최신 자원 별 메트릭</div>
      </div>
      <div class="type">
        <div v-bind:class="{ active: isActiveDisk }" @click="clickDisk">
          DISK
        </div>
        <div v-bind:class="{ active: isActiveMemory }" @click="clickMemory">
          MEMORY
        </div>
        <div v-bind:class="{ active: isActiveCpu }" @click="clickCpu">CPU</div>
      </div>
    </div>
    <highCharts :options="chartOptions"></highCharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';

export default {
  components: {
    highCharts: Chart,
  },
  props: {
    PieDiskArray: {
      type: Array,
      required: true,
    },
    PieMemoryArray: {
      type: Array,
      required: true,
    },
    PieCpuArray: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isActiveDisk: true,
      isActiveMemory: false,
      isActiveCpu: false,
      chartDatas: [],
      // PieDiskArray: $store.state.PieDiskArray,
      chartType: 'disk',

      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
        },
        title: {
          text: 'PIE CHART',
        },
        tooltip: {
          headerFormat: '',
          pointFormat:
            '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            '<tr><td padding:0">{point.name}: </td>' +
            '<td style="padding:3px"><b>{point.y} {point.unit}</b></td></tr>',
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format:
                '<tr><b>{point.hostname}</b></tr>' +
                '<tr><td style="color:{point.color};padding:0">{point.name}: </td>' +
                '<td style="padding:3px"><b>{point.y} {point.unit}</b></td></tr>',
            },
            showInLegend: true,
          },
        },
        series: [
          {
            // type: 'pie',
            data: this.PieDiskArray,
            title: {
              text: 'PIEChart',
            },
            // name: diskValue.map(m => m.metric_type),
            // data: diskValue.map(m => Number(m.value)),
          },
        ],
      },
    };
  },
  methods: {
    clickDisk() {
      this.isActiveDisk = true;
      this.isActiveMemory = false;
      this.isActiveCpu = false;

      this.chartType = 'disk';
      this.chartOptions = {
        series: [
          {
            data: this.PieDiskArray,
          },
        ],
      };
    },
    clickMemory() {
      this.isActiveDisk = false;
      this.isActiveMemory = true;
      this.isActiveCpu = false;
      this.chartType = 'memory';
      this.chartOptions = {
        series: [
          {
            data: this.PieMemoryArray,
          },
        ],
      };
    },
    clickCpu() {
      this.isActiveDisk = false;
      this.isActiveMemory = false;
      this.isActiveCpu = true;
      this.chartType = 'cpu';
      this.chartOptions = {
        series: [
          {
            data: this.PieCpuArray,
          },
        ],
      };
    },
  },
};
</script>

<style>
.chart {
  width: 100%;
  padding: 20px;
  /* border: 1px solid black; */
  background-color: white;
  border-radius: 15px;
  margin-top: 50px;
}

.top {
  display: flex;
  justify-content: space-between;
}

.type {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.type > div {
  padding: 5px 20px;
  margin: 0 3px;
  /* border: 1px solid gray; */
  border-radius: 12px;
}

.active {
  color: white;
  background-color: #808080;
  /* background-color: #919ca6; */
  font-weight: 700;
}
</style>
