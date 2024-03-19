<template>
  <div>
    <h1 class="text-8xl mt-9 font-ThreeSix21Pro" :class="textColor">
      Exhibitions
    </h1>

    <div
      class="w-3/4 rounded-xl ml-auto mb-10 mx-4 border-2"
      :class="borderColor"
    >
      <div class="p-4" :class="textColor">
        <div class="font-bold">name of the ex</div>
        <div class="font-bold">artist their name</div>
        <div class="font-bold">
          {{ new Date().toLocaleDateString().replace(/\//g, ".") }} -
          {{ new Date().toLocaleDateString().replace(/\//g, ".") }}
        </div>
      </div>
      <img class="" :src="listWithRandomImageUrl[0]" />
      <div class="p-4" :class="textColor">
        <div class="mt-4 font-light mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat
          voluptatem in dolorem eius esse, itaque ad eum labore nisi
          exercitationem, provident excepturi aut ut autem ducimus eligendi
          inventore laudantium?
        </div>
      </div>
    </div>

    <div v-for="number in numberOfImages" :key="number" class="mb-10 mx-4">
      <img
        v-if="number % 2 === 0"
        class="w-3/4 rounded-xl ml-auto"
        :src="listWithRandomImageUrl[number]"
      />
      <img
        v-else-if="number % 2 !== 0"
        class="w-3/4 rounded-xl"
        :src="listWithRandomImageUrl[number]"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentColor: String,
})

const textColor = ref()
const borderColor = ref()

borderColor.value = `border-secondary${props.currentColor}`
textColor.value = `text-secondary${props.currentColor}`

watch(
  () => props.currentColor,
  (newColor) => {
    // Code to execute when currentColor changes
    borderColor.value = `border-secondary${newColor}`
    textColor.value = `text-secondary${newColor}`
  }
)

const generateRandomImageUrl = (width = 3000, height = 2000) => {
  const randomString = Math.random().toString(36).substring(2, 12)
  return `https://picsum.photos/seed/${randomString}/${width}/${height}`
}

const numberOfImages = 5
const listWithRandomImageUrl = Array.from({ length: numberOfImages }, () =>
  generateRandomImageUrl()
)
</script>

<style scoped></style>
