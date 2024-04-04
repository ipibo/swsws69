<template>
  <div @click="flipColor">
    <img class="" :src="importedSvg" alt="Imported SVG" />
  </div>
</template>

<script setup>
import MySvg from "./assets/svg/accessibility.svg"

const importedSvg = MySvg

function flipColor() {
  // Add your logic here
  console.log("flipColor")
}
</script>

<style scoped>
/* You can add style for your component here */
</style>
