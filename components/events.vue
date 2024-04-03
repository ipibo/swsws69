<template>
  <div>
    <titlesEvents />
    <div>
      <!-- <h1 class="text-8xl mt-9 font-ThreeSix21Pro">Events</h1> -->

      <text-block class="float-left" :class="textColor">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi a
        reiciendis provident, reprehenderit earum odio, sed inventore animi
        fugiat iusto eos unde! Dignissimos, sint mollitia maxime aperiam
        delectus perspiciatis ipsam.
      </text-block>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"

const colorStore = useColorStore()
const { color } = storeToRefs(colorStore)

const textColor = ref(`text-secondary${firstCharUpperCase(color.value)}`)

const changeColors = () => {
  textColor.value = `text-secondary${firstCharUpperCase(color.value)}`
}

watch(color, (newColor) => {
  changeColors()
})

changeColors()
</script>

<style scoped>
/* Your component's CSS code goes here */
</style>
