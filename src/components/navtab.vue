<template lang="html">
  <div>
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
            <ul class="nav navbar-nav nav-tab">
              <!-- <li class="active"><a href="#" >首页 <span class="sr-only">(current)</span></a></li>
              <li><a href="#/list">列表详情</a></li>
              <li><a href="#/contact">联系我们</a></li> -->
              <li v-for="(item, index) in tabitems" @click="selectTab(index)" v-bind:class="{'active':curitemIndex==index}">
                <a :href="item.tab_href">{{item.tabname}}</a>
              </li>
            </ul>

            <!-- <ul class="nav navbar-nav navbar-right">
              <form class="navbar-form navbar-left">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">搜索</button>
              </form>
            </ul> -->
          </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      checked: false,
      curitemIndex: 0,
      tabitems: [
        {
          tabname: '首页',
          tab_href: '#',
          isActive: true
        },
        {
          tabname: '列表详情',
          tab_href: '#/list',
          isActive: false
        },
        {
          tabname: '联系我们',
          tab_href: '#/contact',
          isActive: false
        }
      ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    selectTab: function (index) {
      // if (typeof item.checked === 'undefined') {
      //   this.$set(item, 'checked', true)
      // } else {
      //   item.checked = !item.checked
      // }
      this.curitemIndex = index
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
