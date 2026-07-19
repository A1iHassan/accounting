import NavBar from './components/navBar'
// import InventoryPage from './pages/inventoryPage'
// import NewInvoicePage from './pages/newInvoicePage'
// import InvoicesPage from './pages/invoicesPage'
import ShareholdersPage  from './pages/shareHoldersPage'

function App() {

  return (
    <main className='h-dvh overflow-hidden flex'>
      <NavBar />
      <div className='flex-1 overflow-y-auto p-2'>
      { /* <InventoryPage /> */ }
      { /* <NewInvoicePage /> */ }
      { /* <InvoicesPage /> */ }
      <ShareholdersPage />
      </div>
    </main>
  )
}

export default App
