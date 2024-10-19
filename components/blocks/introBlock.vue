<template>
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
    <a href="https://iboibelings.nl/" class="blinking-element"> Ibo Ibelings</a
    >,
    <a href="https://jellereith.nl/" class="blinking-element">Jelle Reith</a>,
    <!-- <a href="https://www.instagram.com/katrijnwestland" class="blinking-element"
      >Katrijn Westland</a
    >, -->
    <a href="https://wang-xoo.webflow.io/" class="blinking-element">Wang Xoo</a
    >,
    <a href="https://sjefvanbeers.com/" class="blinking-element">
      Sjef van Beers</a
    >
    & <a href="https://sjoerdmol.com/" class="blinking-element">Sjoerd Mol </a>.
    <!-- <a href="https://www.instagram.com/tesshavas/" class="blinking-element"
      >Tess Havas</a
    >. -->
  </div>
</template>

<script setup>
defineProps({
  textColor: String,
})
</script>

<style>
/* Define the blinking animation */
@keyframes blink {
  0% {
    color: inherit;
  }
  50% {
    color: white;
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
