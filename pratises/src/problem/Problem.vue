<template>
<div id="show-problem">

  <el-container class="contain">
    <el-container class="left">

    <el-header>
		<p>Problem List</p>
		<el-dropdown @command="plevel" >
			<span >{{query.difficulty==''? 'Difficulty':query.difficulty}}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
			<el-dropdown-menu slot="dropdown" >
				<el-dropdown-item  command="All">All</el-dropdown-item>
				<el-dropdown-item command="Low">Low</el-dropdown-item>
				<el-dropdown-item command="Mid">Mid</el-dropdown-item>
				<el-dropdown-item command="High">High</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>

		<el-switch v-model="value1" active-value="true" inactive-value="false"
    active-text="显示" inactive-text="隐藏" @change="change"><span>Tags</span></el-switch>

       <el-input placeholder="keyword" v-model="keywords" suffix-icon="el-icon-search"  @change="getData"></el-input>
     
       <el-button type="primary" icon="el-icon-refresh" @click="refresh">Reset</el-button>
</el-header>

<el-main>
		<el-table :data="tableData" style="width:100%" v-loading.fullscreen.lock="pload">
      <el-table-column prop="_id" label="#" width="180">
        <template slot-scope="scope">
        <router-link v-bind:to="'/problem/'+scope.row._id">{{scope.row._id}}</router-link>
      </template>
      </el-table-column>

      <el-table-column prop="title" label="Title" width="200">
        <template slot-scope="scope">
          <router-link v-bind:to="'/problem/'+scope.row._id">{{scope.row.title}}</router-link>
        </template>
      </el-table-column>

      <el-table-column prop="difficulty"  label="Level" width="150">
       <template slot-scope="scope">
         <el-button :type="levelcolor(scope.row.difficulty)" effect="light">{{scope.row.difficulty}}</el-button>
       </template>
      </el-table-column>

       <el-table-column prop="submission_number" label="Total" width="145">
        <template slot-scope="scope">
         <p>{{scope.row.submission_number}}</p>
       </template>
      </el-table-column>

       <el-table-column  label="AC Rate" >
        <template slot-scope="scope">
           <p v-if="scope.row.accepted_number==0||scope.row.submission_number==0">0</p>
         <p v-else>{{Number(scope.row.accepted_number/scope.row.submission_number*100).toFixed(2)+"%"}}</p>
       </template>
      </el-table-column>

       
        <el-table-column   label="Tag"  v-if="values">
          <template slot-scope="scope">
         <el-tag  type="info" v-for="i in scope.row.tags">
          <span>{{i}}</span>
          </el-tag>
     </template>
      </el-table-column>
    
    </el-table>

    <div class="changes">
<el-pagination layout="prev,pager,next"
:total="tpage"
:page-size="tpage">
</el-pagination>
</div>
</el-main>
</el-container>

	<el-aside width="320px">
    <div class="stitle">
    <span>Tags</span>
  </div>
		<el-row class="tips">
		 <el-button  round  @click="searchh('编程题')">编程题</el-button>
		  <el-button round @click="searchh('链表')">链表</el-button>
		 <el-button round @click="searchh('后缀表达式')">后缀表达式</el-button>
		  <el-button round @click="searchh('填空题')">填空题</el-button>
		</el-row>
		<br>

<router-link to="/problem/1001">
		<div class="linkss" @click="popen">
	 <i class="el-icon-link"></i>Pick one
		</div>
    </router-link>
	</el-aside>
</el-container>
</div>
</template>

