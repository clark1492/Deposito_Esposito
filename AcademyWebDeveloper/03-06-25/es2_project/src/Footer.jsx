export function Footer() {

    const currentYear = new Date().getFullYear();
    const footerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0"
    };

    return (
        <footer className="site-footer" style={footerStyle}>
            <p>&copy; {currentYear} Academy Web Developer. Tutti i diritti riservati.</p>
        </footer>
    );
}