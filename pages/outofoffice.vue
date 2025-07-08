<script setup lang="ts">
const colorStore = useColorStore()
const { color, accessibilityMode } = storeToRefs(colorStore)

const accessibility = ref(false)
const backgroundColor = ref("")
const exhibitionsSection = ref()
const eventsSection = ref()

useHead({
  title: "SWSWS69 - Out Of Office",
  meta: [
    {
      name: "Out Of Office expo",
      content: "SWSWS69 - Out Of Office",
    },
  ],
})

onMounted(() => {
  exhibitionsSection.value = document.getElementById("exhibitions")
  eventsSection.value = document.getElementById("events")

  window.addEventListener("scroll", () => {
    if (accessibilityMode.value == false) {
      colorStore.setColor(
        updateBgColor(exhibitionsSection.value, eventsSection.value)
      )
      const colorFirstCharUpperCase =
        color.value.charAt(0).toUpperCase() + color.value.slice(1)

      backgroundColor.value = `bg-primary${colorFirstCharUpperCase}`
    }
  })

  if (accessibilityMode.value == false) {
    colorStore.setColor(
      updateBgColor(exhibitionsSection.value, eventsSection.value)
    )
    const colorFirstCharUpperCase =
      color.value.charAt(0).toUpperCase() + color.value.slice(1)

    backgroundColor.value = `bg-primary${colorFirstCharUpperCase}`
  }
})

const flipAccesibility = () => {
  accessibility.value = !accessibility.value
  accessibilityMode.value = accessibility.value
  // backgroundColor.value = `bg-white`
  if (accessibilityMode.value) {
    backgroundColor.value = `bg-primaryGrey`
    colorStore.setColor("grey")
  } else if (!accessibilityMode.value) {
    colorStore.setColor(
      updateBgColor(exhibitionsSection.value, eventsSection.value)
    )
    const colorFirstCharUpperCase =
      color.value.charAt(0).toUpperCase() + color.value.slice(1)

    backgroundColor.value = `bg-primary${colorFirstCharUpperCase}`
  }
}
</script>

<template>
  <div class="transition ease-in duration-300 pb-96" :class="backgroundColor">
    <div class="font-customFont text-lg mx-auto max-w-7xl">
      <!-- hallo -->
      <Outofoffice id="exhibitions" class="mb-20" />
    </div>

    <div
      class="fixed bottom-[32px] left-[32px] w-12 h-12 cursor-pointer z-50"
      @click="flipAccesibility"
    >
      <iconsAccessibility
        :class="{ rotated: accessibilityMode, notRotated: !accessibilityMode }"
      />
    </div>
  </div>
  <!-- <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  /> -->
  <!-- {{ page?.data.slices[1].items[0].image.url }} -->
  <!-- <img :src="page?.data.slices[1].items[0].image.url" alt="" /> -->
</template>

<style scoped>
.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}
.notRotated {
  transform: rotate(0deg);
  transition: transform 0.3s ease-in-out;
}
</style>
