<template>
  <div class="tableForm">
    <!-- <div class="Metric_Header">Metric</div> -->
    <PaginateTable :chartDatas="chartDatas"></PaginateTable>
  </div>
</template>

<script>
import { fetchChart } from '@/api/index';
import PaginateTable from '@/components/paginateTable/PaginateTable.vue';

export default {
  components: {
    PaginateTable,
  },
  data() {
    return {
      chartDatas: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchChart();
      this.chartDatas = data;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
/* .Metric_Header {
  height: 100px;
  background-color: aquamarine;
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  align-items: center;
  padding-left: 50px;
} */

.tableForm {
  background-color: #e9ecef;
}
</style>
