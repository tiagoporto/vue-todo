<template>
  <form id="edit-form" @submit="handleSave">
    <legend>New Task</legend>

    <p>
      <label for="title">Title</label>
      <input v-model="task.title" type="text" name="title" required autofocus />
    </p>

    <p>
      <label for="description">Description</label>
      <textarea
        v-model="task.description"
        name="description"
        cols="30"
        rows="10"
      ></textarea>
    </p>

    <p>
      <label for="due-date">Set Due Date</label>
      <Datetime v-model="task.date" name="due-date" required />
    </p>

    <p>
      <label for="priority">Priority</label>
      <select v-model="task.priority" name="priority" required>
        <option :value="priority.Low">Low</option>
        <option :value="priority.Medium">Medium</option>
        <option :value="priority.High">High</option>
      </select>
    </p>

    <div class="actions-box">
      <Button @click="$router.push({ name: 'home' })">cancel</Button>
      <Button type="submit">save</Button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import { Button } from '@/components/Button'
import 'vue-datetime/dist/vue-datetime.min.css'
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
import { Priority } from '@/store/types'

export default Vue.extend({
  name: 'Edition',
  components: {
    Datetime,
    Button
  },
  props: {
    taskId: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      priority: Priority
    }
  },
  computed: {
    ...mapState({
      task(state) {
        if (this.taskId) {
          return this.getTaskById(this.taskId)
        }

        return {
          priority: Priority.Low,
          date: new Date().toISOString()
        }
      }
    }),
    ...mapGetters(['getTaskById'])
  },
  methods: {
    handleSave(e: Event) {
      e.preventDefault()
      if (this.task.title && this.task.date) {
        if (this.taskId) {
          this.editTask({ id: this.taskId, ...this.task })
        } else {
          ;(async () => {
            const taskId = await this.addTask(this.task)
          })()
        }
        this.$router.push({ name: 'home' })
      } else {
        alert('Fields title and date are required')
      }
    },
    ...mapMutations(['deleteTask', 'editTask']),
    ...mapActions(['addTask'])
  }
})
</script>

<style scoped src="./Edition.styl" lang="stylus"></style>
