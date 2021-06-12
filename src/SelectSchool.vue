<template>
  <div class="wrapper">
    <n-form
      :model="model"
      :rules="rules"
      ref="formRef"
      label-placement="left"
      label-align="right"
      :label-width="60"
      :style="{
        maxWidth: '400px',
      }"
    >
      <n-form-item label="生源地" path="origin">
        <n-select :options="originOptions" v-model:value="model.origin" />
      </n-form-item>
      <n-form-item label="选科" path="subject">
        <n-radio-group v-model:value="model.subject" name="subjectGrop">
          <n-space>
            <n-radio value="science">理科</n-radio>
            <n-radio value="arts">文科</n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
      <n-form-item label="分数" path="grade">
        <n-input v-model:value="model.grade">
          <template #suffix>
            <n-icon>
              <pencil-outline />
            </n-icon> </template
        ></n-input>
      </n-form-item>

      <div style="display: flex; justify-content: center">
        <n-button @click="handleValidateButtonClick" type="primary"
          >选大学
        </n-button>
      </div>
    </n-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMessage } from 'naive-ui';
import { PencilOutline } from '@vicons/ionicons5';

export default defineComponent({
  name: 'SelectSchool',
  components: {
    PencilOutline,
  },
  props: {},
  setup: () => {
    const formRef = ref();
    const message = useMessage();

    return {
      formRef,
      model: ref({
        origin: '河南',
        subject: 'science',
        grade: null,
      }),
      originOptions: ['河南', '陕西'].map((v) => ({
        label: v,
        value: v,
      })),
      rules: {
        origin: {
          required: true,
          trigger: ['blur', 'change'],
          message: '请选择生源地',
        },
        grade: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入分数',
        },
        subject: {
          required: true,
          trigger: 'change',
          message: '请选科',
        },
      },
      handleValidateButtonClick(e: Event) {
        e.preventDefault();
        formRef.value.validate((errors: any) => {
          if (!errors) {
            message.success('校验成功', {});
          } else {
            console.error(errors);
            message.error('校验失败', {});
          }
        });
      },
    };
  },
});
</script>
<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
