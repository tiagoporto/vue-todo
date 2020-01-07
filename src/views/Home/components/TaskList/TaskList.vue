<template>
  <div class="edition">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.title }}
        <font-awesome-icon :icon="calendarIcon" />
        {{ task.date }}
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarAlt, faComment } from '@fortawesome/free-regular-svg-icons'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

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
    ...mapState({ tasks: state => state.tasks })
  },
  methods: {
    ...mapMutations(['deleteTask'])
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./TaskList.styl" lang="stylus"></style>
