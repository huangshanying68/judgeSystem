<template>
	<div id="problem1">
		<el-container class="contain">
		<el-container class="left" direction="vertical">
		<el-main class="header">
					<span>{{content.title}}</span>
					<p class="ptitle">描述</p>
					<p v-html="content.description" class="pstitle">{{content.description}}</p>

					<p class="ptitle">输入</p>
					<p v-html="content.input_description" class="pstitle">
						{{content.input_description}}
					</p>

					<p class="ptitle">输出</p>
					 <p v-html="content.output_description" class="pstitle">
						{{content.output_description}}
					</p>

<div class="input">
						<p class="ptitle">输入样例1
						<i class="el-icon-document-copy"  @click="copy(content.samples[0].input)"></i></p>
				<pre class="pre">{{content.samples[0].input}}</pre>
			</div>
			<div class="output">
						<p class="ptitle">输出样例1</p>
						<pre class="pre">{{content.samples[0].output}}</pre>
					</div>

					<p class="ptitle">提示</p>
					<div v-html="content.hint" class="shint">{{content.hint}}</div>
</el-main>
				<el-main class="main">
					<div class="mainleft">
				<span >Language:</span>
						<el-select v-model="value2">
							<el-option label="C" value="content.languages[0]" ></el-option>
							<el-option label="C++" value="content.languages[1]"></el-option>
							<el-option label="Java" value="content.languages[2]"></el-option>
							<el-option label="Python2" value="content.languages[3]"></el-option>
							<el-option label="Python3" value="content.languages[4]"></el-option>
						</el-select>

						<el-button icon="el-icon-refresh-right"  @click=clearcontent></el-button>
</div>

                 <div class="mainright">
                 <span>Theme:</span>
						<el-select v-model="value3"  @change="select1(value3)">
							<el-option label="Solarized Light" value="Solarized Light" ></el-option>
							<el-option label="Monokai" value="Monokai"></el-option>
							<el-option label="Material" value="Material"></el-option>
						</el-select>
					</div>

					<el-input type="textarea"  autosize  v-model="textareas" id="text">
					</el-input>
					<div class="button">
				<el-button type="info" icon="el-icon-edit" disabled>Submit</el-button>
			</div>
				</el-main>
</el-container>


			<el-aside class="aside">
				<router-link  v-bind:to="'/problemID/'+content._id">
				<div class="sumission">
					<i class="el-icon-more"></i>
					<span>Submissions</span>
				</div>
				</router-link>

				<div class="smessage">

					<div class="stitle">
					<i class="el-icon-warning"></i>
					<span>题目信息</span>
				</div>

                 <div class="shows">
					<ul>
						<li>
							<p class="title1">ID</p>
							<p class="content1" align="right">{{content.id}}</p>
						</li>
						<li>
							<p class="title1">时间限制</p>
							<p class="content1" align="right">{{content.time_limit}}MS</p>
						</li>
						<li>
							<p class="title1">内存限制</p>
							<p class="content1" align="right">{{content.memory_limit}}MB</p>
						</li>
						<li>
							<p class="title1">出题人</p>
							<p class="content1" align="right">{{content.created_by.username}}</p>
						</li>
						<li>
							<p class="title1">难度</p>
							<p class="content1">{{content.difficulty}}</p>
						</li>
						<li>
							<p class="title1">分数</p>
							<p  class="content1">{{content.total_score}}</p>
						</li>
						<li>
						<p class="title1">标签</p>
							<p class="content1">
								<el-tooltip placement="left" >
									<div slot="content" class="color1" >
										<el-tag type="info" v-for="i in content.tags">
											<span>{{i}}</span>
										</el-tag>
									</div>
									<span>show</span>
								</el-tooltip>


							</p>
						</li>
					</ul>
				</div>
				</div>
			
			<div class="static">
						<i class="el-icon-pie-chart"></i>
						<span>Statistic</span>

						<el-button  type="text" size="mini" @click="slist=true" >Details</el-button>
						<el-dialog
						title="Message"
						:visible.sync="slist">
						<p >SumitTotal:&nbsp;{{content.submission_number}}</p>
						<p >AcceptTotal:&nbsp;{{content.accepted_number}}</p>

						<span slot="footer" class="dialog-footer">
							<el-button type="primary" @click="slist=false">Yes</el-button>
						</span>
					</el-dialog>


					<div id="details" style="height: 289px; box-sizing:border-box; line-height: 289px;"></div>
				</div>
			</el-aside>	
		
	</el-container>
	</div>
