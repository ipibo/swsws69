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
  console.log("mounted")
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
    <div class="font-customFont text-lg mx-auto">
      <!-- <testPage></testPage> -->

      <!-- landingspagina -->
      <div class="min-h-screen">
        <h1 class="font-ThreeSix21Pro text-9xl" :class="foregroundColor">
          SWSWS69
        </h1>

        <Button class="bg-primaryRed text-secondaryRed 5xl">
          Now on display</Button
        >
        <Button class="bg-primaryGreen text-secondaryGreen"
          >Now on display</Button
        >
        <Button class="bg-primaryBlue text-secondaryBlue"
          >Now on display</Button
        >

        <div class="flex flex-col-reverse lg:flex-row">
          <div
            class="text-secondaryBlue font-light mx-auto mt-10 text-xl ml-14 md:text-3xl md:mx-24 lg:w-1/2"
          >
            <div
              class="inline bg-secondaryBlue rounded-full text-primaryBlue pl-2 -ml-2 mr-2"
            >
              Shared Workspace Weerdjesstraat 69
            </div>
            is the co-working space of Erik de Geus, Eva van Boxtel, Guido van
            der Kooij, Ibo Ibelings, Jelle Reith, Katrijn Westland, Sjef van
            Beers, Sjoerd Mol & Tess Havas.
          </div>

          <div>
            <div
              class="text-center w-3/4 rounded-xl ml-auto bg-primaryRed mb-10 mx-4"
            >
              <img
                class="rounded-t-xl hidden md:block"
                src="https://picsum.photos/seed/picsum/2000/1000"
                alt=""
              />
              <div class="font-ThreeSix21Pro text-6xl text-secondaryRed">
                Exhibitions
              </div>
            </div>

            <div class="w-3/4 rounded-xl ml-auto bg-primaryGreen mb-10 mx-4">
              <img
                class="rounded-t-xl hidden md:block"
                src="https://picsum.photos/seed/picsum/2000/1000"
                alt=""
              />
              <div
                class="text-center font-ThreeSix21Pro text-6xl text-secondaryGreen"
              >
                Events
              </div>
            </div>
          </div>
        </div>
      </div>

      <Exhibitions
        id="exhibitions"
        class="transition ease-in duration-300 min-h-screen"
        :currentColor="currentBgColor"
      />

      <Events id="events" class="min-h-screen" :class="foregroundColor" />
      <!-- <SliceZone class="grid md:grid-cols-2 grid-cols-1" wrapper="main" :slices="page?.data.slices ?? []"
        :components="components" /> -->

      <div
        class="fixed bottom-0 left-0 text-8xl ml-4 mb-8 cursor-pointer"
        @click="accessibility = !accessibility"
        :class="{ 'text-white': accessibility }"
      >
        􁹣
      </div>
    </div>
  </div>
</template>
