import profilePic from './assets/KuQ_final.png' 

function Card() {


    return(
        <div className="card">
            <img className="card_image"src={profilePic} alt="channel logo"></img>
            <h2 className= "card_title">KueQ</h2>
            <p className= "card_text">I am learning to code and draw ! </p>
        </div>
    );
}
export default Card