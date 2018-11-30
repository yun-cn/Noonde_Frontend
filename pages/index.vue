<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="logoPosition">
          <img src="logo/noonde_log.png" />
        </div>
      </el-col>
    </el-row>
    <SearchBar/>
  </div>
</template>

<style scoped>
  .logoPosition {
    padding-top: 109px;
    display: flex;
    justify-content: center;
  }
  .frame_headding {
    marign-top: 200px;
    padding: 5px 10px;
    border: 1px solid #00ca9d;
    margin: 24px 0 16px;
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
  import axios from '~/plugins/axios';
  import mixins from '~/utils/mixins/shared';
  import SearchBar from '~/components/SearchBar';
  import 'element-ui/lib/theme-chalk/display.css';

  export default {
    mixins: [mixins],
    async asyncData ({ query, route, store }) {
      store.commit('update', ['base.layout', {
        fullPath: route.fullPath
      }])
    },
    components: {
      SearchBar,
    },
    data () {
      return {
        jaCalendars: {
          night: '日',
          nights: '日',
          'day-names': ['日', '月', '火', '水', '木', '金', '土'],
          'check-in': 'チェックイン',
          'check-out': 'チェックアウト',
          'month-names': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        zhCNCalendars: {
          night: '天',
          nights: '天',
          'day-names': ['日', '一', '二', '三', '四', '五', '六'],
          'check-in': '入住日',
          'check-out': '退房日',
          'month-names': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        enUSCalendars: {
          night: 'night',
          nights: 'nights',
          'day-names': ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
          'check-in': 'Check-In',
          'check-out': 'Check-Out',
          'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December', 'January'],
        },
        expectedGuestItems: this.rangeOptionsForSelect(1, 20),
      }
    },
    methods: {
      oni18nCalendarChange() {
        let locale = this.$store.state.base.locale.selected;
        console.log(locale)
        switch (locale) {
          case 'zh-CN':
            return this.zhCNCalendars;
          case 'ja':
            return this.jaCalendars;
          case 'en-US':
            return this.enUSCalendars;
        }
      },
    },
  }
</script>
