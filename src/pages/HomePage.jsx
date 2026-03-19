import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
    const [movies, setMovies] = useState([]);

    return (
        <div>
            <h1>Lista dei Film</h1>
        </div>
    );
}

export default HomePage;
