<script setup lang="ts">
   const props = defineProps({
    size: {
        type: String,
        default: "30"
    },
    color: {
        type: String,
        default: "#00FF44",
    },
    color2: {
        type: String, 
        default: "#00FF44"
    }
})
</script>

<template>
   <svg :width="props.size" :height="props.size" :fill="props.color" enable-background="new 0 0 128 128" version="1.1" viewBox="0 0 128 128"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="OBJECT"><g><path d="M22.678,73.621L64,32.294l41.322,41.327c0.39,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586    c0.781-0.781,0.781-2.047,0-2.828L65.415,28.052c-0.75-0.75-2.078-0.75-2.828,0L19.85,70.793c-0.781,0.781-0.781,2.047,0,2.828    S21.897,74.402,22.678,73.621z"/><path d="M65.415,54.379c-0.75-0.75-2.078-0.75-2.828,0L19.85,97.12c-0.781,0.781-0.781,2.047,0,2.828    c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.414-0.586L64,58.621l41.322,41.327c0.78,0.781,2.047,0.781,2.828,0    s0.781-2.047,0-2.828L65.415,54.379z"/></g></g></svg>
</template>
