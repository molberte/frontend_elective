import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar";
import HomePage from "../../pages/HomePage"

const MainRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default MainRouter;