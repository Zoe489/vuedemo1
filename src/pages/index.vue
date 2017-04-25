<template lang="html">
  <div class="container">
    <div class="jumbotron">
      <h1>{{msg}}</h1>
      <p>This is a website about movie!</p>
      <p><a href="#/list" class="btn btn-primary btn-lg" role="button">了解详情</a></p>
    </div> <!-- jumbotron -->
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="(item, index) in movies">
        <div class="thumbnail" >
          <img v-bind:src="item.movieaddress" alt="">
          <div class="caption" >
            <h3>{{item.moviename}}</h3>
            <p>{{item.moviedetail}}</p>
            <p><a href="#/detail" class="btn btn-primary" role="button">观看预告片</a></p>
          </div><!-- caption -->
        </div> <!-- thumbnail -->
      </div> <!-- col -->
    </div> <!-- row -->
  </div> <!-- container -->
</template>

<script>
export default {
  data: function () {
    return {
      msg: '重度悬疑迷',
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
