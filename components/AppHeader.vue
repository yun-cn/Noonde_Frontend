<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
      </el-submenu>
  </el-menu>
</template>


<!-- ============================================================================ -->
<script>
export default {
  data() {
    return {
      "activeIndex": '1',
    }
  }
}

</script>

<!-- ============================================================================ -->

<style>

</style>
