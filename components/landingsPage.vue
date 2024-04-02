<template>
  <div>
    <titlesSwsws69 :currentColor="currentColor" />
    <div class="min-h-screen">
      <div>
        Shared Workspace Weerdjesstraat 69 is the co-working space of Erik de
        Geus, Eva van Boxtel, Guido van der Kooij, Ibo Ibelings, Jelle Reith,
        Katrijn Westland, Sjef van Beers, Sjoerd Mol & Tess Havas.
      </div>
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
