<template>
  <!-- <ConfigProvider :i18nRender="i18nRender" :contentWidth="props.contentWidth" :breadcrumbRender="breadcrumbRender"> -->
  <ConfigProvider>
    <ContainerQuery>
      <Layout><slot></slot></Layout>
    </ContainerQuery>
  </ConfigProvider>
</template>

<script>
import ContainerQuery from './components/ContainerQuery'
import ConfigProvider from './components/ConfigProvider'
import Layout from './components/Layout'
export default {
  components: {
    ContainerQuery,
    ConfigProvider,
    Layout
  },
  provide () {
    return {
      menus: this.menus,
      slots: this.$slots,
      settings: this.$attrs.settings
    }
  },
  data () {
    return {
      menus: this.$attrs.menus.filter(item => {
        if (item.meta && item.meta.prolayout) {
          item.children = item.children.filter(ite => {
            return ite.meta.menu
          })
          return item
        }
      })
    }
  },
  computed: {
  },
  mounted () {
    console.log(111, this)
    localStorage.setItem('themeColor', '#1890ff')
    localStorage.setItem('navMode', 'side')
  }
}
</script>

<style lang="stylus" scoped>
@import "./init.css"

</style>
