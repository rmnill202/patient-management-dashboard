import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'
import './App.css'
import { Provider } from 'jotai';
import Dashboard from './bundles/dashboard/Dashboard';

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Dashboard/>
      </Provider>
    </QueryClientProvider>
    </>
  )
}

export default App
