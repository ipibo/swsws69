<template>
    <div class="mt-10 flex p-4 rounded-2xl hyphens-auto max-w-md mx-auto">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { defineProps } from 'vue';

const props = defineProps({
    image: String
});


</script>
