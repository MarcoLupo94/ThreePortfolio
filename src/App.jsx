import { Routes, Route } from 'react-router-dom'
import { HtmlPortfolio } from './components/HtmlPortfolio'
import { NotFound } from './NotFound'
import Experience from './components/Experience'
export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Experience />} />
            <Route path="/html" element={<HtmlPortfolio />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
