import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <BrowserRouter>
        <span className="background back-1"></span>
        <span className="background back-2"></span>
        <App />
    </BrowserRouter>
)
