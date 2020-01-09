<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Settings } from 'luxon'
Settings.defaultLocale = 'us'

export default Vue.extend({
  name: 'App'
  beforeCreate() {
    let path = localStorage.getItem('path')

    if (path) {
      localStorage.removeItem('path')
      this.$router.push(path)
    }
})
</script>

<style lang="stylus" src="./App.styl"></style>
