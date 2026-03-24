import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import { LoaderContextProvider } from "./contexts/LoaderContext";

function App() {
    return (
        <LoaderContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/movies/:id"
                            element={<MovieDetailPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </LoaderContextProvider>
    );
}

export default App;
