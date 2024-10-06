<template>
  <div
    ref="div"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
    @wheel="zoomHandler"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {useTelescopeCanvas} from "../composables/useTelescopeCanvas.js"

const props = defineProps({
  zoom: Boolean
  })


const {
  renderer,
  onResize,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onWheel
} = useTelescopeCanvas()

const div = ref()

const zoomHandler = (event) => {
  if (!props.zoom) {
    return
  }
  onWheel(event)
}

onMounted(() => {
  div.value.appendChild(renderer.domElement)

  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

</script>
