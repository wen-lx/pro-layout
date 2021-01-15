<template>
  <div>
    <h1>tttttttttttt</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>mmmmmmmmmmm</h1>
    <h1>tttttttttttt</h1>
    <div class="bottom">bottom</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottom
  height 40px
  position fixed
  bottom 0
  background-color #fff
  width 100%
</style>
