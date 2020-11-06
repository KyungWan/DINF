<template>
  <Layout>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'

// @ is an alias to /src
/* eslint-disable no-unused-vars */
import store from '../store'
import Vue from 'vue'
import router from '../router'

export default {
  components: { Layout },
  methods: {
    Success () {
      (window.location.pathname !== '/Music') ? router.push('/Music') : router.go(0)
    }
  }
}
</script>

<style>
  .border-styles > p{
    margin: 2px 0;
    padding: 1px 3px;
    border-width: 2px;
    border-color: #aaa;
  }
  body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }

  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #42b983;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -user-select: none;
  }

  td {
    background-color: #f9f9f9;
  }

  th,
  td {
    min-width: 120px;
    padding: 10px 20px;
  }
</style>
