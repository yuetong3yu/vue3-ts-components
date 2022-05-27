<template>
  <ul v-if="list && list.length" class="w-1/2 grid grid-cols-3">
    <li
      v-for="columnItem in list"
      :key="columnItem.id"
      class="w-48 p-3 m-3 bg-slate-100 shadow-lg flex flex-col items-center cursor-pointer"
    >
      <img
        :src="columnItem.avatar"
        :alt="columnItem.title"
        class="w-36 rounded-2xl"
      />
      <h4 class="text-blue-500 font-semibold">Title: {{ columnItem.title }}</h4>
      <p class="text-gray-600">{{ columnItem.description }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export interface ColumnProps {
  id: string
  title: string
  description?: string
  avatar: string
}

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      require: true,
    },
  },
  setup(props) {
    const { list } = props
    return { list }
  },
})
</script>
