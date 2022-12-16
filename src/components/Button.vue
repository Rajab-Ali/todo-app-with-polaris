<template>
    <Button v-if="color==='green'" primary @click="onClick" >{{title}}</Button>
    <Button v-if="color==='red'" destructive @click="$store.dispatch('deleteTask',id)" >{{title}}</Button>  
</template>

<script>;

export default {
    name:'button',
    props:{
        id:Number,
        title:String,
        color:String,
    },
    setup(props){
        function onClick(){
            console.log(props.id, 'btn-clicked');
        }
        return{
            onClick
        }
    }
}
</script>
<style scoped>

</style>