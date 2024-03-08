<script setup lang="ts">
import { components } from "~/slices"

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`[page-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("page", "home")
)

useHead({
  title: "SWSWS69",
  meta: [
    {
      name: "description",
      content: "SWSWS69",
    },
  ],
})

const currentSection = ref("home")
const currentBgColor = ref("bg-primaryBlue")

const updateBgColor = () => {
  const exhibitionsSection = document.getElementById("exhibitions")
  const eventsSection = document.getElementById("events")
  console.log(exhibitionsSection.offsetTop, eventsSection.offsetTop)

  const scrollTop = window.scrollY || document.documentElement.scrollTop

  if (
    scrollTop >= exhibitionsSection.offsetTop - 300 &&
    scrollTop < eventsSection.offsetTop
  ) {
    currentBgColor.value = "bg-primaryRed"
  } else if (eventsSection && scrollTop >= eventsSection.offsetTop) {
    currentBgColor.value = "bg-primaryGreen"
  } else {
    currentBgColor.value = "bg-primaryBlue"
  }
}

onMounted(() => {
  console.log("mounted")
  window.addEventListener("scroll", updateBgColor)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateBgColor)
})
</script>
<style></style>

<template>
  <div
    class="font-sans text-lg transition ease-in-out duration-1000"
    :class="currentBgColor"
  >
    <div class="min-h-screen">
      <h1 class="font-ThreeSix21Pro text-9xl text-secondaryBlue">SWSWS69</h1>

      <div
        class="text-secondaryBlue font-light h-screen text-5xl mx-auto mx-32 mt-10"
      >
        <div
          class="inline bg-secondaryBlue rounded-full text-primaryBlue pl-2 -ml-2 mr-2"
        >
          Shared Workspace Weerdjesstraat 69
        </div>
        is the co-working space of Erik de Geus, Eva van Boxtel, Guido van der
        Kooij, Ibo Ibelings, Jelle Reith, Katrijn Westland, Sjef van Beers,
        Sjoerd Mol & Tess Havas.
      </div>
    </div>
    <eyes class="" />

    <div id="exhibitions" class="min-h-screen">
      <Exhibitions />
    </div>

    <div id="events" class="min-h-screen">
      <events />
    </div>

    <!-- <image-block iamge="teestimg.jpg" /> -->

    <!-- <div class="grid grid-cols-3 gap-4">
            <div v-for="number in 1000" :key="number" class="mb-4">
                <img :src="generateRandomImageUrl()" loading="lazy" alt="" />
            </div>
        </div> -->

    <!-- <SliceZone class="grid md:grid-cols-2 grid-cols-1" wrapper="main" :slices="page?.data.slices ?? []"
        :components="components" /> -->
  </div>
</template>
