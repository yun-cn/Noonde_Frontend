<template>
  <el-container>
    <el-header>
      <AppHeader/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
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
.hljs {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 10px 20px;
  background-color: #fafafa;
  border: solid 1px #d0dbff;
  margin-bottom: 25px;
  border-radius: 4px;
  position: relative;
  margin:  0 auto;            /* 中央寄せ */
  width 85%;
  -webkit-font-smoothing: auto;
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
