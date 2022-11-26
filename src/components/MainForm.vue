<template>
  <div>
    <div class="mainPage-layout">
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <div v-else class="chart-layout">
        <BarChart
          :PieMemoryArray="PieMemoryArray"
          :PieDiskArray="PieDiskArray"
          :PieCpuArray="PieCpuArray"
          :iostatAwait="iostatAwait"
          :iostatWriteAwait="iostatWriteAwait"
          :iostatReadPerSec="iostatReadPerSec"
          :iostatReadAwait="iostatReadAwait"
          :actualUsed="actualUsed"
          :hugepagesDefaultSize="hugepagesDefaultSize"
          :actualUsedPct="actualUsedPct"
          :actualFree="actualFree"
          :systemPct="systemPct"
          :iowaitPct="iowaitPct"
          :niceTicks="niceTicks"
          :stealTicks="stealTicks"
          class="barForm"
        ></BarChart>
        <PieChart
          :PieMemoryArray="PieMemoryArray"
          :PieDiskArray="PieDiskArray"
          :PieCpuArray="PieCpuArray"
          class="pieForm"
        ></PieChart>
      </div>
      <TableList :chartDatas="chartDatas" class="tableForm"></TableList>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/charts/BarChart.vue';
import PieChart from '@/components/charts/PieChart.vue';
import TableList from '@/components/charts/TableList.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchChart, fetchResourceType } from '@/api/index';

