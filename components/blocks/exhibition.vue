<template>
  <div
    class="transition ease-in duration-300 rounded-[40px] border-[2px] text-[36px] leading-[40px] mt-[20px] mb-[20px]"
    :class="borderColor"
  >
    <div class="p-[40px] transition ease-in duration-300" :class="textColor">
      <div class="font-bold">{{ exhibitionName }}</div>
      <div class="font-bold">{{ artistName }}</div>
      <div class="font-bold">
        {{ new Date(startDate).toLocaleDateString("nl-NL").replace(/-/g, ".") }}
        -
        {{ new Date(endDate).toLocaleDateString("nl-NL").replace(/-/g, ".") }}
      </div>
    </div>
    <img class="w-full" :src="image" />
    <div class="p-4" :class="textColor">
      <div class="mt-4 font-light mb-2 text-[24px] mobile-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"

const colorStore = useColorStore()
const { color } = storeToRefs(colorStore)
const borderColor = ref(`border-secondary${firstCharUpperCase(color.value)}`)
const textColor = ref(`text-secondary${firstCharUpperCase(color.value)}`)

const changeColors = () => {
  borderColor.value = `border-secondary${firstCharUpperCase(color.value)}`
  textColor.value = `text-secondary${firstCharUpperCase(color.value)}`
}

watch(color, (newColor) => {
  changeColors()
})

changeColors()

const props = defineProps({
  exhibitionName: String,
  artistName: String,
  startDate: String,
  endDate: String,
  image: String,
  description: String,
})
</script>

<style scoped>
@media (max-width: 768px) {
  .mobile-description {
    line-height: 1.3em;
  }
}
</style>
