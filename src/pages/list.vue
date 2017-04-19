<template lang="html">
  <div class="container">
    <h1>重度悬疑迷</h1>
    <hr>
    <table>
      <tr>
        <th>电影名字</th>
        <th>导演</th>
        <th>国家</th>
        <th>上映年份</th>
        <th>查看</th>
        <th>更新</th>
        <th>删除</th>
      </tr>
      <tr v-for="(item, index) in movies">
        <tr>{{item.moviename}}</tr>
        <tr>{{item.director}}</tr>
        <tr>{{item.country}}</tr>
        <tr>{{item.updateYear}}</tr>
        <tr><a href="#">查看</a></tr>
        <tr><a href="#">修改</a></tr>
        <tr><a href="#" class="btn btn-danger">删除</a></tr>
      </tr>
    </table>
  </div> <!-- container   -->
</template>

<script>
export default {
  data: function () {
    return {
      movies: [
        {
          moviename: '嫌疑人x的献身',
          moviedetail: '东野圭吾经典作品',
          movieaddress: '../static/嫌疑人x的献身海报.jpg'
        },
        {
          moviename: '嫌疑人x的献身',
          moviedetail: '东野圭吾经典作品',
          movieaddress: '../static/嫌疑人x的献身海报.jpg'
        },
        {
          moviename: '嫌疑人x的献身',
          moviedetail: '东野圭吾经典作品',
          movieaddress: '../static/嫌疑人x的献身海报.jpg'
        }
      ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
