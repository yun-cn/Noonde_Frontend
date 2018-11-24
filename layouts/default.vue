<template>
  <div>
    <app-header/>
    <nuxt/>
  </div>
</template>

<style lang="stylus">
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
}
.el-header {
  background-color: #eef1f6;
}
</style>

<script>
import AppHeader from '~/components/AppHeader'
export default {
  components: {
    AppHeader
  }
}
</script>
