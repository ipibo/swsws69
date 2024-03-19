<template>
  <div
    class="rounded-[40px] border-[2px] col-span-2 text-[36px] leading-[40px]"
    :class="borderColor"
  >
    <div class="p-[40px]" :class="textColor">
      <div class="font-bold">{{ exhibitionName }}</div>
      <div class="font-bold">{{ artistName }}</div>
      <div class="font-bold">
        {{ new Date().toLocaleDateString().replace(/\//g, ".") }} -
        {{ new Date().toLocaleDateString().replace(/\//g, ".") }}
      </div>
    </div>
    <img class="" :src="image" />
    <div class="p-4" :class="textColor">
      <div class="mt-4 font-light mb-2">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  borderColor: String,
  textColor: String,
  exhibitionName: String,
  artistName: String,
  startDate: String,
  endDate: String,
  image: String,
  description: String,
})
</script>
