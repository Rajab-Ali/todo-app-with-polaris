<template>

  <Heading class="header">{{title}}</Heading>
</template>

<script>
export default {
    props:{
        title:String,
        
    }
}
</script>

<style scoped>
  .header{
    font-size: 20px;
    color: rgb(35, 35, 35);
  }
</style>