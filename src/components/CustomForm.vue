<template>
  <div class="CustomWrapper">
    <Slide right noOverlay class="hamburger">
      <!-- <DashBoardBurger></DashBoardBurger> -->
      <div class="Wrap_toggle">
        <div class="WrapIcon">
          <img class="icon" src="@/assets/image/Bar.svg" @click="Bar" />
        </div>
        <div class="WrapIcon">
          <img class="icon" src="@/assets/image/Wave.svg" @click="Bubble" />
        </div>
        <div class="WrapIcon">
          <img class="icon" src="@/assets/image/Line.svg" @click="Line" />
        </div>
        <div class="WrapIcon">
          <img class="icon" src="@/assets/image/Pie.svg" @click="Pie" />
        </div>
      </div>
    </Slide>
    <div class="checkBox">
      <input type="checkbox" v-model="draggable" />
      <div>Drag</div>
      <input type="checkbox" v-model="resizable" />
      <div>Resize</div>
    </div>
    <grid-layout
      :layout.sync="layout"
      :col-num="colNum"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        :minW="4"
        :minH="3"
        @resized="resizedEvent"
      >
        <div>
          <div class="BasicWrap">
            <component
              :key="componentKey"
              :is="item.c"
              v-if="item.isBar"
            ></component>
          </div>
          <component
            :key="componentKey"
            :is="item.c"
            v-if="item.isBubble"
          ></component>
          <component
            :key="componentKey"
            :is="item.c"
            v-if="item.isLine"
          ></component>
          <component
            :key="componentKey"
            :is="item.c"
            v-if="item.isPie"
          ></component>

          <span class="remove" @click="removeItem(item.i)">x</span>
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
// import VueDragResize from 'vue-drag-resize';
import BasicLine from '@/components/customCharts/BasicLine.vue';
import BasicBar from '@/components/customCharts/BasicBar.vue';
import BasicBubble from '@/components/customCharts/BasicBubble.vue';
import BasicPie from '@/components/customCharts/BasicPie.vue';
// import DashBoardBurger from './customCharts/DashBoardBurger.vue';
import { Slide } from 'vue-burger-menu';
import VueGridLayout from 'vue-grid-layout';
export default {
  name: 'app',

  components: {
    // VueDragResize,
    BasicLine,
    BasicBar,
    BasicBubble,
    BasicPie,
    // DashBoardBurger,
    Slide,
    // grid
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },

  data() {
    return {
      isBar: false,
      isLine: false,
      isBubble: false,
      isPie: false,

      componentKey: 0,
      layout: [
        // { x: 0, y: 0, w: 4, h: 2, i: '0' },
        // { x: 2, y: 0, w: 4, h: 2, i: '1', c: 'BasicLine' },
        // { x: 4, y: 0, w: 4, h: 2, i: '2', c: 'BasicBubble' },
        // { x: 6, y: 0, w: 4, h: 2, i: '3', c: 'BasicPie' },
        // { x: 8, y: 0, w: 2, h: 2, i: '4' },
      ],
      draggable: true,
      resizable: true,
      colNum: 12,
      index: 0,
      addChart: 'Bar',
    };
  },

  mounted() {
    // this.$gridlayout.load();
    this.index = this.layout.length;
  },

  methods: {
    Bar() {
      //   this.isBar = true;
      this.addChart = 'Bar';
      this.layout.push({
        x: (this.layout.length * 4) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12), // puts it at the bottom
        w: 4,
        h: 3,
        i: this.index,
        c: 'BasicBar',
        isBar: 'true',
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
      setTimeout(() => {
        this.componentKey += 1;
      }, 100);
    },
    Bubble() {
      //   this.isBubble = true;
      this.addChart = 'Bubble';
      this.layout.push({
        x: (this.layout.length * 4) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12), // puts it at the bottom
        w: 4,
        h: 3,
        i: this.index,
        c: 'BasicBubble',
        isBubble: 'true',
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
      setTimeout(() => {
        this.componentKey += 1;
      }, 100);
    },
    Line() {
      //   this.isLine = true;
      this.addChart = 'Line';
      this.layout.push({
        x: (this.layout.length * 4) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12), // puts it at the bottom
        w: 4,
        h: 3,
        i: this.index,
        c: 'BasicLine',
        isLine: 'true',
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
      setTimeout(() => {
        this.componentKey += 1;
      }, 100);
    },
    Pie() {
      //   this.isPie = true;
      this.addChart = 'Pie';
      this.layout.push({
        x: (this.layout.length * 4) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12), // puts it at the bottom
        w: 4,
        h: 3,
        i: this.index,
        c: 'BasicPie',
        isPie: 'true',
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
      setTimeout(() => {
        this.componentKey += 1;
      }, 100);
    },

    removeItem: function (val) {
      const index = this.layout.map(item => item.i).indexOf(val);
      this.layout.splice(index, 1);
    },

    resizedEvent: function () {
      this.componentKey += 1;
    },
  },
};
</script>

<style>
.CustomWrapper {
  width: 100%;
  height: 100vh;
  background-color: #e9ecef;
}
.Wrap_toggle {
  display: flex;
  flex-direction: column;
}

.WrapIcon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}

.icon {
  width: 250px;
  height: 250px;
  cursor: pointer;
}

.checkBox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  background-color: aquamarine;
  height: 100px;
}

.BasicWrap {
  width: 100%;
  height: 100%;
}
.hamburger {
  z-index: 100;
}
.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
}
.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}
/*************************************/
.remove {
  position: absolute;
  right: 2px;
  top: 0;
  cursor: pointer;
}
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: white;
  border: 1px solid #eee;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
