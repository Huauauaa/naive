<template>
  <fieldset>
    <legend>NaiveExample</legend>
    <div class="naive-example">
      <n-button>naive-ui</n-button>
      <n-space vertical>
        <n-input />
        <n-date-picker />
      </n-space>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { NConfigProvider, NInput, NDatePicker, NSpace } from 'naive-ui';
</script>
<style scoped></style>
