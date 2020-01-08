<template>
  <div class="home">
    <h1>pawaTask</h1>
    <router-link to="/create">Add a nex Task</router-link>
    <TaskList />
  </div>
</template>

<script>
import TaskList from './components/TaskList'

export default {
  name: 'Home',
  components: {
    TaskList
  }
}
</script>
