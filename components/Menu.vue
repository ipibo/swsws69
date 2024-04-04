<template>
  <div class="text-4xl gap-3 flex">
    <Button
      v-if="currentMenu !== 'SWSWS69'"
      class="bg-primaryBlue cursor-pointer text-secondaryBlue border-secondaryBlue border-[1px]"
    >
      <a href="#"> SWSWS69 </a>
    </Button>
    <Button
      v-if="currentMenu !== 'exhibitions'"
      class="bg-primaryRed cursor-pointer text-secondaryRed border-secondaryRed border-[1px]"
    >
      <a href="#exhibitions"> Exhibitions </a>
    </Button>
    <Button
      v-if="currentMenu !== 'events'"
      class="bg-primaryGreen cursor-pointer text-secondaryGreen border-secondaryGreen border-[1px]"
    >
      <a href="#events"> Events </a>
    </Button>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia"

const colorStore = useColorStore()
const { color } = storeToRefs(colorStore)

const props = defineProps({
  currentMenu: String,
})

// console.log("currentmenu", props.currentMenu)
</script>

<style></style>