</template>
<!--通过路由参数获取id this.$route.params.-->
<script>
	import axios from 'axios'
	export default{
		name:"problem1",
		data(){
			return{
         content:'',
         value2:"C",
         value3:"Solarized Light",
         textareas:'',
         grade:' ',
         arr:[],
         sumission:[],
         stips:'',
         slist:false
        

			}
		},
		mounted(){
			this.getData();
		},
		updated(){
			this.drawLine();
			this.sdetail();
		},
		methods:{

		getData(){
			axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/test') .then((res)=>{
				for(var i=0;i<(res.data.data.results).length;i++){
				if(res.data.data.results[i]._id==this.$route.params.id){
				this.content=res.data.data.results[i];
				this.textareas=(this.content).template.C;
			}
		}
			})
		},
		open(){
			

		},
		copy:function(data){
			let val=data;
			let sinput=document.createElement('input');
			sinput.value=val;
			document.body.appendChild(sinput);
			sinput.select();
			console.log(sinput.value);
			document.execCommand("Copy");
			this.$message({
				message:"copy success!"
			})


			},
			clearcontent(){
				this.$confirm('Are you sure reset  ypur code?','',{
					confirmButtonText:'Yes',
					cancelButtonText:'No',
					type:'waring'
				})  .then(()=>{
					this.textareas=' ';
					this.textareas=(this.content).template.C;
				})  .catch(()=>{
					this.textareas=this.textareas;
				})
				
			},

			select1:function(val){
				var s=document.getElementById('text');
				if(val=='Monokai'){
					s.style.backgroundColor="#303133";
					s.style.color="#FFFFFF"
				}
				else if(val=='Material'){
				s.style.backgroundColor="#08091E"
				s.style.color="#1E62A7"	
				}
				else{
					s.style.backgroundColor="#FFFFFF";
					s.style.color="#000000"
				}
			},

		drawLine(){
			var mychart=this.$echarts.init(document.getElementById('details'));
			
			mychart.setOption({
				tooltip:{},
				legend:{
					 // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
					orient:'horizontal',
					itemWidth:24,// 设置图例图形的宽
					itemHeight:18,// 设置图例图形的高
					textStyle:{
						color:'#666',// 图例文字颜色
					},
					 backgroundColor: '#FFFFFF',  // 设置整个图例区域背景颜色
					 data:['AC','WA']
				},
				series:[]
			});


			axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/test') .then((res)=>{

				for(var i=0;i<(res.data.data.results).length;i++){
				if(res.data.data.results[i]._id==this.$route.params.id){
				this.grade=res.data.data.results[i];
				this.textarea=(this.content).template.C;
			}
		}
				var value4=this.grade.accepted_number;
				var value5=this.grade.submission_number-value4;
				var name1="AC";
				var name2="WA";
				var arr=[];
				arr.push({value:value4,name:name1});
				arr.push({value:value5,name:name2});
				mychart.setOption({
					series:[{
					
					name:' ',
					type:'pie',
					radius:'50%',
					data:arr,
					// itemStyle 设置饼状图扇形区域样式
              itemStyle: {
                // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
                // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(30, 144, 255，0.5)'
                }
              },
              // 设置值域的那指向线
              labelLine: {
                normal: {
                  show: false   // show设置线是否显示，默认为true，可选值：true ¦ false
                }
              },
              // 设置值域的标签
              label: {
                normal: {
                  position: 'inner',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                  // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                  // {a}指series.name  {b}指series.data的name
                  // {c}指series.data的value  {d}%指这一部分占总数的百分比
                  formatter:'{b}:{c}\n{d}%'
                }
              }

			}]
				})
			})
		},


		/*sdetail(){
				var mychart=this.$echarts.init(document.getElementById('detail'));
				var color=['#0000FF', '#00ffff', '#00ff00'];
				axios.get('https://www.easy-mock.com/mock/5ce0f5b6a040b905230a5857/id/test') .then((res)=>{
					this.slist=res.data.data.results[this.$route.params.id-1];
					var value1=this.slist.accepted_number;



				})

					
			}*/


}

		
	}
