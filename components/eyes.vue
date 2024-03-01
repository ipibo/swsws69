<template>
    <div>
        <img class="w-96 " :src="importedSvg" alt="Imported SVG" />
    </div>
</template>

<script>
import MySvg from './assets/svg/eyes.inverse.svg';

export default {
    name: 'SvgComponent',
    data() {
        return {
            importedSvg: MySvg,
        };
    },
};
</script>

<style scoped>
/* You can add style for your component here */
</style>
