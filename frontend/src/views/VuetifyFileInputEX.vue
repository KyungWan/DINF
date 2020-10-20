<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>


      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-file-input v-model="files" show-size label="File input"></v-file-input>
      <v-btn @click="upload" color="primary">Upload</v-btn>
      <p>File Name : {{ files.name }}</p>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import axios from 'axios'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    files: [],
  }),

  methods: {
    async upload() {
      var fd = new FormData();
      fd.append('files', this.files)

      await axios.post('http://localhost:1337/upload',
            fd, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then( response => {
            console.log('SUCCESS!!');
            console.log(response.data)
          })
          .catch(function () {
            console.log('FAILURE!!');
          });
    }

  }
};
</script>
