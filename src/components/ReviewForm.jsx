import { useState } from "react";
import axios from "axios";
import { useLoader } from "../contexts/LoaderContext";

function ReviewForm({ movieId, onReviewAdded }) {
    const { startLoading, endLoading } = useLoader();

    const [formData, setFormData] = useState({
        name: "",
        vote: 1,
        text: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        startLoading();
        e.preventDefault();
        setError(null);

        if (formData.name.trim() === "" || formData.text.trim() === "") {
            setError("Nome e testo della recensione sono obbligatori!");
            return;
        }

        axios
            .post(`http://localhost:3000/movies/${movieId}/reviews`, formData)
            .then(() => {
                setFormData({ name: "", vote: 1, text: "" });
                onReviewAdded();
            })
            .catch((err) => {
                if (
                    err.response &&
                    err.response.data &&
                    err.response.data.message
                ) {
                    setError(err.response.data.message);
                } else {
                    setError("Si è verificato un errore imprevisto.");
                }
            });
    };

    return (
        <div className="card my-5 p-4 bg-light shadow-sm">
            <h4 className="mb-3">Lascia una recensione</h4>
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Inserisci il tuo nome"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Voto</label>
                    <select
                        className="form-select"
                        name="vote"
                        value={formData.vote}
                        onChange={handleChange}
                    >
                        <option value="1">1 Stella</option>
                        <option value="2">2 Stelle</option>
                        <option value="3">3 Stelle</option>
                        <option value="4">4 Stelle</option>
                        <option value="5">5 Stelle</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Testo della recensione</label>
                    <textarea
                        className="form-control"
                        name="text"
                        rows="3"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="Cosa ne pensi del film?"
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Invia Recensione
                </button>
            </form>
        </div>
    );
}

export default ReviewForm;
