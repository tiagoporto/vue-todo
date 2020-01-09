<template>
  <div class="home">
    <Button @click="$router.push({ name: 'create' })">Add a nex Task</Button>
    <TaskList />
  </div>
</template>

<script>
import TaskList from './components/TaskList'
import { Button } from '@/components/Button'

export default {
  name: 'Home',
  components: {
    TaskList,
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Home.styl" lang="stylus"></style>
