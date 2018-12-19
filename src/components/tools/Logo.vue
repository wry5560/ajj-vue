<template>
  <div class="logo ajj-logo">
    <router-link :to="{name:'dashboard'}">
      <!--<img src="~@/assets/logo.svg" alt="logo">-->
      <img src="http://feooe.myds.me:6200/asrsajj/img/logo/ajlogo.png" alt="logo">
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Logo",
    props: {
      title: {
        type: String,
        default: '横琴新区安全生产实时动态监管平台',
//        default: 'Ant Design Pro',
        required: false
      },
      showTitle: {
        type: Boolean,
        default: true,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ajj-logo {
    padding-left: 18px !important;
    img{
      height: 48px !important;
    }
    h1{
      font-size: 17px !important;
      margin-right: 22px !important;
      margin-left: 18px !important;
      line-height: 22px;
    }
    a{
      display: flex;
      vertical-align: middle;
      margin-top:8px;
    }
  }

</style>