<template>
  <div class="home">
    <h1>pawaTask</h1>
    <router-link to="/create">Add a nex Task</router-link>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/edit">About</router-link>
    </div> -->
    <TaskList />
    <p>
      You do not have any tasks,
      <router-link to="/create">add a new one</router-link>
    </p>
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
