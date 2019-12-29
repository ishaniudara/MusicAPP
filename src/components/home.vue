<template>
<div class="container">
<form>
  <fieldset>
      <legend>MUSIC APP</legend>
      <app-search></app-search>

    
  </fieldset>
</form>
<div class="col-md-12">
<app-result></app-result>

</div>

</div>
</template>

      <script>
      import searchArea from './searchArea.vue'
      import resultArea from './resultArea.vue'
      
      export default{
      components:{
      'app-search':searchArea,
      'app-result':resultArea,
      
}
      }
      </script>
