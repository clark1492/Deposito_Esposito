import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductCard from './ProductCard.jsx'
import { Dashboard } from './Dashboard.jsx'
import { AlertBox } from './AlertBox.jsx'
import {Avatar} from './Avatar.jsx'
import {LightSwitch} from './LightSwitch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Dashboard /> */}
    {/* <App /> */}
    {/* <Avatar /> */}
    {/* <ProductCard /> */}
    {/* <AlertBox /> */}
    <LightSwitch />
  </StrictMode>,
)
