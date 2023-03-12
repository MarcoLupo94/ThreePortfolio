import { Routes, Route } from 'react-router-dom'
import { HtmlPortfolio } from './molecules/HtmlPortfolio'
import { NotFound } from './molecules/NotFound'
import Experience from './molecules/Experience'
export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Experience />} />
            <Route path="/html" element={<HtmlPortfolio />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
