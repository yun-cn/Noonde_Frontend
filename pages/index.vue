<template>
  <div>
    <v-container class="text-xs-center">
      <v-layout justify-center align-center wrap>
        <v-flex xs12>
          <v-avatar size="100px">
            <v-img src="/logo/noonde_log.png" style="width:80%" class="logoPosition"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex xs12 style="margin-top: 170px">
          <div class="frame_headding">
            <v-layout row justify-space-between>
              <v-flex xs5>
                <v-card dark color="primary">
                  <v-card-text class="px-0">4</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card dark color="primary">
                  <v-card-text class="px-0">4</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card dark color="primary">
                  <v-card-text class="px-0">4</v-card-text>
                </v-card>
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
    border: 1px solid #669fdf;
    margin: 24px 0 16px;
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
