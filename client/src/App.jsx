import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './route'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const queryClient = new QueryClient()


function App() {

  useEffect(()=>{
    let userId = localStorage.getItem('userId');
  
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem('userId', userId);
    }
  
  },[])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer/>
   </QueryClientProvider>
  )
}

export default App
