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

const generateRandomImageUrl = (width = 2500, height = 2000) => {
  const randomString = Math.random().toString(36).substring(2, 12)
  return `https://picsum.photos/seed/${randomString}/${width}/${height}`
}

const numberOfImages = 20
const listWithRandomImageUrl = Array.from({ length: numberOfImages }, () =>
  generateRandomImageUrl()
)

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

      <div class="text-secondaryBlue h-screen">
        Shared Workspace Weerdjesstraat 69 is the co-working space of Erik de
        Geus, Eva van Boxtel, Guido van der Kooij, Ibo Ibelings, Jelle Reith,
        Katrijn Westland, Sjef van Beers, Sjoerd Mol & Tess Havas.
      </div>
    </div>

    <div id="exhibitions" class="min-h-screen">
      <h1 class="text-8xl mt-9 font-ThreeSix21Pro text-secondaryRed">
        Exhibitionsssssss......
      </h1>

      <div class="w-3/4 rounded-xl ml-auto bg-secondaryRed mb-10 mx-4">
        <img class="rounded-t-xl" :src="listWithRandomImageUrl[0]" />
        <div class="p-4 text-primaryRed">
          <div class="font-bold">name of the ex</div>
          <div class="font-bold">artist their name</div>
          <div class="font-bold">
            {{ new Date().toLocaleDateString().replace(/\//g, ".") }} -
            {{ new Date().toLocaleDateString().replace(/\//g, ".") }}
          </div>

          <div class="mt-4 font-light mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat
            voluptatem in dolorem eius esse, itaque ad eum labore nisi
            exercitationem, provident excepturi aut ut autem ducimus eligendi
            inventore laudantium?
          </div>

          <div
            class="bg-primaryRed cursor-pointer text-secondaryRed -mx-2 px-2 rounded-full inline-block hover:bg-secondaryRed hover:text-primaryRed hover:drop-shadow-lg"
          >
            Link to related event
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

    <div id="events" class="min-h-screen">
      <h1 class="text-8xl mt-9 font-ThreeSix21Pro text-secondaryGreen">
        Eventsssssss......
      </h1>

      <text-block class="bg-primaryGrey text-secondaryGrey float-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi a
        reiciendis provident, reprehenderit earum odio, sed inventore animi
        fugiat iusto eos unde! Dignissimos, sint mollitia maxime aperiam
        delectus perspiciatis ipsam.
      </text-block>

      <text-block class="bg-primaryGreen text-secondaryGreen float-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi a
        reiciendis provident, reprehenderit earum odio, sed inventore animi
        fugiat iusto eos unde! Dignissimos, sint mollitia maxime aperiam
        delectus perspiciatis ipsam.
      </text-block>
    </div>

    <!-- <eyes class="" /> -->

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
