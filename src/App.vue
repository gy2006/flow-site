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
            <h1 class="slogan">Continuous Integration <br/> (CI/CD) Platform</h1>
            <ul class="list_slogan">
              <li>{{ $t('slogan.free') }}</li>
              <li>{{ $t('slogan.simple') }}</li>
              <li>{{ $t('slogan.scalable') }}</li>
              <li>{{ $t('slogan.plugin') }}</li>
            </ul>
            <div>
              <a class='btn btn-guide'
                 href="https://github.com/FlowCI/docs/blob/master/v1.0/start/index.md"
                 target="_blank">{{ $t('start') }}</a>
              <a class='btn btn-download' href="#download">{{ $t('download') }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <p class="desc">
        {{ $t('desc.1') }}<br />
        {{ $t('desc.2') }}<br />
        {{ $t('desc.3') }}<br />
      </p>
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

export default {
  name: 'app',
  data () {
    return {
      latestChangeLog: {
        versionAndData: '',
        changes: []
      }
    }
  },
  mounted () {
    axios.get('https://raw.githubusercontent.com/FlowCI/docs/master/CHANGELOG.md')
      .then((r) => {
        if (r.status !== 200) {
          return
        }

        let logs = this.loadChangeLog(r.data)
        this.latestChangeLog = logs[1]
      })
  },
  methods: {
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
