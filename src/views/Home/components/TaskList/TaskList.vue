<template>
  <div class="edition">
    <ul v-if="Object.keys(tasks).length" class="tasklist">
      <li v-for="(task, index) in tasks" :key="index" class="tasklist__item">
        <span class="tasklist__title">
          <input type="checkbox" :checked="task.done" @click="markAsDone(task.id)" />
          <router-link :to="{name: 'task', params: {taskId: task.id}}">{{ task.title }}</router-link>
        </span>

        <span class="actions-box">
          <span class="date-box">
            <font-awesome-icon :icon="calendarIcon" />
            {{ formatDate(task.date) }}
          </span>
          <Button
            title="comments"
            icon
            @click="$router.push({ name: 'task', params: { taskId: task.id } })"
          >
            <font-awesome-icon :icon="commentIcon" />
          </Button>

          <Button
            title="edit"
            icon
            @click="$router.push({ name: 'edit', params: { taskId: task.id } })"
          >
            <font-awesome-icon :icon="editIcon" />
          </Button>

          <Button title="delete" icon @click="handleDelete(task.id)">
            <font-awesome-icon :icon="deleteIcon" />
          </Button>
        </span>
      </li>
    </ul>

    <p v-else>
      You do not have any tasks,
      <router-link to="/create">add a new one</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarAlt, faComment } from '@fortawesome/free-regular-svg-icons'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { formatDate } from '@/utils/date'
import { Button } from '@/components/Button'

export default Vue.extend({
  name: 'TaskList',
  components: {
    FontAwesomeIcon,
    Button
  },
  data() {
    return {
      deleteIcon: faTimes,
      commentIcon: faComment,
      editIcon: faPencilAlt,
      calendarIcon: faCalendarAlt
    }
  },
  computed: {
    ...mapState({ tasks: (state: any) => state.tasks })
  },
  methods: {
    handleDelete(taskId: string) {
      const confirmation = confirm('Remove task?')
      confirmation && this.deleteTask(taskId)
    },
    formatDate,
    ...mapMutations(['deleteTask', 'markAsDone'])
  }
})
</script>

<style scoped src="./TaskList.styl" lang="stylus"></style>
