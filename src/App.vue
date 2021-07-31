<template>
<div class="container">
<ul class="nav justify-content-center">
    <li class="nav-item">
        <router-link to="/">LIST</router-link>  
    </li>
    <li class="nav-item">
      <router-link to="/about">ABOUT</router-link> 
    </li>
</ul>
  <router-view/>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
  font-size:20px;
}
a.router-link-active{
  background: #e0dff5;
  margin: 10px;
}
</style>


