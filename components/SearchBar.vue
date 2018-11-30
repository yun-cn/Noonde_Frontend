<template>
  <el-row justify="center">
  <div class="hljs">
    <el-row type="flex" justify="space-between">
      <el-col :sm="8">
        <div class="grid-content">
          <el-input placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :sm="7">
        <div class="grid-content">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :sm="3">
        <div class="grid-content">
          <el-input-number @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
      </el-col>
      <el-col :sm="2">
        <div>
          <el-button type="primary" plain>主要按钮</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
  </el-row>
</template>

<script>
  export default {
    name: "SearchBar"
  }
</script>

<style>
  .search-bar-center {
    justify-content: center;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
