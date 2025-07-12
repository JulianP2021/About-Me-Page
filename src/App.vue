<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/cv">CV</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <div id="shiftdown"></div>

  <RouterView />
</template>

<style>
#shiftdown {
  height: 5vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.icon {
  width: min(30vw, 30vh);
  height: min(30vw, 30vh);
  object-fit: fill;
  margin: 20px auto;
  border: 5px solid #333;
}

.icon-circle {
  width: min(30vw, 30vh);
  height: min(30vw, 30vh);
  object-fit: cover;
  border-radius: 50%;
  margin: 20px auto;
  border: 5px solid #333;
}

h1 {
  font-size: 32px;
  margin: 20px 0;
  color: #333;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin: 20px 0;
  color: #666;
}

nav {
  top: 0;
  left: 0;
  height: 5vh;
  width: 100vw;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
}

nav a:hover {
  background-color: #444;
}

button {

  padding: 12px 36px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: 1px solid white;
}

a {
  color: #007bff;
  text-decoration: none;
}

ul {
  list-style-position: inside;
}
</style>