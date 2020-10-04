<template>
  <div id="show-homm">
    <el-container>
  <el-header>
  <h1>Announcements</h1>
  <el-button type="primary" icon="el-icon-refresh" round size="medium" @click="shrefresh" ></el-button>
  </el-header>
  <div id="single-blog" v-for="y in notices">
 <router-link v-bind:to="'/home/'+y.idd">
 <h2 v-rainbow>{{y.title}}</h2>
 </router-link>
  </div>

<div id="show-main">
<el-pagination
:hide-on-single-page="svalue"
 layout="prev,pager,next"
:total="shtotal"
:page-size="shtotal">
</el-pagination>
</div>
</el-container>
  </div>
</template>

<!--请求数据 created    返回的数据条数.slice  (0,10)为0条数据0~9  32返回真或假-->
<script>
import axios from 'axios'
export default {
  name: 'show-home',
  data(){
  return{
    svalue:false,
 notices:[],
 shtotal:'',
 //sloading:false
 }
  },
  created(){
   axios.get('https://www.easy-mock.com/mock/5c9c811efa1e9424abfc824a/data68/posts') .then((res) => {
        this.notices = res.data.data.project;
        this.shtotal=res.data.data.total;
      })
    },
methods:{
  shrefresh(){
    const loading=this.$loading({
      lock:true,
      text:"刷新中",
      spinner:"el-icon-loading",
      background:"rgba(0,0,0,0.8)"
    });
    setTimeout(()=>{
      loading.close();
    },2000);
        axios.get('https://easy-mock.com/mock/5c9c811efa1e9424abfc824a/data68/posts') .then((res)=>{
  this.notices=res.data.data.project;
      })
    },
  }
}
</script>

<style scoped>
#show-homm{
  width:100%;
 
  margin-top:20px;
}
.el-header{
font-size:larger;
font-weight:bolder;
background-color: #FFFFFF;
}
.el-header h1{
  display:inline-block;
}
.el-button{
  left:75%;
  position: relative;
}
#single-blog{
	padding:5px;
  font-size: small;
	background-color:#FFFFFF;

}
#single-blog a{
	color:#444;
	text-decoration:none;
}
#show-main{
  margin-top: 0;
  margin-bottom:20px;
}
.el-pagination{
  margin-left:85%;
}
</style>
