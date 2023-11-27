import './card.css'
import flower from '../../assets/flower.jpg'
import blue_eyes from '../../assets/blue_eyes.jpg'
import fencedIn from '../../assets/fencedIn.jpg'
import happy from '../../assets/happy.jpg'
import puppy from '../../assets/puppy.jpg'
import solo from '../../assets/solo.jpg'



const Card = () => {
    const imageStyle = {
        width: '350px',   // Set the width to 350 pixels
        height: '350px',  // Set the height to 350 pixels
    };


    return (
        <div className='flip-card-container'>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={flower} alt="Avatar" style={imageStyle} />

                    </div>



                    <div className="flip-card-back">
                        <h1>Flower</h1>
                        <p>Golden Retriever</p>
                        <p>Age: 3</p>
                        <p>Female</p>
                        <small>Howdy y'all! My name is Flower and I'm a beautiful older Golden retriever. This is good news as it means
                            I understand the concept of going potty outside. I also know a few commands and will gladly show them off in
                            exchange for snacks and love.
                            I enjoy spending time with people and learning new things.
                        </small>
                        <br />
                        <div className='btn-container'>
                            <button className='pickMe-buttons'>Pick Me</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={blue_eyes} alt="Avatar" style={imageStyle} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Blue</h1>
                        <p>Husky</p>
                        <p>Age: 2</p>
                        <p>Male</p>
                        <small> I'm Blue, a handsome Husky! Don't let my age fool you, I still love a good
                            walk and am always up for a game of tug of war!   I'm now looking for a
                            loving home to spend the rest of my years with. I ride well in the car so
                            we could stop for a pupcup sometime. I also love to cuddle. I'm potty trained.
                            I could be your new Best fiend </small>
                        <br />
                        <div className='btn-container'>
                            <button className='pickMe-buttons'>Pick Me</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={fencedIn} alt="Avatar" style={imageStyle} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Cocoa</h1>
                        <p>Lab Mix</p>
                        <p>Age: 3</p>
                        <p>Female</p>
                        <small>Howdy, I'm Cocoa! I may be an older Lab Mix but I still love going for walks and exploring all nature has to offer. 
                            I like going for trips in the car so if you're in search of an adventure buddy, I'm your pup! If you have any other four-legged friends,
                             I would like to meet them to make sure that our energies mesh.
                           
                        </small>
                        <br />
                        <div className='btn-container'>
                            <button className='pickMe-buttons'>Pick Me</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={happy} alt="Avatar" style={imageStyle} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Sadie</h1>
                        <p>Yorkie</p>
                        <p>Age: 1</p>
                        <p>Female</p>
                        <small>Howdy y'all! My name is Flower and I'm a beautiful older Golden retriever. This is good news as it means
                            I understand the concept of going potty outside. I also know a few commands and will gladly show them off in
                            exchange for snacks and love.
                            I enjoy spending time with people and learning new things.</small>
                        <br />
                        <div className='btn-container'>
                            <button className='pickMe-buttons'>Pick Me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={puppy} alt="Avatar" style={imageStyle} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Riley</h1>
                        <p>Corgi</p>
                        <p>Age: 6 months</p>
                        <p>Female</p>
                        <small>Howdy y'all! My name is Flower and I'm a beautiful older Golden retriever. This is good news as it means
                            I understand the concept of going potty outside. I also know a few commands and will gladly show them off in
                            exchange for snacks and love.
                            I enjoy spending time with people and learning new things.</small>
                        <br />
                        <div className='btn-container'>
                            <button className='pickMe-buttons'>Pick Me</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={solo} alt="Avatar" style={imageStyle} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Cheeki</h1>
                        <p>Unknown</p>
                        <p>Age: 3</p>
                        <p>Female</p>
                        <small>Howdy y'all! My name is Flower and I'm a beautiful older Golden retriever. This is good news as it means
                            I understand the concept of going potty outside. I also know a few commands and will gladly show them off in
                            exchange for snacks and love.
                            I enjoy spending time with people and learning new things.</small>
                        <br />
                        <div className='btn-container'>
                            <button className='pickMe-buttons'>Pick Me</button>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}
export default Card

