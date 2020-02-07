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
          <a href="">{{ $t('download') }}</a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/FlowCI/docs">{{ $t('document') }}</a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/FlowCI/docs/issues">{{ $t('issue') }}</a>
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
              <button class='btn btn-guide'>{{ $t('start') }}</button>
              <button class='btn btn-download'>{{ $t('download') }}</button>
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
        <div class="download-group">
          <h2>{{ $t('download') }}</h2>
          <div class="download-version">V1.0 Beta</div>
          <div class="download-actions">
            <a>
              <i class="icon icon-download"></i>
              安装包
            </a>
            <a href="https://github.com/flowci">
              <i class="icon icon-github"></i>
              源码
            </a>
          </div>
        </div>
      </div>
      <div class="changelog-group">
        <h3>本次更新<small>历史更新日志</small></h3>
        <ul class="changelog-list">
          <li>
            <div class="changelog-list-item">
              在创建项目阶段加入项目有效性检测，大大减少了构建失败率，有问题早发现！
            </div>
          </li>
          <li>
            <div class="changelog-list-item">
              在创建项目阶段加入项目配置功能，比如 iOS 用户可以灵活切换构建需要使用的 Scheme !
            </div>
          </li>
          <li>
            <div class="changelog-list-item">
              创建项目流程 UI & UE 整体提升，单页面一览无余!
            </div>
          </li>
          <li>
            <div class="changelog-list-item">
              单元测试、产物找不到？试试新版的构建详情页!<br />
              更多优化请在新版体验！
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

export default {
  name: 'app'
}
</script>

<style>

</style>
