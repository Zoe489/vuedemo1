<template>
  <div class="qui-nav nav-type-2">
    <a v-for="(item,index) in items" :class="[commonClass,item.active?activeClass: '']">
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      commonClass: 'nav-item',
      activeClass: 'active',
      items: [
        {
          text: '首页',
          active: true
        },
        {
          text: '列表',
          active: false
        },
        {
          text: '关于',
          active: false
        },
        {
          text: '招聘',
          active: false
        }
      ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    navClickEvent: function (item, index) {
      items.forEach(function (el) {
        el.active = false
      })
      items[index].active = true
      this.$emit('navClickEvent', items, index)
    }
  },
  components: {}
}
</script>

<style lang="css">
  @import './css/qui-nav.import.css'
</style>
