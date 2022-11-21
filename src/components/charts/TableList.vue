<template>
  <div class="Tablebody">
    <div>
      <div class="top">
        <div>최신 메트릭 데이터 TOP 5</div>
        <router-link to="/table" class="seeAll">See all</router-link>
      </div>
      <div class="main">
        <div class="table">
          <div class="hostname">hostname</div>
          <div class="datetime">datetime</div>
          <div class="resource_type">resource_type</div>
          <div class="metric_type">metric_type</div>
          <div class="value">value</div>
          <div class="unit">unit</div>
        </div>
        <div v-for="p in sortChartDatas.slice(0, 5)" :key="p.id" class="table">
          <div class="hostname">{{ p.hostname }}</div>
          <div class="datetime">{{ p.datetime.slice(0, -5) }}</div>
          <div class="resource_type">{{ p.resource_type }}</div>
          <div class="metric_type">{{ p.metric_type }}</div>
          <div class="value">{{ p.value }}</div>
          <div class="unit">{{ p.unit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartDatas: {
      type: Object,
      required: false,
    },
  },
  computed: {
    sortChartDatas() {
      // eslint-disable-next-line vue/no-mutating-props, vue/no-side-effects-in-computed-properties
      return this.chartDatas.sort((a, b) => b.value - a.value);
    },
  },
};
</script>

<style>
.Tablebody {
  height: 100%;
  margin-top: 50px;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 50px;
}

.Tablebody > div {
  background-color: white;
  border-radius: 15px;
  padding: 50px;
}

.top {
  display: flex;
  background-color: white;
  justify-content: space-between;
}

.seeAll {
  border: 1px solid #81a9eb;
  border-radius: 15px;
  padding: 10px;
  color: white;
  background-color: #81a9eb;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
}
.main {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid black; */
  border-bottom: 0;
  background-color: white;
}

.table {
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;

  align-items: center;
  text-align: center;
}

.table > div {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
