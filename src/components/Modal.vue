<template>
          <!-- <Modal :open="$store.state.active" :primary-action="{ content:'Close', onAction: $store.commit('toggle') }" @close="$store.commit('toggle')">
      <template #activator>
        <Button @click="$store.commit('toggle')">Add</Button>
      </template>
      <template #title>Get a shareable link</template>
      <template #content>
        <ModalSection>
          <Stack vertical no-item-wrap>

          </Stack>
        </ModalSection>
      </template>
    </Modal> -->

    <Modal :open="active" :primary-action="{ content:'Save', onAction: saveData }" @close="toggle">
    <template #activator>
      <Button primary="true" @click="toggle">Open</Button>
    </template>
    <template #title>Add New Task</template>
    <template #content>
      <ModalSection>
        <Stack vertical no-item-wrap>
          <StackItem>
            <FormLayout>
  <TextField v-model="title" autoComplete="off">
    <template #label>Title</template>
  </TextField>
  <TextField v-model="day" type="text">
    <template #label>Day</template>
  </TextField>
  <Checkbox id="signUpCheckbox" v-model="reminder">
      <template #label>Reminder</template>
    </Checkbox>
</FormLayout>
          </StackItem>
        </Stack>
      </ModalSection>
    </template>
  </Modal>

  </template>
  <script>
    import { ref } from 'vue';
import { useStore } from 'vuex';
    export default{
        setup(){
            const store= useStore()
            const active= ref(null)
            const title=ref('')
            const day=ref('')
            const reminder=ref(false)
            const toggle=()=>{
            store.commit('toggle')
            active.value=store.state.active
            }
            function saveData(){
              if (title.value && day.value){
              let temp= {
                text:title.value,
                day:day.value,
                reminder:reminder.value
              }
              store.dispatch('addTask',temp)
              title.value=''
              day.value=''
              reminder.value=''
              toggle()
              }
              else{
                alert('please enter task title and day!')
              }
            }
            return{
                title,
                day,
                reminder,
                active,
                toggle,
                saveData,
            }
            
        }
    }
  </script>