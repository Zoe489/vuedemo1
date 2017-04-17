<template>
  <div id="pageQuiButton">
    <qui-btn msg="我可以点击" class="small" v-on:btnClickEvent="doSth">
      <img src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png"
      slot="icon" class="ico">
    </qui-btn>
  </div>
</template>

<script>
  import quiBtn from '../components/quiButton.vue'
  export default {
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtn
    },
    methods: {
      doSth: function () {
        alert('点击了组件的click:btnClickEvent')
      }
    }
  }
</script>
