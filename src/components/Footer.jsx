function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p className="mb-0">
                    &copy; {currentYear} Brayan Rodrigo Genovese Movies. Tutti i
                    diritti riservati.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
