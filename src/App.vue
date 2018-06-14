<template>
  <div class="root">
    <div class="spot">
      <div class="wrap">
        <h1>
          <router-link to="/" title="vuetube">
            Live music on the Radio ▶
          </router-link>
        </h1>
        <div class="space single"></div>
        <p>Live music on international radio</p>        
      </div>
    </div>
    <div class="wrap root view">
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
  mounted() {
    // Wait for 500ms after mount the component
    setTimeout(() => {
      // Add the class slidedown in the header
      document.querySelector(".spot")
        .classList.add('slidedown');
    }, 500);
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
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    display: flex;
    position: absolute;
    text-align: center;
    align-items: center;
    background-color: #333;
    transition: transform .3s;
    transform: translateY(-300px);
  }

  .spot{
    color: #FFF;
  }

  .spot h1 a{
    font-size: 50px;
  }

  .spot a{
    color: #5bc498;
    text-decoration: none;
  }

  .spot a:hover{
    color: #FFF;
  }

  .slidedown{
    transform: translateY(0);
  }

  .space{
    width: 100%;
    height: 20px;
  }

  .space.single{
    height: 10px;
  }

  .view{
    margin-top: 300px;
  }
</style>

