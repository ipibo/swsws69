<template>
  <div>
    <titlesSwsws69 class="mb-10" />
    <Menu currentMenu="SWSWS69" class="px-[32px] md:hidden"></Menu>
    <div class="min-h-screen mt-10 px-[32px]">
      <div class="md:grid md:grid-cols-6 gap-4">
        <div class="col-span-4 text-3xl">
          <img
            class="rounded-xl"
            src="https://images.prismic.io/swsws69/c371a755-f41a-4966-be11-93d35889062f_DSC08301-verkleind.jpg?auto=format,compress"
            alt=""
          />
          <div :class="textColor">
            Shared Workspace Weerdjesstraat 69 is the co-working space of
            <a class="blinking-element" href="https://erikdegeus.space/">
              Erik de Geus</a
            >,
            <a class="blinking-element" href="https://evavanboxtel.nl/"
              >Eva van Boxtel</a
            >,
            <a href="https://guidovanderkooij.nl/" class="blinking-element">
              Guido van der Kooij</a
            >,
            <a href="https://iboibelings.nl/" class="blinking-element">
              Ibo Ibelings</a
            >,
            <a href="https://jellereith.nl/" class="blinking-element"
              >Jelle Reith</a
            >,
            <a
              href="https://www.instagram.com/katrijnwestland"
              class="blinking-element"
              >Katrijn Westland</a
            >,
            <a href="https://sjefvanbeers.com/" class="blinking-element">
              Sjef van Beers</a
            >,
            <a href="https://sjoerdmol.com/" class="blinking-element"
              >Sjoerd Mol </a
            >&
            <a
              href="https://www.instagram.com/tesshavas/"
              class="blinking-element"
              >Tess Havas</a
            >.
          </div>
        </div>

        <div
          class="hidden md:flex col-start-5 col-span-2 ml-auto flex flex-col gap-2"
        >
          <a
            href="#exhibitions"
            class="font-ThreeSix21Pro text-6xl text-secondaryRed rounded-xl bg-primaryRed border-secondaryRed border-[2px] cursor-pointer"
          >
            <img
              class="rounded-t-xl hidden md:block"
              src="https://images.prismic.io/swsws69/577b430d-a414-4447-9e56-a1b666fbeefa_DSC08349-verkleind.jpg?auto=format,compress"
              alt=""
            />
            <div class="">Exhibitions</div>
          </a>
          <a
            href="#events"
            class="font-ThreeSix21Pro text-6xl text-secondaryGreen rounded-xl bg-primaryGreen border-secondaryGreen border-[2px] cursor-pointer"
          >
            <img
              class="rounded-t-xl hidden md:block"
              src="https://images.prismic.io/swsws69/577b430d-a414-4447-9e56-a1b666fbeefa_DSC08349-verkleind.jpg?auto=format,compress"
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
  // console.log(color.value)
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

<style scoped>
/* Define the blinking animation */
@keyframes blink {
  0% {
    color: inherit;
  }
  50% {
    color: grey;
  }
  100% {
    color: inherit;
  }
}

/* Set initial opacity to 1 so it's visible */
.blinking-element {
  opacity: 1;
}

/* Apply the blinking effect on hover */
.blinking-element:hover {
  animation: blink 0.5s infinite; /* You can adjust the duration on hover */
}
</style>
