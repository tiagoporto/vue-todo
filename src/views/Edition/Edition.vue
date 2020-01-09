<template>
  <form id="edit-form" @submit="handleSave">
    <legend>New Task</legend>

    <p>
      <label for="title">title</label>
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
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </p>

    <Button @click="$router.push({ name: 'home' })">cancel</Button>
    <Button type="submit">save</Button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import { Button } from '@/components/Button'
import 'vue-datetime/dist/vue-datetime.min.css'
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'

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

<style scoped src="./Edition.styl" lang="stylus"></style>
