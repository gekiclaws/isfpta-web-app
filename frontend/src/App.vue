<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="warning" class="d-flex justify-content-left">
      <b-navbar-brand to="/">
        <img src="logo_pta.png" alt="Logo" class="h-100">
        ISF PTA
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="mb-2" ></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/pta-network-news">PTA Network News</b-nav-item>
          <b-nav-item to="/volunteer-programs">Volunteer Programs</b-nav-item>
          <b-nav-item href="https://www.isfpta.org/index.php/membership-registration/membership-registration-2020-21">Membership</b-nav-item>
          <b-nav-item to="/community-service">Community Service</b-nav-item>
          <b-nav-item to="/events">Events</b-nav-item>
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
.navbar-brand{
  height: 10em;
}
</style>
