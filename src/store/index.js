import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
   name: "Store",

   state: {
      songResults: [],
      searchPhrase: null,
      playingStatus: false,
      songList: [],
      currentSong: '',
   },

   mutations: {
      setSongResults(state, payload) {
         state.songResults = payload
         console.log('setSongResults to: ', state.songResults)
         console.log(this.state.songResults.length)
      },
      setSearchPhrase(state, payload) {
         state.searchPhrase = payload
         console.log('setSearchPhrase to: ', state.searchPhrase)
      },
      setPlayingStatus(state, payload) {
         state.playingStatus = payload
      },
      setSongList(state, payload) {
         state.songList.push(payload)
         console.log('setSongList to: ', state.songList)
      },
      setCurrentSong(state, payload) {
         state.currentSong = payload
         console.log('setCurrentSong to: ', payload)
      },
   },

   actions: {
      async fetchSongsBySearchPhrase() {
         await axios.get("https://yt-music-api.herokuapp.com/api/yt/song/search+"
            + this.state.searchPhrase)
            .then(response => {
               this.commit("setSongResults", response.data)
            })
      },
   },

   getters: {
      getSongResults(state) {
         return state.songResults
      },
      getSearchPhrase(state) {
         return state.searchPhrase
      },
      getPlayingStatus(state) {
         return state.playingStatus
      },
      getSongList(state) {
         return state.songList
      },
      getCurrentSong(state){
         return state.currentSong
      },
   },
   modules: {
   }
})
