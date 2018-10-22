<template>
  <div>
    <el-main class="search-bar-center">
      <div class="block">
        <div class="logo-center">
          <img src="logo/noonde_log.png"/>
        </div>
        <el-row :gutter="10" justify="space-between" type="flex">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>

<style scoped>
  .search-bar-center {
    margin-top: 300px;
  }
  .logo-center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .block {
    padding: 0 10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

<script>
import 'element-ui/lib/theme-chalk/display.css'

export default {
  async asyncData ({ query, route, store, redirect }) {
    store.commit('update', ['base.layout', {
      current: 'auth.login',
      fullPath: route.fullPath
    }])
  },
  data () {
    return {
      value: null
    }
  }
}
</script>
