<template>

  <div id="app">

    <div class="menus">
      <button @click="showMenus.showProjects = !showMenus.showProjects">Projetos</button>
      <button @click="showMenus.showDashboard = !showMenus.showDashboard">Dashboard</button>
    </div>

    <div v-if="showMenus.showProjects">
      <Projetos />
    </div>

    <div v-if="showMenus.showDashboard">
      <Dashboard />
    </div>

</div>

</template>

<script>

import Projetos from './components/Projetos'
import Dashboard from './components/Dashboard'

export default {
  components: {
    Projetos,
    Dashboard
  },

  data(){
    return{
      showMenus: {
        showProjects: false,
        showDashboard: false,
      }
    }
  },  
}

</script>

<style>

body {
  margin: 0 auto;
  max-width: 90vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid silver;
}

button {
  margin-bottom: 10px;
}


table {
  border: solid gray;
}

</style>