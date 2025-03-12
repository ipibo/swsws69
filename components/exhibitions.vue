<template>
  <div>
    <titlesExhibitions />
    <Menu currentMenu="exhibitions" class="mb-10 px-[32px]"></Menu>
    <div v-for="(slice, index) in page?.data.slices" :key="index">
      <div class="flex flex-col px-[32px] md:grid md:grid-cols-6">
        <blocksExhibition
          :class="[
            'transition ease-in duration-300 col-span-4 self-start',
            index % 2 === 0 ? 'col-start-3' : 'col-start-1'
          ]"
          :exhibitionName="slice.primary.title[0].text"
          :artistName="slice.primary.artist_name[0].text"
          :startDate="slice.primary.start_date"
          :endDate="slice.primary.end_date"
          :image="slice.primary.header_image.url"
          :description="slice.primary.description[0].text"
        ></blocksExhibition>
      </div>
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
// console.log(page._value.data.slices)

const numberOfImages = 5
const listWithRandomImageUrl = Array.from({ length: numberOfImages }, () =>
  generateRandomImageUrl()
)
</script>

<style scoped></style>
