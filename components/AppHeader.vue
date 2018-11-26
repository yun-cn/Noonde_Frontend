<template>
    <div>
      <v-card flat tile>
        <v-toolbar dense color ="blue-grey lighten-5">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Noonde</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu offset-y bottom left attach>
            <v-btn slot="activator" flat style="min-width: 48px">
              <v-img :src="`language/${currentLanguage.country}.png`" width="24px">
              </v-img>
            </v-btn>
            <v-list light>
              <v-list-tile avatar v-for="language in languages" :key="language.locale" @click="changeLanguage(context, language.locale)">
                <v-list-tile-avatar tile size="24px">
                  <v-img  :src="`language/${language.country}.png`" width="24px"></v-img>
                </v-list-tile-avatar>
                <v-list-tile-title>{{language.name}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-card>
    </div>
</template>

<!-- ============================================================================ -->
<script>
  import mixins from '~/utils/mixins/shared'

  export default {
    mixins: [mixins],
    data() {
      return {
        context: this,
        languages: [
          {"name": "English", "locale": "en-US", "country": "us"},
          {"name": "简体中文", "locale": "zh-CN", "country": "cn"},
          {"name": "日本語",   "locale": "ja",    "country": "jp"},
        ],
      }
    },
    computed: {
      currentLanguage () {
        return this.languages.find(l => l.locale === this.$i18n.locale)
      },
      fullPath () {
        return this.$store.state.base.layout.fullPath
      },
    },
    methods: {
    }
  }
</script>
<!-- ============================================================================ -->


<style>

</style>

