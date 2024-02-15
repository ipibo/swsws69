<template>
    <div class="app flex flex-col  bg-[#000e7d] min-h-screen  ">
        <Header />
        <div class="px-10 ">
            <slot />
        </div>
    </div>
</template>

<style scoped>
/* @import "~/assets/css/main.css"; */
.app {
    /* background-color: $color-primary; */
    /* min-height: 100vh; */
}
</style>

<script setup lang="ts">


</script>
