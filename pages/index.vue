<script setup lang="ts">
import { components } from "~/slices"

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`[page-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("page", "home")
)

const currentBgColor = ref("Blue")
const accessibility = ref(false)

const backgroundColor = ref("")
const foregroundColor = ref("text-secondaryBlue")

useHead({
  title: "SWSWS69",
  meta: [
    {
      name: "description",
      content: "SWSWS69",
    },
  ],
})

onMounted(() => {
  const exhibitionsSection = document.getElementById("exhibitions")
  const eventsSection = document.getElementById("events")
  window.addEventListener("scroll", () => {
    currentBgColor.value = updateBgColor(exhibitionsSection, eventsSection)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateBgColor)
})

watchEffect(() => {
  backgroundColor.value = `bg-primary${currentBgColor.value}`
  foregroundColor.value = `text-secondary${currentBgColor.value}`
})
</script>

<template>
  <div
    class="transition ease-in duration-300 p-[32px]"
    :class="backgroundColor"
  >
    <Menu></Menu>

    <div class="font-customFont text-lg mx-auto">
      <!-- landingspagina -->
      <LandingsPage
        id="landingsPage"
        :currentColor="currentBgColor"
      ></LandingsPage>

      <Exhibitions
        id="exhibitions"
        class="transition ease-in duration-300 min-h-screen"
        :currentColor="currentBgColor"
      />

      <Events id="events" class="min-h-screen" :class="foregroundColor" />
      <!-- <SliceZone class="grid md:grid-cols-2 grid-cols-1" wrapper="main" :slices="page?.data.slices ?? []"
        :components="components" /> -->
    </div>

    <div
      class="fixed bottom-[32px] left-[32px] w-12 h-12 cursor-pointer z-50"
      @click="accessibility = !accessibility"
    >
      <iconsAccessibility />
    </div>
  </div>
</template>
