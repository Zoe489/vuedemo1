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
            <td><a class="btn btn-danger">删除</a></td>
          </tr>
        </tbody>
      </table>
      <button type="button" name="button" class="btn btn-default">
        <a href="#/addnew">
          <span class="glyphicon glyphicon-plus">新增</span>
        </a>
      </button>
      <button type="button" name="button"  v-on:click="getMovie">
        添加
      </button>
    </div> <!-- table  -->
  </div> <!-- container   -->
</template>

<script>
export default {
  data: function () {
    return {
      movies: [
        // {
        //   moviename: '',
        //   moviedetail: '',
        //   movieaddress: '',
        //   director: '',
        //   country: '',
        //   language: '',
        //   updateYear: ''
        //   // moviedetail: ''
        // }
      ]
    }
  },
  computed: {},
  // mounted: function () {
  //   this.$nextTick(function () {
  //   // 代码保证 this.$el 在 document 中
  //     // this.getMovie()
  //     // console.log(this.movie)
  //   })
  // },
  ready: function () {},
  attached: function () {},
  methods: {
    getMovie () {
      this.$http.get('/api/getMovieInformation')
      .then((response) => {
        // console.log(response)
        console.log(response.body)  // 返回的为什么是页面还报304错误
        // console.log(response.body[0])
        this.movies = response.body
      })
      // console.log(this.movies)
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
