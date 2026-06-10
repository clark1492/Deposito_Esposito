export function Hero() {

    const name = "Claudio Esposito";
    const description = "I'm a passionate web developer with a love for creating dynamic and user-friendly websites. With a background in both front-end and back-end development, I enjoy bringing ideas to life through code. When I'm not coding, you can find me exploring new technologies or sharing my knowledge with the developer community.";

    const heroStyle = {
        backgroundColor: '#282c34',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center'
    };

    const descriptionStyle = {
        maxWidth: '600px',
        margin: '20px auto',
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#ccc',  
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '8px',
        border: '2px solid #fff'
    };

    return (
        <div className="hero" style={heroStyle}>
            <h1>Welcome to My Website</h1>
            <h2>Hi, I'm {name}!</h2>
            <p style={descriptionStyle}>{description}</p>
        </div>
    );
}   

export default Hero;