<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
    getSliceComponentProps<Content.InfoTextSlice>([
        "slice",
        "index",
        "slices",
        "context",
    ]),
);
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <PrismicRichText class="text-[#0000FF] text-2xl" :field="slice.primary.text" />
    </section>
</template>
