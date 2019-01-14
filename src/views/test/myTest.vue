<template>
  <div>
    <a-button @click="getPdf()">tab add test</a-button>
    <div id="pdfDom">
      <div class="title" >横琴新区安全生产监督管理局</div>
      <hr style="height:3px;border:none;border-top:5px double ;" />
      <div class="title" >现场检查记录表</div>
      <div >
        <p ><span class="content">被检查单位</span><span class="neirong">${zfjc.dwmc}</span></p>
        <p ><span class="content">地址</span><span>${zfjc.dwdz}</span></p>
        <p ><span class="content">法定代表人/负责人</span><span>${zfjc.fr}</span><span style="margin-left: 20px">联系电话</span><span>${zfjc.frlx}</span></p>
        <p ><span class="content">安全负责人：</span><span>${zfjc.aqfzrname}</span><span style="margin-left: 20px">联系电话：</span><span>${zfjc.aqfzrlx}</span> </p>
        <p ><span class="content">所属辖区：</span><span>${zfjc.ssxq}</span><span style="margin-left: 20px">从业人数：</span><span>${zfjc.cyrs}</span>人</p>
        <p ><span class="content">检查场所：</span><span>${zfjc.jcdz}</span></p>
        <p ><span class="content">检查时间：</span><span>${zfjc.jctimestart}</span>至<span>${zfjc.jctimeend}</span></p>
        <p style="line-height:200%">
          <span class="content">&nbsp;&nbsp;我们是横琴新区安全生产监督管理局检查人员<u>&nbsp;&nbsp;</u><u>${zfjc.jcusersname}</u><u>&nbsp;&nbsp;</u>,这是我们的证件（出示证件）,陪同专家<u>&nbsp;&nbsp;</u><u>${zfjc.jczjname}</u><u>&nbsp;&nbsp;</u>。依法对你单位进行现检查，请予以配合。</span>
        </p>
        <p ><span class="content">检查情况：</span></p>
        <#list zfjcdetail as item>
        <p >
				<span class="content">
					<u> &nbsp;&nbsp;${item_index+1}.${item.jcnr}</u>/<u>${item.jcjg}&nbsp;&nbsp;</u>
				</span>
        </p>
      </#list>
      <p ><span class="content"><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u><u>(以下空白) </u><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></span></p>
      <br/><br/>
      <p >
        <span class="content">检查人员（签名）：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></span>
      </p>
      <p >
        <span class="content" >专家（签名）：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></span>
      </p>
      <p >
        <span class="content">被检查单位现场负责人（签名）：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></span>
      </p>
    </div>
    <div  class="yyr"></div>
    </div>
  </div>
</template>

<script>
  import RouteView from "../../components/layouts/RouteView";
  export default {
    data(){
      return {
        htmlTitle: 'PDF测试页'
      }
    },
    components: {RouteView},
    methods:{
      addTab(){
        const payload={
          title:'首页',
          key:'/index'
        }
        this.$store.commit('ADD_HEADERTAB',payload)
      }
    }
  }

</script>

<style>
  body{
    font-family:SimSun;
    line-height:20px;

  }
  @page{size:a4}
  .title{
    text-align:center;
    font-size: 18.0000pt;
    font-weight: bolder;

  }
  .content{
    font-family:SimSun;
    font-size: 10.5pt;

  }
  .neirong{
    font-family:SimSun;
    font-size: 10.5pt;
    padding-bottom:1px;
    border-bottom:1px solid #000

  }
  .yyr{
    position:absolute;
    right:10px;
  }

  .blue{
    color: blue;
  }
  .pos{
    position:absolute;
    left:100px;
    top:150px
  }
</style>