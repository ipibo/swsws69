<template>
  <div class="text-2xl md:text-4xl gap-3 flex font-ThreeSix21Pro">
    <Button
      v-if="currentMenu !== 'SWSWS69'"
      class="bg-primaryBlue cursor-pointer text-secondaryBlue px-4"
      :class="classObject"
    >
      <a href="#"> SWSWS69 </a>
    </Button>
    <Button
      v-if="currentMenu !== 'exhibitions'"
      class="bg-primaryRed cursor-pointer text-secondaryRed px-4"
      :class="classObject"
    >
      <a href="#exhibitions"> Exhibitions </a>
    </Button>
    <Button
      v-if="currentMenu !== 'events'"
      class="bg-primaryGreen cursor-pointer text-secondaryGreen px-4"
      :class="classObject"
    >
      <a href="#events"> Events </a>
    </Button>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia"

const colorStore = useColorStore()
const { color, accessibilityMode } = storeToRefs(colorStore)

const props = defineProps({
  currentMenu: String,
})

const classObject = computed(() => {
  return {
    "bg-white": accessibilityMode.value,
    "text-black": accessibilityMode.value,
    "border-black": accessibilityMode.value,
  }
})
</script>

<style></style>
