<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand to="/">
        <img src="https://www.isfpta.org/images/Pictures/2015-16/ISFPTALogowtihQilinMay2014small.png" alt="Logo">
        ISF PTA
      </b-navbar-brand> 
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>PTA Network News</b-nav-item>
          <b-nav-item to="/events">PTA Events</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
