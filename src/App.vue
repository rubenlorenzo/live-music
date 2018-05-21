<template>
  <div class="root">
    <div class="spot">
      <div class="wrap">
        <router-link to="/">
          <h1>vuetube</h1>
        </router-link>
        <div class="space single"></div>
        <p>Video resources that will help you to improve your Vue skills</p>
        <div class="space"></div>
        <div class="space"></div>
        <p class="note">
          By <a target="_blank" href="http://firmino.engineer">Firmino Changani</a>
          &nbsp;-&nbsp; Want to improve? Contribute <a target="_blank" href="#">here</a>
        </p>
      </div>
    </div>
    <div class="wrap root">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
};
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  html, body, .root{
    overflow: auto;
    min-height: 100%;
  }

  body{
    background-color: #EEE;
    font-family: 'Roboto', 'sans-serif';
  }

  h1, h2, h3, h4, h5, h6, b, strong{
    font-weight: 500;
  }

  a{
    transition: color .3s;
  }

  .wrap{
    width: 70%;
    margin: 0 auto;
  }

  .spot{
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #333;
  }

  .spot,
  .spot a{
    color: #FFF;
  }

  .spot h1{
    font-size: 50px;
  }

  header{
    text-align: center;
  }

  .space{
    width: 100%;
    height: 20px;
  }

  .space.single{
    height: 10px;
  }

  footer{
    width: 100%;
    height: 20px;
    padding: 15px 0;
    background-color: #333;
  }

  footer .wrap{
    display: flex;
    justify-content: space-between;
  }

  footer,
  footer a{
    color: #FFF;
    font-size: 14px;
  }
</style>

