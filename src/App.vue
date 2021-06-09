<template>
  <naive-demo></naive-demo>
  <naive-example></naive-example>
  <!-- <naive-dashboardd></naive-dashboardd> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NaiveDemo from './components/NaiveDemo.vue';
import NaiveExample from './components/NaiveExample.vue';
// import NaiveDashboard from './components/NaiveDashboard.jsx';

export default defineComponent({
  name: 'App',
  components: {
    NaiveDemo,
    NaiveExample,
    // NaiveDashboard,
  },
});
</script>

<style></style>
