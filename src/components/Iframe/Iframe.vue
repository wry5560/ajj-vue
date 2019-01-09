<template>
  <iframe
    scrolling="auto"
    :path="menuPath"
    :src="menuUrl"
    seamless="seamless"
    frameborder="0"
    style="width:calc(100% + 48px);height:calc(100% + 24px)"
  ></iframe>
</template>

<script>
  export default{
      name:"IframePages",
      props:{
          menuPath:{
              type:String,
          },
          menuUrl:{
              type:String,
              required: true,
          }
      },
  }
</script>
<style lang="scss">
  iframe{
    margin: -24px;
    margin-bottom: 0;
  }
</style>