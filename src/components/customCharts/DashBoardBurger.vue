<template>
  <div class="Wrap_toggle">
    <div>
      <img src="@/assets/image/Bar.png" @click="Bar" />
      <img src="@/assets/image/Bubble.png" @click="Bubble" />
    </div>
    <div>
      <img src="@/assets/image/Line.png" @click="Line" />
      <img src="@/assets/image/Pie.png" @click="Pie" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addChart: 'Bar',
    };
  },
  methods: {
    Bar() {
      this.addChart = 'Bar';
    },
    Bubble() {
      this.addChart = 'Bubble';
    },
    Line() {
      this.addChart = 'Line';
    },
    Pie() {
      this.addChart = 'Pie';
    },
  },
};
</script>

<style>
.Wrap_toggle {
  width: 300px;
  background-color: #808080;
  display: flex;
  flex-direction: column;
}
</style>
