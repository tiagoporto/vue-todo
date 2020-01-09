<template>
  <button v-bind="$attrs" v-on="listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  computed: {
    listeners() {
      return {
        ...this.$listeners
      }
    }
  }
}
</script>

<style lang="stylus" scoped src="./Button.styl"></style>
