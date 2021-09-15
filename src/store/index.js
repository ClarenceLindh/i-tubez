import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
   name: "Store",

   state: {
      resultList: [],
      searchPhrase: '',

   },
   mutations: {
      setResultList(state, payload) {
         state.resultList = payload
      },
      setSearchPhrase(state, payload) {
         state.searchPhrase = payload
      },
   },
   actions: {
      async fetchApiObject() {
         await axios.get("https://yt-music-api.herokuapp.com/api/yt/" + this.state.searchPhrase)
            .then(response => {
               this.commit("setResultList", response.data)
               console.log(response.data)
            })
      }

   },

   getters: {
      getResultList(state) {
         return state.resultList
      },
      getSearchPhrase(state) {
         return state.searchPhrase
      },
   },
   modules: {
   }
})
