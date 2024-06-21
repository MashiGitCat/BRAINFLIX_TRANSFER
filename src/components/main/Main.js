import view_icon from "../../assets/images/views.svg";
import like_icon from "../../assets/images/likes.svg";
import List from "../list/List"
import "./main.css"

const Main = (props) => {
    const { videos, videoDetails } = props;
    return (
        <div>
            <div key={videoDetails.id}>
                <video className="main__video-player
                " controls poster ={videoDetails.image}>
                    <source src={videoDetails.video} type="video/mp4" />
                </video>
                <div className="main__video-side-list">
                    <div>
                        <div>
                            <h1 className="main__video-heading">{videoDetails.title}</h1>
                        </div>
                        <div className="main__video-details">
                            <div className="main__video-details-tablet">
                                <p className="main__video-channel">By {videoDetails.channel}</p>
                                <p className="main__video-stats main__video-date-align">{new Date(videoDetails.timestamp).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })}</p>
                            </div>
                            <div className="main__icon-tablet">
                                <div className="main__icon">
                                    <img src={view_icon} className="main__views-icon" alt="views-icon" />
                                    <p className="main__video-stats">{videoDetails.views}</p>
                                </div>
                                <div className="main__icon">
                                    <img src={like_icon} className="main__likes-icon" alt="likes-icon" />
                                    <p className="main__video-stats">{videoDetails.likes}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="main__video-description">{videoDetails.description}</p>
                        </div>
                        <div>
                            <h3 className="main__comment-subheading">{videoDetails.comments.length} Comments</h3>
                        </div>
                        <div className="main__comment-secton">
                            <div className="main__comment-new">
                                <div className="main__display-photo"></div>
                                <div className="main__comment-context">
                                    <div>
                                        <h3 className="main__comment-heading">Join the converstaion</h3>
                                        <textarea className="main__comment-text-area" placeholder="Add a new comment"></textarea>
                                    </div>
                                    <div>
                                        <button className="main__button main__button-text">COMMENT</button>
                                    </div>

                                </div>
                            </div>
                            {videoDetails.comments && videoDetails.comments.map((comment) => (
                                <div key={comment.id}>
                                    <div className="main__loaded-comment-wrap">
                                        <div className="main__display-empty-photo "></div>
                                        <div className="main__comment-wrap">
                                            <div className="main__name-date-wrap">
                                                <p className="main__comment-name">{comment.name}</p>
                                                <p className="main__video-stats">{new Date(comment.timestamp).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })}</p>

                                            </div>
                                            <p>{comment.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="main__video-list-align">
                        <List videoList={videos}  />
                    </div>
                </div>
            </div>
        </div>
    );
                            
};
export default Main;