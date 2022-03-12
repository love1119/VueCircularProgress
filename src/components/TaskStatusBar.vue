<template>
  <div class="task-status-bar">
    <span class="task-status-bar-label">{{ task.name }}</span>
    <div class="task-status-bar-actions">
      <div class="task-status-bar-actions-left">
        <i :class="`${statusIcon} status-icon`" :style="statusIconStyle" />
        <span :style="statusLabelStyle">{{ task.status }}</span>
      </div>
      <div class="task-status-bar-dotmenu">
        <i class="fas fa-ellipsis-h" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskStatusBar",
  props: {
    task: Object
  },
  computed: {
    statusIcon() {
      let icon = "";

      switch (this.task.status) {
        case "Complete":
          icon = "far fa-check-circle";
          break;
        case "Booked":
          icon = "far fa-calendar-check";
          break;
        case "Book now":
          icon = "far fa-calendar";
          break;
      }

      return icon;
    },
    statusColor() {
      let color = "";

      switch (this.task.status) {
        case "Complete":
          color = "#61b057";
          break;
        case "Booked":
          color = "#13599e";
          break;
        case "Book now":
          color = "#13599e";
          break;
      }

      return color;
    },
    statusIconStyle() {
      return {
        color: this.statusColor,
        opacity: this.task.status === "Book now" ? 0.5 : 1
      };
    },
    statusLabelStyle() {
      return {
        color: this.statusColor,
        opacity: this.task.status === "Complete" ? 0.5 : 1,
        fontWeight: 600
      };
    },
    statusIconColor() {
      let iconColor = "";

      switch (this.task.status) {
        case "Complete":
          iconColor = "#61b057";
          break;
        case "Booked":
          iconColor = "far fa-calendar-check";
          break;
        case "Book now":
          iconColor = "far fa-calendar";
          break;
      }

      return iconColor;
    }
  }
};
</script>

<style>
.task-status-bar {
  border-radius: 16px;
  border: 1px solid #dddddd;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.task-status-bar-label {
  font-size: 18px;
  font-weight: 600;
}

.task-status-bar-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}

.task-status-bar-actions-left > span {
  font-size: 20px;
  margin-right: 3rem;
  margin-left: 1rem;
}

.task-status-bar-actions-left > .status-icon {
  font-size: 20px;
}

.task-status-bar-dotmenu {
  widows: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.task-status-bar-dotmenu i {
  font-size: 20px;
  opacity: 0.3;
  cursor: pointer;
}

.task-status-bar-dotmenu:hover i {
  opacity: 1;
}
</style>
