<template>
  <radial-progress-bar
    :diameter="150"
    :completed-steps="percent"
    :total-steps="max"
    :stroke-width="15"
    :inner-stroke-width="15"
    :start-color="startColor"
    :stop-color="stopColor"
    :inner-stroke-color="innerStrokeColor"
  >
    <span class="wellness-progress-label">{{ label }}</span>
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
  name: "WellnessProgress",
  props: {
    width: {
      type: Number,
      default: 200
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    percent: {
      type: Number,
      default: 0
    },
    startColor: {
      type: String,
      default: "#FF0000"
    },
    stopColor: {
      type: String,
      default: "#0000FF"
    },
    innerStrokeColor: {
      type: String,
      default: "#dddddd"
    }
  },
  components: {
    RadialProgressBar
  },
  computed: {
    label() {
      return `${Math.min(Math.max(this.min, this.percent), this.max)}%`;
    }
  }
};
</script>

<style lang="css">
.wellness-progress-label {
  font-size: 24px;
  font-weight: bold;
}
</style>
