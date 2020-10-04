<template>
<div id="show-common">
  <el-main>
<h1>常见问题</h1>
<ul type="disc">
<li>
Where is the input and the output?
<p>Your program shall read input from  <code>stdin</code> ('Standard Input') and write output to <code>stdout</code>('Standard Output'). For example,you can use <code>scanf</code> in C or <code>cin</code> in C++ to read from stdin,and use <code>printef</code> in C or <code>cout</code> in C++ to write to stdout. User programs are not allowed to read or write files, or you will get a <code>Runtime Error</code>.</p>
</li>

<li>
What's the meaning of the submission execution time?
<p>The onlinejudge might test your code multiple times with different input files. If your code gives the correct answer within the time limit for each input file, the execution time displayed is the max of the time spent for each test case. Otherwise, the execution time will have no sense.
</p>
</li>

<li>
How can I use C++ Int64?
<p>You should declare as <code>long long</code> and use with <code>cin/cout</code> or <code>%lld</code>, using<code> __int64 </code>will result in <code>Compile Error</code>.
</p>
</li>

<li>
Java specifications?
<p>All programs must begin in a static main method in a <code>Main </code>class. Do not use public classes: even <code>Main </code> must be non public to avoid compile error.Use buffered I/O to avoid time limit exceeded due to excesive flushing.</p>
</li>	

<li>
About presentation error?
<p>There is no <code>presentation error </code> in this oj.The judger will trim the blacks and wraps in your ouput's last line. if it's still different with the correct output, the result will be <code> Wrong Answer </code> .</p>
</li>	
</ul>
</el-main>
</div>
</template>

<script>
export default{
	name:'show-common'
}
</script>

<style scoped>
.el-main{
  background-color: #FFFFFF;
    margin: 0 50px 40px 50px;
  }
    .el-main ul {
      list-style: disc;
    }
      .el-main li {
        font-family: "Helvetica Neue","微软雅黑";
        font-size:26px;
        font-weight:500; 
        margin-top: 20px;
      }
      .el-main p {
          font-family: "Helvetica Neue","微软雅黑";
          font-size: 19px;
          font-weight: 150;
          line-height:35px;
          margin-top:15px;
          text-indent:2em;
          letter-spacing: 2px;

        }
        .el-main code{
          color:#B78721;

        }
     
</style>