import NavBar from './components/navBar'
import InventoryPage from './pages/inventoryPage'

function App() {

  return (
    <main className='h-dvh overflow-hidden flex'>
      <NavBar />
      <div className='flex-1 overflow-y-auto p-2'>
      	<InventoryPage />
      </div>
    </main>
  )
}

export default App