export default {
  components: {
    PieChart,
    BarChart,
    TableList,
    LoadingSpinner,
  },
  data() {
    return {
      chartDatas: [],
      PieDiskArray: [],
      PieMemoryArray: [],
      PieCpuArray: [],
      barDisk: [],
      // Disk
      iostatAwait: [],
      iostatWriteAwait: [],
      iostatReadPerSec: [],
      iostatReadAwait: [],
      // Memory
      actualUsed: [],
      hugepagesDefaultSize: [],
      actualUsedPct: [],
      actualFree: [],
      //Cpu
      systemPct: [],
      iowaitPct: [],
      niceTicks: [],
      stealTicks: [],
      // isLoading
      isLoading: false,
      resourceType: 'cpu',
    };
  },
  methods: {
    async fetchType() {
      const type = this.resourceType;
      const { data } = await fetchResourceType(type);
      console.log(data);
    },
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchChart();
      this.isLoading = false;
      this.chartDatas = data;

      // metricType 별
      // disk
      // const iostatAwait = [];
      // const iostatWriteAwait = []
      // const iostatReadPerSec = [];
      // const iostatReadAwait = [];

      //   const k8sWorker3 = [];

      // 파이차트 disk Data
      const diskValue = [];

      // forEach 사용하여 배열 값 분배
      this.chartDatas.forEach(m => {
        if (m.metricType === 'iostat.await') {
          this.iostatAwait.push(m);
        } else if (m.metricType === 'iostat.write.await') {
          this.iostatWriteAwait.push(m);
        } else if (m.metricType === 'iostat.read.per_sec') {
          this.iostatReadPerSec.push(m);
        } else if (m.metricType === 'iostat.read.await') {
          this.iostatReadAwait.push(m);
        } else return;
      });

      // BarChart disk 배열
      // console.log(iostatAwait);

      // 파이차트 disk 배열
      // iostat.await
      let iostatAwaitValue = 0;
      for (let i = 0; i < this.iostatAwait.length; i++) {
        iostatAwaitValue = iostatAwaitValue + this.iostatAwait[i].value;
      }

      diskValue.push({
        metricType: this.iostatAwait[0].metricType,
        value: (iostatAwaitValue / this.iostatAwait.length).toFixed(3),
      });

      // iostat.write.await
      let iostatWriteAwaitValue = 0;
      for (let i = 0; i < this.iostatWriteAwait.length; i++) {
        iostatWriteAwaitValue =
          iostatWriteAwaitValue + this.iostatWriteAwait[i].value;
      }

      diskValue.push({
        metricType: this.iostatWriteAwait[0].metricType,
        value: (iostatWriteAwaitValue / this.iostatWriteAwait.length).toFixed(
          2,
        ),
      });

      // iostat.read.per_sec
      let iostatReadPerSecValue = 0;
      for (let i = 0; i < this.iostatReadPerSec.length; i++) {
        iostatReadPerSecValue =
          iostatReadPerSecValue + this.iostatReadPerSec[i].value;
      }

      diskValue.push({
        metricType: this.iostatReadPerSec[0].metricType,
        value: (
          iostatReadPerSecValue /
          this.iostatReadPerSec.length /
          1000
        ).toFixed(2),
      });

      // iostat.read.await
      let iostatReadAwaitValue = 0;
      for (let i = 0; i < this.iostatReadAwait.length; i++) {
        iostatReadAwaitValue =
          iostatReadAwaitValue + this.iostatReadAwait[i].value;
      }

      diskValue.push({
        metricType: this.iostatReadAwait[0].metricType,
        value: (iostatReadAwaitValue / this.iostatReadAwait.length).toFixed(2),
      });
      console.log(diskValue);

      // 최종 DISK
      diskValue.forEach(m => {
        this.PieDiskArray.push([m.metricType, Number(m.value)]);
      });

      //
      //
      //
      //
      //
      //
      //
      //

      // memory
      // const actualUsed = [];
      // const hugepagesDefaultSize = [];
      // const actualUsedPct = [];
      // const actualFree = [];

      const memoryValue = [];
      // forEach 사용하여 배열 값 분배
      this.chartDatas.forEach(m => {
        if (m.metricType === 'actual.used') {
          this.actualUsed.push(m);
        } else if (m.metricType === 'hugepages.default_size') {
          this.hugepagesDefaultSize.push(m);
        } else if (m.metricType === 'actual.used.pct') {
          this.actualUsedPct.push(m);
        } else if (m.metricType === 'actual.free') {
          this.actualFree.push(m);
        } else return;
      });

      // console.log('mem: ' + actualUsed.length);

      // 파이차트 Memory 배열
      // actual.used
      let actualUsedValue = 0;
      for (let i = 0; i < this.actualUsed.length; i++) {
        actualUsedValue = actualUsedValue + this.actualUsed[i].value;
      }
      // console.log(actualUsedValue);

      memoryValue.push({
        metricType: this.actualUsed[0].metricType,
        value: (actualUsedValue / this.actualUsed.length / 1000).toFixed(2),
      });

      // hugepages.default_size
      let hugepagesDefaultSizeValue = 0;
      for (let i = 0; i < this.hugepagesDefaultSize.length; i++) {
        hugepagesDefaultSizeValue =
          hugepagesDefaultSizeValue + this.hugepagesDefaultSize[i].value;
      }

      memoryValue.push({
        metricType: this.hugepagesDefaultSize[0].metricType,
        value: (
          hugepagesDefaultSizeValue / this.hugepagesDefaultSize.length
        ).toFixed(2),
      });

      // actual.used.pct
      let actualUsedPctValue = 0;
      for (let i = 0; i < this.actualUsedPct.length; i++) {
        actualUsedPctValue = actualUsedPctValue + this.actualUsedPct[i].value;
      }

      memoryValue.push({
        metricType: this.actualUsedPct[0].metricType,
        value: (actualUsedPctValue / this.actualUsedPct.length).toFixed(2),
      });

      // actual.free
      let actualFreeValue = 0;
      for (let i = 0; i < this.actualFree.length; i++) {
        actualFreeValue = actualFreeValue + this.actualFree[i].value;
      }

      memoryValue.push({
        metricType: this.actualFree[0].metricType,
        value: (actualFreeValue / this.actualFree.length / 1000).toFixed(2),
      });
      console.log('메모리: ' + memoryValue);

      // 최종 DISK
      memoryValue.forEach(m => {
        this.PieMemoryArray.push([m.metricType, Number(m.value)]);
      });

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      // cpu
      // const systemPct = [];
      // const iowaitPct = [];
      // const niceTicks = [];
      // const stealTicks = [];

      const cpuValue = [];
      // forEach 사용하여 배열 값 분배
      this.chartDatas.forEach(m => {
        if (m.metricType === 'system.pct') {
          this.systemPct.push(m);
        } else if (m.metricType === 'iowait.pct') {
          this.iowaitPct.push(m);
        } else if (m.metricType === 'nice.ticks') {
          this.niceTicks.push(m);
        } else if (m.metricType === 'steal.ticks') {
          this.stealTicks.push(m);
        } else return;
      });

      // 파이차트 cpu 배열
      // system.pct
      let systemPctValue = 0;
      for (let i = 0; i < this.systemPct.length; i++) {
        systemPctValue = systemPctValue + this.systemPct[i].value;
      }

      cpuValue.push({
        metricType: this.systemPct[0].metricType,
        value: (systemPctValue / this.systemPct.length).toFixed(2),
      });

      // iowait.pct
      let iowaitPctValue = 0;
      for (let i = 0; i < this.iowaitPct.length; i++) {
        iowaitPctValue = iowaitPctValue + this.iowaitPct[i].value;
      }

      cpuValue.push({
        metricType: this.iowaitPct[0].metricType,
        value: (iowaitPctValue / this.iowaitPct.length).toFixed(2),
      });

      // nice.ticks
      let niceTicksValue = 0;
      for (let i = 0; i < this.niceTicks.length; i++) {
        niceTicksValue = niceTicksValue + this.niceTicks[i].value;
      }

      cpuValue.push({
        metricType: this.niceTicks[0].metricType,
        value: (niceTicksValue / this.niceTicks.length).toFixed(2),
      });

      // steal.ticks
      let stealTicksValue = 0;
      for (let i = 0; i < this.stealTicks.length; i++) {
        stealTicksValue = stealTicksValue + this.stealTicks[i].value;
      }

      cpuValue.push({
        metricType: this.stealTicks[0].metricType,
        value: (stealTicksValue / this.stealTicks.length).toFixed(2),
      });
      console.log(cpuValue);

      // 최종 DISK
      cpuValue.forEach(m => {
        this.PieCpuArray.push([m.metricType, Number(m.value)]);
      });

      // console.log(this.PieDiskArray);
      // this.$store.commit('setPieDisk', this.PieDiskArray);
    },
  },
  created() {
    this.fetchType();

    this.fetchData();
  },
};
</script>

<style>
.mainPage-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  background-color: #e9ecef;
  /* padding: 20px; */
}

.chart-layout {
  display: flex;
  justify-content: space-between;
}

.barForm {
  width: 60%;
}

.pieForm {
  width: 35%;
}
</style>
