<template lang="html">
  <div class="container">
    <h1>后台录入页</h1>
    <hr>
    <table width="600px" height="100px" align="center">
      <tr>
        <th>电影名字</th>
        <td><input type="text" class="form-control" placeholder="moviename" style="margin: 10px" v-model="moviename"></td>
      </tr>
      <tr>
        <th>电影导演</th>
        <td><input type="text" class="form-control" placeholder="director" style="margin: 10px" v-model="director"></td>
      </tr>
      <tr>
        <th>国家</th>
        <td><input type="text" class="form-control" placeholder="country" style="margin: 10px" v-model="country"></td>
      </tr>
      <tr>
        <th>语言</th>
        <td><input type="text" class="form-control" placeholder="language" style="margin: 10px" v-model="language"></td>
      </tr>
      <tr>
        <th>海报地址</th>
        <td><input type="text" class="form-control" placeholder="postAddress" style="margin: 10px" v-model="postAddress"></td>
      </tr>
      <tr>
        <th>片源地址</th>
        <td><input type="text" class="form-control" placeholder="movieAddress" style="margin: 10px"></td>
      </tr>
      <tr>
        <th>上映年份</th>
        <td><input type="text" class="form-control" placeholder="updateYear" style="margin: 10px" v-model="updateYear"></td>
      </tr>
      <tr>
        <th>电影简介</th>
        <td>
          <textarea name="name" rows="8" cols="40" placeholder="detail" class="form-control" style="margin: 10px" v-model="moviedetail"></textarea>
        </td>
      </tr>
    </table>

    <!-- Button trigger modal -->
    <button type="submit" class="pull-right btn btn-default" data-toggle="modal" data-target="#submitModal" v-on:click="addNewMovie">提交</button>

    <!-- Modal -->
    <div class="modal fade" id="submitModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">提交成功</h4>
          </div>
          <!-- <div class="modal-body">
            ...
          </div> -->
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <!-- <button type="button" class="btn btn-primary" data-dismiss="modal">回到首页</button> -->
          </div>
        </div>
      </div>
    </div>

  </div>  <!-- container -->
</template>

<script>
export default {
  data: function () {
    return {
      moviename: '',
      director: '',
      country: '',
      language: '',
      postAddress: '',
      movieAddress: '',
      updateYear: '',
      moviedetail: ''
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    addNewMovie () {
      const params = {
        moviename: this.moviename,
        director: this.director,
        country: this.country,
        language: this.language,
        postAddress: this.postAddress,
        movieAddress: this.movieAddress,
        updateYear: this.updateYear,
        moviedetail: this.moviedetail
      }
      this.$http.post('/setMovieInformation', params)
      .then((response) => {
        console.log(response)
      })
      .catch((reject) => {
        console.log(reject)
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
