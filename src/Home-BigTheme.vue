<template>
  <div class="alp-big-theme-wrapper">
    <div class="alp-big-theme" :style="backgroundImage">
      <div class="alp-big-theme__shadow">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import democratique from './assets/urgence.democratique.jpg'
import ecologique from './assets/urgence.ecologique.jpg'
import sociale from './assets/urgence.sociale.jpg'

const pictures = { democratique, ecologique, sociale }

export default {
  props: ['image'],

  computed: {
    backgroundImage() {
      return { backgroundImage: `url(${pictures[this.image]})` }
    }
  }
}
</script>

<style>
.alp-big-theme-wrapper {
  flex: 1;
  overflow: hidden;
}

.alp-big-theme {
  background-size: cover;
  height: 100%;
  transition: .1s transform ease-out;
}

.alp-big-theme:hover {
  transform: scale(1.05);
  transition: .1s transform ease-in;
}

.alp-big-theme:hover .alp-big-theme__shadow {
  background-color: rgba(0, 0, 0, 0.4);
  transition: .1s background-color ease-in;
}

.alp-big-theme__shadow {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  text-transform: uppercase;
  transition: .1s background-color ease-out;
}
</style>
