
import './app.css'
import Card from './component/card'
export function App() {
  
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>tailwind test</h1>
      <Card username="sann" btn="click me"/>
      <Card/>
      <Card />
    </>
  )
}
