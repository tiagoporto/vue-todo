<template>
  <div id="app">
    <Header />
    <Main>
      <router-view />
    </Main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Settings } from 'luxon'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
Settings.defaultLocale = 'us'

export default Vue.extend({
  name: 'App',
  components: { Header, Main }
})
</script>

<style lang="stylus" src="./App.styl"></style>
