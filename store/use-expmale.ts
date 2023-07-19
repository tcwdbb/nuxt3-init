export interface ICounterState {
  count: number
}

const storeSetup = () => {
  const state = reactive<ICounterState>({ count: 0 })
  const increment = () => {
    state.count++
  }
  const decrement = () => {
    state.count--
  }

  return {
    state,
    increment,
    decrement
  }
}

export const useExample = definePiniaStore('example', storeSetup, { persist: true })
