<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#eef1f6"
      text-color="#303133"
      active-text-color="#409eff">
      <el-menu-item index="logo" class="el-header-logo">Noonde</el-menu-item>
      <el-menu-item index="login" class="el-header-item-login">{{ $t(`components.app-header.login`) }}</el-menu-item>
      <el-submenu index="lang" class="el-header-item-lang">
        <template slot="title" >{{ $t(`components.app-header.lang.zh-CN`) }}</template>
        <el-menu-item index="zh-CN">{{ $t(`components.app-header.lang.zh-CN`) }}</el-menu-item>
        <el-menu-item index="en-US">{{ $t(`components.app-header.lang.en-US`) }}</el-menu-item>
        <el-menu-item index="ja">{{ $t(`components.app-header.lang.ja`) }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<!-- ============================================================================ -->
<style lang="stylus">
  .el-menu-demo
    border-bottom: 0 !important
  .el-header-logo
    font-size: 20px
  .el-header-item-login
    float: right !important
    font-size: 17px
  .el-header-item-lang
    float: right !important
</style>
<!-- ============================================================================ -->

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      langs: {
        'zh-CN': '中文',
        'en-US': 'English',
        'ja': '日本語'
      }
    }
  },
  computed: {
    lang() {
      console.log(this.$route.path.split('/')[1])
      return this.$route.path.split('/')[1] || 'zh-CN';
     },
   displayedLang() {
     return this.langs[this.lang] || '中文';
   },
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
