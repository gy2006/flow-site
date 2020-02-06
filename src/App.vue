<template>
  <div class="page-home">
    <header class="nav-header">
      <a class="navbar-brand">
        <i class="icon icon-logo"></i>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/">首页</a>
        </li>
        <li class="nav-item">
          <a href="">下载</a>
        </li>
        <li class="nav-item">
          <a href="">文档</a>
        </li>
        <li class="nav-item">
          <a href="">社区</a>
        </li>
        <li class="nav-item">
          <a href="">博客</a>
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
            <h1 class="slogan">国内首套开源持续集成<br />(CI) 解决方案</h1>
            <ul class="list_slogan">
              <li>简单安装，快速使用，跨平台</li>
              <li>编译、测试、打包、发布全流程自动化</li>
              <li>为 iOS 、Android 移动开发量身打造</li>
            </ul>
            <div>
              <button class='btn btn-guide'>快速入门</button>
              <button class='btn btn-download'>下载</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <p class="desc">
        flow.ci 使用 Java 语言编写，开源跨平台，<br />
        flow.ci 安装包共有4个安装程序，运行 Install 脚本可一键安装。 <br />
        你可以通过阅读安装帮助文档进行安装配置，<br />
        安装使用过程中的任何问题你可以在社区与我们取得联系。
      </p>
      <div class="gradation-box">
        <div class="download-group">
          <h2>下载</h2>
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
