<!--
 * @Author       : 震雨 LuckRain7
 * @Date         : 2020-07-16
 * @Description  : 博客网址推荐
 * @ Love and Peace
-->
<script>
export default {
  data() {
    return {
      renderData: {
        name: 'Blog 博客',
        children: [
          // 中文
          {
            name: '中文博客',
            children: [
              {
                name: '阮一峰的网络日志',
                url: 'http://www.ruanyifeng.com/blog/',
              },
              {
                name: '淘系前端团队（FED）用技术为体验提供无限可能',
                url: 'https://fed.taobao.org/',
              },
              {
                name:
                  '百度 EFE（Excellent FrontEnd）技术体系，前身是 ECOM 前端团队，后经过技术的发展，逐渐形成一套完善的前端技术体系。',
                url: 'https://efe.baidu.com/',
              },
              {
                name: 'AlloyTeam|腾讯全端 AlloyTeam 团队',
                url: 'http://www.alloyteam.com/',
              },
              { name: '奇舞团 - 360', url: 'https://75.team/' },
              { name: '凹凸实验室', url: 'https://aotu.io/' },
              { name: 'JDC 京东设计中心', url: 'http://jdc.jd.com/' },
              { name: '携程 UED', url: 'http://ued.ctrip.com/' },
              { name: '美团技术团队', url: 'https://tech.meituan.com/' },
              { name: 'WecTeam', url: 'https://wecteam.io/' },
              {
                name:
                  '冴羽博客，包含： JavaScript 深入系列、JavaScript 专题系列、ES6 系列、React 系列。',
                url: 'https://github.com/mqyqingfeng/Blog',
              },
              {
                name: 'GitHub 上整理 中文独立博客列表',
                url: 'https://github.com/timqian/chinese-independent-blogs',
              },
              { name: 'Paper 安全技术精粹', url: 'https://paper.seebug.org/' },
              {
                name: 'Vue.js 技术揭秘',
                url: 'https://ustbhuangyi.github.io/vue-analysis/',
              },
              { name: '木易杨前端进阶', url: 'https://www.muyiy.cn/' },
              { name: '张鑫旭个人主页', url: 'https://www.zhangxinxu.com/' },
              {
                name: 'awesome-coding-js 用 JavaScript 实现的算法和数据结构',
                url: 'http://www.conardli.top/docs/',
              },
              { name: '神三元的博客', url: 'http://47.98.159.95/my_blog/' },
              { name: '前端面试与进阶指南', url: 'https://www.cxymsg.com/' },
              {
                name: '全栈修炼',
                url: 'https://biaochenxuying.github.io/blog/',
              },
              {
                name: '前端小智',
                url: 'https://github.com/qq449245884/xiaozhi',
              },
              {
                name: '翁天信 · Dandy Weng 的个人网站主页',
                url: 'https://www.dandyweng.com/',
              },
              {
                name: 'Barret 李靖 | 小胡子哥的个人网站',
                url: 'https://www.barretlee.com/',
              },
              { name: '云谦 - blog', url: 'https://github.com/sorrycc/blog' },
              { name: '程序员开发学习博客', url: 'https://www.maiyewang.com/' },
              {
                name: '山月的琐碎博客记录 | 山月行',
                url: 'https://shanyue.tech/',
              },
              {
                name: '商业分析 (BA) 周刊',
                url: 'https://www.yuque.com/baclub/weekly',
              },
              {
                name: '唐霜的博客\_编程的时候我叫“否子戈”！',
                url: 'https://www.tangshuang.net/',
              },
            ],
          },
          // 英文
          {
            name: '英文博客',
            children: [
              {
                name: "Stefan's web dev journey",
                url: 'https://www.stefanjudis.com/',
              },
              {
                name: 'Blog - Advanced Web Machinery',
                url: 'https://advancedweb.hu/',
              },
              {
                name:
                  'Content Strategy Best Practices, Guides & Basics | Contentful Blog | Contentful',
                url: 'https://www.contentful.com/blog/',
              },
              {
                name: 'Blog - Advanced Web Machinery',
                url: 'https://advancedweb.hu/',
              },
              {
                name: 'AppSignal blog: The latest on everything AppSignal',
                url: 'https://blog.appsignal.com/',
              },
              {
                name: 'Today I Learned]',
                url: 'https://github.com/jbranchaud/til',
              },
              { name: 'LostMoa', url: 'https://lostmoa.com/' },
              { name: 'Uber Engineering Blog', url: 'https://eng.uber.com/' },
              {
                name:
                  'WebAssembly Weekly · A community-driven weekly newsletter about WebAssembly',
                url: 'https://wasmweekly.news/',
              },
              {
                name:
                  'Data Language - We combine vast experience in technical solutions engineering with cutting edge data science',
                url: 'https://datalanguage.com/',
              },
              {
                name: 'Medium – Get smarter about what matters to you.',
                url: 'https://medium.com/',
              },
              {
                name: '2ality – JavaScript and more',
                url: 'https://2ality.com/',
              },
              {
                name: 'DZone: Programming & DevOps news, tutorials & tools',
                url: 'https://dzone.com/',
              },
              {
                name: 'CKEditor Ecosystem Blog',
                url: 'https://ckeditor.com/blog/',
              },
              {
                name: 'All posts | Roberto Vitillos Blog',
                url: 'https://robertovitillo.com/',
              },
              {
                name: 'Turn Websites into structured data /Dataflow kit',
                url: 'https://dataflowkit.com/',
              },
              { name: 'Frenxi blog', url: 'https://frenxi.com/' },
              { name: 'Hacker Noon', url: 'https://hackernoon.com/' },
              { name: 'OpenAI', url: 'https://openai.com/' },
              { name: 'DEV Community 👩‍💻👨‍💻', url: 'https://dev.to/' },
              {
                name: 'Posts :: kitsonkelly.com — A recovering 7ft tall cactus',
                url: 'https://kitsonkelly.com/posts',
              },
              {
                name: 'airpair | Software jobs && programming resources',
                url: 'https://www.airpair.com/',
              },
              {
                name:
                  'Live Code Stream - Everything related to programming, AI and computer science!',
                url: 'https://livecodestream.dev/',
              },
              {
                name:
                  'Discover dev - 每天列出 5 ～ 10 篇当天值得阅读的软件文章',
                url: 'https://www.discoverdev.io/',
              },
              {
                name: 'Level Up Coding',
                url: 'https://levelup.gitconnected.com/',
              },
              {
                name: 'takeshape',
                url:
                  'https://www.takeshape.io/articles/why-we-switched-from-yarn-to-pnpm/',
              },
            ],
          },
        ],
      },
    }
  },
  layout: 'bookmarks',
}
</script>
<template>
  <div class="blog">
    <div style="width: 100%; text-align: center;">
      <h1>{{ renderData.name }}</h1>
    </div>

    <div class="menu">
      <h4 style="margin: 10px 20px;">目录：</h4>
      <div class="menu-link">
        <a
          :href="'#_' + item.name"
          v-for="(item, index) in renderData.children"
          :key="index"
          class="link"
          >{{ item.name }}&nbsp;
        </a>
      </div>
    </div>

    <!-- for gogo -->
    <div
      v-for="(item, index) in renderData.children"
      :key="index"
      ref="docs"
      id="bookmarksMain"
    >
      <h2 :id="'_' + item.name" :name="'_' + item.name">
        {{ item.name }}
      </h2>
      <ul>
        <li v-for="(item2, index2) in item.children" :key="index2">
          <a :href="item2.url" class="link" target="_blank">
            {{ item2.name }}</a
          >
        </li>
      </ul>
    </div>
    <!-- for end -->
  </div>
</template>

<style>
.blog {
}

.blog ul,
.blog li {
  list-style: none;
}
.blog li {
  margin-top: 10px;
}
.menu {
  /* 目录样式 */
  /* margin-left: 40px; */
  border: 1px solid rgb(155, 152, 152);
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 40px;
}

.menu .menu-link {
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
