// import axios from 'axios'
//import { db } from '../../firebase/db'

const state = {
    todos: [
        
    ],
    showToast: false,
}

const getters = {
    allTodos: (state) => state.todos,
    Toast: (state) => state.showToast
}

const actions = {
    async addTodo({ commit }, title) {
        const response = {
            id: Math.random(),
            task: title,
            status: false,
            date: new Date().toLocaleDateString(),
        }
        
        commit('newTodo', response),

        state.showToast = true,
        setTimeout(() => state.showToast = false, 1500)
    },

    async removeTodo({ commit }, id) {


        commit('removeTodo', id)
    }
    
    
}
 
const mutations = {
    newTodo: (state, todo) => state.todos.unshift(todo),

    removeTodo: (state, id) => state.todos.splice(id, 1),
    
}


export default {
    state,
    getters,
    actions,
    mutations

}