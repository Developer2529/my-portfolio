<script setup lang="ts" >

const props = defineProps({
    size: {
        type: String,
        default: "30"
    },
    color: {
        type: String,
        default: "#8964",
    },
    color2: {
        type: String, 
        default: "#00FF44"
    }

})
</script>

<template>
    <svg :width="props.size" :height="props.size" data-name="Layer 1" id="Layer_1" viewBox="0 0 452.5 344" xmlns="http://www.w3.org/2000/svg">
        <title />
        <path :fill="props.color2" d="M454,319,674,211,899,318,675,440Z" transform="translate(-454 -211)" />
        <path  d="M330,267" transform="translate(-454 -211)" />
        <rect :fill="props.color2" height="89" rx="6.5" ry="6.5" width="13" x="426" y="108" />
        <circle :fill="props.color2" cx="432.75" cy="212.75" r="19.75" />
        <path :fill="props.color2" d="M875,460a20,20,0,0,0,24,0q1,47.51,2,95H871Q873,507.5,875,460Z" transform="translate(-454 -211)" />
        <path :fill="props.color2" d="M948,532" transform="translate(-454 -211)" />
        <path :fill="props.color2" d="M552,397l120.61,66.05L795,397v70c-5.48,6.77-48.25,57.77-121,58-73.35.23-116.6-51.33-122-58Z"
            transform="translate(-454 -211)" />
    </svg>
</template>

