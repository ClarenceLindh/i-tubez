import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
   name: "Store",

   state: {
      songResultList: [],
      artistResultList:[],
      albumResultList: [],
      searchPhrase: '',
      playingStatus: false,
      playList: [],
      currentSong: '',
   },

   mutations: {
      setSongResultList(state, payload) {
         state.songResultList = payload
         console.log('setSongResultList to: ', state.songResultList)
      },
      setArtistResultList(state, payload) {
         state.artistResultList = payload
         console.log('setArtistResultList to: ', state.artistResultList)
      },
      setAlbumResultList(state, payload) {
         state.albumResultList = payload
         console.log('setAlbumResultList to: ', state.albumResultList)
      },
      setSearchPhrase(state, payload) {
         state.searchPhrase = payload
         console.log('setSearchPhrase to: ', state.searchPhrase)
      },
      setPlayingStatus(state, payload) {
         state.playingStatus = payload
      },
      setPlayList(state, payload) {
         state.playList.push(payload)
         console.log('setPlayList to: ', state.playList)
      },
      setCurrentSong(state, payload) {
         state.currentSong = payload
         console.log('setCurrentSong to: ', payload)
      },
   },

   actions: {
      async fetchSongsBySearchPhrase() {
         await axios.get("https://yt-music-api.herokuapp.com/api/yt/songs/search+"
            + this.state.searchPhrase)
            .then(response => {
               this.commit("setSongResultList", response.data)
            })
      },
      async fetchArtistsBySearchPhrase() {
         await axios.get("https://yt-music-api.herokuapp.com/api/yt/artists/search+"
            + this.state.searchPhrase)
            .then(response => {
               this.commit("setArtistResultList", response.data)
            })
      },
      async fetchAlbumsBySearchPhrase() {
         await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/search+"
            + this.state.searchPhrase)
            .then(response => {
               this.commit("setAlbumResultList", response.data)
            })
      },
   },

   getters: {
      getSongResultList(state) {
         return state.songResultList
      },
      getSearchPhrase(state) {
         return state.searchPhrase
      },
      getPlayingStatus(state) {
         return state.playingStatus
      },
      getPlayList(state) {
         return state.playList
      },
      getCurrentSong(state){
         return state.currentSong
      },
      getArtistResultList(state){
         return state.artistResultList
      },
      getAlbumsResultList(state){
         return state.albumResultList
      }
   },
   modules: {
   }
})
