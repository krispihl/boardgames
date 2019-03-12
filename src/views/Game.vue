<template>
  <div class="game">
     <div class='header'>
      <div class='header_wrapper'>
        <h1>{{ gameInfo.name }}</h1>
        <div class='header_info'>
          <span>Players: {{ gameInfo.minPlayers }} - {{ gameInfo.maxPlayers }}</span>
          <span>Playing time: {{ gameInfo.playingTime }}'</span>
        </div>
      </div>
    </div>
    <div class='wrapper'>
      <div class="info">
        <p>{{ gameInfo.description | removeLineFeed | replaceQuotes | replaceDash | replaceDash2 }}</p>
        <br>
        <a :href="url" target="_blank">Get more info @BGG</a>
      </div>
      <div class="picture">
        <img :src="gameInfo.image" alt="" height="400">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'game',
  data() {
    return {
      gameInfo: {},
      url: null
    }
  },
  methods: {
    loadGame() {
      let id = this.$route.params.id
      let link = `https://bgg-json.azurewebsites.net/thing/${id}`
      axios.get(link)
        .then(response => {
         this.gameInfo = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    createUrl() {
      let id = this.$route.params.id
      return this.url = `https://boardgamegeek.com/boardgame/${id}`
    }
  },
  filters: {
    removeLineFeed(value) {
      return value.replace(/&#10;/g, " ")
    },
    replaceQuotes(value) {
      return value.replace(/&quot;/g, '"')
    },
    replaceDash(value) {
      return value.replace(/&ndash;/g, " - ")
    },
    replaceDash2(value) {
      return value.replace(/&mdash;/g, " - ")
    }
  },
  beforeMount() {
    this.loadGame()
    this.createUrl()
  }
}
</script>

<style lang="scss">
  .game {
    font-family: 'Varela Round', sans-serif;
    color: #582C4D;

    .header {
      color: #fff;

      h1 {
        display: block;
        text-align: center;
      }

      &_info  {
        display: block;
        text-align: center;
     }

    }

    .wrapper {
      margin: 40px 20px 40px 20px;
    }

    .picture {
      display: flex;
      justify-content: center;
      margin-top: 40px;

      img {
        border-radius: 10px;
      }
    }

    .info {
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.5em;
    }

    a {
      text-decoration: none;

      &:link,
      &:visited,
      &:active, {
        color: #FFBA49;
      }

      &:hover {
        color: #582C4D;
      }
    }

    span {
      font-weight: 600;
      margin-right: 10px;
      color: #582C4D;
    }
  }
</style>

