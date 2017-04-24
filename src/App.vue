<!-- 结构 -->
<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container" >
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand">电影</a>
      </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <!-- <li class="active"><a href="#" >首页 <span class="sr-only">(current)</span></a></li>
              <li><a href="#/list">列表详情</a></li>
              <li><a href="#/contact">联系我们</a></li> -->
              <li v-for="(item, index) in tabitems" @click="selectTab(item)"
                  v-bind:class="'active': item.checked" v-bind:src="{{item.tab_href}}">
                {{item.tabname}}
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <form class="navbar-form navbar-left">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">搜索</button>
              </form>
            </ul>
          </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <router-view></router-view>  <!-- 路由视图容器 -->
    <footer class="container">
      <hr>
      <p class="pull-right">回到顶部</p>
      <p>By LJH</p>
    </footer>
  </div>
</template>

<!-- 脚本 -->
<script>
export default {
  name: 'app',
  data: {
    // return: {
    checked: false,
    tabitems: [
      {
        tabname: '首页',
        tab_href: '#'
      },
      {
        tabname: '列表详情',
        tab_href: '#/list'
      },
      {
        tabname: '更新',
        tab_href: '#/contact'
      }
    ]
    // }
  },
  methods: {
    selectTab: function (item) {
      if (typeof item.checked === 'undefined') {
        this.$set(item, 'checked', true)
      } else {
        item.checked = !item.checked
      }
    }
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
