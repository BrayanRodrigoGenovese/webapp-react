import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLoader } from "../contexts/LoaderContext";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const { startLoading, endLoading } = useLoader();

    useEffect(() => {
        startLoading();

        axios
            .get("http://localhost:3000/movies")
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error("Errore durante il recupero dei film:", error);
            })
            .finally(() => endLoading());
    }, []);

    return (
        <div>
            <h1 className="mb-4">Lista dei Film</h1>
            <div className="row g-4">
                {movies.map((movie) => (
                    <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={`http://localhost:3000/movies_cover/${movie.image}`}
                                className="card-img-top"
                                alt={`Locandina del film ${movie.title}`}
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text text-muted">
                                    {movie.director}
                                </p>

                                <Link
                                    to={`/movies/${movie.id}`}
                                    className="btn btn-primary mt-auto"
                                >
                                    Vedi Dettagli
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
