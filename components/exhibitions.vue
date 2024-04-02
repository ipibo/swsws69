<template>
  <div>
    <titlesExhibitions />
    <div class="flex flex-col grid grid-cols-6">
      <!-- <h1
      class="text-[400px] transition ease-in duration-300 mt-9 font-ThreeSix21Pro col-span-3"
      :class="textColor"
    >
      Exhibitions
    </h1> -->

      <blocksExhibition
        class="transition ease-in duration-300 col-start-1 col-span-3"
        :borderColor="borderColor"
        :textColor="textColor"
        exhibitionName="BattleBits"
        artistName="Ibo Ibelings"
        startDate="01.01.2022"
        endDate="01.01.2022"
        image="https://picsum.photos/seed/picsum/720/1080"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat voluptatem in dolorem eius esse, itaque ad eum labore nisi exercitationem, provident excepturi aut ut autem ducimus eligendi inventore laudantium?"
      ></blocksExhibition>

      <blocksExhibition
        class="transition ease-in duration-300 col-start-4 col-span-3"
        :borderColor="borderColor"
        :textColor="textColor"
        exhibitionName="BattleBits"
        artistName="Ibo Ibelings"
        startDate="01.01.2022"
        endDate="01.01.2022"
        image="https://picsum.photos/seed/picsum/2000/1000"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat voluptatem in dolorem eius esse, itaque ad eum labore nisi exercitationem, provident excepturi aut ut autem ducimus eligendi inventore laudantium?"
      ></blocksExhibition>

      <!-- <div v-for="number in numberOfImages" :key="number" class="mb-10 mx-4">
      <img
        v-if="number % 2 === 0"
        class="col-span-2 rounded-xl"
        :src="listWithRandomImageUrl[number]"
      />
      <img
        v-else-if="number % 2 !== 0"
        class="col-span-2 rounded-xl"
        :src="listWithRandomImageUrl[number]"
      />
    </div> -->
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

    console.log("borderColor", borderColor.value)
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
