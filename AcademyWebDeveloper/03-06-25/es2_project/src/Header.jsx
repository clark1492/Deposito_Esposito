export function Header() {

    const imgUrl = "https://img.magnific.com/premium-vector/computer-chip-ai-technology-icon-computer-chipset_8071-74882.jpg?semt=ais_hybrid&w=740&q=80";

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: 'white'
    };

    const imgStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    };

    const navStyle = {
        display: 'flex',
        gap: '15px'
    };

    return (
        <>
        <header className="app-header" style={headerStyle}>
            <img src={imgUrl} alt="Logo" className="logo" style={imgStyle} />
            <nav className="navigation" style={navStyle}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>

        </>
    );
}