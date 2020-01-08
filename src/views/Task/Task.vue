<template>
  <div>
    <router-link to="/">back</router-link>

    <h1>{{ task.title }}</h1>

    <p>{{ task.description }}</p>

    <p>Data: {{ formatDate(task.date) }}</p>

    <p>Priority: {{ task.priority }}</p>
    <hr />

    <p>Comments</p>
    <ul>
      <li v-for="(comment, index) in task.comments" :key="index">
        {{ comment.author }}
        {{ formatDate(comment.date) }}
        {{ comment.message }}
      </li>

      <li>
        <form>
          <input type="text" placeholder="Author" required />
          <input type="textarea" placeholder="Write comment" required />
          <button type="submit">add comment</button>
        </form>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { formatDate } from '@/utils/date'

export default Vue.extend({
  name: 'Edition',
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      task: {}
    }
  },
  computed: {
    ...mapGetters(['getTaskById'])
  },
  created() {
    this.task = this.getTaskById(this.taskId)
  },
  methods: {
    formatDate
  }
})
</script>
