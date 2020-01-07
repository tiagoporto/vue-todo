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
})
</script>

<style lang="stylus" src="./App.styl"></style>
