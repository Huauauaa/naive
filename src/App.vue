<template>
  <naive-demo></naive-demo>
  <naive-example></naive-example>
  <naive-dashboard></naive-dashboard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NaiveDemo from './components/NaiveDemo.vue';
import NaiveExample from './components/NaiveExample.vue';
import NaiveDashboard from './components/NaiveDashboard';

export default defineComponent({
  name: 'App',
  components: {
    NaiveDemo,
    NaiveExample,
    NaiveDashboard,
  },
});
</script>

<style></style>
