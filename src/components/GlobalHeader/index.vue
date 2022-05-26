<template>
  <div class="w-full bg-blue-200 h-12 flex items-center p-4 shadow-md">
    <div class="font-sans text-gray-800">🎃 {{ title }}</div>
    <div class="absolute right-12">
      <div v-if="isLogin">
        <p class="font-sans text-gray-800">
          👋 你好 {{ userName && userName.toLocaleUpperCase() }}
        </p>
      </div>
      <div v-else class="flex items-center p-4">
        <button class="w-6 px-4 py-2 border round-full border-gray-50">
          登陆
        </button>
        <button class="w-6 px-4 py-2 border round-full border-gray-50">
          注册
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    isLogin: Boolean,
    userName: {
      type: String,
      require: false,
    },
    title: String,
  },
  setup() {},
})
</script>
