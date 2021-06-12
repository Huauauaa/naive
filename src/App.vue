<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
  >
    <n-message-provider>
      <select-school></select-school>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectSchool from './SelectSchool.vue';
import { zhCN, dateZhCN } from 'naive-ui';

const themeOverrides = {
  common: {
    primaryColor: '#FF6600',
  },
};

export default defineComponent({
  name: 'App',
  components: {
    SelectSchool,
  },
  setup() {
    return {
      zhCN,
      dateZhCN,
      themeOverrides,
    };
  },
});
</script>

<style></style>
