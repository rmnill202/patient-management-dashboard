import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'
import './App.css'
import { Provider } from 'jotai';
import Dashboard from './bundles/dashboard/Dashboard';
import Sidebar from './components/Sidebar';


const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <div className='flex'>
          <Sidebar/>
          <Dashboard/>
        </div>
      </Provider>
    </QueryClientProvider>
    </>
  )
}

export default App
