<template>
<div class="calc">
<div class="display">{{result || 0}} </div>
<div class="btn clear" @click="clear">c</div>
<div class="btn op" @click="per">%</div>
<div class="btn" @click="append(7)">7</div>
<div class="btn"  @click="append(8)">8</div>
<div class="btn"  @click="append(9)">9</div>
<div class="btn op" @click="divide">/</div>
<div class="btn"  @click="append(4)">4</div>
<div class="btn"  @click="append(5)">5</div>
<div class="btn"  @click="append(6)">6</div>
<div class="btn op" @click="multiply">*</div>
<div class="btn"  @click="append(1)">1</div>
<div class="btn"  @click="append(2)">2</div>
<div class="btn"  @click="append(3 )">3</div>
<div class="btn op" @click="sub">-</div>
<div class="btn"  @click="append(0)">0</div>
<div class="btn op" @click="dot">.</div>
<div class="btn op" @click="equal">=</div>
<div class="btn op" @click="sum">+</div>


</div>

</template>
<script>
export default{
data(){
return {
	result:'1200',
	prev:null,
	operator:null,
	operatorClick:false
}
},
methods:{
clear(){
	this.result='';
},
per(){
	this.result=parseFloat(this.result)/100;
},
append(number){
if(this.operatorClick){
this.result='';
this.operatorClick=false;}
	this.result=this.result+number;

},
dot(){
	if(this.result.indexOf('.')===-1){
	this.append('.');
	}
},
divide(){
	this.operator= (a,b) =>b/a;
	this.setprev();
},
multiply(){
	this.operator= (a,b) =>b*a;
	this.setprev();
},
sub(){
	this.operator= (a,b) =>a-b;
	this.setprev();
},
sum(){
	this.operator= (a,b) =>b+a;
	this.setprev();
},
equal(){
	this.result=this.operator(
	parseFloat(this.result),
	parseFloat(this.prev)
	);
	this.prev=null;
},
setprev(){
	this.prev=this.result;
	this.operatorClick=true;
}
}
	
}
</script>
<style>
*{
	background:#111;
}
.calc{
	width:400px;
	margin:0 auto;
	font-size:60px;
	display:grid;
	grid-template-columns:repeat(4, 1fr);
	grid-auto-rows:minmax(auto,auto);
	border:20px groove #999;

	}
	.display{
	grid-column:1/5;
	background:#333;
	color:#fff;
	padding:10px;
	text-align:right;
	
}
.clear{
	grid-column:1/4;
}
.btn{
	padding:10px;
	background:linear-gradient(#fafafa,lightgray);
	border:1px solid #999;
}
.op{
	color:red;
}

</style>