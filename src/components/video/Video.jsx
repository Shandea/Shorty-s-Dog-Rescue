import './video.css'
import dogvideo from '../../assets/dogvideo.mp4'



const Video = () => {

    return (
        <div>
            <h2 className='video-title'>Connect With Your New Best Friend</h2>
            <div className="video-container">
                
                <video className='video' controls loop>
                    <source src={dogvideo} type="video/mp4" />

                </video>
            </div>
        </div>
    );
};

export default Video;