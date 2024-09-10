<template>
  <div>
    <titlesEvents class="mb-10" />
    <Menu currentMenu="events" class="mb-10 px-[32px]"></Menu>
    <div class="flex flex-col px-[32px] min-h-screen md:grid md:grid-cols-6">
      <!-- <h1 class="text-8xl mt-9 font-ThreeSix21Pro">Events</h1> -->

      <blocksEvent
        class="transition ease-in duration-300 col-start-1 col-span-4 self-start"
        exhibitionName="Open screen at SWSWS69"
        artistName=""
        image="https://images.prismic.io/swsws69/ZuAMVBoQrfVKl5eE_openscreenwebsite.png?auto=format,compress"
      >
        Come share your favorite online videos on the big screen and enjoy good
        company and cheap drinks, or bring your own.

        <br />
        This night we’ll be doing what most us already do on a daily basis:
        sharing funny, interesting or surprising online videos with each other.
        But now we’re bringing it in-person to our studio space!
        <br />
        Come by on Friday 20th of September, hook up your phone to the big
        screen at our studio and share what’s in your TikTok likes, Saved posts
        on Instagram or Twitter Bookmarks. You can shortly introduce your videos
        if you want, but you don’t have to. So bring your best content and some
        friends.
        <!-- 
        <div>
          <a
            href="https://thehmm.nl/event/the-hmm-on-the-perfect-feed/"
            class="px-[16px] rounded-full bg-secondaryGreen text-primaryGreen"
            >Tickets</a
          >
        </div> -->
      </blocksEvent>
      <!-- <blocksEvent
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
      </blocksEvent> -->
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
