<template>
  <div id="pageQuiButton">
<<<<<<< HEAD
    <qui-btn msg="确定" class="small" v-on:btnClickEvent="doSth"></qui-btn>
=======
    <qui-btn
      :msg="msgss"
      class="small"
      :btn-click-event="doSth">
    </qui-btn>
>>>>>>> f7d6bfd50383deacd79ff12fbf7481f9598b903f
  </div>
</template>

<script>
  import quiBtn from '../components/quiButton.vue'
  export default {
    name: 'pageQuiButton',
    data: {
      msgss: '确定'
    },
    components: {
      'qui-btn': quiBtn
    },
    methods: {
      doSth: function () {
        alert('你点击了组件的click:btnClickEvent')
      }
    }
    // 不知道我是否理解对了你的开发的意思，我的理解是，在父组件里可以传 data methods 给子组件
    // 父子组件的传值，开发过程一般是父组件提供逻辑，子组件提供界面和样式
    // 也就是子组件只做外观上的事情
  }
</script>
