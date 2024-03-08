<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
    getSliceComponentProps<Content.TitleBlockSlice>([
        "slice",
        "index",
        "slices",
        "context",
    ]),
);

import headerSvg from "@/assets/svg/headerBlue.svg";
</script>

<template>
    <section
        :data-slice-type="slice.slice_type"
        :data-slice-variation="slice.variation"
    >
        <img :src="headerSvg" alt="Header Logo" />
    </section>
</template>
