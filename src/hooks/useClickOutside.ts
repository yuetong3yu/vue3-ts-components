import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import type { Ref } from 'vue'

export function useClickOutside(dom: Ref<HTMLElement | null>) {
  const isClickOutside = ref(false)

  watchEffect(() => {
    if (dom.value) {
      dom.value.onclick = () => {
        isClickOutside.value = true
      }
    }
  })

  const close = () => {
    isClickOutside.value = false
  }

  onMounted(() => {
    document.addEventListener('click', close)
  })

  onUnmounted(() => {
    document.removeEventListener('click', close)
  })

  return isClickOutside
}
