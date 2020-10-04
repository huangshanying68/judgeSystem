<template>
	<div id="show-sumission">
    <el-container>
		<el-header>
		<p>Status</p>
		<!--<el-dropdown @command="slevel"  >
			<span >{{querys.status==''? 'Status':querys.Status}}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item >All</el-dropdown-item>
				<el-dropdown-item>Low</el-dropdown-item>
				<el-dropdown-item>Mid</el-dropdown-item>
				<el-dropdown-item>High</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>

		<el-switch v-model="status1" active-value="true" inactive-value="false" active-text="显示" inactive-text="隐藏"@change="changes"></el-switch>
-->

		<el-input placeholder="Search Author" v-model="suauthor" suffix-icon="el-icon-search"  @change="author"></el-input>

		<el-button type="primary" icon="el-icon-refresh" round size="medium" @click="strefresh">刷新</el-button>
</el-header>

<el-main>
  <el-table :data="sData" style="width:100%" v-loading.fullscreen.lock="load">
    
      <el-table-column prop="create_time" label="When" width="180">
        <template slot-scope="scope">
         <p>{{ new Date(+new Date(scope.row.create_time)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')}}</p>
       </template>
      </el-table-column>

      <el-table-column prop="id" label="ID" width="200">
        <template slot-scope="scope">
          <p>{{scope.row.id}}</p>
        </template>
      </el-table-column>

      <el-table-column prop="statistic_info"  label="Status">
       <template slot-scope="scope">
         <p>{{scope.row.statistic_info.score}}</p>
       </template>
      </el-table-column>

       <el-table-column prop="problem" label="Problem">
        <template slot-scope="scope">
           <router-link v-bind:to="'/problem/'+scope.row.id">{{scope.row.problem}}</router-link>
       </template>
      </el-table-column>

       <el-table-column prop="statistic_info" label="Time" >
        <template slot-scope="scope">
          <p v-if="scope.row.statistic_info.time_cost==undefined" style="color: black">---</p>
         <p v-else>{{Math.floor(scope.row.statistic_info.time_cost/1000/60)+ ' '+'minutes'}}</p>
       </template>
      </el-table-column>

       
        <el-table-column prop="statistic_info"  label="Memory" >
          <template slot-scope="scope">
            <p v-if="scope.row.statistic_info.memory_cost==undefined" style="color: black">---</p>
         <p>{{scope.row.statistic_info.memory_cost}}</p>
       </template>
      </el-table-column>

       <el-table-column prop="language"  label="Language">
          <template slot-scope="scope">
         <p>{{scope.row.language}}</p>
       </template>
      </el-table-column>
    
    <el-table-column prop="username" label="Author">
      <template slot-scope="scope">
        <p>{{scope.row.username}}</p>
    </template>
    </el-table-column>
    </el-table>

</el-main>
</el-container>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
      name:'show-sumissions',
      data(){
      	return{
      		suauthor:'',
          sclass:'',
    		sData:[]

      	}
      },
      mounted(){
      	this.getSdata();
      },

      methods:{
        getSdata(){
          axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/submission') .then((res)=>{
          for(var i=0;i<(res.data.data.results).length;i++){
            if(res.data.data.results[i].problem==this.$route.params.ids){
              this.sData.push(res.data.data.results[i]);
              //sclass=(this.sData).statistic_info;
            }

          }
        })
        },

        author(){
          axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/submission') .then((res)=>{
            this.sData=[];
            for(var i=0;i<res.data.data.total;i++){
            if(this.suauthor==res.data.data.results[i].username){
              this.sData.push(res.data.data.results[i])
            }
            if(this.suauthor==''){
            for(var i=0;i<(res.data.data.results).length;i++){
            if(res.data.data.results[i].problem==this.$route.params.ids){
              this.sData.push(res.data.data.results[i]);
            }

          }
          }
          }

          })
        },

         strefresh(){
        axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/submission') .then((res)=>{
  for(var i=0;i<(res.data.data.results).length;i++){
            if(res.data.data.results[i].problem==this.$route.params.ids){
              this.sData.push(res.data.data.results[i]);
            }

          }
      })
    },

      }
  }
</script>
<style scoped>
  .contain{
    width:100%;
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
  .el-input{
    width: 150px;
    left:60%;
    position: relative;
  }
  .el-header .el-button{
    text-align: center;
     left:65%;
    position: relative;
  }

  .el-main{
     font-family: "Hiragino","微软雅黑";
    font-size: 10px;
    font-weight:lighter;
  }
  a{
   text-decoration:none;
   color:#303133;
  }

</style>