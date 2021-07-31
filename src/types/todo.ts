// define sub-item type
export interface taskItem {
  label: string,
  value: string,
  disabled: boolean
}

export enum TASK_TYPES {
  all,
  undone,
  done
}

export interface IToDoState {
  currentType: TASK_TYPES,
  taskList: taskItem[],
  allTasks: taskItem[],
  undoneTask: taskItem[],
  doneTask: taskItem[]
}

export const TASK_LIST = [
  {
    label: 'Dinner',
    value: 'undone',
    disabled: false
  },
  {
    label: 'Lunch',
    value: 'undone',
    disabled: false
  },
  {
    label: 'Reading',
    value: 'undone',
    disabled: false
  },
  {
    label: 'Game',
    value: 'undone',
    disabled: false
  }
]