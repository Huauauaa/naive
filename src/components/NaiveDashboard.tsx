import { defineComponent } from 'vue';
import { NButton } from 'naive-ui';
import '../assets/naive-dashboard.scss';

export default defineComponent({
  name: 'NaiveDashboard',
  setup() {
    return () => <NButton>{{ default: () => 'Star Kirby' }}</NButton>;
  },
});
