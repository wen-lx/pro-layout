<template>
  <div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer">
      <span>我来啦!</span>
    </el-drawer>
    <draggable @start="drag = true" @end="drag = false">
      <i v-if="!drawer" class="el-icon-s-tools setting" @click="drawer = true"></i>
      <i v-else class="el-icon-close setting" @click="drawer = false"></i>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.setting
  font-size 60px
  background-color pink
  border-radius 20px
</style>
