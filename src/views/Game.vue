<template>
  <div class="game">
     <div class='header'>
      <div class='header_wrapper'>
        <h1>{{ gameInfo.name }}</h1>
        <div class='header_info'>
          <span>Players: {{ gameInfo.minPlayers }} - {{ gameInfo.maxPlayers }}</span>
          <span>Playing time: {{ gameInfo.playingTime }}</span>
        </div>
      </div>
    </div>
          <div class="info">
        <p>{{ gameInfo.description }}</p>
      </div>
      <div class="picture">
        <img :src="gameInfo.image" alt="" height="400">
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'game',
  data() {
    return {
      gameInfo: {}
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
    removeLineFeed() {
      let data = this.gameInfo.description
      data = data.replace(/&#10;&#10;/g, ' ');
    }
  },
  beforeMount() {
    return this.loadGame()
    return this.removeLineFeed()
  }
}
</script>

<style lang="scss">
  .game {

    .header_info  {
        display: inline-block;
        text-align: center;
    }

    .picture {
      display: flex;
      justify-content: center;
      margin: 20px;
    }

    .info {
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.2em;
    }

    span {
      font-weight: 600;
      margin-right: 10px;
    }
  }
</style>

