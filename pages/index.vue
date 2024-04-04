<script setup lang="ts">
const colorStore = useColorStore()
const { color, accessibilityMode } = storeToRefs(colorStore)

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`[page-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("page", "home")
)

const accessibility = ref(false)
const backgroundColor = ref("")
console.log("accessibilityMode", accessibilityMode)

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
    colorStore.setColor(updateBgColor(exhibitionsSection, eventsSection))

    const colorFirstCharUpperCase =
      color.value.charAt(0).toUpperCase() + color.value.slice(1)
    backgroundColor.value = `bg-primary${colorFirstCharUpperCase}`
  })
  colorStore.setColor(updateBgColor(exhibitionsSection, eventsSection))

  const colorFirstCharUpperCase =
    color.value.charAt(0).toUpperCase() + color.value.slice(1)
  backgroundColor.value = `bg-primary${colorFirstCharUpperCase}`
})

const flipAccesibility = () => {
  accessibility.value = !accessibility.value

  // accessibilityMode.value = accessibility.value
}
</script>

<template>
  <div class="transition ease-in duration-300" :class="backgroundColor">
    <div class="font-customFont text-lg mx-auto">
      <LandingsPage class="mb-20" id="landingsPage"></LandingsPage>

      <Exhibitions id="exhibitions" class="mb-20" />

      <Events id="events" class="mb-20" />

      <!-- <SliceZone class="grid md:grid-cols-2 grid-cols-1" wrapper="main" :slices="page?.data.slices ?? []"
        :components="components" /> -->
    </div>

    <div
      class="fixed bottom-[32px] left-[32px] w-12 h-12 cursor-pointer z-50"
      @click="flipAccesibility"
    >
      <iconsAccessibility />
    </div>
  </div>
</template>
