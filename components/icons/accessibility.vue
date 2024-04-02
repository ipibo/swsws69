<template>
  <div>
    <img class="" :src="importedSvg" alt="Imported SVG" />
  </div>
</template>

<script>
import MySvg from "./assets/svg/accessibility.svg"
console.log(MySvg)

export default {
  name: "SvgComponent",
  data() {
    return {
      importedSvg: MySvg,
    }
  },
}
</script>

<style scoped>
/* You can add style for your component here */
</style>
