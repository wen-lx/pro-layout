<template>
  <div class="porvider"><slot></slot></div>
</template>

<script>
export default {
  // props: ['i18nRender'],
  provide () {
    const that = this
    return {
      // i18nRender: that.i18nRender
      // contentWidth,
      // breadcrumbRender
    }
  }
}
</script>

<style lang="stylus" scoped>
.porvider
  height 100%
</style>
