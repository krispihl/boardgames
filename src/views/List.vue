<template>
  <div class="container">
    <div v-for="(name, index) in names" :key="index">
      <ul>
        <li>{{ name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import list from '../assets/gameList'

export default {
  name: 'list',
  data() {
    return {
      names: []
    }
  },
  methods: {
    getGameList() {
      for(let i=0; i<list.length; i++) {
        this.names.push(list[i].name)
      }
    }
  },
  beforeMount() {
    this.getGameList()
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    margin: 20px;
    font-size: 16px;
    line-height: 1.5em;

    ul {
      list-style: square;
    }
  }
</style>
