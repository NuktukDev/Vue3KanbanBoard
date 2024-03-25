<template>
  <div
    class="overflow-y-hidden mx-auto gap-x-8 flex flex-col md:py-10 md:flex-row relative w-screen h-dvh items-center md:justify-center"
  >
    <div
      class="bg-white z-10 grow-0 border p-10 w-screen md:w-[200px] h-[100px] md:h-full sticky top-0 left-0 hover:bg-gray-200"
      @dragover.prevent
      @dragleave.prevent
      @drop.prevent="removeCard"
    >
      <div class="flex h-full items-center justify-center text-gray-500">
        <FontAwesomeIcon :icon="faTrashCan" size="3x" />
      </div>
    </div>

    <div
      class="overflow-x-auto flex flex-nowrap whitespace-nowrap h-full w-full gap-x-8 p-8 md:p-0"
    >
      <KanbanLane
        v-for="lane in lanes"
        :key="lane.id"
        :id="lane.id"
        :title="lane.title"
        :cards="cards.filter((card) => card.lane === lane.id)"
        @updateCards="onUpdateCards"
        @moveCard="onMoveCard"
        @addCard="onAddCard"
      />
    </div>

    <div
      class="bg-white z-10 grow-0 border p-10 w-screen md:w-[200px] h-[100px] md:h-full sticky bottom-0 left-0 right-0 hover:bg-gray-200"
    >
      <div class="flex h-full items-center justify-center text-gray-500">
        <FontAwesomeIcon :icon="faPlus" size="3x" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Internal */
import { ref, reactive } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

/* Components */
import KanbanLane from '@/components/KanbanLane.vue'

/* Interfaces/Types */
interface UpdateCardInterface {
  draggingID: number
  placementID: number
  laneID: number
}
interface MoveCardInterface {
  draggingID: number
  laneID: number
}
interface KanbanLaneType {
  id: number
  title: string
}
interface KanbanCardInterface {
  id: number
  title: string
  lane: number
}

/* State */
const lastID = ref(1)
const lanes: KanbanLaneType[] = reactive([
  { id: 1, title: 'Ready For Development' },
  { id: 2, title: 'In-Progress' },
  { id: 3, title: 'Done' }
])

const cards: KanbanCardInterface[] = reactive([])

/* Methods */
const onUpdateCards = (event: UpdateCardInterface) => {
  const draggingIndex = cards.findIndex((c) => c.id == event.draggingID)
  const placementIndex = cards.findIndex((c) => c.id == event.placementID)
  const laneID = event.laneID
  cards[draggingIndex].lane = laneID

  const movingCard = cards.splice(draggingIndex, 1)
  cards.splice(placementIndex, 0, ...movingCard)
}
const onMoveCard = (event: MoveCardInterface) => {
  const draggingIndex = cards.findIndex((c) => c.id == event.draggingID)
  const laneID = event.laneID
  cards[draggingIndex].lane = laneID
}
const onAddCard = (event: KanbanCardInterface) => {
  cards.push({ ...event, id: lastID.value })
  lastID.value++
}
const removeCard = (event: DragEvent) => {
  if (event.dataTransfer) {
    const draggingIndex = cards.findIndex(
      (c) => c?.id.toString() === event.dataTransfer?.getData('cardID')
    )
    cards.splice(draggingIndex, 1)
  }
}
</script>

<style scoped></style>
