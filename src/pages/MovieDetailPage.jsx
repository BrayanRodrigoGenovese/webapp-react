import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLoader } from "../contexts/LoaderContext";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

function MovieDetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const { startLoading, endLoading } = useLoader();

    const fetchMovieData = () => {
        startLoading();
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error("Errore durante il recupero del film:", error);
            })
            .finally(() => endLoading());
    };

    useEffect(() => {
        fetchMovieData();
    }, [id]);

    if (!movie) return null;

    return (
        <div>
            <Link to="/" className="btn btn-secondary mb-4">
                &larr; Torna alla lista
            </Link>

            <div className="row mb-5">
                <div className="col-md-4">
                    <img
                        src={`http://localhost:3000/movies_cover/${movie.image}`}
                        alt={`Locandina ${movie.title}`}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-8">
                    <h1>{movie.title}</h1>
                    <h4 className="text-muted">
                        {movie.director} - {movie.release_year}
                    </h4>
                    <span className="badge bg-primary mb-3">{movie.genre}</span>
                    <p className="lead">{movie.abstract}</p>
                </div>
            </div>

            <hr />
            <h3 className="my-4">Recensioni degli utenti</h3>

            {movie.reviews && movie.reviews.length > 0 ? (
                <ul className="list-group mb-4">
                    {movie.reviews.map((review) => (
                        <li key={review.id} className="list-group-item">
                            <h5>
                                {review.name}{" "}
                                <span className="text-warning">
                                    {"⭐".repeat(review.vote)}
                                </span>
                            </h5>
                            <p className="mb-0">{review.text}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="alert alert-info mb-4">
                    Nessuna recensione presente.
                </div>
            )}
            <ReviewForm movieId={id} onReviewAdded={fetchMovieData} />
        </div>
    );
}

export default MovieDetailPage;
