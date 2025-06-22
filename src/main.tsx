import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import Page from "./Page.tsx"

const rooter = createBrowserRouter([
  {path: '/', Component: App},
  {path: '/pages/:id', Component: Page},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rooter} />
  </StrictMode>,
)
