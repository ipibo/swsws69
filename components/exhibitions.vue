<template>
  <div>
    <titlesExhibitions />

    <Menu currentMenu="exhibitions" class="mb-10 px-[32px]"></Menu>
    <div class="bg-blue-800 text-white p-10 mb-10">
      <code class="text-xs">{{ page?.data.slices[0] }}</code>
    </div>
    <div class="flex flex-col px-[32px] min-h-screen md:grid md:grid-cols-6">
      <blocksExhibition
        class="transition ease-in duration-300 col-start-3 col-span-4 self-start"
        :exhibitionName="page?.data.slices[0].primary.title[0].text"
        :artistName="page?.data.slices[0].primary.artist_name[0].text"
        :startDate="page?.data.slices[0].primary.start_date"
        :endDate="page?.data.slices[0].primary.end_date"
        :image="page?.data.slices[0].primary.header_image.url"
        :description="page?.data.slices[0].primary.description[0].text"
      ></blocksExhibition>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"

const colorStore = useColorStore()
const { color } = storeToRefs(colorStore)

import { components } from "~/slices"
const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`[page-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("page", "exhibitions")
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
