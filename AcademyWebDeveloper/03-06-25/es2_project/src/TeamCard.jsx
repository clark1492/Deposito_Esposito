export function TeamCard(props) {
    
    return (
        <div className={`team-card ${props.isPresent ? 'card-online' : 'card-offline'}`}>
            <h3>{props.name}</h3>
            <img src={props.imageUrl} alt={`${props.name} foto`} className="team-photo" />
            <p className="team-role">{props.role}</p>
            <p className="team-bio">{props.bio}</p>
            <button>{props.isPresent ? "Disponibile" : "Assente"}</button>
        </div>
    );
}