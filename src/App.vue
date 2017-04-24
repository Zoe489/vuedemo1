<!-- 结构 -->
<template>
  <div id="app">
    <nav-tab></nav-tab>
    <router-view></router-view>  <!-- 路由视图容器 -->
    <footer class="container">
      <hr>
      <p>By LJH</p>
    </footer>
  </div>
</template>

<!-- 脚本 -->
<script>
import navTab from './components/navtab.vue'
export default {
  name: 'app',
  components: {
    'nav-tab': navTab
  }
}
</script>

<!-- 样式 -->
<style scoped>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
  /*@import './assets/bootstrap/css/bootstrap.css';*/
</style>
