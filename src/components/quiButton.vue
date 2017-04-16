<template>
  <button class="qui-btn" @click="btnClickEvent">
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
<<<<<<< HEAD
        default: '下载'
      }
    },
    methods: {
      btnClickEvent: function () {
        alert(this.msg)
        this.$emit('btnClickEvent')
=======
        default: '下载',
        type: String
      },
      btnClickEvent: {
        type: Function
>>>>>>> f7d6bfd50383deacd79ff12fbf7481f9598b903f
      }
    }
  }
</script>

<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>
