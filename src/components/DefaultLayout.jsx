import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

function DefaultLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Loader />

            <Navbar />
            <main className="container my-5 flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
