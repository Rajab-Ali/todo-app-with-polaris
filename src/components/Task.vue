<template>
  <AlphaCard @dblclick="$store.dispatch('updateTask',[id,{text:text,
        day:day,
        reminder:!reminder}])" :class="['task-cont',reminder && 'show-border']">
  <AlphaStack spacing="2">
    <Text as="h3" variant="headingMd">
      {{text}}
    </Text>
    <Text as="p">
        {{day}}
    </Text>
  </AlphaStack>
  <Button :id="id" title="Delete" color="red" />
</AlphaCard>
</template>

<script>
import Button from './Button.vue';
export default {
    name:'task',
    components:{
        Button
    },
    props:{
        id:Number,
        text:String,
        day:String,
        reminder:Boolean
    },
    setup(){
      function updateReminder(){
        console.log('double clicked');
      
      }
      return{
        updateReminder
      }
    }
}
</script>

<style scoped>
.task-cont{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.show-border{
    border-left: 5px solid green;
}
</style>