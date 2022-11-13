import './Card.css';

function Card(props){
    return (
        <div className="flip-card">
            {props.children}
            <div className="flip-card-inner">
                <div className="flip-card-front">
                </div>
                <div className="flip-card-back">
                    <h1>{props.person_details.person_name}</h1> 
                    <p>{props.person_details.domain}</p> 
                    <p>{props.person_details.personal}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;