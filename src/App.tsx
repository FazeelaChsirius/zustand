import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Students from "./components/Students"
import Products from "./components/Products"
import ProductsDetails from "./components/ProductsDetails"
import NotFound from "./components/NotFound"
import Counter from "./components/Counter"

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/students" element={<Students />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:slug" element={<ProductsDetails />}/>
            <Route path="/counter" element={<Counter />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
  )
}

export default App