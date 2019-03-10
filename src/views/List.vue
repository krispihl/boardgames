<template>
  <div class="container">
    <div class='header'>
      <div class='header header_wrapper'>
        <h1>List of boardgames</h1>
        <h5>Meie laumängu nimekiri</h5>
      </div>
    </div>
    <div v-for="(name, index) in names" :key="index" class='list'>
      <router-link :to="`/game/${name.id}`" class='link'>
        <li>{{ index+1 }}. {{ name.name }}</li>
      </router-link>
    </div>
  </div>
</template>

<script>
import list from '../assets/gameList'

export default {
  name: 'list',
  data() {
    return {
      id: 68448,
      names: [],
      url: '/game/68448'
    }
  },
  methods: {
    getGameList() {
      for(let i=0; i<list.length; i++) {
        this.names.push(list[i])
      }
    }
  },
  beforeMount() {
    this.getGameList()
  }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 1.5em;
  }

  .header {
    display: flex;
    justify-content: space-around;
    height: 100px;
    background-color: aquamarine;
    margin-bottom: 20px;
    text-transform: uppercase;

    &_wrapper {
      display: block;
    }

    h1 {
      font-size: 30px;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    h5 {
      display: block;
      text-align: center;
    }
  }

  .list {
    list-style: none;
    margin-left: 20px;
 
    .link {
      text-decoration: none;
    }
  }
</style>
