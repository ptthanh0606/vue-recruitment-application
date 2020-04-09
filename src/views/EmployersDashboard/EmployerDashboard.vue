<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div class="dashboard-container">
    <dashboard-bar></dashboard-bar>
    <div class="dashboard-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import DashBoardBar from '../../components/DashboardBar/DashboardBar.vue';

export default {
  name: 'Employer-dashboard',
  components: {
    'dashboard-bar': DashBoardBar,
  },
};
</script>

<style lang="scss">
.dashboard-container {
  width: 100%;
  height: 100%;

  .dashboard-view {
    width: 100%;
    height: 100%;
    padding-left: 80px;
  }
}
</style>
