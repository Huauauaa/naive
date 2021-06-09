<template>
  <fieldset>
    <legend>NaiveDemo</legend>
    <div class="naive-demo">
      <n-button>naive-ui</n-button>
      <n-config-provider
        :theme="darkTheme"
        :locale="zhCN"
        :date-locale="dateZhCN"
      >
        <n-space vertical>
          <n-input />
          <n-date-picker />
        </n-space>
      </n-config-provider>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton } from 'naive-ui';
import { NConfigProvider, NInput, NDatePicker, NSpace } from 'naive-ui';
// theme
import { createTheme, inputDark, datePickerDark } from 'naive-ui';
// locale & dateLocale
import { zhCN, dateZhCN } from 'naive-ui';

export default defineComponent({
  name: 'NaiveDemo',
  components: { NButton, NDatePicker, NSpace, NInput, NConfigProvider },
  props: {},
  setup: () => {
    return {
      darkTheme: createTheme([inputDark, datePickerDark]),
      zhCN,
      dateZhCN,
    };
  },
});
</script>
<style scoped>
.naive-demo {
  background: black;
}
</style>
