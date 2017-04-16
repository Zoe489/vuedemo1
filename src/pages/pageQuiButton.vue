<template>
  <div id="pageQuiButton">
    <qui-btn msg="确定" class="small" v-on:btnClickEvent="doSth"></qui-btn>
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
        alert('你点击了组件的click:btnClickEvent')
      }
    }
  }
</script>