<script>
  import axios from "axios"
	export default{
      name:'show-problem',
      data(){
      	return{
          value1:false,
      		values:false,
          query:{
            difficulty:''
          },
      		tableData:[],
          keywords:'',
          counter:0,
          pload:false,
          tpage:'',
      	}
      },
    created(){
     axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/test') .then((res)=>{
  this.tableData=res.data.data.results;
  this.tpage=res.data.data.total;
      })
    },

    methods:{
    plevel(command){
lock:true;
this.pload=true;
setTimeout(()=>{this.pload=false;},2000);
      axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/test') .then((res)=>{
        this.tableData=[];
        for(var i=0;i<res.data.data.total;i++){
        if(command==res.data.data.results[i].difficulty){
          this.tableData.push(res.data.data.results[i]);
        }
        if(command=="All"){
          this.tableData=res.data.data.results;
        }
      }
      })   
    },

      change(data){
        if(data=="true"){
          this.values=true;
        }
        else{
          this.values=false
        }

          console.log(this.value1);
            console.log(this.values);
      },
      refresh(){
        axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/test') .then((res)=>{
  this.tableData=res.data.data.results;
  this.keywords='';
      })
    },
    getData(){
      axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/test') .then((res)=>{
        this.tableData=[];
        for(var i=0;i<res.data.data.total;i++){
        if(this.keywords==res.data.data.results[i]._id||this.keywords==res.data.data.results[i].title||this.keywords==res.data.data.results[i].tags){
          this.tableData.push(res.data.data.results[i]);
        }

        for(var j=0;j<(res.data.data.results[i].tags).length;j++){
          if(this.keywords==res.data.data.results[i].tags[j]){
            this.tableData.push(res.data.data.results[i]);
          }
        }
        if(this.keywords==''){
          this.tableData=res.data.data.results;
        }
      }
      })
      //console.log(this.keywords);
    },
    searchh:function(keyword){
      axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/test') .then((res)=>{
        this.tableData=[];
        for(let i=0;i<res.data.data.total;i++){
          for(let  j=0;j<(res.data.data.results[i].tags).length;j++){
            //不要用this
          if(keyword==res.data.data.results[i].tags[j]){
            this.tableData.push(res.data.data.results[i]);
          }
        }
}
      })
    },
    levelcolor:function(val){
        if(val=='Low'){
          return 'success';
        }
        else if(val=='Mid'){
          return 'primary';
        }
        else{
          return 'warning';
        }
      },
      popen(){
        this.$message({
          message:'Good Luck! Please wait a moment',
          center:true
        });
      }
}
}
</script>
<style scoped>
  .contain{
    width:100%;
  }
  .left{
    width: 90%;
    min-width: 940px;
  }

  .el-header{
    width:100%;
    height:50px;
    margin-bottom:1px;
    margin-right: 1px;
    background-color: #FFFFFF;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial;
  }
  .el-header p{
    display: inline-block;
    text-align:left;
    font-size: 20px;
    font-weight:10;

  }
  .el-dropdown{
    text-align: center;
   margin-left:200px;
  }
  .el-switch{
  margin-left:20px;
  }
  .el-input{
    width: 150px;
   margin-left:25px;
  }
  .el-header .el-button{
    text-align: center;
     margin-left:15px;
  }
  .el-main{
    width: 100%;
  }

  a{
   text-decoration:none;
   color:#303133
  }
  .el-tag {
    text-align:center;
    margin-left:3px;
    margin-bottom:3px;

  }
 .changes{
    margin-top: 0;
    margin-top: 2px;
  margin-bottom:20px;
  }
.el-pagination{
  top:0px;
  margin-top: 0px;
  margin-left:780px;
}
  .el-aside{
    background-color:#FFFFFF;
    margin-left:10px;
    height: 500px;
    min-width:100px;

  }
  .el-aside span{
    display:inline-block;
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 100;
    font-family: "Helvetica Neue","微软雅黑";

  }
  .tips{
    text-align:center;
  }
  .tips .el-button{
margin: 6px 2px;
    text-align: center;
    font-family: "Hiragino","微软雅黑";
    font-size: 12px;
    font-weight:100;
  }

  .linkss{
    width: 80%;
    line-height: 50px;
    text-align: center;
    margin:auto;
    border: 1px solid gray;
    font-family: "Hiragino","微软雅黑";
    font-size: 16px;
    font-weight:100;
    background-color:#E9EEF3;

  }
</style>