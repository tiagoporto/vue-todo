<template>
  <div class="edition">
    <ul v-if="tasks.length">
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.title }}
        <font-awesome-icon :icon="calendarIcon" />
        {{ formatDate(task.date) }}
        <router-link :to="`/task/${task.id}`">
          <font-awesome-icon :icon="commentIcon" />
        </router-link>
        <router-link :to="`/edit/${task.id}`">
          <font-awesome-icon :icon="editIcon" />
        </router-link>

        <button @click="deleteTask(task.id)">
          <font-awesome-icon :icon="deleteIcon" />
        </button>
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

export default Vue.extend({
  name: 'TaskList',
  components: {
    FontAwesomeIcon
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
    formatDate,
    ...mapMutations(['deleteTask'])
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./TaskList.styl" lang="stylus"></style>
