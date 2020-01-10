<template>
  <div>
    <h1>{{ task.title }}</h1>

    <p>{{ task.description }}</p>

    <p>
      <strong>Data:</strong>
      {{ formatDate(task.date) }}
    </p>

    <p>
      <strong>Priority:</strong>
      {{ task.priority }}
    </p>
    <hr />

    <p>
      <strong>Comments:</strong>
    </p>

    <ul class="comment-list">
      <li v-for="(comment, index) in task.comments" :key="index" class="comment-list__item">
        <p>
          <strong>{{ comment.author }}&nbsp;</strong>
          <span class="date">{{ formatDate(comment.date) }}</span>
        </p>
        {{ comment.message }}
      </li>

      <li class="comment-list__actions">
        <form @submit="handleSave">
          <input v-model="newComment['author']" type="text" placeholder="Author" required />
          <textarea
            v-model="newComment['message']"
            placeholder="Write comment"
            required
            cols="20"
            rows="5"
          />
          <Button type="submit">add comment</Button>
        </form>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { formatDate } from '@/utils/date'
import { Button } from '@/components/Button'

export default Vue.extend({
  name: 'Edition',
  components: {
    Button
  },
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      newComment: {
        author: null,
        message: null
      }
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
      if (this.newComment.author && this.newComment.message) {
        this.addNewComment({ id: this.taskId, comment: this.newComment })
        this.$forceUpdate()
      } else {
        alert('Please fill author and comment fields.')
      }
    },
    ...mapMutations(['addNewComment'])
  }
})
</script>

<style lang="stylus" scoped src="./Task.styl"></style>

