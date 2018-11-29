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
        <!-- 语言选择器 -->
        <li class="el-header-item-lang">
          <el-dropdown
            trigger="click"
            class="nav-dropdown nav-lang"
            :class="{ 'is-active': langDropdownVisible }">
              <span>
                {{ displayedLang }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            <el-dropdown-menu
              slot="dropdown"
              class="nav-dropdown-list"
              @input="handleLangDropdownToggle">
              <el-dropdown-item
                v-for="(value, key) in langs"
                :key="key"
                @click.native="switchLang(key)">
                {{ value }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
    </el-menu>
  </div>
</template>

<!-- ============================================================================ -->
<style lang="stylus">
  .el-menu-demo
    border-bottom: 0 !important
  .el-header-logo
    font-size: 17px
  .el-header-item-lang
    float: right !important
    margin-top: 20px
</style>

<!-- ============================================================================ -->

<script>
  import Default from "../layouts/default";
  export default {
    components: {Default},
    data() {
     return {
       verDropdownVisible: true,
       langDropdownVisible: true,
       langs: {
         'zh-CN': '中文',
         'en-US': 'English',
         'ja': '日本語'
       }
     }
   },
    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      displayedLang() {
        return this.langs[this.lang] || '中文';
      },
      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['header'];
      },
    }
  }
</script>
