 <template>
  <div id="app">
  <heading>
  </heading>
  <cal>
  </cal>
  </div>
</template>

<script>
import heading from "./components/heading.vue";
import cal from "./components/cal.vue";


export default {
name:"app",
components:{
heading,
cal
}

};
</script>

<style>
#app{
  font-family:roboto;
  text-align:center;
  color:black;

  margin-top:100px;
  font-size:40px;
  cursor:pointer;
}
.btn:active{
  color:white;
  background:#777;
}

</style>
