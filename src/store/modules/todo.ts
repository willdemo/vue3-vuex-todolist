import { Module } from 'vuex'

import { IToDoState, TASK_TYPES, TASK_LIST } from '../../types/todo'
import { IGlobalState } from '..'
import * as Types from '../actions-types'
import { message } from 'ant-design-vue'

const state = {
  currentType: TASK_TYPES.all,
  taskList: TASK_LIST,
  allTasks: TASK_LIST, // list all
  undoneTask: [], // list task not done 
  doneTask: [], // list task done
}

const Todo:Module<IToDoState, IGlobalState> = {
  namespaced: true, 
  state,
  mutations: {
    // Add item
    async [Types.ADD_TASK_ITEM] (state, payLoad: string) {
      const isExit = await state.allTasks.some(ele => {
        return ele.label == payLoad
      })
      if (isExit) {
        message.error('Do not add duplicated item !')
        return false
      }
      state.allTasks = [
        ...state.allTasks,
        {
          label: payLoad,
          value: 'all',
          disabled: false
        }
      ]
      state.taskList = state.allTasks
      state.undoneTask = state.allTasks
    },
    // delete item
    [Types.DELETE_TASK_ITEM](state, index: number) {
      console.log(index)
      state.allTasks.splice(index, 1)
    },
    // set current task type
    [Types.SET_CURRENT_TYPE](state, payload: TASK_TYPES) {
      state.currentType = payload
      switch (payload) {
        case 1:
          state.taskList = state.undoneTask
          break
        case 2:
          state.taskList = state.doneTask
          break
        default:
          state.taskList = state.allTasks
      }
    },
    async [Types.SET_DONE_TASK_LIST](state, payload: any) {
      payload.value = 'done'
      payload.disabled = true
      state.doneTask = [...state.doneTask, payload]
      // handle undone task
      state.undoneTask = state.allTasks.filter(item => !state.doneTask.some(e => e === item))
      console.log(state.undoneTask, 'undone task')
    }
  }
}

export default Todo