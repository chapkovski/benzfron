import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


export const useRowsStore = defineStore({
  id: 'rows',
  state: () => ({
    rows: [{ input1: '', input2: '' }],
  }),
  actions: {
    addRow(row) {
      this.rows.push(row)
    },
    deleteRow(index) {
      this.rows.splice(index, 1)
    },
  },
})

