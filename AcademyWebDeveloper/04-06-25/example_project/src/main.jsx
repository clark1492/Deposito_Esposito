import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import {TeamList} from './App4.jsx'
import {TaskFilter} from './TaskFilter.jsx' 
import {LogEveryRender} from './LogEveryRender.jsx'

const tasks = [
    { id: 1, title: "Comprare il pane", completed: false },
    { id: 2, title: "Fare la spesa", completed: true },
    { id: 3, title: "Pulire la casa", completed: false },
    { id: 4, title: "Pagare le bollette", completed: true },
    { id: 5, title: "Andare in palestra", completed: false },
    { id: 6, title: "Leggere un libro", completed: true }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogEveryRender />
    {/* <TaskFilter tasks={tasks} showOnlyPending={true} /> */}
  </StrictMode>,
)
