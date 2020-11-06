<template>
  <v-main>
  <v-container>
    <div id="check">
      <div>
          <button v-on:click="check">check</button>
      </div>
  </div>

  <div id="app2">
      <div>
        <input v-model="searchS" type="text" />
        <ul>
            <li v-for="singer in filteredSs" v-bind:key="singer"> {{ singer }} </li>
        </ul>
      </div>
    </div>
  </v-container>
  </v-main>
</template>

<script>
export default {
  e1: 'app1',
  data1 () {
    return { message: '안녕!' }
  },
  methods: {
    check: function () {
      alert(this.message)
    }
  },
  e2: 'app2',
  data2: {
    searchS: '',
    Ss: ['가수1', '가수2', '그룹1', '그룹2', '기획사']
  },
  computed: {
    filteredSs () {
      return this.filteredSs(Ss => Ss.match(this.searchS.toUpperCase()))
    }
  }
}
</script>

<style>

</style>
