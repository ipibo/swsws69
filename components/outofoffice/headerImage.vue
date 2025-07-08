<template>
  <div class="relative w-full">
    <img
      src="@/assets/signal-2025-07-08-112756_002.png"
      alt="Out of Office Header"
      class="header-image"
    />
    <div
      v-for="(area, idx) in areas"
      :key="idx"
      class="clickable-area flex items-center justify-center"
      :class="{ blinking: showHighlight && blink }"
      :style="{
        left: area.left,
        top: area.top,
        width: area.width,
        height: area.height,
        background: showHighlight ? 'rgba(37, 99, 235)' : 'transparent',
        pointerEvents: 'auto',
      }"
      @click="handleClick(idx)"
    >
      <span class="overlay-index">{{ idx + 1 }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue"

const props = defineProps({
  areas: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(["area-click"])

const showHighlight = ref(true)
const blink = ref(true)

onMounted(() => {
  setTimeout(() => {
    blink.value = false
  }, 1200) // blink for 1.2 seconds
})

function handleClick(idx) {
  emit("area-click", props.areas[idx].target)
}

// Optionally, remove highlight after a timeout
// setTimeout(() => { showHighlight.value = false }, 3000)
</script>

<style scoped>
.header-image {
  width: 100%;
  height: auto;
  display: block;
}
.clickable-area {
  position: absolute;
  cursor: pointer;
  transition:
    background 0.3s,
    opacity 0.2s;
  z-index: 2;
  opacity: 0.5;
  /* border: 5px solid rgba(0, 0, 255, 1); */
  /* border-radius: 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.clickable-area:hover {
  opacity: 0.9;
}
.overlay-index {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  pointer-events: none;
  user-select: none;
}
.blinking {
  animation: blink-bg 2.2s cubic-bezier(0.4, 0, 0.2, 1) 1;
}
@keyframes blink-bg {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.2;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0.2;
  }
  
  100% {
    opacity: 0.4;
  }
}
</style>
