<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(`[page-uid-${route.params.uid}]`, () =>
    prismic.client.getByUID("page", 'home'),
);

useHead({
    title: page.value?.data.meta_title,
    meta: [
        {
            name: "description",
            content: page.value?.data.meta_description,
        },
    ],
});
</script>

<template>
    <div class="mt-10 ">
        <SliceZone class="grid md:grid-cols-2 grid-cols-1" wrapper="main" :slices="page?.data.slices ?? []"
            :components="components" />
    </div>
</template>
