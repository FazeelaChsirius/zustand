import { create } from "zustand"
import { persist } from "zustand/middleware"
interface CounterInterface {
    count: number
    increase: ()=>void
    decrese: ()=>void
}

export const useCounter = create<CounterInterface>()(
    persist(
        (set) => ({
            count: 0,
            increase: () => set((state) => ({ count: state.count + 1 })),
            decrese: () => set((state) => ({ count: state.count - 1 }))
        }), 
        {name: "counterStorage"}
    )
)