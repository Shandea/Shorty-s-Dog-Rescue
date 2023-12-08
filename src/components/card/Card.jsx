import { useNavigate } from "react-router-dom";
import './card.css'
import petsData from './petsData.json'



const Card = () => {
    const imageStyle = {
        width: '350px',   // Set the width to 350 pixels
        height: '350px',  // Set the height to 350 pixels
    };

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/adopt");
    }


    return (
        <div className='flip-card-container'>

            {petsData.map((pet, index) => (
                <div key={index} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={require(`../../assets/${pet.image}`)} alt="Avatar" style={imageStyle} />
                        </div>

                        <div className="flip-card-back">
                            <h1>{pet.name}</h1>
                            <p>{pet.breed}</p>
                            <p>Age: {pet.age}</p>
                            <p>Gender: {pet.gender}</p>
                            <small>{pet.description}
                            </small>
                            <br />
                            <div className='btn-container'>
                                <button className='pickMe-buttons' onClick={handleButtonClick}>Pick Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default Card