</script>
<style scoped>
	
	.contain{
		width: 100%;
	}
	.header{
		width:97%;
		border: 1px solid #FFFFFF;
		margin:1px;
		background-color: #FFFFFF;
	}
	.header span{
		padding: 5px;
		font-family: "Hiragino","微软雅黑";
		font-size: 20px;
		font-weight: lighter;
	}
	.ptitle{
		font-family: "Hiragino","微软雅黑";
		font-size: 20px;
		font-weight: lighter;
		color: rgb(0,0,255);
		text-indent: 0.5em;
	}
	.pstitle{
		font-family: "Hiragino","微软雅黑";
    font-size: 16px;
    line-height: 24px;
    display: block;
    font-weight:normal;
    text-indent: 2em;
	}
	.pstitle i{
		display: inline-block;
	}
	.input{
		width: 45%;
		display: inline-block;
		margin-right:50px;
	}
	.output{
		width: 45%;
	display: inline-block;
	}
	.pre{
		border: 1px solid #DCDFE6;
		width:300px;
	    line-height:40px;
		font-size: 16px;
    display: block;
    font-weight:normal;
    text-indent: 1em;
    letter-spacing: 2px;
	}
	.shint{
		border: 1px dotted #DCDFE6;
		display: block;
		padding-left:20px;
		line-height:1.5;
		font-family: "Hiragino","微软雅黑";
		font-size: 16px;
		font-weight: 10;
		background-color: #F2F6FC;

	}
	.main{
		width:97%;
		border: 1px solid #FFFFFF;
		margin:25px 1px 1px 1px;
		background-color: #FFFFFF;
	}
	.mainleft{
		display: inline-block;
		margin-right:100px;
		margin-bottom:20px;
		font-family: "Hiragino","微软雅黑";
    font-size: 16px;
    line-height: 24px;
    font-weight:normal;
	}
	.mainleft .el-button{
		background-color:#DCDFE6;
	}
	.mainright{
		display: inline-block;
		margin-left:60px;
		margin-bottom:20px;
		font-family: "Hiragino","微软雅黑";
    font-size: 16px;
    line-height: 24px;
    font-weight:normal;
	}
#text{
	font-family: "Hiragino","微软雅黑";
    font-size: 16px;
    font-weight:normal;
	line-height:10px;

}
	.button{
		margin-top: 10px;
		margin-left:90%;
	}
	.aside{
		width:2%;
		margin-left:1px;
		font-family: "Hiragino","微软雅黑";
    font-size: 16px;
    line-height: 24px;
    font-weight:normal;
	}
	a{
		text-decoration: none;
		 color:#303133;
	}

	.sumission{
		background-color: #FFFFFF;
		padding-left: 15px;
		margin-bottom: 15px;
		line-height:30px;
	}

	.smessage{
		height:400px;
		margin-bottom:10px;
		background-color: #FFFFFF;
	}


	.smessage .stitle{
		padding-top:10px;
		text-align: center;	
	}
	 ul li{
		list-style:none;
		border-bottom: 1px dotted #e9eaec;
	}
	.shows li p{
		display: inline-block;
		height:1px;
	}

	.content1 span{
  	color: rgb(0,0,255);
  }

	.el-tag {
		height:30px;
		margin-left:4px;
		text-align: center;

  }
	.title1{
		border: 1px solid #FFFFFF;
		width:170px;
		
	}

	.static{
		background-color: #FFFFFF;
	}
	.static i{
		margin:15px 1px 10px 20px;
	}
	.static span{
		margin:15px 20px 10px 2px;
	}
	.static .el-button{
		margin-left:100px;
	}
	.el-dialog{
		width: 300px;
	}

	.el-dialog p{
		font-family: "Hiragino","微软雅黑";
		text-align: center;
		line-height:20px;
		font-size: 16px;
		font-weight:500;
		color:rgba(255,0,0);
	}

	.el-dialog .el-button{
		text-align: center;
		margin:0px auto 0px auto;
	}
	#details{
		margin:10px auto 0px auto;
	}

</style>