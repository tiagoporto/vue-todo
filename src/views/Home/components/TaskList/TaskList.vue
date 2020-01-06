<template>
  <div class="edition">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{task.title}} {{task.date}}
        <router-link :to="`/task/${task.id}`">comments</router-link>
        <router-link :to="`/edit/${task.id}`">edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'TaskList',
  data() {
    return {
      tasks: []
    }
  },
  computed: {
    ...mapGetters(['tasksList'])
  },
  created() {
    this.tasks = this.tasksList
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./TaskList.styl" lang="stylus"></style>
