import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
   name: "Store",

   state: {
      resultList: [],
      searchPhrase: null,
      playingStatus: false,
   },

   mutations: {
      setResultList(state, payload) {
         state.resultList = payload
         console.log('setResultList to: ', state.resultList)
         console.log(this.state.resultList.length)
      },
      setSearchPhrase(state, payload) {
         state.searchPhrase = payload
         console.log('setSearchPhrase to: ', state.searchPhrase)
      },
      setPlayingStatus(state, payload){
         state.playingStatus = payload
      }
   },

   actions: {
      async fetchBySearchPhrase() {
         await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/search+"
            + this.state.searchPhrase)
            .then(response => {
               this.commit("setResultList", response.data)
            })
      },

   },

   getters: {
      getResultList(state) {
         return state.resultList
      },
      getSearchPhrase(state) {
         return state.searchPhrase
      },
      getPlayingStatus(state){
         return state.playingStatus
      },
   },
   modules: {
   }
})
