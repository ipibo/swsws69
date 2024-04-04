<template>
  <div>
    <titlesSwsws69 :currentColor="currentColor" class="mb-10" />
    <!-- <Menu currentMenu="SWSWS69" class="px-[32px]"></Menu> -->
    <div class="min-h-screen mt-10 px-[32px]">
      <div class="md:grid md:grid-cols-6">
        <div :class="textColor" class="col-span-2 text-3xl">
          Shared Workspace Weerdjesstraat 69 is the co-working space of Erik de
          Geus, Eva van Boxtel, Guido van der Kooij, Ibo Ibelings, Jelle Reith,
          Katrijn Westland, Sjef van Beers, Sjoerd Mol & Tess Havas.
        </div>

        <div class="col-start-3 col-span-4 ml-auto flex flex-col gap-2">
          <a
            href="#exhibitions"
            class="font-ThreeSix21Pro text-6xl text-secondaryRed rounded-xl bg-primaryRed border-secondaryRed border-[2px] cursor-pointer"
          >
            <img
              class="rounded-t-xl hidden md:block"
              src="https://picsum.photos/seed/picsum/2000/1000"
              alt=""
            />
            <div class="">Exhibitions</div>
          </a>
          <a
            href="#events"
            class="font-ThreeSix21Pro text-6xl text-secondaryRed rounded-xl bg-primaryGreen border-secondaryGreen border-[2px] cursor-pointer"
          >
            <img
              class="rounded-t-xl hidden md:block"
              src="https://picsum.photos/seed/picsum/2000/1000"
              alt=""
            />
            <div class="">Events</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia"

const colorStore = useColorStore()
const { color } = storeToRefs(colorStore)
const borderColor = ref(`border-secondary${firstCharUpperCase(color.value)}`)
const textColor = ref(`text-secondary${firstCharUpperCase(color.value)}`)

const changeColors = () => {
  borderColor.value = `border-secondary${firstCharUpperCase(color.value)}`
  textColor.value = `text-secondary${firstCharUpperCase(color.value)}`
}

watch(color, (newColor) => {
  changeColors()
})

changeColors()
</script>

<!--      <div class="min-h-screen">
  

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
      </div> -->
