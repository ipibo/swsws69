<template>
  <div>
    <NuxtLink to="/">
      <titlesSwsws69 />
    </NuxtLink>
    <!-- <Menu currentMenu="exhibitions" class="mb-10 px-[32px]"></Menu> -->
    <!-- <div
      class="flex border-[2px] border-secondaryBlue text-secondaryBlue mb-10 mt-10 rounded-[40px] p-4 min-h-[200px] w-full"
    > -->
    <div class="p-8 mt-10">


      <OutofofficeHeaderImage
      v-if="areas.length > 0"
      :areas="areas"
      @area-click="scrollToTarget"
      />
    </div>
    <!-- </div> -->

    <!-- Target section for clickable area -->
    <!-- <div  class="mb-10"></div> -->

    <div v-for="(slice, index) in page?.data.slices" :key="index">
      <div
        class="flex flex-col px-[32px] md:grid md:grid-cols-6"
        :id="`section-${index}`"
      >
        <BlocksOutofoffice
          :class="[
            'transition ease-in duration-300 col-span-4 self-start',
            index % 2 === 0 ? 'col-start-3' : 'col-start-1',
          ]"
          :exhibitionName="slice.primary.title[0].text"
          :artistName="slice.primary.artist_name[0].text"
          :image="slice.primary.header_image.url"
          :description="slice.primary.description"
        ></BlocksOutofoffice>
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
  prismic.client.getByUID("page", "outofoffice")
)

import OutofofficeHeaderImage from "./outofoffice/headerImage.vue"
import { ref } from "vue"

const areas = ref([])
// console.log(page)

watchEffect(() => {
  if (page.value && page.value.data.slices) {
    areas.value = page.value.data.slices.map((slice, index) => ({
      left:
        typeof slice.primary.left === "number"
          ? slice.primary.left + "%"
          : slice.primary.left,
      top:
        typeof slice.primary.top === "number"
          ? slice.primary.top + "%"
          : slice.primary.top,
      width:
        typeof slice.primary.width === "number"
          ? slice.primary.width + "%"
          : slice.primary.width,
      height:
        typeof slice.primary.height === "number"
          ? slice.primary.height + "%"
          : slice.primary.height,
      target: `section-${index}`,
    }))
  }
})

function scrollToTarget(target) {
  const el = document.getElementById(target)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}
</script>

<style scoped></style>
