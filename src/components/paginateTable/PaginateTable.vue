<template>
  <div class="Tablemain">
    <table>
      <tr>
        <th class="hostname">hostname</th>
        <th class="datetime">datetime</th>
        <th class="resource_type">resource_type</th>
        <th class="metiric_type">metric_type</th>
        <th class="value">value</th>
        <th class="unit">unit</th>
      </tr>

      <tr v-for="p in paginatedData" :key="p.id">
        <td class="hostname">{{ p.hostname }}</td>
        <td class="datetime">{{ p.datetime.slice(0, -5) }}</td>
        <td class="resource_type">{{ p.resource_type }}</td>
        <td class="metric_type">{{ p.metric_type }}</td>
        <td class="value">{{ p.value.toFixed(4) }}</td>
        <td v-if="p.unit === ''" class="unit">-</td>

        <td v-else class="unit">{{ p.unit }}</td>
      </tr>
    </table>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="page-btn"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 0,
    };
  },
  props: {
    chartDatas: {
      type: Array,
      required: true,
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
  },
  computed: {
    pageCount() {
      let listLeng = this.chartDatas.length,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      return page;
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      return this.chartDatas.slice(start, end);
    },
  },
};
</script>

<style>
.Tablemain {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 50px 70px;
}

table {
  width: 100%;
  padding: 50px;
  border-radius: 15px;
  background-color: white;
  /* border: 1px solid black; */
}
table th {
  font-size: 1.2rem;
  border-bottom: 1px solid #808080;
}
table tr {
  height: 2rem;
  text-align: center;
}

table tr td {
  padding: 2rem 0;
  font-size: 1.1rem;
  border-bottom: 1px solid #808080;
}

.hostname {
  width: 17%;
}

.datetime {
  width: 17%;
}

.resource_type {
  width: 17%;
}

.metric_type {
  width: 20%;
}

.value {
  width: 20%;
}

.unit {
  width: 9%;
}

.btn-cover {
  margin: 50px 0;
  margin-right: 100px;
  text-align: center;
}
.page-btn {
  width: 80px;
  height: 35px;
  letter-spacing: 0.5px;
}
.page-count {
  padding: 0 20px;
}
</style>
