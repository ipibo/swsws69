<template>
  <a
    :href="`#${linkTo}`"
    class="font-ThreeSix21Pro text-6xl rounded-xl border-[2px] cursor-pointer"
  >
    <img class="rounded-t-xl hidden md:block" :src="imgSource" alt="" />
    <div class="text-center">{{ title }}</div>
  </a>
</template>

<script setup>
defineProps({
  linkTo: String,
  title: String,
  imgSource: String,
})
</script>
