<template>
  <a :href="props.url" :download="nombreArchivo">Download CV</a>
</template>

<script setup lang="ts">

const props = defineProps < {
    url: string; 
    nombreArchivo?: string; 
}>()

const defaultFileName = "archivo-descargado"; 
const nombreArchivo = props.nombreArchivo || defaultFileName
</script>

<style scoped>

</style>