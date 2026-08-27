import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard 
        name="Headphones"
        price={5000}
        />
        <ChaiCard 
        name="Iphone"
        price={80000}
        />
      </div>
    </>
  )
}

export default App
