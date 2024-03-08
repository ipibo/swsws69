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

const accessibility = ref(false)

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

<template>
  <div
    class="font-sans text-lg transition ease-in-out duration-1000"
    :class="currentBgColor"
  >
    <div
      class="fixed bottom-0 left-0 text-8xl ml-4 mb-8 cursor-pointer"
      @click="accessibility = !accessibility"
      :class="{ 'text-white': accessibility }"
    >
      􁹣
    </div>

    <div class="min-h-screen">
      <h1 class="font-ThreeSix21Pro text-9xl text-secondaryBlue">SWSWS69</h1>

      <div class="flex flex-col lg:flex-row">
        <div
          class="text-secondaryBlue font-light mx-auto mt-10 text-xl ml-14 md:text-3xl md:mx-24 lg:w-1/2"
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

        <div>
          <div class="w-3/4 rounded-xl ml-auto bg-primaryRed mb-10 mx-4">
            <img
              class="rounded-t-xl"
              src="https://picsum.photos/seed/picsum/2000/1000"
              alt=""
            />
            <div class="font-ThreeSix21Pro text-6xl text-secondaryRed">
              Exhibitions
            </div>
          </div>

          <div class="w-3/4 rounded-xl ml-auto bg-primaryGreen mb-10 mx-4">
            <img
              class="rounded-t-xl"
              src="https://picsum.photos/seed/picsum/2000/1000"
              alt=""
            />
            <div class="font-ThreeSix21Pro text-6xl text-secondaryGreen">
              Events
            </div>
          </div>
        </div>
      </div>
    </div>

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
