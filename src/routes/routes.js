import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "../pages/LandingPage/LandingPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;