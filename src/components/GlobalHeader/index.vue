<template>
  <div class="w-full bg-blue-200 h-12 flex items-center p-4 py-8 shadow-md">
    <div class="font-sans text-gray-800">🎃 {{ title }}</div>
    <div class="absolute right-6">
      <div v-if="isLogin">
        <p class="font-sans text-gray-800">
          👋 你好 {{ userName && userName.toLocaleUpperCase() }}
        </p>
      </div>
      <div v-else class="flex items-center p-4">
        <button
          class="w-24 px-4 py-2 border-2 rounded-full border-gray-50 text-gray-50 hover:text-violet-300 hover:border-violet-300 transition-all"
          @click="onLogin"
        >
          登陆
        </button>
        <button
          class="ml-2 w-24 px-4 py-2 border-2 rounded-full border-gray-50 text-gray-50 hover:text-violet-300 hover:border-violet-300 transition-all"
        >
          注册
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isLogin: Boolean,
    userName: {
      type: String,
      require: false,
    },
    title: String,
    onLogin: Function,
  },
})
</script>
