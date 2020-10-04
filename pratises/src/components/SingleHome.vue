<template>
<div id="single-block">
	<el-main>
<div class="ssingle">
<h1>{{ann.title}}</h1>
<router-link to="/">
	<el-button plain icon="el-icon-back">返回</el-button>
</router-link>
</div>
<div class="body">
<p>{{ann.body}}</p>
</div>
</el-main>
</div>
</template>
<!--通过路由参数获取id this.$route.params-->
<script>
import axios from 'axios'
export default{
	name:"single-block",
	data(){
	return{
	id:'',
	ann:[]
	}
	},
	mounted(){
	this.getData()
	},
	methods:{
	getData(){

	axios.get('https://easy-mock.com/mock/5c9c811efa1e9424abfc824a/data68/posts').then((res) => {
       this.ann = res.data.data.project[this.$route.params.idd-1];
      })
	}
	}
	
}
</script>
<style scoped>
.el-main{
	width:100%;
	margin:auto;
	padding:20px;
	background-color:#FFFFFF;
	border:1px solid #FFFFFF;

}
.ssingle{
	font-size: larger;
}
.ssingle h1{
	display: inline-block;
	text-align:left;
}
.el-button{
	left:75%;
text-align: center;
position:relative;
}
.body p{
	display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 14px Base;
    font-family:"微软雅黑"; 
}
</style>