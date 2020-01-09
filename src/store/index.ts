import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v1'
import { State, Priority } from './types'

Vue.use(Vuex)

export default new Vuex.Store<State>({
  state: {
    tasks: {
      '88aea980-31ae-11ea-a56c-15a7ed720afe': {
        id: '88aea980-31ae-11ea-a56c-15a7ed720afe',
        done: true,
        title: 'Task Title',
        description:
          'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  ',
        priority: Priority.High,
        date: '2020-01-05T23:25:07.551Z',
        comments: [
          {
            author: 'Tiago Porto',
            date: '2020-01-05T23:25:07.551Z',
            message: 'First'
          },
          {
            author: 'Tiago Porto2',
            date: '2020-01-05T23:25:07.551Z',
            message: 'Second'
          }
        ]
      },
      '87aea980-34ai-11ea-a76c-15a7ed720abe': {
        id: '87aea980-34ai-11ea-a76c-15a7ed720abe',
        title: 'Task Title 22222',
        done: false,
        description:
          'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  ',
        priority: Priority.Low,
        date: '2020-01-05T23:25:07.551Z',
        comments: [
          {
            author: 'Tiago Porto',
            date: '2020-01-05T23:25:07.551Z',
            message: 'Third'
          }
        ]
      }
    }
  },
  mutations: {
    markAsDone(state, id) {
      const task = state.tasks[id]

      state.tasks[id] = {
        ...task,
        done: !task.done
      }
    },
    addNewTask(state, task) {
      state.tasks[task.id] = {
        ...task,
        comments: []
      }
    },
    addNewComment(state, { id, comment }) {
      const task = state.tasks[id]
      state.tasks[id] = {
        ...task,
        comments: [
          {
            ...comment,
            date: new Date().toISOString()
          }
        ]
      }
    },
    deleteTask(state, id) {
      Vue.delete(state.tasks, id)
    },
    editTask(state, edition) {
      const task = state.tasks[edition.id]

      state.tasks[edition.id] = {
        ...task,
        ...edition
      }
    }
  },
  actions: {
    addTask({ state, commit }, task) {
      const id = uuid()
      commit('addNewTask', {
        id,
        ...task
      })

      return id
    }
  },
  modules: {},
  getters: {
    tasksList(state) {
      return state.tasks
    },
    getTaskById: (state, getters) => (id: number) => {
      return getters.tasksList[id]
    }
  }
})
