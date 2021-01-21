<template>
  <div>
    <h1 style="padding: 10px">member manage</h1>
    <el-image :src="src"></el-image>
  </div>
</template>

<script>
export default {
  inject: ['mediaQuery', 'handleMediaQuery'],
  data () {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  mounted () {
    console.log(666, this.mediaQuery)
  }
}
</script>

<style lang="stylus" scoped>
</style>