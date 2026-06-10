export function Navbar() {

    const styleConfig = {
        backgroundColor: '#333',
        color:  '#fff',
        padding: '20px',
        borderRadius: '8px',
        border: `2px solid #fff`
    };


    return (
        <nav className="navbar" style={styleConfig}>
            <h1>My Website</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;