<template>
  <iframe
    scrolling="auto"
    :name="menuName"
    :src="menuUrl"
    seamless="seamless"
    frameborder="0"
    style="width:calc(100% + 48px);height:calc(100% + 24px)"
  ></iframe>
</template>

<script>
  export default{
      name:"Iframe",
      props:{
          menuName:{
              type:String,
              required: false,
              default:'Iframe'
          },
          menuUrl:{
              type:String,
              required: true,
              default:'https://www.baidu.com'
          }
      }
  }
</script>
<style lang="scss">
  iframe{
    margin: -24px;
    margin-bottom: 0;
  }
</style>