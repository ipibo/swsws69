<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
    getSliceComponentProps<Content.EventBlockSlice>([
        "slice",
        "index",
        "slices",
        "context",
    ]),
);
</script>
<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <div v-for="(item, index) in slice.items" :key="index" class="bg-[#0000ff] rounded-3xl font-sans text-2xl m-10">
            <PrismicImage :field="item.image" class="rounded-t-3xl" />
            <div class="pt-2 pb-2 darkblue px-4">
                <PrismicRichText :field="item.title" />
                <PrismicRichText :field="item.maker" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.darkblue {
    color: #000e7d;
}

.lightBlue {
    color: #0000FF;
}
</style>
