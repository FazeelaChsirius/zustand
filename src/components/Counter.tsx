import { Button } from "antd"
import { useCounter } from "../zustand"

const Counter = () => {
    const { count, increase, decrese } = useCounter((state) => state)

  return (
    <div className="p-16 space-y-8">
        <h1 className="text-4xl font-semibold">Counter App</h1>
        <h1 className="text-6xl font-bold text-rose-400">{count}</h1>
        <Button className="mr-8" type="primary" onClick={increase}>Increase</Button>
        <Button type="primary" danger onClick={decrese}>Decrese</Button>
    </div>
  )
}

export default Counter