<template lang="html">
  <div class="container">
    <h1>重度悬疑迷</h1>
    <div class="row">
      <div class="col-md-6">
        <object id="hunantv-player-1" data="http://player.hunantv.com/mgtv_v5_main/main.swf"
         type="application/x-shockwave-flash" class="boxsize" width="100%" height="400px">
          <param name="allowScriptAccess" value="always">
          <param name="quality" value="best">
          <param name="allowFullScreen" value="true">
          <param name="wmode" value="Opaque">
          <param name="allowScriptAccess" value="always">
          <param name="Play" value="-1">
          <param name="flashvars" value="video_id=3885945&statistics_bigdata_bid=1&cpn=1">
          <param name="bgcolor" value="#000000">
          <param name="type" value="application/x-shockwave-flash">
          <param name="pluginspace" value="http://www.macromedia.com/go/getflashplayer">
        </object>
      </div> <!-- col-md-6- -->
      <div class="col-md-6">
        <table>
          <tr>
            <td width="100px" class="titlefont">电影名字</td>
            <td>{{moviename}}</td>
          <tr>
            <td class="titlefont">导演</td>
            <td>{{director}}</td>
          </tr>
          <tr>
            <td class="titlefont">国家</td>
            <td>{{country}}</td>
          </tr>
          <tr>
            <td class="titlefont">语言</td>
            <td>{{language}}</td>
          </tr>
          <tr>
            <td class="titlefont">上映年份</td>
            <td>{{updateYear}}</td>
          </tr>
          <tr>
            <td class="titlefont">简介</td>
            <td>{{introduction}}</td>
          </tr>
        </table>
      </div>  <!-- col-md-6- -->
    </div> <!-- row  -->
  </div>  <!-- boxsize  -->
</template>

<script>
export default {
  data: function () {
    return {
      moviename: '嫌疑人x的献身',
      director: '苏有朋',
      country: '中国',
      language: '中文',
      updateYear: '2017',
      introduction: '《嫌疑人X的献身》是根据日本推理作家东野圭吾的同名小说改编的悬疑电影，由苏有朋执导，王凯、张鲁一、叶祖新、邓恩熙等主演，林心如特别主演。该片于2017年3月31日全国上映。该片是苏有朋首度执导悬疑题材的电影，也是东野圭吾推理小说首度在中国进行的影视化改编的作品。讲述的是物理学教授唐川和数学老师石泓多年后因石泓邻居陈婧涉及的一桩杀人案重逢，后来被迫站在对立面，由此展开了一场高智商的对决，一步步走向了既震撼人心又令人扼腕的结局。 '
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
.titlefont {
  font-weight: bold;
  text-align: left;
}

.boxsize {
  margin: 0 auto;
}
</style>
