import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Task Title',
        description:
          'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  ',
        priority: 'high',
        date: '2020-01-05T23:25:07.551Z',
        comments: [
          {
            author: 'Tiago Porto',
            date: '2020-01-05T23:25:07.551Z',
            message: 'Comment here'
          },
          {
            author: 'Tiago Porto2',
            date: '2020-01-05T23:25:07.551Z',
            message: 'Comment here2'
          }
        ]
      },
      {
        id: 20,
        title: 'Task Title 22222',
        description:
          'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  ',
        priority: 'high',
        date: '2020-01-05T23:25:07.551Z',
        comments: [
          {
            author: 'Tiago Porto',
            date: '2020-01-05T23:25:07.551Z',
            message: 'Comment here'
          },
          {
            author: 'Tiago Porto2',
            date: '2020-01-05T23:25:07.551Z',
            message: 'Comment here2'
          }
        ]
      }
    ]
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    editTask(state, edition) {
      state.tasks = state.tasks.map(task => {
        if (task.id === edition.id) {
          return {
            ...task,
            ...edition
          }
        }

        return task
      })
    }
  },
  actions: {},
  modules: {},
  getters: {
    tasksList(state) {
      return state.tasks
    },
    getTaskById: (state, getters) => (id: number) => {
      return getters.tasksList.find((task: any) => task.id === id)
    }
  }
})
