<template>
  <div class="status-month">
    <span class="status-month-label">{{ label }}</span>
    <div class="status-month-list">
      <status-bar v-for="task in tasks" :key="task.id" :status="task.status" />
    </div>
  </div>
</template>

<script>
import StatusBar from "./StatusBar.vue";

export default {
  name: "StatusInMonth",
  components: {
    StatusBar,
  },
  props: {
    label: String,
    tasks: {
      type: Array,
      default: []
    }
  },
};
</script>

<style>
.status-month {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 1rem;
}

.status-month-label {
  color: #13599e;
  font-size: 16px;
}

.status-month-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  width: 100%;
  margin-top: 0.5rem;
  justify-items: center;
}
</style>
