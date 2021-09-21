<template>
  <div>
    <div class="song-card-wrap">
      <div class="container">
        <h2 class="songs-title">Songs</h2>
        <SongCard
          :post="result"
          v-for="(result, index) in resultList.content"
          :key="index"
        />
      </div>
    </div>
    <div class="album-playlist-wrap">
      <div class="artist-card-wrap">
        <h2>Artists</h2>
        <ArtistCard
          :post="result"
          v-for="(result, index) in resultList.content"
          :key="index"
        />
      </div>
      <div class="album-card-wrap">
        <h2>Albums</h2>
        <AlbumCard
          :post="result"
          v-for="(result, index) in resultList.content"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SongCard from "../components/SongCard.vue";
import AlbumCard from "../components/AlbumCard.vue";
import ArtistCard from "../components/ArtistCard.vue";

export default {
  name: "Home",

  components: { SongCard, AlbumCard, ArtistCard },

  data() {
    return {};
  },

  computed: {
    resultList() {
      return this.$store.state.resultList;
    },
    samplePost() {
      return this.$store.state.samplePost;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 50px;
}

.songs-title {
  margin-top: 100px;
}

.album-playlist-wrap {
  display: flex;
  flex-direction: row;

  h2 {
    text-align: center;
  }

  .artist-card-wrap {
    text-align: left;
    margin-top: 4px;
    width: 50vw;
    margin-bottom: 60px;
  }
  .album-card-wrap {
    text-align: right;
    margin-top: 4px;
    width: 50vw;
    margin-bottom: 60px;
  }
}

.song-card-wrap {
  h2 {
    text-align: center;
  }
}

// .result-card-wrap {
//   h3 {
//     font-weight: 300;
//     font-size: 28px;
//     margin-bottom: 32px;

//   }
// }

// .updates {
//   .container {
//     padding: 100px 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     @media (min-width: 800px) {
//       padding: 125px 25px;
//       flex-direction: row;
//     }

//     .router-button {
//       display: flex;
//       font-size: 14px;
//       text-decoration: none;
//       @media (min-width: 800px) {
//         margin-left: auto;
//       }
//     }

//     h2 {
//       font-weight: 800;
//       font-size: 32px;
//       max-width: 425px;
//       width: 100%;
//       text-align: center;
//       text-transform: uppercase;
//       @media (min-width: 800px) {
//         text-align: initial;
//         font-size: 40px;
//       }
//     }
//   }
// }
</style>