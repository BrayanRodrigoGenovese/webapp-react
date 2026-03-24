import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3" to="/">
                    MOVIES BLOG
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
