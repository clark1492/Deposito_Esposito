export function Card() {

    const styleConfig = {
        display: 'grid',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        color:  '#333',
        padding: '20px',
        borderRadius: '8px',
        border: `2px solid #333`
    };


    return (
        <div className="card" style={styleConfig}>
            <h2>What I Do</h2>
            <p>I specialize in creating responsive and user-friendly websites using modern web technologies.</p>
            <button >Learn More</button>
        </div>
    );
}

export default Card;