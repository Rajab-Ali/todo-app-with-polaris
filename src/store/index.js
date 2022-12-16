import { createStore } from 'vuex'
import axios from 'axios'
export const store= createStore({
    state:{
        tasks:[],
        active:false,
        render:false
    },
    mutations:{
        setState(state, data){
            state.tasks=data
        },
        toggle(state) {
            state.active = !state.active;
            console.log('toggle',state.active);
          },
        renderData(state){
            state.render= !state.render
            console.log('render', state.render); 
        }
    },
    actions:{
       async getData({commit}){
        const res= await axios.get("http://localhost:5000/tasks")
        console.log(res.data);
        commit('setState',res.data)
       },
       async addTask({commit},task){
        const res= await axios.post("http://localhost:5000/tasks",task)
        commit('renderData')
    },
       async deleteTask({commit},id){
        console.log(id, 'id \n');
        const res= await axios.delete(`http://localhost:5000/tasks/${id}`)
        if(res.status===200){
            commit('renderData') 
        }
       },
       async updateTask({commit}, dataArray){
        console.log(dataArray, 'update task');
        let id = dataArray[0]
        let data= dataArray[1]
        const res= await axios.put(`http://localhost:5000/tasks/${id}`, data)
        commit("renderData")
       }
    }
})