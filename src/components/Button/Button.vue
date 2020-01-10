<template>
  <button v-bind="$attrs" :class="{ icon: icon }" v-on="listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: Boolean
    }
  },
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
