<template lang="html">
  <div class="container">
    <h1>重度悬疑迷</h1>
    <hr>
    <div>
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>电影名字</th>
            <th>导演</th>
            <th>国家</th>
            <th>上映年份</th>
            <th>查看</th>
            <th>更新</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in movies">
            <td>{{item.moviename}}</td>
            <td>{{item.director}}</td>
            <td>{{item.country}}</td>
            <td>{{item.updateYear}}</td>
            <td><a href="#">查看</a></td>
            <td><a href="#">修改</a></td>
            <td><a href="#" class="btn btn-danger">删除</a></td>
          </tr>
        </tbody>
      </table>
    </div> <!-- table  -->
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
          movieaddress: '../static/嫌疑人x的献身海报.jpg',
          director: '苏有朋',
          country: '中国',
          language: '中文',
          updateYear: '2017'
        },
        {
          moviename: '嫌疑人x的献身',
          moviedetail: '东野圭吾经典作品',
          movieaddress: '../static/嫌疑人x的献身海报.jpg',
          director: '苏有朋',
          country: '中国',
          language: '中文',
          updateYear: '2017'
        },
        {
          moviename: '嫌疑人x的献身',
          moviedetail: '东野圭吾经典作品',
          movieaddress: '../static/嫌疑人x的献身海报.jpg',
          director: '苏有朋',
          country: '中国',
          language: '中文',
          updateYear: '2017'
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
