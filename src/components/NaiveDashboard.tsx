import { defineComponent } from 'vue';
import { NButton } from 'naive-ui';

export default defineComponent({
  name: 'NaiveDashboard',
  setup() {
    return () => <NButton>{{ default: () => 'Star Kirby' }}</NButton>;
  },
});
