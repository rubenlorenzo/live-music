<template>
  <div class="root">
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
    <div class="spot">
      <div class="wrap" id="header">        
        <div id="subheader">
            <div id="logo">
            <img src="../static/live-music.jpg" alt="">
          </div>      
          <div id="title">        
            <h1>
              <router-link to="/" title="live-music">
                Live music <span><img src="../static/radio.png" alt=""></span>
              </router-link>
            </h1>                 
          </div>
        </div>
        <div class="space_single">
              <p>Live music on international radio</p>
        </div>             
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
  metaInfo:{
    title: 'live-music',
    titleTemplate: '%s | Live music on the radio'
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
    background-color: #000000;
    font-family: 'Roboto', 'sans-serif';
  }

  h1, h2, h3, h4, h5, h6, b, strong{
    font-weight: 500;
    
  }

  a{
    transition: color .3s;
  }

  .wrap{
    width: 80%;
    margin: 0 auto;    
  }

  .spot{
    top: 0;
    left: 0;
    width: 100%;
    margin: auto;
    height: 230px;
    display: flex;
    position: absolute;     
    align-items: center;
    background-color:#000000;
    transition: transform .3s;
    transform: translateY(-300px);      
    color: #ffffff;       
    text-shadow:
   -1px -1px 0 #524f4f,  
    1px -1px 0 #524f4f,
   -1px 1px 0 #524f4f,
    1px 1px 0 #524f4f;
  }

  .spot #header{
    border-bottom: 2.5px solid #ffffff;
    text-shadow:
   -1px -1px 0 #524f4f,  
    1px -1px 0 #524f4f,
   -1px 1px 0 #524f4f,
    1px 1px 0 #524f4f;    
    padding-bottom: 31px;

  }

    .spot #subheader{
    padding-top: 10px;
    border-radius: 4px;
    padding-bottom: 10px;    
    height: 130px;  
    
  }

  .spot #title{
    float: left;
    width:40%;    
    margin-left: 35px;
    margin-top: 35px;
    font-family: 'Lobster'
 
  }

  .spot h1{
    font-size: 50px; 
    text-align: left;     
  }

  .spot a{
    color: #ffffff;
    text-decoration: none;
  }

  .spot h1 img{
    width: 1em;
    margin-left: 2px;
    padding:1px 2px 1px 2px;
    background-color: #ffffff;
    border:1.2px solid #524f4f;
    border-radius: 2px;    
  }

  .spot a:hover{
    color: #dfb8b8;
  }

  .spot #logo{
    float: left;
    text-align:right;
    width: 40%;
  }

  .spot #logo img{
    width: 200px;     
    box-shadow: 
    -1px -1px 0 #524f4f,  
    1px -1px 0 #524f4f,
   -1px 1px 0 #524f4f,
    1px 1px 0 #524f4f;
  }
  
  .slidedown{
    transform: translateY(0);
  }

  .space{
    width: 100%;
    height: 20px;
  }

  .space_single{
    padding-top: 15px;
    clear: both;   
  }

  .space_single p{    
    text-align: center;
  }

  .view{
    margin-top: 300px;
  }
</style>

