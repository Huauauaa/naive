import { defineComponent, ref } from 'vue';
import { NButton, NInput, NSpace } from 'naive-ui';
import '../assets/naive-dashboard.scss';

export default defineComponent({
  name: 'NaiveDashboard',
  setup() {
    const count = ref(0);
    const step = ref('1');

    const onCountChange =
      (step = 1) =>
      () => {
        count.value += step;
      };

    return () => (
      <fieldset class="naive-dashboard">
        <legend>Naive Dashboard</legend>
        <NSpace align="center">
          <NButton onClick={onCountChange(+step.value)} size="small">
            +
          </NButton>
          <NInput
            defaultValue={step.value}
            size="small"
            type="input"
            placeholder="Basic Input"
            onUpdateValue={(value: string) => {
              step.value = value;
            }}
          />
          {count.value}
          <NButton onClick={onCountChange(-step.value)} size="small">
            -
          </NButton>
        </NSpace>
      </fieldset>
    );
  },
});
