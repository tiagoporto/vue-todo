import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: '88aea980-31ae-11ea-a56c-15a7ed720afe',
        done: true,
        title: 'Task Title',
        description:
          'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  ',
        priority: 'high',
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
      {
        id: '87aea980-34ai-11ea-a76c-15a7ed720abe',
        title: 'Task Title 22222',
        description:
          'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  ',
        priority: 'high',
        date: '2020-01-05T23:25:07.551Z',
        comments: [
          {
            author: 'Tiago Porto',
            date: '2020-01-05T23:25:07.551Z',
            message: 'Third'
          }
        ]
      }
    ]
  },
  mutations: {
    markAsDone(state, id) {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done
          }
        }

        return task
      })
    },
    addNewTask(state, task) {
      state.tasks.push(task)
    },
    addNewComment(state, { id, comment }) {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            comments: [
              ...task.comments,
              {
                ...comment,
                date: new Date().toISOString()
              }
            ]
          }
        }

        return task
      })
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
      return getters.tasksList.find((task: any) => task.id === id)
    }
  }
})
