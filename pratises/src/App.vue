<template>
  <div id="app">
    <el-container direction="vertical">

      <el-header>
  <blog-header></blog-header>
</el-header>
<hr>
<el-main>
  <router-view></router-view>
</el-main>

  <el-footer>
  	<p>{{titlee.title1}}</p>
<p>{{titlee.title2}}
<a href="https://github.com/QingdaoU/OnlineJudge">OnlineJudge</a>
<span>{{titlee.title4}}</span>
</p>
  </el-footer>
</el-container>
  </div>

</template>

<script>

import BlogHeader from './navMenu/BlogHeader'
export default {
  name: 'App',
  components: {
 BlogHeader
  },
  data(){
  	return{
  	titlee:{
 title1:"Online Judege Footer",
 title2:"Powered by",
title4:"Version:20190326-9a50c"
  }
}
}
}
</script>

<style scoped>
  .el-container{
    border: 0px;
    width: 100%;
    height: 100%;
    background-color:#E9EEF3;
  }
  .el-header{
    border-bottom:1px solid #FFFFFF; 
    background-color: #FFFFFF;
    box-shadow:1px 1px 5px #888888;
  }
.el-footer{
    border:0px;
    font-size: small;
  text-align:center;
  margin-top:10px;
  margin-bottom: 10px; 
}
.el-footer a{
  text-decoration: none;
}
</style>
