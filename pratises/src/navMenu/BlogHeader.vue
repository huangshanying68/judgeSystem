<template>
  <div id="blog-header"> 
  	<el-container>
  	<el-header>
<el-row>
	<el-col :span="3">
	<div class="logo">
<span text-color="#303133">Online &nbsp;Judge</span>
</div>
</el-col>


<el-col :span="19">
<el-menu :efault-active="activeIndex"
 mode="horizontal" 
 @select="handleSelect"
background-color="#FFFFFF" 
text-color="#303133"
 hover-text-color="#409EFF">

 <el-menu-item index="1">
 <router-link to="/" exact >
 <i class="el-icon-menu"></i>Home</router-link>
  </el-menu-item>


 <el-menu-item index="2">
<router-link to="/problem" exact >
<i class="el-icon-question"></i>Problem</router-link>
</el-menu-item>

 <el-submenu index="3">
  <template slot="title">
  	<i class="el-icon-info"></i>
  	<span>about</span>
  </template>
  <el-menu-item index="3-1">
          <router-link to="/about" exact>Explain</router-link>
        </el-menu-item>
          <el-menu-item index="3-2" >
          <router-link to="/FAQ" exact>Common</router-link>
   </el-menu-item>
  </el-submenu>

</el-menu>
</el-col>
</el-row>
</el-header>
</el-container>
</div>
</template>

<script>
export default{
	name:'blog-header',
	data(){
	return{
        activeIndex: '1'
	}
	},
	methods:{
	handleSelect:function(key,keyPath){
  console.log(key,keyPath);

  }
	}
}
</script>

<style scoped>
	.el-container{
		width: 100%;
	}
	.el-header{

	}
	.logo{
		border: 1px solid #FFFFFF;
		text-align:left;
		margin: auto;
		font-size: large;
		line-height:55px;
	}
nav{
	width:100%;
	max-width:1290px;
}
ul{
	list-style-type:none;
}
li{
	display:inline-block;
	margin:0 10px;
	}
	a{
		text-decoration: none;
	}
	
</style>