import { create } from "zustand"

interface CounterInterface {
    count: number
    increase: ()=>void
    decrese: ()=>void
}

export const useCounter = create<CounterInterface>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrese: () => set((state) => ({ count: state.count - 1 }))
}))