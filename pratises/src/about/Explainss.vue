<template>
<div id="show-explainss">
	<el-container class="container" direction="vertical" >
<el-main class="header">
<h1>Compiler & Judger</h1>

<ul type="disc">
<li>C ( GCC 5.4 )</li>
<p>/usr/bin/gcc -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c11 {src_path} -lm -o {exe_path}</p>

<li>C++ ( G++ 5.4 )</li>
<p>/usr/bin/g++ -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c++14 {src_path} -lm -o {exe_path}</p>

<li>Java ( OpenJDK 1.8 )</li>
<p>/usr/bin/javac {src_path} -d {exe_dir} -encoding UTF8</p>

<li>Python2 ( Python 2.7 )</li>
<p>/usr/bin/python -m py_compile {src_path}</p>

<li>Python3 ( Python 3.5 )</li>
<p>/usr/bin/python3 -m py_compile {src_path}</p>
</ul>
</el-main>

<el-main class="main">
<h1>Result Explanation</h1>

<ul type="disc">
<li>
<h2>Pending & Juding:</h2> 
<p>您的解答将很快被测评，请等待结果。</p>
</li>

<li>
<h2>Compile Error :</h2>
<p>无法编译您的源代码，点击链接查看编译器的输出。</p>
</li>

<li>
<h2>Accepted :</h2>
<p>你的解题方法是正确的。</p>
</li>

<li>
<h2>Wrong Answer:</h2>
<p>你的程序输出结果与判题程序的答案不符。</p>
</li>	

<li>
<h2>Runtime Error:</h2>	
<p>您的程序异常终止，可能的原因是：段错误，被零除或用非0的代码退出程序。</p>
</li>	

<li>
<h2>Time Limit Exceeded :</h2>
<p>您的程序使用的CPU时间已超出限制，Java有三倍的时间限制。</p>
</li>

<li>
<h2>System Error :</h2><p>糟糕，判题程序出了问题。请报告给管理员。</p>
</li>	

</ul>
</el-main>
</el-container>

</div>
</template>
<script>
export default{
	name:'show-explainss'
}

</script>

<style scoped>
.container {
	width:100%;
	max-width:1260px;
}
h1{
	font-family: "Helvetica Neue","微软雅黑";
	font-size: 26px;
font-weight:500;
margin-bottom:50px;
	
}
.header{
	margin-top:20px;
	
	background:#FFFFFF;

}
.header li{
	font-family: "Helvetica Neue","微软雅黑";
	font-size: 24px;
	font-weight: 200;
	display:inline-block;
}
.header p{
	font-family: "Helvetica Neue","微软雅黑";
	font-size: 16px;
	font-weight: lighter;
border:1px dashed #F2F6FC ;
	background:#F2F6FC;
	padding:25px;
}
.main{
margin-top:30px;
background:#FFFFFF;	
}
.main h2{
	font-family: "Helvetica Neue","微软雅黑";
	font-size: 24px;
	font-weight:100;
	display:inline-block;
}
.main p{
	font-family: "Helvetica Neue","微软雅黑";
	font-size: 16px;
	font-weight: lighter;
	display:inline-block;
}
</style>