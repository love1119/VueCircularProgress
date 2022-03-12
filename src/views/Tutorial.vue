<template>
  <div class="wrapper">
    <wellness-progress :percent="range" start-color="#61b057" stop-color="#add2e0" inner-stroke-color="#f1f2f3" />
    <input class="range-input" type="range" min="1" max="100" :value="range" @change="rangeChange">
  </div>
</template>

<script>
import WellnessProgress from "../components/WellnessProgress.vue";

export default {
  name: "Tutorial",
  components: {
    WellnessProgress
  },
  data: () => ({
    range: 63,
  }),
  methods: {
    rangeChange(e) {
      this.range = Number(e.target.value);
    }
  }
};
</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.range-input {
  margin-top: 2rem;
  width: 200px;
}
</style>
