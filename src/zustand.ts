import { create } from "zustand"
import { persist } from "zustand/middleware"
interface CounterInterface {
    count: number
    increase: ()=>void
    decrese: ()=>void
}

interface ProductData {
    id: string
    title: string
    description: string
    price: number
    image: string
}

interface ProductInterface {
    product: ProductData | null
    setProduct: (payload: ProductData)=>void
    removeProduct: ()=>void
}

interface StudentData {
    id: number
    fullname: string
    email: string
    mobile: number
    address: string
}

interface StudentInterface {
    students: StudentData[] | []
    setStudent: (payload: StudentData)=>void
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

export const useProduct = create<ProductInterface>((set) => ({
    product: null,
    setProduct: (payload: ProductData) => set(() => ({ product: payload })),
    removeProduct: () => set(() => ({ product: null }))
}))

export const useStudent = create<StudentInterface>()(
    persist(
        (set) => ({
            students: [],
            setStudent: (payload: StudentData) => set((state) => ({ students: [...state.students, payload] }))
        }),
        {name: "studentStorage"}
    )
)
    