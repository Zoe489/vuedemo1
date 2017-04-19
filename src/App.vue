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
          <a class="navbar-brand" href="#">电影</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">首页 <span class="sr-only">(current)</span></a></li>
              <li><a href="#/list">列表详情</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更新 <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
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
  name: 'app'
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
