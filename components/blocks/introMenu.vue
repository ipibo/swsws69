<template>
  <blocksIntroMenuBlock
    linkTo="exhibitions"
    title="Exhibitions"
    :imgSource="page?.data.slices[0].primary.header_image.url"
    class="text-secondaryRed bg-primaryRed border-secondaryRed"
  />
  <blocksIntroMenuBlock
    linkTo="events"
    title="Events"
    imgSource="https://images.prismic.io/swsws69/ZuAMVBoQrfVKl5eE_openscreenwebsite.png?auto=format,compress"
    class="text-secondaryGreen bg-primaryGreen border-secondaryGreen"
  />
</template>

<script setup>
const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`[page-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("page", "exhibitions")
)
</script>
