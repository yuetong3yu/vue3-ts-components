<template>
  <div
    class="font-sans text-gray-800 border-2 border-white rounded-lg p-3 flex items-center hover:border-purple-600 transition-all cursor-pointer"
    @click.prevent="toggleOpen"
  >
    👋 你好 {{ name && name.toLocaleUpperCase() }}
    <div class="w-4 overflow-hidden inline-block ml-2 translate-y-0.5">
      <div
        class="h-3 w-3 bg-gray-800 -rotate-45 transform origin-top-left"
      ></div>
    </div>
  </div>
  <div v-if="open">
    <ul v-if="dropdownList">
      <li
        v-for="dropdownItem in dropdownList"
        :key="dropdownItem.title"
        @click.prevent="handleDropdownClick(dropdownItem.onClick)"
        class="w-full h-8 bg-blue-300 flex items-center justify-center text-gray-500 rounded-b min-h-36 hover:text-purple-300 cursor-pointer"
      >
        {{ dropdownItem.title }}
      </li>
    </ul>
    <div
      v-else
      class="w-full h-8 flex items-center justify-center text-gray-500 rounded-2xl min-h-36"
    >
      暂无数据
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

export interface DropdownProps {
  title: string
  onClick: Function
}

export default defineComponent({
  props: {
    name: String,
    dropdownList: Array as PropType<DropdownProps[]>,
    quit: Function,
  },
  setup(props) {
    const open = ref(false)

    const toggleOpen = () => {
      open.value = !open.value
    }

    const handleDropdownClick = (fn: Function) => {
      props.quit && props.quit()
      toggleOpen()
      fn()
    }

    return { open, toggleOpen, handleDropdownClick }
  },
})
</script>
