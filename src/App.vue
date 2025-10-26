<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="site-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <RouterLink class="brand" to="/">Julian</RouterLink>
      <div class="nav-links" role="menubar">
        <RouterLink role="menuitem" to="/">Home</RouterLink>
        <RouterLink role="menuitem" to="/cv">CV</RouterLink>
        <RouterLink role="menuitem" to="/projects">Projects</RouterLink>
        <RouterLink role="menuitem" to="/contact">Contact</RouterLink>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style>
:root {
  --site-max-width: 900px;
}

.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: var(--nav-bg);
  color: var(--nav-text);
  z-index: 60;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
}

.nav-inner {
  width: 100%;
  max-width: var(--site-max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.brand {
  font-weight: 700;
  color: var(--nav-text);
  text-decoration: none;
  font-size: 1.05rem;
}

.nav-links {
  display: flex;
  gap: 8px;
  align-items: center;
}

.nav-links a {
  color: var(--nav-text);
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.15s, color 0.15s;
}

.nav-links a:hover,
.nav-links a:focus {
  background: rgba(255,255,255,0.06);
  outline: none;
}

.container {
  max-width: var(--site-max-width);
  margin: 0 auto;
  padding: 24px;
  text-align: center;
}

.icon-circle {
  width: min(24vw, 220px);
  height: min(24vw, 220px);
  object-fit: cover;
  border-radius: 50%;
  margin: 20px auto;
  border: 4px solid rgba(0,0,0,0.12);
}

h1 {
  font-size: 28px;
  margin: 16px 0;
  color: var(--color-heading);
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin: 16px 0;
  color: var(--color-text);
}

button {
  padding: 10px 22px;
  border-radius: 6px;
  background-color: var(--brand-accent);
  color: white;
  border: 1px solid rgba(255,255,255,0.06);
}

a {
  color: var(--brand-accent);
  text-decoration: none;
}

ul { list-style-position: inside; }
</style>