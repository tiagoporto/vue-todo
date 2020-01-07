<template>
  <form id="edit-form" @submit="handleSave">
    <h1>New Task</h1>

    <p>title</p>
    <input type="text" :value="task.title" />

    <p>Description</p>
    <textarea name cols="30" rows="10" :value="task.description"></textarea>

    <p>Set Due Date</p>
    <datetime :value="task.date" />

    <p>Priority</p>
    <select :value="task.priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <p>Comment</p>
    <textarea name cols="30" rows="10"></textarea>

    <router-link to="/">cancel</router-link>
    <button @click="handleDelete(task.id)">delete</button>
    <button type="submit">save</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.min.css'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default Vue.extend({
  name: 'Edition',
  components: {
    datetime: Datetime
  },
  props: {
    taskId: {
      type: Number,
      default: undefined
    }
  },
  computed: {
    ...mapState({
      task(state) {
        if (this.taskId) {
          return this.getTaskById(this.taskId)
        }

        return []
      }
    }),
    ...mapGetters(['getTaskById'])
  },
  methods: {
    handleDelete(id: Number) {
      this.deleteTask(id)
      this.$router.push({ name: 'home' })
    },
    handleSave(e: Event) {
      e.preventDefault()

      if (this.taskId) {
        this.editTask({ id: this.taskId, title: 'blablal' })
      } else {
        this.addTask()
        // this.$router.push({ name: 'edit', params: { taskId: 123 } })
      }
    },
    ...mapMutations(['deleteTask', 'addTask', 'editTask'])
  }
})
</script>
