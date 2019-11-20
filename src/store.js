import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title : "Daniel Lesiewicz app",
    list: [
      'Pierwszy element listy',
      'drugi element listy',
      
    ]
  },
  getters : {
    listLength : state =>{
      return state.list.length
    }
  },
  mutations: {
    ADD_ELEMENT :(state,el)=>{
      state.list.push(el)
    },
    REMOVE_ELEMENT :(state,el)=>{
      state.list.splice(el, 1)
    }
  },
  actions: {
    removeElement : (context,el)=>{
      context.commit('REMOVE_ELEMENT',el)
    }
  }
})
