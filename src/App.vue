<template>
  <div class="page-home">
    <header class="nav-header">
      <a class="navbar-brand">
        <i class="icon icon-logo"></i>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/">{{ $t('home') }}</a>
        </li>
        <li class="nav-item">
          <a href="#download">{{ $t('download') }}</a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/FlowCI/docs" target="_blank">{{ $t('document') }}</a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/FlowCI/docs/issues" target="_blank">{{ $t('issue') }}</a>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <svg width="20" height="20" viewBox="0 0 24 24" class="lang-icon">
              <path
                d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
            </svg>
            <div class="ci-dropdown">
              <ul class="ci-dropdown-menu">
                <li :class="['ci-dropdown-menu-item', lang === 'en' ? 'ci-dropdown-menu-item-selected' : '']"
                    role="menuitem" @click="onLangClick('en')">
                  <i aria-label="icon: check" class="ciicon" style="visibility: visible; color: rgb(82, 196, 26);">
                    <svg viewBox="64 64 896 896" focusable="false"
                         :class="[lang === 'en' ? 'ciiconvisable' : 'ciiconhide']" data-icon="check" width="1em"
                         height="1em" fill="currentColor" aria-hidden="true">
                      <path
                        d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                    </svg>
                  </i>
                  English
                </li>
                <li :class="['ci-dropdown-menu-item', lang === 'cn' ? 'ci-dropdown-menu-item-selected' : '']"
                    role="menuitem" @click="onLangClick('cn')">
                  <i aria-label="icon: check" class="ciicon" style="visibility: hidden; color: rgb(82, 196, 26);">
                    <svg viewBox="64 64 896 896" focusable="false"
                         :class="[lang === 'cn' ? 'ciiconvisable' : 'ciiconhide']" data-icon="check" width="1em"
                         height="1em" fill="currentColor" aria-hidden="true">
                      <path
                        d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                    </svg>
                  </i>
                  简体中文
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a class="btn btn-github" href="https://github.com/flowci">
            <i class="icon icon-github"></i>Fork me on GitHub
          </a>
        </li>
      </ul>
    </header>

    <section class='home-section'>
      <div class="container">
        <div class="slogan-group">
          <div class="f-logo"></div>
          <div>
            <h1 class="slogan">{{ $t('title') }} <br/> CI/CD {{ $t('platform') }}</h1>
            <ul class="list_slogan">
              <li><h3>{{ $t('slogan.free') }}</h3></li>
              <li><h3>{{ $t('slogan.simple') }}</h3></li>
              <li><h3>{{ $t('slogan.scalable') }}</h3></li>
              <li><h3>{{ $t('slogan.parallel') }}</h3></li>
              <li><h3>{{ $t('slogan.ha') }}</h3></li>
              <li><h3>{{ $t('slogan.plugin') }}</h3></li>
            </ul>
            <div>
              <a class='btn btn-guide'
                 :href="`https://github.com/FlowCI/docs/blob/master/${lang}/start/index.md`"
                 target="_blank">{{ $t('start') }}</a>
              <a class='btn btn-download' href="#download">{{ $t('download') }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <p class="desc">
        {{ $t('desc.1') }}<br/>
        {{ $t('desc.2') }}<br/>
      </p>

      <carousel :navigationEnabled="false" :perPage="1" :autoplay="true">
        <slide>
          <img :src=imgJobList style="width: 100%;">
          <p class="desc-img">Job List</p>
        </slide>
        <slide>
          <img :src=imgYmlConfig style="width: 100%;">
          <p class="desc-img">YAML Config</p>
        </slide>
        <slide>
          <img :src=imgJobAgent style="width: 100%;">
          <p class="desc-img">Job Detail</p>
        </slide>
        <slide>
          <img :src=imgOnlineDebug style="width: 100%;">
          <p class="desc-img">Online Debugging</p>
        </slide>
        <slide>
          <img :src=imgCoverageReport style="width: 100%;">
          <p class="desc-img">Coverage Report</p>
        </slide>
        <slide>
          <img :src=imgStatistic style="width: 100%;">
          <p class="desc-img">Statistic</p>
        </slide>
      </carousel>

      <div class="gradation-box">
        <div id="download" class="download-group">
          <h2>{{ $t('download') }}</h2>
          <div class="download-version">{{ latestChangeLog.versionAndDate }}</div>
          <div class="download-actions">
            <a href="https://github.com/flowci/docker" target="_blank">
              <i class="icon icon-download"></i>
              Docker
            </a>
            <a href="https://github.com/flowci">
              <i class="icon icon-github"></i>
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div class="changelog-group">
        <h3>{{ $t('changelog') }}</h3>
        <ul class="changelog-list">
          <li v-for="item in latestChangeLog.changes" :key="item">
            <div class="changelog-list-item">
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-container">
        <span>© {{ new Date().getFullYear() }} flow.ci</span>
        <span>
          <span>Licensed under
            <a href="" class="licensed">Apache License, Version 2.0</a>
          </span>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel'
import imgJobList from './assets/static/images/flowci_job_list.png'
import imgCoverageReport from './assets/static/images/flowci_coverage_report.png'
import imgJobAgent from './assets/static/images/flowci_job_agent.png'
import imgOnlineDebug from './assets/static/images/flowci_online_debug.png'
import imgYmlConfig from './assets/static/images/flowci_yml_config.png'
import imgStatistic from './assets/static/images/flowci_statistic.png'

export default {
  name: 'app',
  data () {
    return {
      lang: 'en',
      logs: [],
      imgJobList,
      imgCoverageReport,
      imgOnlineDebug,
      imgJobAgent,
      imgYmlConfig,
      imgStatistic
    }
  },
  mounted () {
    axios.get('https://raw.githubusercontent.com/FlowCI/docs/master/CHANGELOG.md')
      .then((r) => {
        if (r.status !== 200) {
          return
        }

        this.logs = this.loadChangeLog(r.data)
      })
  },
  components: {
    Carousel,
    Slide
  },
  computed: {
    latestChangeLog () {
      if (this.logs.length < 2) {
        return {
          versionAndData: '',
          changes: []
        }
      }

      if (this.lang === 'en') {
        return this.logs[1]
      }

      return this.logs[0]
    }
  },
  methods: {
    onLangClick (val) {
      this.lang = val
      this.$i18n.locale = this.lang
    },

    loadChangeLog (data) {
      let lines = data.split('\n')
      let logs = []
      let current

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trimLeft()

        if (line.startsWith('-')) {
          if (current !== undefined) {
            logs.push(current)
          }

          current = {
            versionAndDate: line.substring(1).trim(),
            changes: []
          }

          continue
        }

        if (line.startsWith('*')) {
          current.changes.push(line.substring(1).trim())
        }
      }

      return logs
    }
  }
}
</script>

<style>

</style>
