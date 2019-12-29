<template>
<div class="form-group">
      <label for="exampleInputEmail1">search</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search here" @input="keypressed"/>
     
    </div>

</template>
<script>
import axios from 'axios';
export default{
	methods:{
	keypressed(){
	var key=event.target.value;
	console.log(key);

	
	}
	}
}
</script> 