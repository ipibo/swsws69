<template>
  <!-- <div> -->
  <!-- <img :class="color" :src="importedSvg" alt="Imported SVG" /> -->

  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 70.7 70.7"
    style="enable-background: new 0 0 70.7 70.7"
    xml:space="preserve"
  >
    <path
      :class="color"
      d="M68,21.7c-1.8-4.3-4.4-8-7.7-11.3C57,7.2,53.3,4.6,49,2.8C44.7,0.9,40.2,0,35.3,0C30.5,0,26,0.9,21.7,2.8s-8,4.4-11.3,7.7
	s-5.8,7-7.7,11.3C0.9,26,0,30.5,0,35.4S0.9,44.8,2.8,49c1.8,4.3,4.4,8,7.7,11.3c3.3,3.3,7,5.8,11.3,7.7c4.3,1.8,8.8,2.8,13.6,2.8
	S44.7,69.8,49,68c4.3-1.8,8-4.4,11.3-7.7c3.3-3.3,5.8-7,7.7-11.3s2.8-8.8,2.8-13.6C70.7,30.5,69.8,26,68,21.7z M62,48H35.3v-3.6
	h28.2c-0.3,0.8-0.6,1.7-0.9,2.5C62.4,47.2,62.2,47.6,62,48z M35.3,55.4v-3.6h24.5C59,53.1,58,54.3,57,55.4H35.3z M56.3,14.6
	c1.1,1.1,2.1,2.3,3,3.6h-24v-3.6C35.3,14.6,56.3,14.6,56.3,14.6z M35.3,40.5v-3.6h29.5c-0.1,1.2-0.2,2.4-0.4,3.6H35.3z M35.3,33.1
	v-3.6h28.9c0.2,1.2,0.4,2.4,0.5,3.6H35.3z M35.3,25.7V22h26.3c0.3,0.6,0.6,1.2,0.9,1.8c0.2,0.6,0.5,1.2,0.7,1.8H35.3z M51.7,10.8
	H35.3V7.2h8.8c0.9,0.3,1.8,0.6,2.7,1C48.6,8.9,50.2,9.8,51.7,10.8z M46.8,62.6c-0.9,0.4-1.8,0.7-2.7,1h-8.8V60h16.3
	C50.2,61,48.5,61.8,46.8,62.6z"
    />
  </svg>

  <!-- </div> -->
</template>

<script setup>
import MySvg from "./assets/svg/accessibility.svg"

const importedSvg = MySvg

const colorStore = useColorStore()
const { color, accessibilityMode } = storeToRefs(colorStore)

// console.log(color.value)

// function flipColor() {
//   // Add your logic here
//   console.log("flipColor")
// }
</script>

<style scoped>
/* You can add style for your component here */
</style>
