<template>
  <div class="chart">
    <div class="top">
      <div class="left">
        <div style="font-weight: 700">BAR CHART</div>
        <div>시간 별 최신 자원 메트릭</div>
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
    iostatAwait: {
      type: Array,
      required: true,
    },
    iostatWriteAwait: {
      type: Array,
      required: true,
    },
    iostatReadPerSec: {
      type: Array,
      required: true,
    },
    iostatReadAwait: {
      type: Array,
      required: true,
    },
    actualUsed: {
      type: Array,
      required: true,
    },
    hugepagesDefaultSize: {
      type: Array,
      required: true,
    },
    actualUsedPct: {
      type: Array,
      required: true,
    },
    actualFree: {
      type: Array,
      required: true,
    },
    systemPct: {
      type: Array,
      required: true,
    },
    iowaitPct: {
      type: Array,
      required: true,
    },
    niceTicks: {
      type: Array,
      required: true,
    },
    stealTicks: {
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

      // chartOptions: {
      //   title: {
      //     text: 'BAR CHART',
      //   },
      //   tooltip: {
      //     // pointFormat:
      //     //   '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      //     //   '<td style="padding:3px"><b>{point.y}</b> 개</td></tr>',
      //     footerFormat: '</table>',
      //   },
      //   xAxis: {
      //     categories: [
      //       'iostat.await',
      //       'iostat.write.await',
      //       'iostat.read.per_sec',
      //       'iostat.read.await',
      //     ],
      //     title: {
      //       text: null,
      //     },
      //   },

      //   series: [
      //     {
      //       type: 'column',
      //       name: this.PieDiskArray.map(m => m[0]),
      //       data: this.PieDiskArray,
      //       // name: diskValue.map(m => m.metric_type),
      //       // data: diskValue.map(m => Number(m.value)),
      //     },
      //   ],
      // },

      chartOptions: {
        chart: {
          type: 'column',
        },
        title: {
          text: 'BAR CHART',
        },

        xAxis: {
          categories: this.iostatAwait.map(m => m.datetime.slice(5, -5)),
          // categories: this.a,
        },
        yAxis: {
          title: {
            text: 'Value',
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: false,
          },
        },
        series: [],
      },
    };
  },
  methods: {
    clickDisk() {
      console.log(this.iostatAwait.map(m => m.value));
      this.isActiveDisk = true;
      this.isActiveMemory = false;
      this.isActiveCpu = false;
      console.log(this.PieDiskArray);
      this.chartType = 'disk';
      this.chartOptions = {
        chart: {
          type: 'column',
        },
        title: {
          text: 'BAR CHART',
        },

        xAxis: {
          categories: this.iostatAwait.map(m => m.datetime.slice(5, -5)),
          // categories: this.a,
        },
        yAxis: {
          title: {
            text: 'Value',
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: false,
          },
        },
        series: [
          {
            name: this.iostatAwait[0].metric_type,
            data: this.iostatAwait.map(m => m.value),
            // data: this.b,
          },
          {
            name: this.iostatWriteAwait[0].metric_type,
            data: this.iostatWriteAwait.map(m => m.value),
          },
          {
            name: this.iostatReadPerSec[0].metric_type,
            data: this.iostatReadPerSec.map(m => m.value / 1000),
          },
          {
            name: this.iostatReadAwait[0].metric_type,
            data: this.iostatReadAwait.map(m => m.value),
          },
        ],
        // xAxis: {
        //   categories: this.PieDiskArray.map(m => m[0]),
        //   title: {
        //     text: null,
        //   },
        // },
        // series: [
        //   {
        //     name: this.PieDiskArray.map(m => m[0]),
        //     data: this.PieDiskArray,
        //   },
        // ],
      };
    },
    clickMemory() {
      this.isActiveDisk = false;
      this.isActiveMemory = true;
      this.isActiveCpu = false;
      this.chartType = 'memory';
      // this.chartOptions = {
      //   xAxis: {
      //     categories: this.PieMemoryArray.map(m => m[0]),
      //     title: {
      //       text: null,
      //     },
      //   },
      //   series: [
      //     {
      //       name: this.PieMemoryArray.map(m => m[0]),
      //       data: this.PieMemoryArray,
      //     },
      //   ],
      // };
      this.chartOptions = {
        chart: {
          type: 'column',
        },
        title: {
          text: 'BAR CHART',
        },

        xAxis: {
          categories: this.iostatAwait.map(m => m.datetime.slice(5, -5)),
          // categories: this.a,
        },
        yAxis: {
          title: {
            text: 'Value',
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: false,
          },
        },
        series: [
          {
            name: this.actualUsed[0].metric_type,
            data: this.actualUsed.map(m => m.value / 1000),
            // data: this.b,
          },
          {
            name: this.hugepagesDefaultSize[0].metric_type,
            data: this.hugepagesDefaultSize.map(m => m.value),
          },
          {
            name: this.actualUsedPct[0].metric_type,
            data: this.actualUsedPct.map(m => m.value),
          },
          {
            name: this.actualFree[0].metric_type,
            data: this.actualFree.map(m => m.value / 1000),
          },
        ],
        // xAxis: {
        //   categories: this.PieDiskArray.map(m => m[0]),
        //   title: {
        //     text: null,
        //   },
        // },
        // series: [
        //   {
        //     name: this.PieDiskArray.map(m => m[0]),
        //     data: this.PieDiskArray,
        //   },
        // ],
      };
    },
    clickCpu() {
      this.isActiveDisk = false;
      this.isActiveMemory = false;
      this.isActiveCpu = true;
      this.chartType = 'cpu';
      console.log(this.iostatAwait);
      // this.chartOptions = {
      //   xAxis: {
      //     categories: this.PieCpuArray.map(m => m[0]),
      //     title: {
      //       text: null,
      //     },
      //   },
      //   series: [
      //     {
      //       name: this.PieCpuArray.map(m => m[0]),
      //       data: this.PieCpuArray,
      //     },
      //   ],
      // };
      this.chartOptions = {
        chart: {
          type: 'column',
        },
        title: {
          text: 'BAR CHART',
        },

        xAxis: {
          categories: this.iostatAwait.map(m => m.datetime.slice(5, -5)),
          // categories: this.a,
        },
        yAxis: {
          title: {
            text: 'Value',
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: false,
          },
        },
        series: [
          {
            name: this.systemPct[0].metric_type,
            data: this.systemPct.map(m => m.value),
            // data: this.b,
          },
          {
            name: this.iowaitPct[0].metric_type,
            data: this.iowaitPct.map(m => m.value),
          },
          {
            name: this.niceTicks[0].metric_type,
            data: this.niceTicks.map(m => m.value),
          },
          {
            name: this.stealTicks[0].metric_type,
            data: this.stealTicks.map(m => m.value),
          },
        ],
        // xAxis: {
        //   categories: this.PieDiskArray.map(m => m[0]),
        //   title: {
        //     text: null,
        //   },
        // },
        // series: [
        //   {
        //     name: this.PieDiskArray.map(m => m[0]),
        //     data: this.PieDiskArray,
        //   },
        // ],
      };
    },
  },
  created() {
    setTimeout(() => {
      this.clickDisk();
    }, 300);
  },
};
</script>

<style>
.chart {
  width: 100%;
  background-color: white;
  /* border: 1px solid black; */
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
  /* border: 1px solid gray; */
}

.active {
  color: gray;
  font-weight: 700;
}
</style>
