<template>
  <div class="container">
    <div class='header'>
      <div class='header header_wrapper'>
        <h1>List of boardgames</h1>
        <h5>[Meie laumängu nimekiri]</h5>
      </div>
    </div>
    <div class='list'>
      <div v-for="(name, index) in names" :key="index" class='list list_wrapper'>
        <router-link :to="`/game/${name.id}`" class='link'>
          <li>{{ index+1 }}. {{ name.name }}</li>
        </router-link>
      </div>
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
    font-family: 'Varela Round', sans-serif;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 1.5em;
    padding-bottom: 40px;
    background-color: #eee;
    color: #fff;
  }

  .header {
    display: flex;
    justify-content: space-around;
    height: 150px;
    background-color: #9E8FB2;
    margin-bottom: 40px;
    text-transform: uppercase;

    &_wrapper {
      display: block;
    }

    h1 {
      font-size: 35px;
      font-weight: bold;
      margin-top: 45px;
      margin-bottom: 20px;
    }

    h5 {
      display: block;
      text-align: center;
    }
  }

  .list {
    margin: 0 auto;
    font-size: 22px;
    line-height: 1.5em;

    &_wrapper {
    list-style: none;
 
    .link {
      text-decoration: none;

      &:link,
      &:visited,
      &:active, {
        color: #582C4D;
      }

      &:hover {
        color: #9E8FB2;
      }
    }
  }
  }

  
</style>
