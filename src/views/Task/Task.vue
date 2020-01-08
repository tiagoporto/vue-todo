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
        <form @submit="handleSave">
          <input v-model="newComment.author" type="text" placeholder="Author" required />
          <input v-model="newComment.message" type="textarea" placeholder="Write comment" required />
          <button type="submit">add comment</button>
        </form>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
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
      newComment: {}
    }
  },
  computed: {
    ...mapState({
      task(state) {
        return this.getTaskById(this.taskId)
      }
    }),
    ...mapGetters(['getTaskById'])
  },
  methods: {
    formatDate,
    handleSave(e: Event) {
      e.preventDefault()
      this.addNewComment({ id: this.taskId, comment: this.newComment })
    },
    ...mapMutations(['addNewComment'])
  }
})
</script>
