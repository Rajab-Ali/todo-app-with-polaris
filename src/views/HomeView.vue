<script>
import Header from "../components/Header.vue";
import Button from "../components/Button.vue";
import Task from '../components/Task.vue'
import { onMounted, watch } from "vue";
import { useStore } from 'vuex'
import Modal from "../components/Modal.vue";
export default {
  components: {
    Header,
    Button,
    Task,
    Modal
  },
  setup(){

    const store = useStore()
    onMounted(()=> store.dispatch('getData'))
    watch(()=> store.state.active, ()=> store.dispatch('getData'))
    watch(()=> store.state.render, ()=> store.dispatch('getData'))
  }

};
</script>

<template>
  <Stack vertical class="main-cont">
    <LayoutSection class="header-cont">
      <Header title="Task Manager" />
      <Modal />
    </LayoutSection>
    <Stack vertical spacing="loose" >
            <Task :key="task.id" v-for="task in $store.state.tasks" :id="task.id" :text="task.text" :day="task.day" :reminder="task.reminder" />      
    </Stack>
  </Stack>
</template>

<style scoped>
.main-cont{
  width: 70%;
  margin: 10px auto;
}
.header-cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 20px;
}

@media (min-width: 1280px) {
  .main-cont{
    width: 800px;

  }
}
@media (max-width:786px) {
  .main-cont{
    width: 95%;

  }
} 
</style>
