import { useLoader } from "../contexts/LoaderContext";

function Loader() {
    const { isLoading } = useLoader();

    if (!isLoading) return null;

    return (
        <div className="loader-overlay">
            <div
                className="spinner-border text-primary"
                style={{ width: "4rem", height: "4rem" }}
                role="status"
            >
                <span className="visually-hidden">Caricamento...</span>
            </div>
        </div>
    );
}

export default Loader;
