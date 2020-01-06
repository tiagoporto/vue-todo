<template>
  <form id="edit-form">
    <h1>New Task</h1>

    <p>title</p>
    <input type="text" />

    <p>Description</p>
    <textarea name cols="30" rows="10"></textarea>

    <p>Set Due Date</p>
    <datetime />

    <p>Priority</p>
    <select id name>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <p>Comment</p>
    <textarea name cols="30" rows="10"></textarea>

    <router-link to="/">cancel</router-link>
    <button>save</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import { Settings } from 'luxon'
import 'vue-datetime/dist/vue-datetime.min.css'

Settings.defaultLocale = 'us'

export default Vue.extend({
  name: 'Edition',
  components: {
    datetime: Datetime
  }
})
</script>
