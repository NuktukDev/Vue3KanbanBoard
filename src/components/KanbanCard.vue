<template>
  <div
    class="my-2"
    @drop.prevent="onDrop"
    @dragleave.prevent="onDragLeave"
    @dragover.prevent="onDragOver"
  >
    <div
      class="draggable border w-full p-2 bg-gray-100 rounded hover:bg-gray-200"
      draggable="true"
      @dragstart="onDragStart($event, id)"
    >
      {{ title }}
    </div>
    <div class="ghost w-full mt-2 p-4 drag" v-show="dragOver"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* Interfaces/Types */

/* Props */
const props = defineProps<{
  id: number
  title: string
}>()

/* Events  */
const emit = defineEmits(['updateCards', 'dragging'])

/* State */
const dragOver = ref<boolean>(false)

/* Methods */
const onDragStart = (event: DragEvent, cardID: string | number) => {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('cardID', cardID as string)
  }
}
const onDragOver = () => {
  dragOver.value = true
}
const onDragLeave = () => {
  dragOver.value = false
}

const onDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    emit('updateCards', {
      draggingID: event.dataTransfer.getData('cardID'),
      placementID: props.id
    })
    dragOver.value = false
  }
}
</script>

<style scoped></style>
