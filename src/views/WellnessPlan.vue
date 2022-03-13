<template>
  <div class="wellness-plan-wrapper">
    <h1 class="wellness-plan-wrapper-title">2021 Wellness Plan</h1>
    <div class="wellness-plan">
      <div class="wellness-plan-header">
        <div class="header-first">
          <h1>Your Progress</h1>
          <h3>3 steps to complete</h3>
        </div>
        <span class="hide">hide</span>
      </div>
      <div class="wellness-plan-content">
        <div class="left">
          <wellness-progress :percent="68" start-color="#61b057" stop-color="#add2e0" inner-stroke-color="#f1f2f3" />
          <span class="progress-label">Completed appointments</span>
        </div>
        <div class="right">
          <monthly-view :taskList="tasks" />
          <div class="task-list">
            <task-status-bar v-for="task in tasks" :key="task.id" :task="task" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WellnessProgress from "../components/WellnessProgress.vue";
import MonthlyView from "../components/MonthlyView.vue";
import TaskStatusBar from "../components/TaskStatusBar.vue";
import { TaskList } from "../data";

export default {
  name: "WellnessPlan",
  components: {
    WellnessProgress,
    MonthlyView,
    TaskStatusBar
  },
  data: () => ({
    tasks: TaskList
  })
};
</script>

<style scoped>
.wellness-plan-wrapper {
  margin: 3rem;
}

.wellness-plan-wrapper-title {
  font-size: 48px;
}

.wellness-plan {
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #dddddd;
}

.wellness-plan-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wellness-plan-header .hide {
  font-size: 20px;
  text-decoration: underline;
  color: #4a4d52;
}

.header-first {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-first h1 {
  margin: 0;
}

.header-first h3 {
  margin: 0 0 0 1rem;
  color: #808080;
}

.wellness-plan-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding: 2rem;
}

.wellness-plan-content .left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.wellness-plan-content .progress-label {
  width: 130px;
  text-align: center;
  margin-top: 2rem;
  font-size: 18px;
  color: #323c47;
  font-weight: 600;
}

.task-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin-top: 2rem;
}
</style>
