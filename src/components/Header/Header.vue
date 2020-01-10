<template>
  <header class="header">
    <div v-if="$route.name !== 'home'">
      <router-link to="/">back</router-link>
    </div>
    <h1>
      <img src="../../../assets/pawatask-logo.svg" alt="pawatask logo" width="160" />
    </h1>
  </header>
</template>

<style lang="stylus" scoped src="./Header.styl"></style>
