<template>
  <div>
    <h1>{{ task.title }}</h1>

    <p>{{ task.description }}</p>

    <p>Data: {{ task.date }}</p>

    <p>Priority: {{ task.priority }}</p>
    <hr />

    <p>Comments</p>
    <ul>
      <li v-for="(comment, index) in task.comments" :key="index">
        {{ comment.author }}
        {{ comment.date }}
        {{ comment.message }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Edition',
  props: {
    taskId: {
      type: Number,
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
  }
})
</script>
