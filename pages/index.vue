<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout justify-center align-center wrap row>
        <v-flex xs12>
          <v-avatar size="100px">
            <v-img src="/logo/noonde_log.png" style="width:80%" class="logoPosition"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex xs12 style="margin-top: 170px">
          <div class="frame_headding">
            <v-layout row>
              <v-flex xs5>
                <v-card dark color="primary">
                  <v-card-text class="px-0">4</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs4 class="mt-1">
                <no-ssr>
                <HotelDatePicker :i18n="oni18nCalendarChange()" class="color-active">
                </HotelDatePicker>
                </no-ssr>
              </v-flex>
              <v-flex xs3>
                <v-layout justify-space-between>
                  <v-select :items="expectedGuestItems" prepend-icon="people" :label="$t('index.people-number')" color="#00ca9d" class="number-of-guest"/>
                  <v-btn small outline class="mt-4" color="#808080">{{ $t('index.search-button') }}</v-btn>
                </v-layout>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
  .logoPosition {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    width: 500px !important;
    height: 200px !important;
    background-size: contain;
  }
  .frame_headding {
    marign-top: 200px;
    padding: 5px 10px;
    border: 1px solid #00ca9d;
    margin: 24px 0 16px;
  }
  .number-of-guest .v-input__append-outer .v-icon{
    color: blue !important;
  }

</style>

<script>
  import HotelDatePicker from 'vue-hotel-datepicker';
  import mixins from '~/utils/mixins/shared'

  export default {
    mixins: [mixins],
    async asyncData ({ query, route, store }) {
      store.commit('update', ['base.layout', {
        fullPath: route.fullPath
      }])
    },
    components: {
      HotelDatePicker,
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
