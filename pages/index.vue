<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(`[page-uid-${route.params.uid}]`, () =>
    prismic.client.getByUID("page", 'home'),
);

useHead({
    title: 'SWSWS69',
    meta: [
        {
            name: "description",
            content: 'SWSWS69',
        },
    ],
});




</script>

<template>
    <div class="mt-10 font-customFont text-lg px-4 ">

        <div class="text-secondaryBlue">Shared Workspace Weerdjesstraat 69 is the co-working space of Erik de Geus, Eva van
            Boxtel, Guido van der
            Kooij, Ibo Ibelings, Jelle Reith, Katrijn Westland, Sjef van Beers, Sjoerd Mol & Tess Havas.
        </div>

        <h1 class="text-8xl	mt-9 font-ThreeSix21Pro text-secondaryRed">Exhibitionsssssss......</h1>

        <text-block class="bg-primaryRed text-secondaryRed float-right">us perspici
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi a reiciendis provident, reprehenderit earum
            odio, sed inventore animi fugiat iusto eos unde! Dignissimos, sint mollitia maxime aperiam delectus perspiciatis
            ipsam.
        </text-block>

        <h1 class="text-8xl	mt-9 font-ThreeSix21Pro text-secondaryGreen">Eventsssssss......</h1>

        <div class="">
            <text-block class="bg-primaryGrey text-secondaryGrey float-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi a reiciendis provident, reprehenderit
                earum
                odio, sed inventore animi fugiat iusto eos unde! Dignissimos, sint mollitia maxime aperiam delectus
                perspiciatis
                ipsam.
            </text-block>

            <text-block class="bg-primaryGreen text-secondaryGreen float-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi a reiciendis provident, reprehenderit
                earum
                odio, sed inventore animi fugiat iusto eos unde! Dignissimos, sint mollitia maxime aperiam delectus
                perspiciatis
                ipsam.
            </text-block>

        </div>

        <eyes class="" />

        <image-block iamge="teestimg.jpg" />

        <prismic-img>
        </prismic-img>


        <div v-for="number in 100" :key="number">
            {{ number }}
            <img loading="lazy"
                src="https://images.prismic.io/swsws69/55fe070f-971a-4272-8353-bb0dc13aee71_DSC08342-verkleind.jpg?auto=compress,format" />

        </div>


        <!-- <SliceZone class="grid md:grid-cols-2 grid-cols-1" wrapper="main" :slices="page?.data.slices ?? []"
        :components="components" /> -->

    </div>
</template>
