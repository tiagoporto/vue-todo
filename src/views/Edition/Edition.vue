<template>
  <form id="edit-form" @submit="handleSave">
    <h1>New Task</h1>

    <p>title</p>
    <input v-model="task.title" type="text" required />

    <p>Description</p>
    <textarea v-model="task.description" name cols="30" rows="10"></textarea>

    <p>Set Due Date</p>
    <datetime v-model="task.date" required />

    <p>Priority</p>
    <select v-model="task.priority" required>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <router-link to="/">cancel</router-link>
    <button type="submit">save</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.min.css'
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'Edition',
  components: {
    datetime: Datetime
  },
  props: {
    taskId: {
      type: String,
      default: undefined
    }
  },
  computed: {
    ...mapState({
      task(state) {
        if (this.taskId) {
          return this.getTaskById(this.taskId)
        }

        return {
          priority: 'low',
          date: new Date().toISOString()
        }
      }
    }),
    ...mapGetters(['getTaskById'])
  },
  methods: {
    handleSave(e: Event) {
      e.preventDefault()
      if (this.taskId) {
        this.editTask({ id: this.taskId, ...this.task })
      } else {
        ;(async () => {
          const taskId = await this.addTask(this.task)
        })()
      }
      this.$router.push({ name: 'home' })
    },
    ...mapMutations(['deleteTask', 'editTask']),
    ...mapActions(['addTask'])
  }
})
</script>
