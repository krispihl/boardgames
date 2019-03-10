<template>
  <div class="games">
    <div v-for="(game, index) in games" :key="index" class="container">
      <div class="picture">
        <img :src="game.image" alt="" width="200">
      </div>
      <div class="info">
        <ul>
          <li><span>Name:</span>{{ game.name }}</li>
          <li><span>Players:</span>{{ game.minPlayers }} - {{ game.maxPlayers }}</li>
          <li><span>Playing time:</span>{{ game.playingTime }}</li>
          <li class="clipped"><span>Description:</span>{{ game.description }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import list from '../assets/gameList'

export default {
  name: 'games',
  data() {
    return {
      games: []
    }
  },
  methods: {
    loadGames() {
      for(let i=0; i<list.length; i++) {
      let gameId = list[i].id;
      let link = `https://bgg-json.azurewebsites.net/thing/${gameId}`
      axios.get(link)
        .then(response => {
         this.games.push(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
   }
    }
  },
  beforeMount() {
    return this.loadGames()
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    margin: 20px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;

    .picture {
      margin: 10px;
    }

    .info {
      margin: 10px;
      align-items: center;
    }

    span {
      font-weight: 600;
      margin-right: 10px;
    }

    ul {
      list-style: none;
      padding-left: 10px;
    }

    li {
      margin-bottom: 5px;
      overflow: hidden;
      line-height: 1.2em;
    }

    .clipped { 
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
      }
  }
</style>

