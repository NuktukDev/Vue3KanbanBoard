<template>
  <div class="border h-full grow shrink basis-1/3 min-w-[250px] relative p-4">
    <h2 class="text-xl font-semibold text-center mb-4">
      {{ title }}
    </h2>

    <KanbanCard
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
      :title="card.title"
      @updateCards="onUpdateCards"
    />
    <div
      class="ghost w-full mt-2 p-4"
      v-show="cards.length === 0"
      @dragover.prevent
      @dragleave.prevent
      @drop.prevent="onDrop"
    ></div>

    <div
      class="w-full hover:bg-gray-200 cursor-pointer border py-4 absolute bottom-0 left-0 text-center"
      @click.prevent="onAddCard"
    >
      <FontAwesomeIcon :icon="faPlus" size="2x" />
    </div>
  </div>
</template>

<script setup lang="ts">
/* Internal */
import { ref, reactive, computed } from 'vue'

/* Components */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import KanbanCard from '@/components/KanbanCard.vue'

/* Interfaces/Types */
interface UpdateCardInterface {
  draggingID: string
  placementID: string
}

/* Props */
const props = defineProps<{
  id: number
  title: string
  cards: Array<{
    id: number
    title: string
    lane: number
  }>
}>()

/* Events */
const emit = defineEmits(['updateCards', 'moveCard', 'addCard'])

/* State */

/* Methods */
const onUpdateCards = (event: UpdateCardInterface) => {
  emit('updateCards', { ...event, laneID: props.id })
}

const onDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    emit('moveCard', {
      draggingID: event.dataTransfer.getData('cardID'),
      laneID: props.id
    })
  }
}
const onAddCard = () => {
  emit('addCard', {
    title: 'Placeholder',
    lane: props.id
  })
}
</script>

<style scoped></style>
