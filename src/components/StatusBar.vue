<template>
  <div class="status-bar" :style="{ backgroundColor: bgColor }"/>
</template>

<script>
export default {
  name: "StatusBar",
  props: {
    status: {
      type: String,
      default: "Completed"
    }
  },
  computed: {
    bgColor() {
      if (this.status === "Complete") {
        return "#61b057";
      } else if (this.status === "Booked") {
        return "#13599e";
      } else if (this.status === "Book now") {
        return "#b4d7e8";
      }

      return "#FFF";
    }
  }
};
</script>

<style>
.status-bar {
  width: 100%;
  height: 5px;
  border-radius: 3px;
  min-height: 5px;
  max-width: 70px;
}
</style>
