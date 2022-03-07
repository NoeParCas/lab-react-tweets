// import App from "./components/App";
import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet(props) {
  
  // const {tweet} = props

  return (
    <div className="tweet">
      {/* <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
          {/* <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">{tweet.user.handle}</span>
          </span> */}
          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
          <Timestamp time={props.tweet.timestamp} />
        </div>

        {/* <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
          {props.tweet.message}
        </p> */}
        <Message message={props.tweet.message} /> 

        <div className="actions">
        <Actions />
          {/* Font Awesome icons */}
          {/* <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i> */}
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
