<template>
  <div class="monthly-view">
    <div class="monthly-view-item" v-for="(month, index) in months" :key="month">
      <status-in-month :label="month" :tasks="tasks[index]" />
    </div>
  </div>
</template>

<script>
import StatusInMonth from "./StatusInMonth.vue";

import { TaskList } from "../data";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default {
  name: "MonthlyView",
  components: {
    StatusInMonth
  },
  data: () => ({
    months: MONTHS,
    tasks: []
  }),
  mounted() {
    const currentDate = new Date(2022, 4, 1);
    this.months = [
      ...MONTHS.slice(currentDate.getMonth()),
      ...MONTHS.slice(0, currentDate.getMonth())
    ];

    const filteredTasks = [...Array(12).keys()].map(mon =>
      TaskList.filter(task => task.date.getMonth() === mon)
    );
    this.tasks = [
      ...filteredTasks.slice(currentDate.getMonth()),
      ...filteredTasks.slice(0, currentDate.getMonth())
    ]
  }
};
</script>

<style>
.monthly-view {
  border-radius: 16px;
  border: 1px solid #dddddd;
  padding: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.monthly-view-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
}
</style>
