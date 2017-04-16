<template>
  <button class="qui-btn" @click="btnClickEvent">
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '下载',
        type: String
      },
      btnClickEvent: {
        type: Function
      }
    }
  }
</script>

<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>
