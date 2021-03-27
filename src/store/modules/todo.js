// import axios from 'axios'

const state = {
    todos: [
        {
            id: 1,
            task: 'making money',
            status: false,
            date: new Date().toLocaleDateString(),
        },
        {
            id: 2,
            task: 'making money',
            status: false,
            date: new Date().toLocaleDateString(),
        },
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
    }
    
}
 
const mutations = {
    newTodo: (state, todo) => state.todos.unshift(todo),

  
    
}


export default {
    state,
    getters,
    actions,
    mutations

}