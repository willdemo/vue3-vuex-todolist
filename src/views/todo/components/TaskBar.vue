 <template>
   <div class="task-types">
      <a-radio-group button-style="solid" :default-value="curBar" v-model="curBar" :options="options" @change="onChange" />
   </div>
 </template>

 <script lang="ts">
import { computed, defineComponent, PropType, reactive, toRefs } from 'vue'
import { TASK_TYPES } from '@/types/todo'

 export default defineComponent({
    name: 'task-bar',
    props: {
      curBar: {
        type: Number as PropType<TASK_TYPES>
      }
    },
    emits: ['toggle'],
    setup (props, context) {
      const state = reactive({
        options: [
          { label: 'All Task', value: TASK_TYPES.all },
          { label: 'Undone Task', value: TASK_TYPES.undone },
          { label: 'Task Done', value: TASK_TYPES.done },
        ]
      })

      // handle type change
      function onChange (e: any) {
        context.emit('toggle', e.target.value)
      }

      return {
        ...toRefs(state),
        onChange
      }
    }
 })
 </script>

 <style lang="scss" scoped>
  .task-types {
    text-align: right;
    margin: 20px 0;
  }
 </style>