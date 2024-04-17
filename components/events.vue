<template>
  <div>
    <titlesEvents class="mb-10" />
    <Menu currentMenu="events" class="mb-10 px-[32px]"></Menu>
    <div class="flex flex-col px-[32px] min-h-screen md:grid md:grid-cols-6">
      <!-- <h1 class="text-8xl mt-9 font-ThreeSix21Pro">Events</h1> -->

      <blocksEvent
        class="transition ease-in duration-300 col-start-1 col-span-4 self-start"
        exhibitionName="The Hmm ON The Perfect Feed"
        artistName=""
        image="https://images.prismic.io/swsws69/Zh_hQ0aI3ufuUQgI_swsws69site.png?auto=format,compress"
      >
        Our social media feed has changed quite a lot over the past 15
        years. What started out as updates of what our friends are doing,
        became information shared from accounts or pages to us as their
        followers, and now—especially “For You”—content shows up on our feeds,
        just because algorithms suspect we’ll find it interesting. We’ve also
        seen feeds go from permanent to temporary, with concepts like Stories or
        BeReal popping up. Given that timelines are where many internet users
        primarily get their information today, taking a closer look
        at their development is essential.

        <br />
        For all our fellow users of the Internet, The Hmm developed a workshop
        in collaboration with Soyun Park and Leo Scarin of RGBdog, that will be
        available at three different locations. Through The Perfect
        Feed, we invite you to craft your ultimate social media timeline.
        <div>
          <a
            href="https://thehmm.nl/event/the-hmm-on-the-perfect-feed/"
            class="px-[16px] rounded-full bg-secondaryGreen text-primaryGreen"
            >Tickets</a
          >
        </div>
      </blocksEvent>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"

const colorStore = useColorStore()
const { color } = storeToRefs(colorStore)

const textColor = ref(`text-secondary${firstCharUpperCase(color.value)}`)

const changeColors = () => {
  textColor.value = `text-secondary${firstCharUpperCase(color.value)}`
}

watch(color, (newColor) => {
  changeColors()
})

changeColors()
</script>

<style scoped>
/* Your component's CSS code goes here */
</style>
